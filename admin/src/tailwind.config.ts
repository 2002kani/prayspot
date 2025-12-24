import type { Config } from "tailwindcss";

const withOpacity =
  (variable: string) =>
  ({ opacityValue }: { opacityValue?: number }) =>
    opacityValue
      ? `hsla(var(${variable}), ${opacityValue})`
      : `hsl(var(${variable}))`;

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', "sans-serif"], // Inter als Standard
      },
      colors: {
        background: withOpacity("--background"),
        foreground: withOpacity("--foreground"),

        card: withOpacity("--card"),
        "card-foreground": withOpacity("--card-foreground"),

        popover: withOpacity("--popover"),
        "popover-foreground": withOpacity("--popover-foreground"),

        primary: withOpacity("--primary"),
        "primary-foreground": withOpacity("--primary-foreground"),

        secondary: withOpacity("--secondary"),
        "secondary-foreground": withOpacity("--secondary-foreground"),

        muted: withOpacity("--muted"),
        "muted-foreground": withOpacity("--muted-foreground"),

        accent: withOpacity("--accent"),
        "accent-foreground": withOpacity("--accent-foreground"),

        destructive: withOpacity("--destructive"),

        border: withOpacity("--border"),
        input: withOpacity("--input"),
        ring: withOpacity("--ring"),

        sidebar: withOpacity("--sidebar"),
        "sidebar-foreground": withOpacity("--sidebar-foreground"),
        "sidebar-primary": withOpacity("--sidebar-primary"),
        "sidebar-primary-foreground": withOpacity(
          "--sidebar-primary-foreground"
        ),
        "sidebar-accent": withOpacity("--sidebar-accent"),
        "sidebar-accent-foreground": withOpacity("--sidebar-accent-foreground"),
        "sidebar-border": withOpacity("--sidebar-border"),
        "sidebar-ring": withOpacity("--sidebar-ring"),

        chart1: withOpacity("--chart-1"),
        chart2: withOpacity("--chart-2"),
        chart3: withOpacity("--chart-3"),
        chart4: withOpacity("--chart-4"),
        chart5: withOpacity("--chart-5"),
      },
    },
  },
  plugins: [],
};

export default config;
