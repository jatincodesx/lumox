import { DefaultSeoProps } from "next-seo";
import { defaultMeta, ORG } from "@/lib/seo";

const config: DefaultSeoProps = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  openGraph: {
    ...defaultMeta.openGraph,
    site_name: ORG.name,
  },
  twitter: {
    handle: "@lumox",
    site: "@lumox",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    { rel: "icon", href: "/favicon.svg" },
  ],
};
export default config;
