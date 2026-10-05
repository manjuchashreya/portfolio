import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shreya Manjucha — Software Engineer & AI/ML Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a14",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative orb — top right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.14) 0%, rgba(139,92,246,0.0) 70%)",
          }}
        />

        {/* Decorative orb — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -60,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(99,102,241,0.0) 70%)",
          }}
        />

        {/* Large faint monogram */}
        <div
          style={{
            position: "absolute",
            right: 60,
            top: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            fontSize: 300,
            fontWeight: 900,
            color: "rgba(167,139,250,0.04)",
            letterSpacing: -12,
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          SM
        </div>

        {/* ── Top row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#a78bfa",
              letterSpacing: -0.5,
            }}
          >
            SM
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                background: "#4ade80",
              }}
            />
            <span style={{ fontSize: 14, color: "#71717a" }}>
              Open to full-time roles
            </span>
          </div>
        </div>

        {/* ── Main content ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 16,
          }}
        >
          {/* Name */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: "#f4f2ff",
              lineHeight: 1.04,
              letterSpacing: -2.5,
            }}
          >
            Shreya Manjucha
          </div>

          {/* Role */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 28, fontWeight: 300, color: "#71717a" }}>
              Software Engineer &amp;
            </span>
            <span
              style={{ fontSize: 28, fontWeight: 600, color: "#a78bfa" }}
            >
              AI / ML Researcher
            </span>
          </div>
        </div>

        {/* ── Tags ── */}
        <div style={{ display: "flex", gap: 10 }}>
          {[
            "MS CS · Purdue",
            "Multimodal AI",
            "Agentic Systems",
            "IEEE Published",
          ].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "7px 18px",
                borderRadius: 100,
                border: "1px solid rgba(167,139,250,0.22)",
                background: "rgba(167,139,250,0.07)",
                color: "#a78bfa",
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
