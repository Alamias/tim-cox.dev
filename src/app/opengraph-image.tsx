import { ImageResponse } from "next/og";
import { site } from "@/data/seo";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const domain =
    site.url?.replace(/^https?:\/\//, "").replace(/\/$/, "") || "tim-cox.dev";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #05070d 0%, #0a0d14 45%, #0d1522 100%)",
          color: "#eef1f6",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        {/* background glows */}
        <div
          style={{
            position: "absolute",
            right: 180,
            top: 220,
            width: 280,
            height: 280,
            borderRadius: 9999,
            background: "rgba(255, 133, 51, 0.16)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 130,
            width: 320,
            height: 320,
            borderRadius: 9999,
            background: "rgba(73, 134, 255, 0.16)",
          }}
        />

        {/* left content */}
        <div
          style={{
            width: "58%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 80px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -3,
              color: "#f5f7fb",
            }}
          >
            Tim Cox
          </div>

          <div
            style={{
              display: "flex",
              width: 84,
              height: 4,
              background: "#d68a52",
              borderRadius: 999,
              marginTop: 28,
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 34,
              fontSize: 42,
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#f1dfd2",
              letterSpacing: -1,
            }}
          >
            <div style={{ display: "flex" }}>Senior Frontend</div>
            <div style={{ display: "flex", marginTop: 6 }}>
              Developer for Hire
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 28,
              fontSize: 24,
              color: "#9dadcb",
            }}
          >
            <div style={{ display: "flex" }}>React</div>
            <div style={{ display: "flex", color: "#d68a52" }}>•</div>
            <div style={{ display: "flex" }}>Next.js</div>
            <div style={{ display: "flex", color: "#d68a52" }}>•</div>
            <div style={{ display: "flex" }}>TypeScript</div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginTop: 40,
              padding: "14px 22px",
              borderRadius: 18,
              border: "1px solid rgba(214, 138, 82, 0.55)",
              color: "#f3f5f8",
              width: "fit-content",
              background: "rgba(7, 10, 17, 0.35)",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 24,
                height: 24,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 9999,
                border: "2px solid #d68a52",
                color: "#d68a52",
                fontSize: 14,
                fontWeight: 700,
              }}
            >
              ◎
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: 0.3,
              }}
            >
              {domain}
            </div>
          </div>
        </div>

        {/* right content */}
        <div
          style={{
            width: "42%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 180,
              fontWeight: 800,
              letterSpacing: -10,
              color: "#d8deea",
            }}
          >
            <span style={{ color: "#e69a5e" }}>&lt;</span>
            <span style={{ color: "#f4f6fb", marginLeft: 8, marginRight: 8 }}>
              /
            </span>
            <span style={{ color: "#66a4ff" }}>&gt;</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
