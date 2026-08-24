import { ImageResponse } from "next/og";
import { site } from "@/data/seo";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0b0d12",
          color: "#eef1f6",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#5b8cff",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 8,
            textTransform: "uppercase",
          }}
        >
          Open to work
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: -2,
            marginTop: 18,
            lineHeight: 1,
          }}
        >
          Tim Cox
        </div>
        <div
          style={{
            display: "flex",
            width: 180,
            height: 4,
            background: "#5b8cff",
            marginTop: 28,
            borderRadius: 4,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#a0a8b8",
            marginTop: 28,
          }}
        >
          Senior Frontend Developer · React · Next.js · TypeScript
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#6b7385",
            marginTop: 12,
          }}
        >
          Seeking remote or hybrid roles · Ontario, California
        </div>
      </div>
    ),
    { ...size }
  );
}
