export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  detailedContent?: string;
};

export const servicesData: Record<string, Service> = {
  "pigeon-safety-nets": {
    id: "pigeon-safety-nets",
    title: "Pigeon Safety Nets",
    description:
      "Pigeon safety nets from Srinu Balcony Safety Nets help keep balconies, windows, and open areas clean by preventing pigeons from entering. These nets maintain airflow and sunlight while stopping birds from nesting or causing hygiene issues. Made with long lasting and weather resistant material, they are ideal for homes and commercial spaces.",
    detailedContent: `
      Our pigeon safety nets are designed to stop bird entry without blocking ventilation.  
      They reduce cleaning issues and help maintain hygienic surroundings.
      Reliable for balconies and windows  
      Easy to maintain and long durable  
      Suitable for apartments and offices  
      Installed by trained professionals  
    `,
    image: "/pigeonbalcony/pigeon-net-installation.webp",
    category: "Bird & Pigeon Nets",
  },

  "anti-bird-nets": {
    id: "anti-bird-nets",
    title: "Anti Bird Nets",
    description:
      "Srinu Balcony Safety Nets offers anti bird nets that protect open areas from birds like pigeons, sparrows, and crows. These nets act as a safe and simple barrier to avoid nesting, dirt, and disturbance. They blend with the building design and are made from strong UV resistant material.",
    detailedContent: `
      Anti bird nets help maintain a clean environment by stopping birds from settling in open areas.  
      They are durable, lightweight, and suitable for any property.
      Ideal for residential and commercial spaces  
      Withstands sunlight and weather  
      Custom sizes available  
      Economical and long lasting  
    `,
    image: "/pigeonbalcony/antibird-net.webp",
    category: "Bird & Pigeon Nets",
  },

  "bird-nets-for-balconies": {
    id: "bird-nets-for-balconies",
    title: "Bird Nets for Balconies",
    description:
      "Balcony bird nets from Srinu Balcony Safety Nets help keep unwanted birds away while allowing fresh air and clear visibility. These nets make balconies safer for families and prevent dirt caused by pigeons.",
    detailedContent: `
      Our balcony nets are designed to cover open spaces securely.  
      They protect against bird entry without affecting the look of your home.
      Safe for kids and pets  
      Transparent and strong material  
      Fits any balcony structure  
      Professional installation support  
    `,
    image: "/pigeonbalcony/bird-netting.webp",
    category: "Bird & Pigeon Nets",
  },

  "bird-netting-service": {
    id: "bird-netting-service",
    title: "Bird Netting Service",
    description:
      "Srinu Balcony Safety Nets provides complete bird netting services for homes and commercial buildings. These nets help prevent birds from nesting and causing hygiene problems in balconies and open areas.",
    detailedContent: `
      Our team handles measurement, material selection, and installation.  
      We use high quality nets that match your building appearance.
      Quick installation  
      Durable and weather friendly  
      Fits apartments, offices, and industries  
      Affordable and effective  
    `,
    image: "/pigeonbalcony/bird-netting.webp",
    category: "Bird & Pigeon Nets",
  },

  "bird-protection-nets": {
    id: "bird-protection-nets",
    title: "Bird Protection Nets",
    description:
      "Bird protection nets from Srinu Balcony Safety Nets stop birds from entering balconies, terraces, and open structures. They are safe, long lasting, and keep your surroundings hygienic.",
    detailedContent: `
      These nets allow free airflow while blocking birds from settling.  
      They are suitable for apartments, hospitals, warehouses, and more.
      Eco friendly and safe for birds  
      Easy maintenance  
      Prevents damage and dirt  
      Custom installation options  
    `,
    image: "/pigeonbalcony/bird-protection.webp",
    category: "Bird & Pigeon Nets",
  },

  "pigeon-nets-installation": {
    id: "pigeon-nets-installation",
    title: "Pigeon Nets Installation",
    description:
      "Srinu Balcony Safety Nets offers professional pigeon net installation for balconies, windows, and open spaces. These nets help prevent pigeon entry and avoid stains, smell, and other hygiene problems.",
    detailedContent: `
      Our technicians ensure strong installation using quality fittings.  
      Nets remain stable even in harsh weather.
      Skilled installation team  
      Long lasting nets  
      Custom fit for any area  
      Reliable protection for homes and offices  
    `,
    image: "/pigeonbalcony/pigeon-net-installation.webp",
    category: "Bird & Pigeon Nets",
  },

  "pigeon-bird-spikes": {
    id: "pigeon-bird-spikes",
    title: "Pigeon and Bird Spikes",
    description:
      "Bird spikes from Srinu Balcony Safety Nets prevent birds from sitting on ledges, rooftops, and AC units. These spikes work as a harmless way to stop birds from perching and creating mess.",
    detailedContent: `
      Our spikes are made from strong stainless steel and polycarbonate.  
      They require no maintenance and last for years.
      Non harmful solution  
      Prevents nesting and droppings  
      Easy to install  
      Suitable for residential and commercial buildings  
    `,
    image: "/pigeonbalcony/spikes.webp",
    category: "Bird & Pigeon Nets",
  },

  "building-safety-nets": {
    id: "building-safety-nets",
    title: "Building Safety Nets",
    description:
      "Srinu Balcony Safety Nets provides building safety nets to protect workers and nearby areas from falling objects during construction or maintenance. These nets ensure safety and reduce accident risks.",
    detailedContent: `
      Our nets are strong enough to handle heavy loads.  
      They are commonly used for high rise buildings and construction sites.
      Durable and reliable  
      Ideal for tall structures  
      Helps maintain safe working conditions  
      Installed by experienced professionals  
    `,
    image: "/safetynet/building-covering-nets.webp",
    category: "General Safety Nets",
  },

  "car-parking-safety-nets": {
    id: "car-parking-safety-nets",
    title: "Car Parking Safety Nets",
    description:
      "Car parking safety nets from Srinu Balcony Safety Nets protect vehicles from falling debris, birds, and other hazards. These nets help maintain clean and safe parking areas in apartments and offices.",
    detailedContent: `
      Our nets are transparent, strong, and weather resistant.
      Protects vehicles from damage  
      Minimal visual impact  
      Long lasting materials  
      Suitable for open and multi level parking  
    `,
    image: "/safetynet/car-parking.webp",
    category: "General Safety Nets",
  },

  "children-safety-nets": {
    id: "children-safety-nets",
    title: "Children Safety Nets",
    description:
      "Children safety nets from Srinu Balcony Safety Nets protect kids from accidental falls in balconies, windows, and terraces. These nets are safe, tough, and suitable for families in high rise homes.",
    detailedContent: `
      Made from non toxic and strong material for complete safety.
      Prevents accidental falls  
      Blends with balcony design  
      Strong and flexible  
      Perfect for apartments  
    `,
    image: "/safetynet/children-safety-nets.webp",
    category: "General Safety Nets",
  },

  "construction-safety-nets": {
    id: "construction-safety-nets",
    title: "Construction Safety Nets",
    description:
      "Srinu Balcony Safety Nets provides construction safety nets to prevent accidents in building sites. These nets catch falling objects and reduce safety risks for workers and pedestrians.",
    detailedContent: `
      Our nets are designed for tough usage in building projects.
      Helps meet safety standards  
      Weather resistant  
      Available in multiple sizes  
      Reduces workplace accidents  
    `,
    image: "/safetynet/construction-nets.webp",
    category: "General Safety Nets",
  },

  "industrial-safety-nets": {
    id: "industrial-safety-nets",
    title: "Industrial Safety Nets",
    description:
      "Industrial safety nets from Srinu Balcony Safety Nets are used to protect workers, equipment, and goods in factories and warehouses. These nets offer strong and reliable safety coverage.",
    detailedContent: `
      Suitable for heavy duty industrial environments.
      Prevents accidents  
      Protects machinery and goods  
      High strength material  
      Long lasting and efficient  
    `,
    image: "/safetynet/industrial-safety-nets.webp",
    category: "General Safety Nets",
  },

  "pets-safety-nets": {
    id: "pets-safety-nets",
    title: "Pets Safety Nets",
    description:
      "Pets safety nets by Srinu Balcony Safety Nets help keep cats and dogs safe in balconies and windows by preventing accidental falls. These nets are transparent, strong, and secure.",
    detailedContent: `
      Designed to protect pets without blocking airflow.
      Safe for all pets  
      Durable and easy to maintain  
      Clear visibility  
      Suitable for homes and apartments  
    `,
    image: "/safetynet/pets-safety-nets.webp",
    category: "General Safety Nets",
  },

  "swimming-pool-safety-nets": {
    id: "swimming-pool-safety-nets",
    title: "Swimming Pool Safety Nets",
    description:
      "Swimming pool safety nets from Srinu Balcony Safety Nets provide safety around pool areas by preventing accidental falls. These nets are suitable for homes, hotels, and resorts.",
    detailedContent: `
      Made with strong UV resistant material.
      Helps prevent drowning risks  
      Easy to install and remove  
      Long lasting net quality  
      Ideal for residential and commercial pools  
    `,
    image: "/images/swimming-pool-safety.webp",
    category: "General Safety Nets",
  },

  "duct-area-safety-nets": {
    id: "duct-area-safety-nets",
    title: "Duct Area Safety Nets",
    description:
      "Srinu Balcony Safety Nets offers duct area safety nets to prevent falls and protect workers in open duct spaces. These nets are strong and secure for all building types.",
    detailedContent: `
      Made from high tensile nylon or polyethylene.
      Prevents falls in duct openings  
      Strong and weather resistant  
      Fits all duct sizes  
      Professionally installed  
    `,
    image: "/safetynet/duct-area-nets.webp",
    category: "General Safety Nets",
  },

  "open-area-safety-nets": {
    id: "open-area-safety-nets",
    title: "Open Area Safety Nets",
    description:
      "Open area safety nets from Srinu Balcony Safety Nets secure large open spaces such as shafts and courtyards. They prevent accidents and falling objects while maintaining airflow.",
    detailedContent: `
      UV stabilized and durable material.
      Perfect for open buildings  
      Custom shaped installations  
      Strong and visually minimal  
      Suitable for homes and workplaces  
    `,
    image: "/safetynet/open-area-safety-nets.webp",
    category: "General Safety Nets",
  },

  "mosquito-safety-nets": {
    id: "mosquito-safety-nets",
    title: "Mosquito Safety Nets",
    description:
      "Mosquito safety nets from Srinu Balcony Safety Nets keep mosquitoes and insects out while allowing free airflow. Installed on windows, doors, or beds, they help maintain a healthy living environment.",
    detailedContent: `
      Fine mesh blocks insects effectively.
      Prevents mosquito borne diseases  
      Chemical free protection  
      Fits windows and doors  
      Easy to clean and maintain  
    `,
    image: "/images/mosquito-safety-nets.webp",
    category: "General Safety Nets",
  },

  "monkey-safety-nets": {
    id: "monkey-safety-nets",
    title: "Monkey Safety Nets",
    description:
      "Monkey safety nets from Srinu Balcony Safety Nets prevent monkeys from entering balconies, rooftops, and open spaces. These nets avoid damage and maintain safety without harming animals.",
    detailedContent: `
      Made using strong weather proof nylon.
      Prevents monkey entry  
      Reduces property damage  
      Secure installation  
      Low maintenance  
    `,
    image: "/safetynet/monkey-safety-nets.webp",
    category: "Special Purpose Nets",
  },

  "coconut-tree-safety-nets": {
    id: "coconut-tree-safety-nets",
    title: "Coconut Tree Safety Nets",
    description:
      "Coconut tree safety nets from Srinu Balcony Safety Nets prevent injuries and property damage caused by falling coconuts. These nets are ideal for homes, parks, and public places.",
    detailedContent: `
      Made from impact resistant material.
      Stops falling coconuts  
      Suitable for tall trees  
      Weather resistant  
      Easy to maintain  
    `,
    image: "/images/coconut-nets.webp",
    category: "Special Purpose Nets",
  },

  "shade-nets": {
    id: "shade-nets",
    title: "Shade Nets",
    description:
      "Shade nets from Srinu Balcony Safety Nets reduce heat, sunlight, and temperature in outdoor spaces. They help protect plants and provide comfort in gardens and terraces.",
    detailedContent: `
      UV stabilized and long lasting.
      Reduces heat and sunlight  
      Conserves moisture  
      Suitable for agriculture and homes  
      Simple installation  
    `,
    image: "/safetynet/shade-net.webp",
    category: "General Safety Nets",
  },

  "nylon-nets": {
    id: "nylon-nets",
    title: "Nylon Nets",
    description:
      "Nylon nets from Srinu Balcony Safety Nets are strong, flexible, and suitable for multiple safety and sports uses. They perform well in both indoor and outdoor conditions.",
    detailedContent: `
      High tensile strength.
      Light, durable material  
      Weather resistant  
      Easy to install  
      Ideal for various applications  
    `,
    image: "/pigeonbalcony/nylon-nets.webp",
    category: "General Safety Nets",
  },

  "anti-seagull-safety-nets": {
    id: "anti-seagull-nets",
    title: "Anti Seagull Nets",
    description:
      "Anti seagull nets from Srinu Balcony Safety Nets protect rooftops and balconies in coastal areas from seagulls. These nets stop nesting and reduce cleaning issues.",
    detailedContent: `
      Durable and suitable for harsh weather.
      Prevents bird disturbance  
      Maintains building appearance  
      Long lasting and strong  
      Low maintenance  
    `,
    image: "/pigeonbalcony/anti-sequell-net.webp",
    category: "Bird & Pigeon Nets",
  },

  "glass-safety-nets": {
    id: "glass-safety-nets",
    title: "Glass Safety Nets",
    description:
      "Glass safety nets from Srinu Balcony Safety Nets protect glass panels, balconies, and windows from accidents. These nets are transparent, strong, and blend with modern designs.",
    detailedContent: `
      High strength transparent nets.
      Prevents glass related accidents  
      Weather resistant  
      Suitable for modern buildings  
      Easy to install  
    `,
    image: "/pigeonbalcony/window-safety-nets.webp",
    category: "General Safety Nets",
  },

  "hdpe-safety-nets": {
    id: "hdpe-nets",
    title: "HDPE Nets",
    description:
      "HDPE nets from Srinu Balcony Safety Nets are lightweight, flexible, and resistant to chemicals and weather. They are used in construction, agriculture, and safety applications.",
    detailedContent: `
      Long lasting and easy to handle.
      Handles harsh climate  
      Low maintenance  
      Suitable for many industries  
      Strong and durable  
    `,
    image: "/pigeonbalcony/hdpe-nets.webp",
    category: "General Safety Nets",
  },

  "window-safety-nets": {
    id: "window-safety-nets",
    title: "Window Safety Nets",
    description:
      "Window safety nets from Srinu Balcony Safety Nets protect children and pets from falling while allowing fresh air and light. These nets are transparent, sturdy, and perfect for high rise apartments.",
    detailedContent: `
      Secure mesh for full protection.
      Child and pet safe  
      Clear visibility  
      Custom sized for windows  
      Long lasting and reliable  
    `,
    image: "/pigeonbalcony/window-safety-nets.webp",
    category: "Residential Safety Nets",
  },
  "balcony-invisible-grills": {
    id: "balcony-invisible-grills",
    title: "Balcony Invisible Grills",
    description:
      "Balcony invisible grills from Srinu Balcony Safety Nets provide strong fall protection without blocking your view. Ideal for apartments and high-rise balconies, they ensure safety with a modern look.",
    detailedContent: `
      Stainless steel invisible wires
      Child and pet safe
      Clear outside view
      Rust proof and weather resistant
      Custom fit for any balcony
    `,
    image: "/invisiblegrill/balcony-invisible-grills.webp",
    category: "Invisible Grills",
  },
    "window-invisible-grills": {
    id: "window-invisible-grills",
    title: "Window Invisible Grills",
    description:
      "Window invisible grills protect children and pets while keeping windows open for light and air. They are strong, transparent, and perfect for modern homes and apartments.",
    detailedContent: `
      Strong stainless steel cables
      Maintains airflow and light
      Child and pet safety guaranteed
      Neat and modern appearance
      Long lasting installation
    `,
    image: "/invisiblegrill/window-invisible-grills.webp",
    category: "Invisible Grills",
  },
  
  "apartment-invisible-grills": {
    id: "apartment-invisible-grills",
    title: "Apartment Invisible Grills",
    description:
      "Apartment invisible grills are designed for complete home safety without spoiling aesthetics. They are ideal for balconies, windows, and open spaces in flats and high-rise buildings.",
    detailedContent: `
      Suitable for all apartment areas
      Invisible safety protection
      Pet and child friendly
      Strong and durable materials
      Professional installation
    `,
    image: "/invisiblegrill/apartment-invisible-grills.webp",
    category: "Invisible Grills",
  },
  "building-invisible-grills": {
    id: "building-invisible-grills",
    title: "Building Invisible Grills",
    description:
      "Building invisible grills offer reliable safety for residential and commercial buildings. They prevent falls while maintaining the building’s clean and modern appearance.",
    detailedContent: `
      High tensile stainless steel wires
      Suitable for high-rise buildings
      Weather resistant and strong
      Minimal visual obstruction
      Long-term safety solution
    `,
    image: "/invisiblegrill/building-invisible-grills.webp",
    category: "Invisible Grills",
  },

  "children-safety-invisible-grills": {
    id: "children-safety-invisible-grills",
    title: "Children Safety Invisible Grills",
    description:
      "Children safety invisible grills protect kids from accidental falls in balconies and windows. They are safe, durable, and designed for complete peace of mind.",
    detailedContent: `
      Child-safe design
      Strong anti-cut wires
      Safe for balconies and windows
      Transparent and neat look
      Reliable long-term protection
    `,
    image: "/invisiblegrill/children-safety-invisible-grills.webp",
    category: "Invisible Grills",
  },

  "pets-safety-invisible-grills": {
    id: "pets-safety-invisible-grills",
    title: "Pets Safety Invisible Grills",
    description:
      "Pets safety invisible grills prevent pets from jumping or falling from balconies and windows while keeping your home airy and open.",
    detailedContent: `
      Prevents pets from escaping
      Strong stainless steel cables
      Safe for dogs and cats
      Invisible and stylish
      Easy maintenance
    `,
    image: "/safetynet/pets-safety-nets.webp",
    category: "Invisible Grills",
  },

  "staircase-invisible-grills": {
    id: "staircase-invisible-grills",
    title: "Staircase Invisible Grills",
    description:
      "Staircase invisible grills protect open staircases from accidental falls while maintaining the interior’s modern design.",
    detailedContent: `
      Ideal for open staircases
      Fall prevention safety
      Minimal visual blocking
      Strong and secure wires
      Custom installation
    `,
    image: "/images/staircase.webp",
    category: "Invisible Grills",
  },

  "office-invisible-grills": {
    id: "office-invisible-grills",
    title: "Office Invisible Grills",
    description:
      "Office invisible grills provide safety for windows and open areas without disturbing professional interiors. Perfect for corporate spaces and commercial buildings.",
    detailedContent: `
      Clean professional look
      Safety without bars
      Strong stainless steel cables
      Suitable for glass facades
      Long-lasting protection
    `,
    image: "/invisiblegrill/office-invisible-grills.webp",
    category: "Invisible Grills",
  },

  "industrial-invisible-grills": {
    id: "industrial-invisible-grills",
    title: "Industrial Invisible Grills",
    description:
      "Industrial invisible grills ensure safety in factories, warehouses, and industrial buildings while allowing ventilation and visibility.",
    detailedContent: `
      Heavy duty steel wires
      Suitable for industrial use
      High tensile strength
      Weather and rust resistant
      Professional-grade installation
    `,
    image: "/invisiblegrill/industrial-invisible-grills.webp",
    category: "Invisible Grills",
  },

  "swimming-pool-invisible-grills": {
    id: "swimming-pool-invisible-grills",
    title: "Swimming Pool Invisible Grills",
    description:
      "Swimming pool invisible grills provide safety around pool areas, preventing children and pets from accidental falls without blocking visibility.",
    detailedContent: `
      Pool area safety solution
      Rust-proof stainless steel
      Child and pet friendly
      Transparent and strong
      Custom design for pools
    `,
    image: "/images/swimming-pool-invisible-grills.webp",
    category: "Invisible Grills",
  },
};
