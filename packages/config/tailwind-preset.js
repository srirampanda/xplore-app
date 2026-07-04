/** Shared Tailwind design tokens for XploreApp */
module.exports = {
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eff8f3",
          100: "#d8eee1",
          200: "#b3ddc4",
          300: "#82c4a1",
          400: "#52a67d",
          500: "#328a63",
          600: "#236f4f",
          700: "#1c5941",
          800: "#194635",
          900: "#153a2c",
          950: "#0a2019"
        },
        clay: {
          50: "#fdf4ee",
          100: "#fbe6d7",
          200: "#f6cbae",
          300: "#efa87c",
          400: "#e77f4c",
          500: "#df5f2b",
          600: "#c74620",
          700: "#a5341e",
          800: "#852c1f",
          900: "#6c271d"
        },
        sand: {
          50: "#fbfaf7",
          100: "#f5f2ea",
          200: "#ebe4d3",
          300: "#ddd0b3",
          400: "#c9b688",
          500: "#b39c66",
          600: "#96804f"
        },
        ink: {
          50: "#f4f5f5",
          100: "#e5e7e8",
          400: "#6b7375",
          600: "#454d4f",
          700: "#333a3c",
          800: "#232829",
          900: "#161a1a"
        }
      },
      spacing: {
        4.5: "1.125rem",
        13: "3.25rem"
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 1px 2px rgba(22,26,26,0.04), 0 8px 24px -12px rgba(22,26,26,0.12)",
        "card-hover": "0 4px 8px rgba(22,26,26,0.06), 0 16px 32px -12px rgba(22,26,26,0.18)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  }
};
