module.exports = {
  future: { removeDeprecatedGapUtilities: true },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "raleway-regular": "Raleway Regular",
      "raleway-medium": "Raleway Medium",
      "raleway-bold": "Raleway Bold",
      "raleway-black": "Raleway Black",
      "open-sans": "Open Sans",
    },
    extend: {
      fontFamily: {
        roboto: ["roboto", "sans-serif"],
        getWalsheimPro: ["GT Walsheim Pro"],
      },
      keyframes: {
        rightToLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-800%)" },
        },
        leftToRight: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-102%)" },
        },
        fadeIn: {
          "0%": { height: "100%" },
          "40%": { height: "0%" },
          "60%": { height: "0%" },
          "100%": { height: "0%" },
        },
      },
      animation: {
        rightToLeft: "rightToLeft 210s linear infinite",
        rightToLeftFast: "rightToLeft 20s linear infinite",
        rightToLeftUltraFast: "rightToLeft 10s linear infinite",
        leftToRight: "leftToRight 20s linear infinite",
        fade: "fadeIn 2s ease-in",
      },
      screens: {
        zero: "0px",
        min: "281px",
        "2min": "395px",
        xs: "495px",
        "2xs": "541px",
        "3xs": "582px",
        sm: "640px",
        smd: "690px",
        md: "768px",
        "2md": "912px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1538px",
        "xs-tall": { raw: "(min-height: 650px)" },
        "2xs-tall": { raw: "(min-height: 740px)" },
        "sm-tall": { raw: "(min-height: 800px)" },
        "md-tall": { raw: "(min-height: 900px)" },
      },

      fontSize: {
        "title-big": ["56px", { lineHeight: "64px", fontWeight: 800 }],
        "title-med": ["48px", { lineHeight: "52px", fontWeight: 800 }],
        "title-med-mob": ["32px", { lineHeight: "34px", fontWeight: 800 }],
        "title-sm": ["24px", { lineHeight: "30px", fontWeight: 500 }],
        subtitle: ["20px", { lineHeight: "24px", fontWeight: 400 }],
        "subtitle-mob": ["13px", { lineHeight: "16px", fontWeight: 400 }],
        "simple-text": ["16px", { lineHeight: "24px", fontWeight: 700 }],
        "2sm": ["9px", { lineHeight: "14px", fontWeight: 500 }],
      },
      colors: {
        brand: {
          primary: "#352F44",
          secondary: "#5C5470",
          dark: "#2A2438",
          black: "#1F221D",
        },
        "text-primary": "#edebf3",
        "text-secondary": "#d0cdd8",
        "ui-tertiary": "#C8DAFF",
        "dark-blue": "#011947",
        "ui-inactive": "#BFC7D7",
        "ui-muted": "#5A5F6B",
        "ui-black": "#000000",
        "ui-yellow": "#BCFD02",
        "ui-form": "#0A1D4B",
        "ui-form-element": "#467BE3",
        "transparent-dark-blue": "rgba(3, 3, 1, 0.7)",
        "transparent-menu": "rgba(158, 255, 0, 0.4)",
        "transparent-card-active": "rgb(1, 22, 59)",
        cta: {
          "default-2": "#DBD8E3",
          default: "#edebf3",
          dark: "#2A2438",
          muted: "#5C5470",
          accent: "#352F44",
          subtle: "#2A2438",
          "subtle-2": "#D2D2D2",
          overlay: "#101828", // gray-900
          black: "#00040A",
          "disabled-black": "#EAECF0", //gray-200
          "disabled-gray": "#475467", //gray-600
        },
        bg: {
          default: "#352F44",
          "default-2": "#2A2438",
          disabled: "rgba(255, 255, 255, 0.4)",
          "disabled-2": "#D0D5DD", // gray-300
          muted: "#2A2438", // gray-100
          "muted-blue": "#5C5470",
          subtle: "#EAF9D0", // primary-100
          overlay: "#00040abf",
          fond: "#2A2438",
          empty: "rgba(255, 255, 255, 0.0)",
        },
        fg: {
          default: "#00040A",
          "on-accent": "#ffffff",
          muted: "#707070", // gray-500
          "on-disabled": "#2A2438",
          "disabled-2": "#D0D5DD", // gray-300
          "on-black": "#F5F8FF", // primary-100
          accent: "#667085", // gray-500
          "muted-blue": "#0142BD", // primary-600
        },
        negative: {
          default: "#f04438", // danger-500
          subtle: "#fda29b", // danger-200
          empty: "#FFEEED", // danger-100
          dark: "#D92D20", // danger-600
        },
        positive: {
          default: "#16b364",
          subtle: "#aaf0c4",
        },
        warning: {
          default: "#F79009",
          subtle: "#FFF6DB",
        },
        yellow: {
          default: "#F6E911", // yellow-500
          subtle: "#FDF9BD",
        },
      },
      maxWidth: {
        "app-container": "1441px",
        "lp-container": "1990px",
      },
      maxHeight: {
        "modal-desktop": "570px",
        "modal-mobile": "700px",
      },
      boxShadow: {
        "2.5xl": "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
        "3xl": "0 35px 100px -15px rgba(0, 0, 0, 0.5)",
        "4xl": "0 0 230px -15px",
        primary:
          "1.5px 1.5px 3px 0px rgba(146, 150, 145, 0.40), 0px -1px 3px 0px #FFF",
        secondary: "1.5px 1.5px 3px 0px #1F221D, 0px -1px 3px 0px #3A3D38",
        "border-shadow":
          "0px 1px 2px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.06)",
        "form-shadow":
          "0px 503px 141px rgba(7, 11, 24, 0.01), 0px 322px 129px rgba(7, 11, 24, 0.05), 0px 181px 109px rgba(7, 11, 24, 0.16), 0px 81px 81px rgba(7, 11, 24, 0.27), 0px 20px 44px rgba(7, 11, 24, 0.31), 0px 0px 0px rgba(7, 11, 24, 0.31)",
      },
    },
  },
  variants: {},
  plugins: ["tailwind-children"],
};
