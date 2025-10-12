import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0B1220, #0B5FFF)",
          color: "white"
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -1 }}>Lumox Technologies</div>
      </div>
    ),
    { ...size }
  );
}