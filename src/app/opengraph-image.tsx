import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08090b",
          backgroundImage:
            "linear-gradient(to bottom, rgba(94,234,212,0.10), rgba(8,9,11,0) 55%)",
          color: "#f2f3f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#5eead4",
            fontFamily: "monospace",
            fontSize: 28,
            marginBottom: 28,
          }}
        >
          <div style={{ width: 40, height: 2, background: "#5eead4" }} />
          Portfolio
        </div>
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -1.5 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 34, color: "#9aa1ac", marginTop: 20, display: "flex" }}>
          {profile.title}
          <span style={{ margin: "0 14px", color: "#62666f" }}>/</span>
          <span style={{ color: "#5eead4" }}>{profile.subtitle}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
