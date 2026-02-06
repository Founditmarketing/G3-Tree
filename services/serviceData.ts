import { ServiceContent, ViewState } from '../types';

export const serviceData: Record<string, ServiceContent> = {
    "precision-pruning": {
        id: "precision-pruning",
        title: "Precision Pruning Protocols",
        subtitle: "Structural Enhancement & Canopy Optimization",
        introText: `Precision pruning is the cornerstone of long-term arboreal health and structural integrity. Unlike indiscriminate cutting, our precision protocol focuses on the biological and mechanical needs of the tree. By selectively removing compromised, crossing, or dead limbs, we improve wind resistance, allowing air to flow freely through the canopy rather than catching it like a sail. This significantly reduces the risk of failure during severe weather events common in our operational sectors.

    Furthermore, proper sunlight penetration is critical for the internal foliage of the tree. Our thinning techniques ensure that light reaches the inner canopy, stimulating healthy growth and reducing fungal proliferation caused by excessive moisture retention. This data-driven approach balances aesthetic form with biological function, resulting in a specimen that is not only visually striking but structurally robust.

    We strictly adhere to ANSI A300 standards, ensuring that every cut serves a physiological purpose. Our arborists are trained to recognize the unique architecture of each species, applying specific pruning objectives—whether for safety, health, or clearance—without compromising the tree's natural defense systems.`,
        specs: [
            { label: "Standard Adherence", value: "ANSI A300 (Part 1)" },
            { label: "Objective", value: "Structure & Health" },
            { label: "Technique", value: "Targeted Thinning" },
            { label: "Tools", value: "Sterilized Hand Saws" },
            { label: "Cycle", value: "3-5 Years" },
            { label: "Safety Rating", value: "Class A" }
        ],
        faqs: [
            {
                question: "When is the optimal cycle for structural pruning?",
                answer: "While deadwood can be removed at any time, structural pruning is best performed during the dormant season (late winter) for most deciduous species. This minimizes sap loss and reduces the risk of insect-borne pathogens. However, specific species may have unique optimal windows."
            },
            {
                question: "Will you use climbing spikes?",
                answer: "Absolutely not. We strictly employ spikeless climbing techniques for all pruning operations. Climbing spikes cause irreparable damage to the cambium layer, creating entry points for disease and pests. Spikes are reserved solely for total removals."
            },
            {
                question: "How much foliage will be removed?",
                answer: "We adhere to the industry standard of removing no more than 25% of the live canopy in a single growing season. Excessive removal puts the tree into shock, triggering rapid, weak regrowth (water sprouts) that compromises future structure."
            },
            {
                question: "Do you clean up the debris?",
                answer: "Our 'Zero-Trace' protocol ensures that your property is left cleaner than we found it. All biomass is chipped/processed on-site or removed completely, and the operational zone is raked and magnetic-swept depending on the location."
            }
        ],
        actions: [
            { label: "Request Assessment", targetView: ViewState.CONTACT }
        ]
    },
    "hazard-removal": {
        id: "hazard-removal",
        title: "Hazard Removal Operations",
        subtitle: "Zero-Impact Extraction & Risk Mitigation",
        introText: `Hazard removal is a critical operation reserved for trees that pose an unacceptable risk to people, property, or infrastructure. Our approach combines advanced rigging physics with heavy machinery to dismantle trees piece by piece, ensuring absolute control over every pound of wood brought to the ground. This is not simply cutting; it is a calculated deconstruction event.

    We specialize in confined-space removals where traditional felling is impossible. Using cranes, spider lifts, and technical rigging systems, we can extract massive specimens from backyards, over houses, or near power lines with zero impact on the surrounding environment. Our 'No-Drop' policy means debris is lowered under tension, never allowed to free-fall.

    Our assessment process identifies structural defects such as root plate failure, extensive heart rot, or severe lean before they result in catastrophic failure. By proactively managing these risks, we protect your assets and ensure the safety of your operational zone.`,
        specs: [
            { label: "Risk Tolerance", value: "Zero" },
            { label: "Methodology", value: "Crane / Technical Rigging" },
            { label: "Impact Rating", value: "Low / Zero" },
            { label: "Compliance", value: "OSHA 1910.266" },
            { label: "Cleanup", value: "Full Biomass Removal" },
            { label: "Insurance", value: "Verified Coverage" }
        ],
        faqs: [
            {
                question: "Is crane-assisted removal safe?",
                answer: "It is often the safest method for hazardous trees. A crane allows us to stabilize the tree while cutting, removing gravity from the equation. It also eliminates the need for unpredictable felling in tight spaces."
            },
            {
                question: "Do I need a permit?",
                answer: "Many municipalities require permits for removal, especially for trees over a certain diameter (DBH). Our administrative team handles the data collection and application process for relevant permits as part of our service."
            },
            {
                question: "What happens to the stump?",
                answer: "Standard removal takes the tree to ground level. Stump grinding is a separate subsystem operation that can be engaged to mechanically chew the stump 6-12 inches below grade, allowing for turf restoration."
            }
        ],
        actions: [
            { label: "Emergency Dispatch", targetView: ViewState.CONTACT }
        ]
    },
    "plant-health-care": {
        id: "plant-health-care",
        title: "Plant Health Care (PHC)",
        subtitle: "Systemic Injections & Soil Optimization",
        introText: `Our Plant Health Care (PHC) program is a proactive, science-based approach to maintaining tree vitality. We treat the tree as a complete biological system, addressing not just symptoms but the underlying environmental stressors. From chlorosis treatment to pest management, our interventions are surgical and precise.

        We utilize direct trunk injection technology to deliver nutrients and control agents directly into the vascular system of the tree. This 'closed-system' method prevents chemical leaching into the soil or groundwater, ensuring that 100% of the beneficial product is utilized by the tree. This is critical for urban environments where root zones are restricted and soil biology is often compromised.

        Regular monitoring allows us to detect subtle changes in leaf color, twig extension, or pest populations before they cause irreversible damage. By maintaining optimal health, we boost the tree's natural defense mechanisms, making it more resilient to drought, heat, and structural stress.`,
        specs: [
            { label: "Delivery", value: "Trunk Injection / Drench" },
            { label: "Focus", value: "Nutrient / Pest Control" },
            { label: "Safety", value: "Closed System" },
            { label: "Interval", value: "Annual / Bi-Annual" }
        ],
        faqs: [
            {
                question: "Are the injections harmful?",
                answer: "No. We use micro-injection sites that seal naturally within days. The benefit of the treatment far outweighs the negligible impact of the insertion point."
            },
            {
                question: "Can you save a dying tree?",
                answer: "It depends on the stage of decline. PHC is most effective as a preventative or early-intervention measure. If a tree has lost more than 30-40% of its canopy, structural decline may already be irreversible."
            }
        ],
        actions: [
            { label: "Schedule Analysis", targetView: ViewState.ANALYZER }
        ]
    },
    "arborist-reports": {
        id: "arborist-reports",
        title: "Certified Arborist Reports",
        subtitle: "Legal, Insurance & Valuation Data",
        introText: `In the world of high-value assets, accurate data is currency. Our Certified Arborist Reports provide objective, legally defensible documentation regarding the health, safety, and monetary value of your trees. Whether for municipal permit applications, insurance claims following storm damage, or property development planning, our reports are the industry gold standard.

        We utilize advanced diagnostic tools, including resistograph drills and sonic tomography, to peer inside the tree without cutting it down. This allows us to quantify internal decay and calculate precise safety factors. This data is synthesized into a formal document that stands up to scrutiny from city officials, insurance adjusters, and legal entities.

        Do not rely on visual guesswork. Our reports provide the 'hard data' needed to make informed financial and liability decisions concerning your green infrastructure.`,
        specs: [
            { label: "Certification", value: "ISA Certified" },
            { label: "Use Case", value: "Permits / Legal / Insurance" },
            { label: "Format", value: "PDF / Digital" },
            { label: "Turnaround", value: "48-72 Hours" }
        ],
        faqs: [
            {
                question: "Do I need a report for removing a tree?",
                answer: "Most municipalities require a certified arborist report to approve the removal of significant trees (usually over a certain diameter). We handle this data collection for you."
            },
            {
                question: "Can you value my trees?",
                answer: "Yes. Using the Council of Tree and Landscape Appraisers (CTLA) guide, we can appraise the monetary replacement value of your trees for legal or insurance purposes."
            }
        ],
        actions: [
            { label: "Request Report", targetView: ViewState.CONTACT }
        ]
    }
};
