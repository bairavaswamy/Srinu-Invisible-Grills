import { serviceRoutes } from "./serviceRoutes";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type SeoService = {
  slug: string;
  navLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  description: string;
  image: string;
  imageAlt: string;
  introduction: string[];
  benefits: string[];
  applications: string[];
  faqs: ServiceFaq[];
};

export const primaryServices: SeoService[] = [
  {
    ...serviceRoutes.balconySafetyNets,
    title: "Balcony Safety Net Installation in Visakhapatnam",
    metaTitle: "Balcony Safety Net Installation in Visakhapatnam | Srinu",
    metaDescription:
      "Professional balcony safety net installation in Visakhapatnam for apartments, children and pets. Custom fitting with durable, weather-resistant nets.",
    keywords: [
      "balcony safety nets Visakhapatnam",
      "balcony net installation Vizag",
      "apartment safety nets",
      "child safety nets for balcony",
    ],
    description:
      "Custom-fitted balcony safety nets that help protect children, pets and belongings without closing off natural light, ventilation or your outdoor view.",
    image: "/balcony/balcony-net.webp",
    imageAlt: "Professionally fitted balcony safety net in Visakhapatnam",
    introduction: [
      "Balconies provide valuable light and ventilation, but open railings and high-rise edges can create avoidable risks. Our balcony safety nets are measured and fitted for the exact opening, creating a secure barrier for apartments, villas and residential buildings in Visakhapatnam.",
      "We use durable netting selected for outdoor exposure and secure it with neat, corrosion-resistant fittings. The mesh remains visually light, so the balcony stays open and comfortable while gaining practical protection for children, pets and everyday household use.",
      "Before installation, our team checks the balcony structure, access points and fixing surfaces. This site-specific approach helps produce consistent tension, clean edges and a finish that works with the building instead of looking temporary.",
    ],
    benefits: [
      "Measured and cut for the exact balcony opening",
      "Maintains airflow, daylight and outward visibility",
      "Suitable for children, pets and high-rise apartments",
      "Neat installation with durable outdoor fittings",
    ],
    applications: [
      "Apartment balconies",
      "Villa terraces",
      "Balcony railing gaps",
      "Residential open areas",
    ],
    faqs: [
      {
        question: "Will a balcony safety net block the view?",
        answer:
          "No. The mesh is designed to remain visually unobtrusive while allowing normal daylight and airflow through the balcony.",
      },
      {
        question: "Can the net be fitted to any balcony shape?",
        answer:
          "Most balcony openings can be covered. We measure the available fixing points and prepare a custom installation for straight, corner and irregular layouts.",
      },
      {
        question: "Are balcony nets suitable for children and pets?",
        answer:
          "They are commonly installed to reduce fall risks for children and pets. The final recommendation depends on the opening, structure and intended use assessed on site.",
      },
      {
        question: "How do I request a quotation?",
        answer:
          "Call or WhatsApp us with your location and approximate balcony measurements. We can then arrange a site inspection and provide a suitable quotation.",
      },
    ],
  },
  {
    ...serviceRoutes.invisibleGrills,
    title: "Invisible Grill Installation in Visakhapatnam",
    metaTitle: "Invisible Grill Installation in Visakhapatnam | Srinu",
    metaDescription:
      "Invisible grill installation in Visakhapatnam for balconies and windows. High-tensile stainless-steel cables provide safety with clear views and airflow.",
    keywords: [
      "invisible grills Visakhapatnam",
      "invisible grill installation Vizag",
      "balcony invisible grills",
      "window invisible grills",
    ],
    description:
      "Slim, high-tensile stainless-steel cable systems for balconies and windows, designed to improve safety while preserving clear views and a modern appearance.",
    image: "/images/invisble.jpg",
    imageAlt: "Invisible stainless-steel safety grills installed on a balcony",
    introduction: [
      "Invisible grills offer a clean alternative to bulky traditional bars for balconies, windows and open edges. Closely spaced stainless-steel cables form a strong protective barrier while remaining discreet from normal viewing distance.",
      "Each system is planned around the dimensions and structure of the opening. Cable spacing, frame placement and tension are selected to provide a neat result that supports child and pet safety without making the room feel enclosed.",
      "Our installation team checks alignment and anchoring carefully before completing the work. The finished system requires little visual space, allows normal ventilation and suits contemporary apartments, villas and offices across Visakhapatnam.",
    ],
    benefits: [
      "Minimal visual obstruction and a modern finish",
      "High-tensile stainless-steel safety cables",
      "Custom spacing for balconies and windows",
      "Weather-resistant and easy to maintain",
    ],
    applications: [
      "High-rise balconies",
      "Apartment windows",
      "Staircase openings",
      "Office and commercial spaces",
    ],
    faqs: [
      {
        question: "What are invisible grills made from?",
        answer:
          "They use high-tensile stainless-steel cables with protective coating and compatible frames or fittings selected for the installation surface.",
      },
      {
        question: "Do invisible grills affect ventilation?",
        answer:
          "No. The slim cable profile and open spacing allow natural ventilation and daylight to continue through the opening.",
      },
      {
        question: "Can invisible grills be installed on windows?",
        answer:
          "Yes. They can be customized for many balcony, window and staircase openings after checking the available frame and anchoring points.",
      },
      {
        question: "How is the installation priced?",
        answer:
          "Pricing depends on the measured area, cable specification, spacing and site conditions. Contact us for a measurement-based quotation.",
      },
    ],
  },
  {
    ...serviceRoutes.antiBirdSpikes,
    title: "Anti-Bird Spike Installation in Visakhapatnam",
    metaTitle: "Anti-Bird Spike Installation in Visakhapatnam | Srinu",
    metaDescription:
      "Humane anti-bird spike installation in Visakhapatnam for ledges, AC units, parapets and signage. Durable protection from pigeon perching and nesting.",
    keywords: [
      "bird spikes Visakhapatnam",
      "pigeon spikes Vizag",
      "anti bird spikes installation",
      "pigeon control for buildings",
    ],
    description:
      "A humane, low-maintenance deterrent that prevents pigeons and other birds from settling on ledges, parapets, AC units and building projections.",
    image: "/pigeonbalcony/spikes.webp",
    imageAlt: "Anti-bird spikes installed on a building ledge",
    introduction: [
      "Frequently used ledges and projections can quickly collect nesting material and bird droppings. Anti-bird spikes remove the comfortable landing space birds look for, helping keep residential and commercial surfaces cleaner.",
      "We select the spike width and fixing method according to the ledge, parapet, pipe, signboard or AC outdoor unit. Correct coverage matters: uncovered gaps can still allow birds to settle, so our team plans the layout before installation.",
      "The system deters perching without trapping birds. Once fitted securely, it needs little routine attention and can be used alongside netting where a building has both open areas and narrow landing surfaces.",
    ],
    benefits: [
      "Humane physical deterrent without trapping birds",
      "Suitable for narrow and wide landing surfaces",
      "Low-maintenance outdoor installation",
      "Helps reduce droppings, nesting and cleaning work",
    ],
    applications: [
      "Window ledges and parapets",
      "AC outdoor units",
      "Signboards and pipes",
      "Commercial building projections",
    ],
    faqs: [
      {
        question: "Do anti-bird spikes harm pigeons?",
        answer:
          "They are designed as a landing deterrent. Correctly installed spikes make a surface uncomfortable for perching without trapping birds.",
      },
      {
        question: "Where can bird spikes be installed?",
        answer:
          "Common locations include ledges, parapets, AC units, pipes, signboards, roof edges and other flat bird-landing surfaces.",
      },
      {
        question: "Are spikes better than nets?",
        answer:
          "They solve different problems. Spikes protect narrow landing surfaces, while nets close larger openings such as balconies and ducts. Some sites benefit from both.",
      },
      {
        question: "Will the spikes be clearly visible?",
        answer:
          "The visibility depends on the viewing distance and surface. We align the strips neatly to keep the installation as discreet as practical.",
      },
    ],
  },
  {
    ...serviceRoutes.pigeonSafetyNets,
    title: "Pigeon Safety Net Installation in Visakhapatnam",
    metaTitle: "Pigeon Safety Net Installation in Visakhapatnam | Srinu",
    metaDescription:
      "Pigeon safety net installation in Visakhapatnam for balconies, windows and ducts. Keep birds out while retaining daylight, ventilation and visibility.",
    keywords: [
      "pigeon safety nets Visakhapatnam",
      "pigeon nets installation Vizag",
      "balcony pigeon nets",
      "anti pigeon net service",
    ],
    description:
      "Secure bird-control netting for balconies, windows and ducts that blocks pigeon entry while keeping the space ventilated, bright and easy to use.",
    image: "/pigeonbalcony/pigeon-net-installation.webp",
    imageAlt: "Pigeon safety net fitted across an apartment balcony",
    introduction: [
      "Pigeons entering balconies, utility areas and ducts can create repeated cleaning, odour and nesting problems. A properly tensioned safety net closes the opening while retaining normal light and air movement.",
      "Our team measures every exposed edge and selects mesh and fittings suited to the opening. Attention to corners, pipes and uneven surfaces helps prevent the small gaps through which birds commonly return.",
      "The completed net is practical for occupied apartments because it remains lightweight and visually discreet. It is suitable for residential balconies, windows, service shafts and other open areas where a non-harmful bird barrier is needed.",
    ],
    benefits: [
      "Blocks pigeon entry without harming birds",
      "Allows daylight and ventilation through the mesh",
      "Custom coverage around pipes, corners and railings",
      "Helps reduce nesting, droppings and cleaning",
    ],
    applications: [
      "Apartment balconies",
      "Kitchen and utility windows",
      "Residential duct openings",
      "Commercial open areas",
    ],
    faqs: [
      {
        question: "Will pigeon nets stop smaller birds too?",
        answer:
          "The result depends on the selected mesh size and the gaps around the installation. We recommend the specification after inspecting the site.",
      },
      {
        question: "Can the balcony still be used after installation?",
        answer:
          "Yes. The net closes the exposed outer opening while the usable balcony floor and interior access remain available.",
      },
      {
        question: "Can nets be fitted around AC pipes?",
        answer:
          "Yes. Openings around pipes and brackets can usually be shaped and secured during custom installation.",
      },
      {
        question: "How should pigeon nets be cleaned?",
        answer:
          "Light dust can normally be removed with gentle water cleaning. Avoid cutting, burning or pulling the mesh and contact us if fittings become loose.",
      },
    ],
  },
  {
    ...serviceRoutes.sportsPracticeNets,
    title: "Sports Practice Net Installation in Visakhapatnam",
    metaTitle: "Sports Practice Net Installation in Vizag | Srinu",
    metaDescription:
      "Custom sports practice net installation in Visakhapatnam for cricket, football and training areas. Impact-resistant netting for indoor and outdoor use.",
    keywords: [
      "sports nets Visakhapatnam",
      "cricket practice nets Vizag",
      "football ball stop nets",
      "sports net installation",
    ],
    description:
      "Custom sports enclosures and ball-stop nets for cricket, football and multi-sport practice areas in schools, academies, terraces and open grounds.",
    image: "/balcony/sports-nets.webp",
    imageAlt: "Sports practice net enclosure for ball training",
    introduction: [
      "A well-planned sports net keeps balls within the practice area and helps protect players, spectators, vehicles and nearby property. We install containment netting for cricket, football and other training activities in indoor and outdoor settings.",
      "Mesh size, cord thickness, height and support layout are selected according to the sport and expected impact. The enclosure can be designed for a single practice lane, a terrace setup or a larger academy and school training area.",
      "Our installation focuses on even tension, reinforced edges and accessible entry points. The result is a practical training zone that makes repeated practice safer and reduces interruptions caused by balls leaving the area.",
    ],
    benefits: [
      "Sport-specific mesh and impact requirements",
      "Custom dimensions for compact or large practice areas",
      "Indoor and weather-exposed installation options",
      "Helps protect people and property outside the enclosure",
    ],
    applications: [
      "Cricket practice lanes",
      "Football training areas",
      "Schools and sports academies",
      "Terrace recreation zones",
    ],
    faqs: [
      {
        question: "Which sports can practice nets be used for?",
        answer:
          "They can be designed for cricket, football, golf and other ball-training activities by adjusting mesh, height and support requirements.",
      },
      {
        question: "Can sports nets be installed outdoors?",
        answer:
          "Yes. We assess the exposure, support structure and required net specification before recommending an outdoor installation.",
      },
      {
        question: "Do you make custom-size cricket nets?",
        answer:
          "Yes. Practice lanes can be measured and configured for the available length, width, height and entry arrangement.",
      },
      {
        question: "What information is needed for a quote?",
        answer:
          "Share the sport, site location and approximate enclosure dimensions. A site check may be required before the final specification and price are confirmed.",
      },
    ],
  },
  {
    ...serviceRoutes.constructionSafetyNets,
    title: "Construction Safety Net Installation in Visakhapatnam",
    metaTitle: "Construction Safety Net Installation in Vizag | Srinu",
    metaDescription:
      "Construction safety net installation in Visakhapatnam for debris containment and exposed work areas. Site-measured netting for building projects.",
    keywords: [
      "construction safety nets Visakhapatnam",
      "building safety nets Vizag",
      "debris safety nets",
      "construction net installation",
    ],
    description:
      "Heavy-duty safety and debris-control netting planned for exposed building elevations, work zones and construction-site containment requirements.",
    image: "/images/construction-net.webp",
    imageAlt: "Construction safety netting installed around a building site",
    introduction: [
      "Construction sites require controlled boundaries around elevated work and exposed areas. Safety netting can support a wider site-safety plan by helping contain lightweight debris and defining protected zones around active work.",
      "Every project is different, so we review the structure, coverage height, anchoring access and anticipated use before recommending material and fixing methods. Installation is planned to maintain reliable tension across the required area.",
      "Safety nets do not replace statutory fall-protection systems, engineering controls or site supervision. They should be selected and used as part of the project’s approved safety plan and inspected whenever site conditions change.",
    ],
    benefits: [
      "Measured coverage for active construction areas",
      "Durable netting suited to demanding site conditions",
      "Professional tensioning and perimeter attachment",
      "Supports debris-control and site-safety planning",
    ],
    applications: [
      "Building elevations",
      "Scaffolding perimeters",
      "Renovation work zones",
      "Material and debris containment areas",
    ],
    faqs: [
      {
        question: "What are construction safety nets used for?",
        answer:
          "They are commonly used for containment around building work, exposed elevations and selected areas identified in a project safety plan.",
      },
      {
        question: "Do safety nets replace other fall protection?",
        answer:
          "No. Netting should be part of an approved safety system and does not replace required guardrails, harnesses, supervision or engineering controls.",
      },
      {
        question: "Can you cover an entire building elevation?",
        answer:
          "Coverage depends on structural access, anchoring and project requirements. We inspect the site before confirming a feasible installation plan.",
      },
      {
        question: "Does construction netting need inspection?",
        answer:
          "Yes. Site teams should inspect nets and attachments regularly and after severe weather, impact or changes to the supporting structure.",
      },
    ],
  },
  {
    ...serviceRoutes.childrenSafetyNets,
    title: "Child Safety Net Installation in Visakhapatnam",
    metaTitle: "Child Safety Net Installation in Vizag | Srinu",
    metaDescription:
      "Children safety net installation in Visakhapatnam for balconies, windows and stair openings. Custom barriers that retain light, airflow and visibility.",
    keywords: [
      "children safety nets Visakhapatnam",
      "child balcony safety net Vizag",
      "kids safety nets",
      "window safety nets for children",
    ],
    description:
      "Custom safety net barriers for balcony railings, windows and stair openings, helping families reduce access and fall risks around the home.",
    image: "/balcony/children-safety-net.webp",
    imageAlt: "Child safety net installed across an apartment balcony",
    introduction: [
      "Open balcony railings, low window openings and stair gaps can be difficult to manage in homes with young children. A custom safety net adds a flexible secondary barrier while keeping the area bright and ventilated.",
      "We measure the complete opening and identify corners or access points that require special attention. The net is then tensioned using secure perimeter fittings to reduce loose areas and maintain a tidy appearance.",
      "No product replaces active adult supervision. Children safety nets are an additional protective measure and should be checked periodically, especially after renovation, impact or any change to the supporting structure.",
    ],
    benefits: [
      "Custom fitting for railings, windows and open gaps",
      "Soft, flexible mesh with minimal visual impact",
      "Preserves household light and ventilation",
      "Adds a practical secondary safety barrier",
    ],
    applications: [
      "Balcony railing openings",
      "Windows and utility areas",
      "Stairwell gaps",
      "Indoor play-area boundaries",
    ],
    faqs: [
      {
        question: "Do safety nets replace child supervision?",
        answer:
          "No. They are an additional barrier only. Children should still be actively supervised around balconies, windows, stairs and other elevated areas.",
      },
      {
        question: "Can a safety net cover railing gaps?",
        answer:
          "Yes, many railing and open-edge gaps can be covered after the frame, fixing points and complete opening are assessed.",
      },
      {
        question: "Will the mesh reduce light inside the home?",
        answer:
          "The open mesh allows most natural light and airflow to pass through, so the area remains usable and ventilated.",
      },
      {
        question: "How often should the net be checked?",
        answer:
          "Inspect the mesh and fittings periodically and after any impact, building work or severe weather. Contact an installer if you notice looseness or damage.",
      },
    ],
  },
  {
    ...serviceRoutes.staircaseSafetyNets,
    title: "Staircase Safety Net Installation in Visakhapatnam",
    metaTitle: "Staircase Safety Net Installation in Vizag | Srinu",
    metaDescription:
      "Staircase safety net installation in Visakhapatnam for stairwells, railings and landings. Custom protection for children, pets and open interior spaces.",
    keywords: [
      "staircase safety nets Visakhapatnam",
      "stairwell safety nets Vizag",
      "stair railing safety net",
      "child staircase protection",
    ],
    description:
      "Discreet net barriers for open stairwells, railings and landings, custom-fitted to help protect children, pets and household members from exposed gaps.",
    image: "/balcony/staircase-net.webp",
    imageAlt: "Safety net secured around an open staircase and railing",
    introduction: [
      "Open stairwells and wide railing gaps can create risk points in duplex homes, apartments, schools and commercial interiors. Staircase safety nets close these exposed spaces while keeping sightlines and airflow largely unchanged.",
      "Because every staircase has a different angle and railing pattern, installation begins with detailed measurement. We plan the perimeter fittings and tension so the mesh follows the opening neatly without sagging into the walking area.",
      "The net can provide an additional barrier for children and pets, but it should not be climbed on or treated as a handrail. Periodic inspection helps confirm the mesh and attachments remain secure.",
    ],
    benefits: [
      "Custom fitting for angled and irregular openings",
      "Compact installation that preserves interior visibility",
      "Suitable for children, pets and open stair designs",
      "Secure perimeter tension with neat edge finishing",
    ],
    applications: [
      "Duplex stairwells",
      "Railing and baluster gaps",
      "Open landings",
      "Schools, hostels and offices",
    ],
    faqs: [
      {
        question: "Can nets fit an angled staircase opening?",
        answer:
          "Yes. The mesh can be measured and shaped for many angled or irregular openings when secure perimeter fixing points are available.",
      },
      {
        question: "Are staircase nets suitable for pets?",
        answer:
          "They can provide an additional barrier for many household pets. Mesh and coverage should be selected according to the pet and opening.",
      },
      {
        question: "Can the net be installed indoors?",
        answer:
          "Yes. Staircase netting is commonly installed indoors and can be arranged to maintain a tidy appearance around the existing railing.",
      },
      {
        question: "Can children climb on the net?",
        answer:
          "No. The net is a secondary barrier, not play equipment or a handrail. Children should remain supervised around staircases.",
      },
    ],
  },
  {
    ...serviceRoutes.ductAreaSafetyNets,
    title: "Duct Area Safety Net Installation in Visakhapatnam",
    metaTitle: "Duct Area Safety Net Installation in Vizag | Srinu",
    metaDescription:
      "Duct area safety net installation in Visakhapatnam for apartment shafts and ventilation openings. Custom coverage against birds, debris and open gaps.",
    keywords: [
      "duct area safety nets Visakhapatnam",
      "apartment duct nets Vizag",
      "shaft safety nets",
      "pigeon nets for ducts",
    ],
    description:
      "Measured net coverage for apartment ducts, shafts and ventilation openings, helping control bird entry, falling debris and exposed internal gaps.",
    image: "/balcony/ductarea-nets.webp",
    imageAlt: "Safety net installed across an apartment duct opening",
    introduction: [
      "Open service ducts and ventilation shafts can collect nesting material, waste and loose debris across several floors. Duct area netting creates a controlled barrier while preserving the ventilation function of the space.",
      "Installation requires careful access planning because duct openings often include pipes, brackets and uneven walls. We measure around these obstructions and close perimeter gaps with suitable mesh and fixing methods.",
      "The finished net helps reduce bird movement and debris transfer through the shaft. Access requirements for maintenance equipment are considered before the final layout is agreed.",
    ],
    benefits: [
      "Custom fitting around pipes and service lines",
      "Allows ventilation through the open mesh",
      "Helps limit bird entry and debris movement",
      "Suitable for multi-storey residential shafts",
    ],
    applications: [
      "Apartment service ducts",
      "Ventilation shafts",
      "Utility openings",
      "Commercial building service areas",
    ],
    faqs: [
      {
        question: "Can duct nets be fitted around pipes?",
        answer:
          "Yes. The net can usually be shaped around fixed pipes and brackets, with perimeter gaps secured during installation.",
      },
      {
        question: "Will a duct net stop ventilation?",
        answer:
          "No. The mesh remains open to airflow, although the exact specification should suit the building’s ventilation requirements.",
      },
      {
        question: "Can maintenance staff still access the duct?",
        answer:
          "Required access should be identified before installation so the layout can account for inspection or maintenance needs.",
      },
      {
        question: "Do you install nets in multi-storey shafts?",
        answer:
          "We assess access, anchoring and safety conditions before confirming work in any multi-storey duct or shaft area.",
      },
    ],
  },
  {
    ...serviceRoutes.openAreaSafetyNets,
    title: "Open Area Safety Net Installation in Visakhapatnam",
    metaTitle: "Open Area Safety Net Installation in Vizag | Srinu",
    metaDescription:
      "Open area safety net installation in Visakhapatnam for terraces, rooftops and building gaps. Custom weather-resistant coverage for residential properties.",
    keywords: [
      "open area safety nets Visakhapatnam",
      "terrace safety nets Vizag",
      "rooftop safety nets",
      "open space net installation",
    ],
    description:
      "Custom safety net installations for terraces, rooftops and large building openings where durable coverage is needed without constructing a solid enclosure.",
    image: "/balcony/openarea-safety-net.webp",
    imageAlt: "Large safety net covering an open terrace area",
    introduction: [
      "Terraces, rooftops and large open edges often need broader coverage than a standard balcony. Open area safety nets create a lightweight barrier that can help control access, birds and loose objects while retaining light and airflow.",
      "We plan the installation around the span, surrounding walls, anchor locations and exposure to wind and weather. Larger areas may require additional support lines or segmented coverage to maintain stable tension.",
      "The intended use of the space determines the final recommendation. Our team reviews access points and maintenance needs before installing a custom net layout for homes, apartments and selected commercial properties.",
    ],
    benefits: [
      "Custom coverage for wide and irregular spans",
      "Lightweight alternative to a solid enclosure",
      "Maintains daylight and natural airflow",
      "Planned supports for stable net tension",
    ],
    applications: [
      "Residential terraces",
      "Rooftop openings",
      "Apartment common areas",
      "Large architectural gaps",
    ],
    faqs: [
      {
        question: "How large an area can safety nets cover?",
        answer:
          "Coverage depends on the span, anchor points, exposure and intended use. Large openings may be divided or use added support lines.",
      },
      {
        question: "Can open area nets be installed on a terrace?",
        answer:
          "Yes. Terrace installations are possible when suitable perimeter structures and safe fixing points are available.",
      },
      {
        question: "Will wind affect a large safety net?",
        answer:
          "Wind exposure is an important design consideration. We assess the site and plan mesh, supports and attachment points accordingly.",
      },
      {
        question: "Is a site inspection required?",
        answer:
          "A site inspection is recommended for large or exposed areas so measurements, access and structural conditions can be confirmed before quotation.",
      },
    ],
  },
];

const serviceByRoute = new Map(
  primaryServices.map((service) => [service.slug, service]),
);

export const serviceRouteSlugs = primaryServices.map((service) => service.slug);

export const getServiceByRoute = (route: string) => serviceByRoute.get(route);
