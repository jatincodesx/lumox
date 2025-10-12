// app/og/route.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          color: "black",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        Lumox Technologies
      </div>
    ),
    {
      width: 1200,
      height: 630, // <- set size here for a route handler
    }
  );
}