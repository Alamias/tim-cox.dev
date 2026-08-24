import { ImageResponse } from "next/og";

export const alt = "Tim Cox - Senior Frontend Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #05070d 0%, #0a0d14 45%, #0d1522 100%)",
          color: "#eef1f6",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Orange glow */}
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            right: 180,
            top: 220,
            borderRadius: 300,
            background: "rgba(255, 133, 51, 0.14)",
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            width: 350,
            height: 350,
            right: -40,
            top: 100,
            borderRadius: 350,
            background: "rgba(73, 134, 255, 0.16)",
          }}
        />

        {/* Left side */}
        <div
          style={{
            width: "60%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 75,
            paddingRight: 30,
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
              marginTop: 26,
              borderRadius: 4,
              background: "#d68a52",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 32,
              fontSize: 42,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1,
              color: "#f1dfd2",
            }}
          >
            <div style={{ display: "flex" }}>Senior Frontend</div>

            <div
              style={{
                display: "flex",
                marginTop: 6,
              }}
            >
              Developer for Hire
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 26,
              fontSize: 24,
              color: "#9dadcb",
            }}
          >
            <div style={{ display: "flex" }}>React</div>

            <div
              style={{
                display: "flex",
                marginLeft: 14,
                marginRight: 14,
                color: "#d68a52",
              }}
            >
              •
            </div>

            <div style={{ display: "flex" }}>Next.js</div>

            <div
              style={{
                display: "flex",
                marginLeft: 14,
                marginRight: 14,
                color: "#d68a52",
              }}
            >
              •
            </div>

            <div style={{ display: "flex" }}>TypeScript</div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 38,
              paddingTop: 13,
              paddingBottom: 13,
              paddingLeft: 20,
              paddingRight: 20,
              borderRadius: 18,
              border: "1px solid rgba(214, 138, 82, 0.55)",
              color: "#f3f5f8",
              fontSize: 22,
              alignSelf: "flex-start",
              background: "rgba(7, 10, 17, 0.35)",
            }}
          >
            tim-cox.dev
          </div>
        </div>

        {/* Right side */}
        <div
          style={{
            width: "40%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 170,
              fontWeight: 800,
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#e69a5e",
              }}
            >
              &lt;
            </div>

            <div
              style={{
                display: "flex",
                color: "#f4f6fb",
                marginLeft: 8,
                marginRight: 8,
              }}
            >
              /
            </div>

            <div
              style={{
                display: "flex",
                color: "#66a4ff",
              }}
            >
              &gt;
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}