import type { ReactElement } from "react";

type JsonLdObject = Record<string, unknown>;

type JsonLdProps = {
  schema: JsonLdObject | JsonLdObject[] | null | undefined;
};

const DEFAULT_CONTEXT = "https://schema.org";

function isJsonObject(value: unknown): value is JsonLdObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function safeJsonStringify(value: JsonLdObject) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function normalizeSchema(schema: JsonLdProps["schema"]) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  const seen = new Set<string>();

  return schemas.flatMap((item) => {
    if (!isJsonObject(item) || !item["@type"]) {
      return [];
    }

    // JSON-LD from CMSes or future page data can be incomplete. Never assume
    // @context is present or string-like, because malformed schema must not
    // crash the page render.
    const normalized: JsonLdObject = {
      ...item,
      "@context": item["@context"] || DEFAULT_CONTEXT,
    };
    const json = safeJsonStringify(normalized);

    if (seen.has(json)) {
      return [];
    }

    seen.add(json);
    return [{ json, type: String(normalized["@type"]) }];
  });
}

export function JsonLd({ schema }: JsonLdProps): ReactElement | null {
  const entries = normalizeSchema(schema);

  if (entries.length === 0) {
    return null;
  }

  return (
    <>
      {entries.map((entry, index) => (
        <script
          key={`${entry.type}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: entry.json }}
        />
      ))}
    </>
  );
}
