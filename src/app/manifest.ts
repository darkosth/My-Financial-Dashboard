import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "MyFinance",
    short_name: "MyFinance",
    description: "Planifica el flujo de efectivo, pagos y cuentas de tu hogar.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f8faf9",
    theme_color: "#059669",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
