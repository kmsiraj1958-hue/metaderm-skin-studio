export const services = [
  {
    slug: "hydrafacial",
    name: "HydraFacial",
    summary: "A facial that cleanses, exfoliates, and hydrates the skin.",
    description:
      "HydraFacial is a multi-step facial used to cleanse, exfoliate, and hydrate. Whether it suits your skin is discussed in consultation.",
  },
  {
    slug: "lip-fillers",
    name: "Lip fillers",
    summary: "A consultation about lip shape and volume.",
    description:
      "Lip filler appointments begin with a conversation about shape and volume. Treatment is considered only after an individual assessment.",
  },
  {
    slug: "dermal-fillers",
    name: "Dermal fillers",
    summary: "A consultation about facial balance and volume.",
    description:
      "Dermal filler consultations look at facial balance and volume. Any product or placement is decided with you in clinic, after assessment.",
  },
  {
    slug: "hair-prp",
    name: "Hair PRP",
    summary: "A consultation about platelet-rich plasma for hair concerns.",
    description:
      "Hair PRP is a consultation about platelet-rich plasma for hair concerns. Suitability depends on your history and an in-person assessment.",
  },
  {
    slug: "eyebrow-prp",
    name: "Eyebrow PRP",
    summary: "A consultation about platelet-rich plasma for the brow area.",
    description:
      "Eyebrow PRP is a consultation about platelet-rich plasma for the eyebrow area. Your clinician reviews suitability before any treatment.",
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    summary: "A consultation about microneedling and skin texture.",
    description:
      "Microneedling is discussed for concerns such as skin texture. The consultation explains what a session involves and whether it is appropriate.",
  },
  {
    slug: "hifu",
    name: "HIFU",
    summary: "A consultation about ultrasound treatment and skin firmness.",
    description:
      "HIFU (high-intensity focused ultrasound) can be discussed where skin firmness is the concern. An assessment decides whether it is an option for you.",
  },
  {
    slug: "laser-treatments",
    name: "Laser treatments",
    summary: "A consultation about laser care for selected skin concerns.",
    description:
      "Laser treatments are discussed for selected skin concerns. The approach, if any, is chosen after assessment. Devices and expected outcomes are not listed here.",
  },
  {
    slug: "mole-removal",
    name: "Mole removal",
    summary: "An assessment of a mole or skin lesion.",
    description:
      "A mole or other skin lesion can be assessed in consultation. Some lesions need medical review rather than cosmetic removal.",
  },
  {
    slug: "nano-needling",
    name: "Nano-needling",
    summary: "A consultation about nano-needling as a surface treatment.",
    description:
      "Nano-needling is discussed as a surface treatment for the skin. Your clinician explains the session and whether it fits your skin and goals.",
  },
  {
    slug: "skin-rejuvenation",
    name: "Skin rejuvenation",
    summary: "A consultation about care aimed at a refreshed appearance.",
    description:
      "Skin rejuvenation is discussed in consultation. Any approach is chosen after an individual assessment. This page does not promise a particular result.",
  },
  {
    slug: "aesthetic-facials",
    name: "Aesthetic facials",
    summary: "Facials planned around comfort and your own goals.",
    description:
      "Aesthetic facials are planned around comfort and a refreshed appearance. The facial is chosen in consultation.",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

const featuredSlugs: ServiceSlug[] = [
  "hydrafacial",
  "lip-fillers",
  "dermal-fillers",
  "hair-prp",
  "microneedling",
  "hifu",
];

export const featuredServices = featuredSlugs.map((slug) => {
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    throw new Error(`Missing featured service: ${slug}`);
  }
  return service;
});

export function isServiceSlug(value: string): value is ServiceSlug {
  return services.some((service) => service.slug === value);
}
