import { getPermalink } from "./utils/permalinks";

export const headerData = {
  links: [
    /*{
      text: "Homes",
      links: [
        {
          text: "SaaS",
          href: getPermalink("/homes/saas"),
        },
        {
          text: "Startup",
          href: getPermalink("/homes/startup"),
        },
        {
          text: "Mobile App",
          href: getPermalink("/homes/mobile-app"),
        },
        {
          text: "Personal",
          href: getPermalink("/homes/personal"),
        },
      ],
    },*/
    {
      text: "Servicios",
      href: getPermalink("/#services"),
    },
    {
      text: "Experiencias",
      href: getPermalink("/#experiences"),
    },
    {
      text: "Cómo trabajamos",
      href: getPermalink("/#comoTrabajamos"),
    },
    {
      text: "Nosotros",
      href: getPermalink("/#us"),
    },
    /*{
      text: "Widgets",
      href: "#",
    },*/
  ],
  actions: [
    {
      text: "Conversemos",
      href: "#contact",
      variant: "primary" as const,
    },
  ],
};

export const footerData = {
  links: [
    {
      title: "Servicios",
      links: [
        { text: "Bodas", href: "#services" },
        { text: "Propuestas de matrimonio", href: "#services" },
        { text: "Decoración & ambientación", href: "#services" },
        { text: "Mesas de dulces", href: "#services" },
        { text: "Baby showers & Revelación de género", href: "#services" },
        { text: "Maestría de ceremonias", href: "#services" },
      ],
    },
    {
      title: "Nuestro enfoque",
      links: [
        { text: "Cómo trabajamos", href: "#comoTrabajamos" },
        { text: "Experiencias", href: "#experiences" },
        { text: "Proceso de planificación", href: "#comoTrabajamos" },
        { text: "Preguntas frecuentes", href: "#FAQs" },
      ],
    },
    {
      title: "Redes Sociales",
      links: [
        {
          text: "WhatsApp",
          href: "https://api.whatsapp.com/send/?phone=18092651238&text&type=phone_number&app_absent=0&utm_source=ig",
        },
        {
          text: "Instagram",
          href: "https://www.instagram.com/veralune_events/",
        },
      ],
    },
    {
      title: "Contacto",
      links: [
        {
          text: "📞&nbsp;+1&nbsp;(809)&nbsp;265-1238",
          href: "tel:+18092651238",
          ariaLabel: "Llamar a Vera Lune",
        },
        {
          text: "✉️&nbsp;hola@veraluneevents.com",
          href: "mailto:hola@veraluneevents.com",
          ariaLabel: "Correo Vera Lune",
        },
      ],
    },
  ],
  secondaryLinks: [
    { text: "Terms", href: getPermalink("/terms") },
    { text: "Privacy Policy", href: getPermalink("/privacy") },
  ],
  socialLinks: [
    {
      ariaLabel: "WhatsApp",
      icon: "tabler:brand-whatsapp",
      href: "https://api.whatsapp.com/send/?phone=18092651238&text&type=phone_number&app_absent=0&utm_source=ig",
    },
    {
      ariaLabel: "Instagram",
      icon: "tabler:brand-instagram",
      href: "https://www.instagram.com/veralune_events/",
    },
    /*{ ariaLabel: "Facebook", icon: "tabler:brand-facebook", href: "#" },*/
    /*{ ariaLabel: "RSS", icon: "tabler:rss", href: getAsset("/rss.xml") },*/
    /*{
      ariaLabel: "Github",
      icon: "tabler:brand-github",
      href: "https://github.com/arthelokyo/astrowind",
    },*/
  ],
  footNote: `
  © ${new Date().getFullYear()} Crafted by
  <a class="underline hover:opacity-80 dark:text-muted" href="https://www.pixellogic.com.do">
    PixelLogic
  </a>.
  All rights reserved.
`,
};
