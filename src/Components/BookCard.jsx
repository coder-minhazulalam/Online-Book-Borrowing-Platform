"use client";
import Image from "next/image";
import Link from "next/link";

const categoryColors = {
  Tech: { bg: "#EFF6FF", text: "#1D4ED8", border: "#BFDBFE" },
  Science: { bg: "#F0FDF4", text: "#15803D", border: "#BBF7D0" },
  Story: { bg: "#FFF7ED", text: "#C2410C", border: "#FED7AA" },
};

const demandColors = {
  "Very High": { bg: "#FEF2F2", text: "#B91C1C" },
  High: { bg: "#FFF7ED", text: "#C2410C" },
  Medium: { bg: "#FEFCE8", text: "#A16207" },
};

const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{
            fontSize: "13px",
            color: i < full || (i === full && half) ? "#F59E0B" : "#D1D5DB",
          }}
        >
          {i < full ? "★" : i === full && half ? "⯨" : "★"}
        </span>
      ))}
      <span
        style={{
          fontSize: "12px",
          fontWeight: "600",
          color: "#374151",
          marginLeft: "4px",
        }}
      >
        {rating}
      </span>
    </div>
  );
};

const BookCard = ({ item }) => {
  const catStyle = categoryColors[item.category] || {
    bg: "#F3F4F6",
    text: "#374151",
    border: "#D1D5DB",
  };
  const demandStyle = demandColors[item.demand_level] || {
    bg: "#F3F4F6",
    text: "#374151",
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "14px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        border: "1px solid #F3F4F6",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.13)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
      }}
    >
      {/* Image Area */}
      <div
        style={{
          position: "relative",
          background: "#F9FAFB",
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "220px",
        }}
      >
        <Image
          src={item.image_url}
          alt={item.title}
          width={400}
          height={600}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />

        {/* Category Badge */}
        <span
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            background: catStyle.bg,
            color: catStyle.text,
            border: `1px solid ${catStyle.border}`,
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: "600",
            padding: "3px 10px",
          }}
        >
          {item.category}
        </span>

        {/* Available qty badge */}
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: item.available_quantity > 0 ? "#F0FDF4" : "#FEF2F2",
            color: item.available_quantity > 0 ? "#15803D" : "#B91C1C",
            border: `1px solid ${item.available_quantity > 0 ? "#BBF7D0" : "#FECACA"}`,
            borderRadius: "20px",
            fontSize: "11px",
            fontWeight: "600",
            padding: "3px 10px",
          }}
        >
          {item.available_quantity > 0
            ? `${item.available_quantity} left`
            : "Unavailable"}
        </span>
      </div>

      {/* Content Area */}
      <div
        style={{
          padding: "14px 16px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1,
        }}
      >
        {/* Title */}
        <h3
          style={{
            fontSize: "15px",
            fontWeight: "700",
            color: "#111827",
            lineHeight: "1.4",
            margin: 0,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.title}
        </h3>

        {/* Author */}
        <p
          style={{
            fontSize: "13px",
            color: "#6B7280",
            margin: 0,
          }}
        >
          by{" "}
          <span style={{ color: "#4B5563", fontWeight: "500" }}>
            {item.author}
          </span>
        </p>

        {/* Rating + Demand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <StarRating rating={item.rating} />
          <span
            style={{
              fontSize: "11px",
              fontWeight: "600",
              background: demandStyle.bg,
              color: demandStyle.text,
              borderRadius: "20px",
              padding: "2px 8px",
            }}
          >
            {item.demand_level}
          </span>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "11px",
                background: "#F3F4F6",
                color: "#374151",
                borderRadius: "6px",
                padding: "2px 8px",
                fontWeight: "500",
              }}
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{ borderTop: "1px solid #F3F4F6", marginTop: "4px" }}
        />

        {/* Footer: Edition + Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "2px",
          }}
        >
          <span style={{ fontSize: "11px", color: "#9CA3AF" }}>
            {item.edition} · {item.published_year}
          </span>
          <Link href={`/books/${item.id}`}>
            <button
              style={{
                background: "#F59E0B",
                color: "#1F2937",
                border: "none",
                borderRadius: "20px",
                padding: "7px 16px",
                fontSize: "12px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#D97706")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#F59E0B")
              }
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
