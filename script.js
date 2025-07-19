const questions = [
    // NFPA 96 Standards
    {
        "question": "A routine inspection of a kitchen exhaust system reveals a grease accumulation of 0.08 inches. What is the required course of action according to NFPA 96?",
        "options": ["A. Schedule a cleaning within the next 30 days.", "B. Note the accumulation and inspect again at the next scheduled interval.", "C. The system requires cleaning before the next use.", "D. Inform the owner that the system is non-compliant but no immediate action is needed."],
        "correctAnswer": "C. The system requires cleaning before the next use.",
        "explanation": "An accumulation of 0.08 inches (approx. 2000 microns) triggers an immediate cleaning requirement.",
        "reference": "NFPA 96 (2021), 12.6.1.1.3"
    },
    {
        "question": "What is the minimum cleaning requirement for combustible contaminants inside a kitchen exhaust system?",
        "options": ["A. Cleaned down to the bare metal.", "B. Cleaned to a depth of 0.002 inches (50 microns).", "C. Cleaned to a depth of 0.02 inches (500 microns).", "D. Cleaned until no black carbon is visible."],
        "correctAnswer": "B. Cleaned to a depth of 0.002 inches (50 microns).",
        "explanation": "An exhaust system must be cleaned, at a minimum, to remove combustible contaminants down to a depth of 0.002 inches or 50 microns.",
        "reference": "NFPA 96 (2021), 12.6.1.1.1"
    },
    {
        "question": "A 24-hour restaurant primarily uses wok-style cooking. How often must its kitchen exhaust system be inspected for grease buildup?",
        "options": ["A. Annually", "B. Semiannually", "C. Quarterly", "D. Monthly"],
        "correctAnswer": "C. Quarterly",
        "explanation": "Systems serving high-volume cooking operations like wok cooking require quarterly inspections.",
        "reference": "CECS Study Guide, Page 7, 1.2.2"
    },
    {
        "question": "After a cleaning service, a written report must be provided to the system owner within what timeframe?",
        "options": ["A. 48 hours", "B. 5 business days", "C. 2 weeks", "D. 30 days"],
        "correctAnswer": "C. 2 weeks",
        "explanation": "The service provider has up to two weeks to deliver the written report detailing the cleaning to the system owner.",
        "reference": "NFPA 96 (2021), 12.6.15"
    },
    {
        "question": "A church kitchen is used for pancake breakfasts twice a year. What is the minimum required inspection frequency for its exhaust system?",
        "options": ["A. Annually", "B. Semiannually", "C. Quarterly", "D. Monthly"],
        "correctAnswer": "A. Annually",
        "explanation": "Systems with low-volume cooking, such as those in churches, must be inspected at least annually.",
        "reference": "CECS Study Guide, Page 7, 1.2.4"
    },
    {
        "question": "A family-style restaurant operates for lunch and dinner and experiences steady business. What is the most likely inspection frequency required for its exhaust system?",
        "options": ["A. Annually", "B. Semiannually", "C. Quarterly", "D. Monthly"],
        "correctAnswer": "B. Semiannually",
        "explanation": "Kitchen exhaust systems serving moderate-volume cooking establishments must be inspected for cleanliness semiannually.",
        "reference": "CECS Study Guide, Page 7, 1.2.3"
    },
    {
        "question": "A steakhouse uses a solid-fuel charbroiler for most of its cooking. What is the mandatory inspection frequency for its exhaust system?",
        "options": ["A. Monthly", "B. Quarterly", "C. Semiannually", "D. Annually"],
        "correctAnswer": "A. Monthly",
        "explanation": "Systems serving solid fuel cooking operations must be inspected monthly due to the high rate of creosote buildup.",
        "reference": "CECS Study Guide, Page 7, 1.2.1"
    },
    {
        "question": "What is the NFPA 96 requirement for the entire kitchen exhaust system during a cleaning or inspection?",
        "options": ["A. Only the heavily soiled parts need to be accessed.", "B. All interior surfaces shall be made accessible for cleaning and inspection.", "C. The system should be accessible from the hood and the fan only.", "D. Areas that are not easily reachable can be noted as inaccessible and skipped."],
        "correctAnswer": "B. All interior surfaces shall be made accessible for cleaning and inspection.",
        "explanation": "To ensure a complete cleaning, all interior surfaces of the entire exhaust system must be accessible.",
        "reference": "CECS Study Guide, Page 9, 4.1"
    },
    {
        "question": "Which cleaning method is explicitly forbidden by NFPA 96 under all circumstances for removing hard carbon deposits?",
        "options": ["A. High-pressure steam", "B. Caustic chemical degreasers", "C. Hand scraping", "D. Using flammable solvents like gasoline"],
        "correctAnswer": "D. Using flammable solvents like gasoline",
        "explanation": "Using flammable solvents is strictly prohibited due to the extreme fire and explosion hazard it creates.",
        "reference": "NFPA 96 (2021), 12.6.6"
    },
    {
        "question": "When a cleaning service is finished, what must be done with the old service stickers on the hood?",
        "options": ["A. They should be covered completely by the new sticker.", "B. They must all be removed from the hood.", "C. They can be left in place for historical record.", "D. They should be crossed out with a permanent marker."],
        "correctAnswer": "B. They must all be removed from the hood.",
        "explanation": "To avoid confusion about the system's current service status, old service labels must be removed when a new one is applied.",
        "reference": "IKECA/Industry Best Practice (Implied by NFPA 96, 12.6.13.2)"
    },
    {
        "question": "What is the correct orientation for the baffles inside a standard baffle-type grease filter?",
        "options": ["A. Horizontal", "B. Vertical", "C. Alternating between vertical and horizontal", "D. At a 45-degree angle"],
        "correctAnswer": "B. Vertical",
        "explanation": "The baffles must be oriented vertically to allow for the proper collection and drainage of grease.",
        "reference": "CECS General Knowledge/Manufacturer Instructions"
    },
    {
        "question": "What is the minimum required thickness for a grease duct constructed from carbon steel?",
        "options": ["A. 20 MSG (Manufacturer's Standard Gage)", "B. 18 MSG", "C. 16 MSG", "D. 14 MSG"],
        "correctAnswer": "C. 16 MSG",
        "explanation": "Grease ducts made of carbon steel must be at least 16 MSG thick to ensure structural integrity and fire resistance.",
        "reference": "NFPA 96 (2021), 7.5.1.1"
    },
    {
        "question": "What is a fundamental requirement for all grease duct systems?",
        "options": ["A. They must be internally welded and mechanically sealed.", "B. They must be constructed with internal support braces.", "C. They must be liquid-tight and feature continuous external welding on all seams.", "D. They must be wrapped in a minimum of two layers of fire-resistant material."],
        "correctAnswer": "C. They must be liquid-tight and feature continuous external welding on all seams.",
        "explanation": "To prevent dangerous grease leaks, ducts must be liquid-tight, which is achieved with continuous external welding.",
        "reference": "NFPA 96 (2021), 7.6.1"
    },
    {
        "question": "What is the minimum clearance required between a grease duct and any combustible materials?",
        "options": ["A. 6 inches", "B. 12 inches", "C. 18 inches", "D. 24 inches"],
        "correctAnswer": "C. 18 inches",
        "explanation": "A minimum clearance of 18 inches from combustible materials is required to prevent them from igniting in case of a duct fire.",
        "reference": "NFPA 96 (2021), 4.2.1"
    },
    {
        "question": "Where is it explicitly forbidden to install an access panel on ductwork?",
        "options": ["A. On the top side of a horizontal duct.", "B. On the bottom of a duct run.", "C. Within 5 feet of a change in direction.", "D. Directly opposite another access panel."],
        "correctAnswer": "B. On the bottom of a duct run.",
        "explanation": "Access panels are not permitted on the bottom of a duct because they can leak grease and create a fire hazard.",
        "reference": "NFPA 96 (2021), 7.3.1 (by omission)"
    },
    {
        "question": "When installing a new access panel in a horizontal duct, what is the minimum distance the edge of the opening must be from any welded seams or edges of the duct?",
        "options": ["A. 0.5 inches", "B. 1.0 inch", "C. 1.5 inches", "D. 2.0 inches"],
        "correctAnswer": "C. 1.5 inches",
        "explanation": "The edge of an access panel opening must be at least 1.5 inches from all duct edges or welds to maintain structural integrity.",
        "reference": "NFPA 96 (2021), 7.4.1.5"
    },
    {
        "question": "For a fan with ductwork on both its intake and exhaust sides (an in-line fan), where must access for cleaning be provided?",
        "options": ["A. Within 3 feet of both the intake and exhaust sides of the fan.", "B. A single opening on top of the fan housing is sufficient.", "C. Within 5 feet of the fan on the downstream side only.", "D. By removing the fan from the ductwork entirely."],
        "correctAnswer": "A. Within 3 feet of both the intake and exhaust sides of the fan.",
        "explanation": "Access must be provided within 3 feet of both sides of an in-line fan to allow for proper cleaning.",
        "reference": "NFPA 96 (2021), 7.3.8"
    },
    {
        "question": "What is the maximum size permitted for a grease receptacle on an upblast fan?",
        "options": ["A. 1 quart", "B. 2 quarts", "C. 1 gallon", "D. 2 gallons"],
        "correctAnswer": "C. 1 gallon",
        "explanation": "The grease receptacle for an upblast fan cannot exceed 1 gallon to prevent large, hazardous grease accumulations on the roof.",
        "reference": "CECS Study Guide, Page 3, 4.5.1"
    },
    {
        "question": "What component is required on upblast fan hinge assemblies to ensure technician safety?",
        "options": ["A. A spring-loaded closing mechanism.", "B. A lock-out pin.", "C. A hold-open retainer.", "D. A quick-release latch."],
        "correctAnswer": "C. A hold-open retainer.",
        "explanation": "A hold-open retainer is required to prevent the fan from accidentally closing on a technician during service.",
        "reference": "NFPA 96 (2021), 7.8.2.1(8)"
    },
    {
        "question": "What is the proper procedure for handling fusible links during a cleaning?",
        "options": ["A. Spray them directly with degreaser to clean them.", "B. Remove them before cleaning and reinstall them after.", "C. Cover and protect them from chemicals and pressure washing.", "D. Test their function by applying heat."],
        "correctAnswer": "C. Cover and protect them from chemicals and pressure washing.",
        "explanation": "Fusible links must be protected from chemicals or physical damage, as this could impair their function.",
        "reference": "NFPA 96 (2021), 12.6.7"
    },
    {
        "question": "Where should wastewater containing grease and cleaning chemicals be disposed of?",
        "options": ["A. Into the nearest storm drain.", "B. Into a mop sink or sanitary drain as allowed by the AHJ.", "C. Poured onto the gravel area behind the restaurant.", "D. Down the toilet."],
        "correctAnswer": "B. Into a mop sink or sanitary drain as allowed by the AHJ.",
        "explanation": "Wastewater must be disposed of according to local regulations, typically into a sanitary drain leading to a treatment facility.",
        "reference": "CECS Study Guide, Page 11, 2.2"
    },
    {
        "question": "In the context of NFPA 96, what does the word 'shall' signify?",
        "options": ["A. A recommendation that is advised but not required.", "B. A suggestion for best practice.", "C. A mandatory and absolute requirement.", "D. An action left to the technician's discretion."],
        "correctAnswer": "C. A mandatory and absolute requirement.",
        "explanation": "The word 'shall' indicates a mandatory requirement that must be followed without exception.",
        "reference": "CECS Study Guide, Page 21, Definition 26"
    },
    {
        "question": "What are the three components of the fire triangle?",
        "options": ["A. Heat, Spark, and Fuel", "B. Oxygen, Nitrogen, and Fuel", "C. Heat, Oxygen, and Fuel", "D. Flame, Fire, and Heat"],
        "correctAnswer": "C. Heat, Oxygen, and Fuel",
        "explanation": "The fire triangle illustrates the three essential components needed for combustion: heat, oxygen, and fuel.",
        "reference": "General Fire Safety Principles"
    },
    {
        "question": "When using a portable extension ladder to access a roof, how far must the ladder side rails extend above the upper landing surface?",
        "options": ["A. 1 foot", "B. 2 feet", "C. 3 feet", "D. 4 feet"],
        "correctAnswer": "C. 3 feet",
        "explanation": "Ladder side rails must extend at least 3 feet above the landing to provide a secure handhold for mounting and dismounting.",
        "reference": "OSHA 1926.1053(b)(1)"
    },
    {
        "question": "When is a ladder required to be inspected?",
        "options": ["A. Once a year by a certified inspector.", "B. Before the first use on a new job site.", "C. Periodically and after any event that could affect its safety, like being dropped.", "D. Only when a visible defect like a bent rung is noticed."],
        "correctAnswer": "C. Periodically and after any event that could affect its safety, like being dropped.",
        "explanation": "Ladders must be inspected for defects periodically and after any event that could compromise their structural integrity.",
        "reference": "CECS Study Guide, Page 21, Definition 18.a"
    },
    {
        "question": "Who is responsible for removing a lockout or tagout device from an energy-isolating switch?",
        "options": ["A. The building manager or owner.", "B. Any member of the cleaning crew.", "C. The supervisor of the shift.", "D. The specific employee who applied the device."],
        "correctAnswer": "D. The specific employee who applied the device.",
        "explanation": "Except in very specific, documented circumstances, the only person authorized to remove a lockout device is the person who applied it.",
        "reference": "CECS Study Guide, Page 16, 2.5.1"
    },
    {
        "question": "Before starting work on a machine that has been locked out, what must the authorized employee do?",
        "options": ["A. Ask a coworker if the power is off.", "B. Verify that the isolation and de-energization have actually occurred.", "C. Check that the key is in the lock.", "D. Notify the restaurant manager that work is beginning."],
        "correctAnswer": "B. Verify that the isolation and de-energization have actually occurred.",
        "explanation": "The employee must verify that the machine is de-energized, for instance by trying to activate the normal operating controls.",
        "reference": "CECS Study Guide, Page 16, 2.4.1 (Step 7)"
    },
    {
        "question": "Which of the following is the best example of Personal Protective Equipment (PPE)?",
        "options": ["A. A pressure washer.", "B. A fire extinguisher.", "C. A respirator.", "D. Plastic sheeting."],
        "correctAnswer": "C. A respirator.",
        "explanation": "PPE is equipment worn by the worker to minimize exposure to hazards; a respirator is a key example.",
        "reference": "CECS Study Guide, Page 22, Definition 22"
    },
    {
        "question": "What is the minimum recommended eye protection when working with caustic chemical degreasers?",
        "options": ["A. Prescription eyeglasses.", "B. Sunglasses with UV protection.", "C. Safety glasses with side shields.", "D. Splash-proof safety goggles."],
        "correctAnswer": "D. Splash-proof safety goggles.",
        "explanation": "Splash-proof goggles are required to protect against chemical splashes that can cause severe eye damage.",
        "reference": "CECS Study Guide, Page 22, Definition 22.b"
    },
    {
        "question": "When must an employee receive training on the hazards of the chemicals they will be using?",
        "options": ["A. Within the first week of employment.", "B. Before they begin working with the chemicals.", "C. Annually during a safety meeting.", "D. Only if they request the training."],
        "correctAnswer": "B. Before they begin working with the chemicals.",
        "explanation": "Employees must be trained on chemical hazards before their initial assignment or exposure to them.",
        "reference": "CECS Study Guide, Page 19, 5.6.3"
    },
    {
        "question": "How often must an employee be fit-tested for the specific make and model of respirator they use?",
        "options": ["A. Only once when they are first hired.", "B. Every five years.", "C. At least annually.", "D. Only after a significant weight change."],
        "correctAnswer": "C. At least annually.",
        "explanation": "To ensure a proper seal, fit-testing for tight-fitting respirators must be conducted at least annually.",
        "reference": "CECS Study Guide, Page 22, Definition 22.c"
    },
    {
        "question": "What is the OSHA definition of a 'confined space'?",
        "options": ["A. Any small room within a building.", "B. An area below ground level, like a basement.", "C. An area with limited entry/exit that is not designed for continuous occupancy.", "D. Any workspace that requires a ladder for access."],
        "correctAnswer": "C. An area with limited entry/exit that is not designed for continuous occupancy.",
        "explanation": "A confined space has limited means of entry/exit and is not designed for continuous human occupancy.",
        "reference": "CECS Study Guide, Page 20, Definition 8.a"
    },
    {
        "question": "When entry into a permit-required confined space is authorized, what must be provided just outside the space for the entire duration of the entry?",
        "options": ["A. A second ladder.", "B. A fire extinguisher.", "C. An attendant (safety watch).", "D. A copy of the company's insurance policy."],
        "correctAnswer": "C. An attendant (safety watch).",
        "explanation": "An attendant must be posted outside a permit-required confined space to monitor the entrant and summon help if needed.",
        "reference": "CECS Study Guide, Page 20, Definition 8.b"
    },
    {
        "question": "What is the correct procedure for lifting a heavy object like a pressure washer?",
        "options": ["A. Keep your legs straight and bend at the waist.", "B. Lift with your back, using a slow and steady motion.", "C. Bend at your knees and lift with your legs, keeping your back straight.", "D. Hold the object away from your body to maintain balance."],
        "correctAnswer": "C. Bend at your knees and lift with your legs, keeping your back straight.",
        "explanation": "To prevent back injuries, you should always lift with your legs, not your back, keeping the object close to your body.",
        "reference": "OSHA Ergonomic Guidelines"
    },
    {
        "question": "What does the acronym IKECA stand for?",
        "options": ["A. International Kitchen Equipment Cleaning Administration", "B. Institute of Kitchen Exhaust Compliance and Assessment", "C. International Kitchen Exhaust Cleaning Association", "D. Internal Kitchen Exhaust Cleaners of America"],
        "correctAnswer": "C. International Kitchen Exhaust Cleaning Association",
        "explanation": "IKECA is the International Kitchen Exhaust Cleaning Association, a key standards-setting body for the industry.",
        "reference": "CECS Study Guide, Cover Page"
    },
    {
        "question": "What does the acronym OSHA stand for?",
        "options": ["A. Occupational Safety and Hazard Administration", "B. Organization for Safe and Healthy Accommodations", "C. Occupational Safety and Health Administration", "D. Official Safety and Health Authority"],
        "correctAnswer": "C. Occupational Safety and Health Administration",
        "explanation": "OSHA is the U.S. government agency that sets and enforces workplace safety and health standards.",
        "reference": "General Knowledge"
    },
    {
        "question": "The acronym AHJ stands for Authority Having Jurisdiction. What is the role of the AHJ?",
        "options": ["A. To manage the restaurant's daily operations.", "B. To represent the cleaning company in legal matters.", "C. An individual or organization, like a fire marshal, responsible for enforcing codes.", "D. The lead technician who has final authority on the job site."],
        "correctAnswer": "C. An individual or organization, like a fire marshal, responsible for enforcing codes.",
        "explanation": "The AHJ is the entity, most often the local fire marshal, responsible for interpreting and enforcing codes.",
        "reference": "CECS Study Guide, Page 20, Definition 2"
    },
    {
        "question": "What does the acronym EPA stand for, and why is it relevant to exhaust cleaners?",
        "options": ["A. Exhaust Performance Agency; it sets standards for fan efficiency.", "B. Environmental Protection Agency; it regulates the proper disposal of wastewater and hazardous materials.", "C. Emergency Protocol Administration; it outlines steps to take during a fire.", "D. Equipment Protection Agency; it certifies cleaning chemicals."],
        "correctAnswer": "B. Environmental Protection Agency; it regulates the proper disposal of wastewater and hazardous materials.",
        "explanation": "The EPA's regulations, like the Clean Water Act, govern the proper disposal of wastewater and chemicals.",
        "reference": "CECS Study Guide, Page 10, Domain 4"
    },
    {
        "question": "We primarily clean which type of kitchen hood?",
        "options": ["A. Type I", "B. Type II", "C. Type III", "D. Residential"],
        "correctAnswer": "A. Type I",
        "explanation": "Type I hoods are designed for grease-laden vapors, whereas Type II hoods are for heat and moisture only.",
        "reference": "General Industry Knowledge"
    },
    {
        "question": "After a cleaning is complete and before leaving the site, what is a final critical step a technician must perform?",
        "options": ["A. Inform the chef that the job is done.", "B. Ensure the exhaust fan is running and all components are returned to an operable state.", "C. Leave the invoice on the counter.", "D. Stack all used tools neatly in the kitchen."],
        "correctAnswer": "B. Ensure the exhaust fan is running and all components are returned to an operable state.",
        "explanation": "The technician must ensure all system components are returned to a safe and operable state before leaving.",
        "reference": "NFPA 96 (2021), 12.6.12"
    },
    {
        "question": "According to NFPA 96, how should a hood be sized relative to the appliances it covers?",
        "options": ["A. It must be exactly flush with the edges of the appliances.", "B. It must extend a minimum of 18 inches beyond all appliances.", "C. It must be adequately sized to capture all grease-laden vapors.", "D. It must be at least twice the width of the largest appliance."],
        "correctAnswer": "C. It must be adequately sized to capture all grease-laden vapors.",
        "explanation": "The primary requirement is that the hood must be sized and configured to effectively capture the cooking vapors.",
        "reference": "NFPA 96 (2021), 6.1.1"
    },
    {
        "question": "What is the minimum required thickness for a grease duct constructed from stainless steel?",
        "options": ["A. 20 MSG", "B. 18 MSG", "C. 16 MSG", "D. 14 MSG"],
        "correctAnswer": "B. 18 MSG",
        "explanation": "Grease ducts made of stainless steel must be at least 18 MSG thick for adequate fire resistance.",
        "reference": "NFPA 96 (2021), 7.5.1.1"
    },
    {
        "question": "For vertical ductwork where personnel entry is not possible, what is the maximum distance allowed between access openings?",
        "options": ["A. On every other floor.", "B. Every 20 feet.", "C. Every 12 feet and at every change of direction.", "D. Only at the top and bottom of the run."],
        "correctAnswer": "C. Every 12 feet and at every change of direction.",
        "explanation": "Access must be provided on each floor and at intervals no more than 12 feet apart to ensure the entire duct can be cleaned.",
        "reference": "NFPA 96 (2021), 7.4.2.2 & 7.4.1.2"
    },
    {
        "question": "If a horizontal duct run is too small for a personnel entry-sized opening, what is the alternative requirement for access?",
        "options": ["A. The duct must be replaced with a larger one.", "B. Openings large enough for cleaning must be installed every 12 feet.", "C. Steam cleaning must be used exclusively.", "D. The cleaning company is not responsible for cleaning that section."],
        "correctAnswer": "B. Openings large enough for cleaning must be installed every 12 feet.",
        "explanation": "If personnel entry isn't possible, smaller access openings must be installed at a maximum of 12-foot intervals.",
        "reference": "NFPA 96 (2021), 7.4.1.2"
    },
    {
        "question": "When must the main exhaust fan be in operation?",
        "options": ["A. Only during peak cooking hours.", "B. At all times the building is occupied.", "C. Whenever the cooking equipment under the hood is turned on.", "D. During the cleaning process to vent chemical fumes."],
        "correctAnswer": "C. Whenever the cooking equipment under the hood is turned on.",
        "explanation": "The exhaust fan must operate continuously during cooking to ensure proper ventilation of grease-laden vapors.",
        "reference": "NFPA 96 (2021), 8.1.1.1"
    },
    {
        "question": "If an access panel is installed or removed for service, where should the service company place a label indicating this?",
        "options": ["A. On the surface of the access panel itself or near the opening.", "B. Inside the ductwork next to the opening.", "C. On the main electrical panel for the fan.", "D. On the front of the kitchen hood."],
        "correctAnswer": "A. On the surface of the access panel itself or near the opening.",
        "explanation": "A service label must be affixed on or near each access panel that was opened or installed.",
        "reference": "NFPA 96 (2021), 12.6.10"
    },
    {
        "question": "What type of gasket material is required for access panels?",
        "options": ["A. Airtight and rated for 500°F.", "B. Watertight and rated for 1000°F.", "C. Greasetight and rated for 1500°F.", "D. Flexible silicone rated for 1200°F."],
        "correctAnswer": "C. Greasetight and rated for 1500°F.",
        "explanation": "Access panel gaskets must be greasetight and rated for 1500°F to maintain the duct's integrity during a fire.",
        "reference": "NFPA 96 (2021), 7.4.3.2"
    },
    {
        "question": "What should a technician do if they discover components of the fire suppression system are inoperable?",
        "options": ["A. Attempt to repair the components themselves.", "B. Proceed with the cleaning and note the issue on the report.", "C. Immediately disable the cooking appliances and notify the owner.", "D. Cover the components to protect them from water during cleaning."],
        "correctAnswer": "C. Immediately disable the cooking appliances and notify the owner.",
        "explanation": "Finding an inoperable fire system is a life safety hazard requiring immediate notification to the owner and shutdown of the cooking line.",
        "reference": "IKECA/Industry Best Practice"
    },
    {
        "question": "In the context of NFPA 96, what does the word 'should' signify?",
        "options": ["A. A mandatory and absolute requirement.", "B. A recommendation that is advised but not required.", "C. A requirement that can be ignored.", "D. A strict prohibition."],
        "correctAnswer": "B. A recommendation that is advised but not required.",
        "explanation": "The word 'should' indicates a recommendation or best practice, but it is not mandatory.",
        "reference": "CECS Study Guide, Page 21, Definition 27"
    },
    {
        "question": "What is the proper technique for a technician climbing or descending a ladder?",
        "options": ["A. Use one hand to carry tools and the other to hold on.", "B. Face away from the ladder to get a better view of the surroundings.", "C. Maintain three points of contact with the ladder at all times.", "D. Skip rungs to ascend or descend faster."],
        "correctAnswer": "C. Maintain three points of contact with the ladder at all times.",
        "explanation": "To prevent falls, users must face the ladder and maintain three points of contact at all times.",
        "reference": "CECS Study Guide, Page 21, Definition 18.b"
    },
    {
        "question": "If a tag cannot be affixed directly to the energy isolating device, where must it be placed?",
        "options": ["A. On the supervisor's desk.", "B. In the work van.", "C. As close as safely possible to the device where it will be obvious to anyone trying to operate it.", "D. On the main entrance door to the building."],
        "correctAnswer": "C. As close as safely possible to the device where it will be obvious to anyone trying to operate it.",
        "explanation": "The tag must be placed in a position that is immediately obvious to anyone attempting to operate the device.",
        "reference": "CECS Study Guide, Page 16, 2.2"
    },
    {
        "question": "An employee requests a Safety Data Sheet (SDS) for a chemical they are using. How quickly must the employer provide access to it?",
        "options": ["A. Within 5 business days.", "B. By the end of the next pay period.", "C. Within the same work shift.", "D. Within 24 hours."],
        "correctAnswer": "C. Within the same work shift.",
        "explanation": "Employees have the right to access SDS for chemicals they work with, and they must be readily accessible during their work shift.",
        "reference": "OSHA 1910.1200(g)(8)"
    },
    {
        "question": "When is 'entry' into a confined space considered to have officially occurred?",
        "options": ["A. Once the employee's entire body is inside the space.", "B. As soon as any part of the entrant's body breaks the plane of the opening.", "C. After the employee has been inside the space for at least one minute.", "D. Once the entry permit has been signed."],
        "correctAnswer": "B. As soon as any part of the entrant's body breaks the plane of the opening.",
        "explanation": "Entry is defined as occurring the moment any part of the body breaks the plane of the opening.",
        "reference": "CECS Study Guide, Page 20, Definition 8"
    },
    {
        "question": "When is hearing protection, such as earplugs or earmuffs, recommended?",
        "options": ["A. For the entire duration of every cleaning job.", "B. Only when working inside a loud kitchen.", "C. When working around loud equipment like pressure washers and exhaust fans.", "D. Only if you have pre-existing hearing damage."],
        "correctAnswer": "C. When working around loud equipment like pressure washers and exhaust fans.",
        "explanation": "Hearing protection should be used when exposed to high noise levels from equipment to prevent long-term hearing loss.",
        "reference": "CECS Study Guide, Page 22, Definition 22"
    },
    {
        "question": "For a lockout/tagout device to be 'identifiable' according to OSHA, what does it require?",
        "options": ["A. It must be a bright, fluorescent color.", "B. It must have the phone number of the cleaning company.", "C. It must include the name of the employee who applied the device.", "D. It must be stamped with the date of the service."],
        "correctAnswer": "C. It must include the name of the employee who applied the device.",
        "explanation": "Lockout/tagout devices must clearly identify the name of the employee who applied them.",
        "reference": "CECS Study Guide, Page 21, Definition 20.a"
    },
    {
        "question": "During a cleaning, you accidentally damage the fire-resistant enclosure surrounding a section of ductwork. What is the correct action to take?",
        "options": ["A. Report the damage to the restaurant owner and leave the repair to them.", "B. Cover the damaged area with plastic sheeting.", "C. Repair and restore the enclosure to meet its original intended listing and fire rating.", "D. Contact the original installer of the enclosure to perform the repair."],
        "correctAnswer": "C. Repair and restore the enclosure to meet its original intended listing and fire rating.",
        "explanation": "If a duct enclosure is damaged during service, it must be repaired and restored to its original fire rating.",
        "reference": "CECS Study Guide, Page 9, 4.3"
    },
    {
        "question": "How often must fusible links of the metal alloy type be replaced?",
        "options": ["A. Monthly", "B. Every 6 months (Semi-annually)", "C. Annually", "D. Only when they appear corroded"],
        "correctAnswer": "B. Every 6 months (Semi-annually)",
        "explanation": "To ensure their reliability, metal alloy fusible links must be replaced at least every six months.",
        "reference": "CECS Study Guide, Page 6, 4.2"
    },
    {
        "question": "A 'listed' hood assembly must be installed in accordance with what?",
        "options": ["A. The local fire code only", "B. The recommendations of the AHJ", "C. The terms of its listing and the manufacturer's instructions", "D. The NFPA 96 standard exclusively"],
        "correctAnswer": "C. The terms of its listing and the manufacturer's instructions",
        "explanation": "A listed item must be installed and used strictly according to its listing and the manufacturer's instructions.",
        "reference": "NFPA 96 (2021), 13.1.2.1"
    },
    {
        "question": "Downdraft appliance ventilation systems must have an interlock to ensure that cooking cannot happen unless what condition is met?",
        "options": ["A. The grease reservoir has been emptied", "B. The fire suppression system is armed", "C. The exhaust fan and the supply fan are activated", "D. The adjacent cooking appliances are turned off"],
        "correctAnswer": "C. The exhaust fan and the supply fan are activated",
        "explanation": "Downdraft systems must be interlocked so the appliance cannot operate unless the exhaust and make-up air fans are on.",
        "reference": "CECS Study Guide, Page 2, 3.4.2"
    },
    {
        "question": "A rooftop termination outlet must have a minimum horizontal clearance of what distance from an adjacent building or air intake?",
        "options": ["A. 3 feet", "B. 5 feet", "C. 10 feet", "D. 15 feet"],
        "correctAnswer": "C. 10 feet",
        "explanation": "The exhaust outlet must be at least 10 feet horizontally from any air intakes to prevent re-entrainment of exhaust.",
        "reference": "NFPA 96 (2021), 7.8.2.1(1)"
    },
    {
        "question": "What is a primary responsibility an employer has regarding hazardous chemicals in the workplace under OSHA's HazCom standard?",
        "options": ["A. Identify and create an inventory of all hazardous chemicals", "B. Only use non-toxic, biodegradable chemicals", "C. Ensure all chemicals are stored in a single locked cabinet", "D. Provide annual reports to the EPA"],
        "correctAnswer": "A. Identify and create an inventory of all hazardous chemicals",
        "explanation": "Employers must create and maintain a list of all hazardous chemicals present in the workplace.",
        "reference": "CECS Study Guide, Page 17, 5.2"
    },
    {
        "question": "What does the term 'Competent Person' mean in an OSHA context?",
        "options": ["A. Anyone with basic safety training.", "B. Someone capable of identifying hazards and authorized to take corrective action.", "C. A person certified in first aid and CPR.", "D. An individual who has completed an OSHA 10-hour course."],
        "correctAnswer": "B. Someone capable of identifying hazards and authorized to take corrective action.",
        "explanation": "An OSHA 'Competent Person' can identify hazards and has the authority to take prompt corrective measures.",
        "reference": "OSHA Definition (e.g., 1926.32(f))"
    },
    {
        "question": "What type of filter is explicitly prohibited for use in commercial kitchen hoods unless it is part of a larger listed device?",
        "options": ["A. Baffle filters", "B. Cartridge filters", "C. Mesh filters", "D. Activated carbon filters"],
        "correctAnswer": "C. Mesh filters",
        "explanation": "Mesh filters are prohibited because they are difficult to clean and can easily become clogged, creating a fire hazard.",
        "reference": "CECS Study Guide, Page 9, 4.4"
    },
    {
        "question": "Metal containers used for collecting grease drippings from the system must be inspected or emptied at what minimum frequency?",
        "options": ["A. Daily", "B. Every 3 days", "C. At least weekly", "D. At least monthly"],
        "correctAnswer": "C. At least weekly",
        "explanation": "To prevent overflow and fire hazards, grease collection containers must be checked and emptied at least weekly.",
        "reference": "NFPA 96 (2021), 12.6.17"
    },
    {
        "question": "An adhesive label attached to the hood after a cleaning must remain affixed until what time?",
        "options": ["A. The end of the calendar year", "B. The report is filed with the AHJ", "C. The next inspection or cleaning event", "D. 30 days after the service date"],
        "correctAnswer": "C. The next inspection or cleaning event",
        "explanation": "The service label must remain in place until the next service, at which point it is replaced with a new one.",
        "reference": "NFPA 96 (2021), 12.6.13.2"
    },
    {
        "question": "What must be done with grease removal devices (filters) that are found to be broken or have missing components?",
        "options": ["A. They must be cleaned and reinstalled.", "B. They must be documented in the cleaning report.", "C. They can be repaired on-site with equivalent parts.", "D. They shall be replaced."],
        "correctAnswer": "D. They shall be replaced.",
        "explanation": "A broken or incomplete grease filter cannot function as designed and must be replaced.",
        "reference": "NFPA 96 (2021), 12.6.18"
    },
    {
        "question": "A sign must be placed on all access panels. What must this sign say?",
        "options": ["A. CAUTION: HOT SURFACE", "B. RESTRICTED ACCESS", "C. ACCESS PANEL - DO NOT OBSTRUCT", "D. AUTHORIZED PERSONNEL ONLY"],
        "correctAnswer": "C. ACCESS PANEL - DO NOT OBSTRUCT",
        "explanation": "Access panels must be marked with this sign to ensure they are always reachable for inspection and cleaning.",
        "reference": "NFPA 96 (2021), 7.1.7"
    },
    {
        "question": "What is the minimum vertical distance required between the lower edge of a grease filter and the cooking surface of a solid fuel charbroiler?",
        "options": ["A. 1.5 feet", "B. 2 feet", "C. 3 feet", "D. 4 feet"],
        "correctAnswer": "D. 4 feet",
        "explanation": "A minimum clearance of 4 feet is required above solid fuel cooking due to the high heat and flare-up potential.",
        "reference": "NFPA 96 (2021), 6.2.1.2"
    },
    {
        "question": "What is the primary function of a spark arrester in a solid fuel exhaust system?",
        "options": ["A. To enhance airflow for better combustion", "B. To capture airborne grease particles", "C. To minimize the passage of airborne sparks and embers into the ductwork", "D. To reduce noise from the exhaust fan"],
        "correctAnswer": "C. To minimize the passage of airborne sparks and embers into the ductwork",
        "explanation": "A spark arrester is a critical safety component that stops sparks from entering the duct and igniting creosote.",
        "reference": "CECS Study Guide, Page 13, 2.5"
    },
    {
        "question": "What is the minimum required space between a deep fat fryer and surface flames from adjacent cooking equipment?",
        "options": ["A. 12 inches", "B. 16 inches", "C. 24 inches", "D. 36 inches"],
        "correctAnswer": "B. 16 inches",
        "explanation": "A minimum separation of 16 inches is required to prevent grease splatter from the fryer being ignited by an open flame.",
        "reference": "NFPA 96 (2021), 13.1.2.4"
    },
    {
        "question": "According to OSHA, at what minimum height from a lower level are personal fall arrest systems generally required when working on a roof?",
        "options": ["A. 4 feet", "B. 6 feet", "C. 10 feet", "D. Only when the roof pitch is steep"],
        "correctAnswer": "B. 6 feet",
        "explanation": "The OSHA standard for construction requires fall protection for any worker exposed to a fall of 6 feet or more.",
        "reference": "OSHA 1926.501(b)(1)"
    },
    {
        "question": "What should a technician do if they discover components of the fire suppression system are inoperable?",
        "options": ["A. Attempt to repair the components themselves.", "B. Proceed with the cleaning and note the issue on the report.", "C. Immediately disable the cooking appliances and notify the owner.", "D. Cover the components to protect them from water during cleaning."],
        "correctAnswer": "C. Immediately disable the cooking appliances and notify the owner.",
        "explanation": "Finding an inoperable fire system is a life safety hazard requiring immediate notification to the owner and shutdown of the cooking line.",
        "reference": "IKECA/Industry Best Practice"
    },
    {
        "question": "What is the proper procedure for handling fusible links during a cleaning?",
        "options": ["A. Spray them directly with degreaser to clean them.", "B. Remove them before cleaning and reinstall them after.", "C. Cover and protect them from chemicals and pressure washing.", "D. Test their function by applying heat."],
        "correctAnswer": "C. Cover and protect them from chemicals and pressure washing.",
        "explanation": "Fusible links must be protected from chemicals or physical damage, as this could impair their function.",
        "reference": "NFPA 96 (2021), 12.6.7"
    },
    {
        "question": "Where should wastewater containing grease and cleaning chemicals be disposed of?",
        "options": ["A. Into the nearest storm drain.", "B. Into a mop sink or sanitary drain as allowed by the AHJ.", "C. Poured onto the gravel area behind the restaurant.", "D. Down the toilet."],
        "correctAnswer": "B. Into a mop sink or sanitary drain as allowed by the AHJ.",
        "explanation": "Wastewater must be disposed of according to local regulations, typically into a sanitary drain leading to a treatment facility.",
        "reference": "CECS Study Guide, Page 11, 2.2"
    },
    {
        "question": "In the context of NFPA 96, what does the word 'shall' signify?",
        "options": ["A. A recommendation that is advised but not required.", "B. A suggestion for best practice.", "C. A mandatory and absolute requirement.", "D. An action left to the technician's discretion."],
        "correctAnswer": "C. A mandatory and absolute requirement.",
        "explanation": "The word 'shall' indicates a mandatory requirement that must be followed without exception.",
        "reference": "CECS Study Guide, Page 21, Definition 26"
    },
    {
        "question": "In the context of NFPA 96, what does the word 'should' signify?",
        "options": ["A. A mandatory and absolute requirement.", "B. A recommendation that is advised but not required.", "C. A requirement that can be ignored.", "D. A strict prohibition."],
        "correctAnswer": "B. A recommendation that is advised but not required.",
        "explanation": "The word 'should' indicates a recommendation or best practice, but it is not mandatory.",
        "reference": "CECS Study Guide, Page 21, Definition 27"
    },
    {
        "question": "Who is defined as the 'Authority Having Jurisdiction' (AHJ)?",
        "options": ["A. The owner of the restaurant.", "B. The cleaning company's supervisor.", "C. An organization, office, or individual responsible for approving equipment and installations, like a fire marshal.", "D. The lead technician on the cleaning crew."],
        "correctAnswer": "C. An organization, office, or individual responsible for approving equipment and installations, like a fire marshal.",
        "explanation": "The AHJ is the entity, most often the local fire marshal, responsible for interpreting and enforcing codes.",
        "reference": "CECS Study Guide, Page 20, Definition 2"
    },
    {
        "question": "What are the three components of the fire triangle?",
        "options": ["A. Heat, Spark, and Fuel", "B. Oxygen, Nitrogen, and Fuel", "C. Heat, Oxygen, and Fuel", "D. Flame, Fire, and Heat"],
        "correctAnswer": "C. Heat, Oxygen, and Fuel",
        "explanation": "The fire triangle illustrates the three essential components needed for combustion: heat, oxygen, and fuel.",
        "reference": "General Fire Safety Principles"
    },
    {
        "question": "What does the acronym IKECA stand for?",
        "options": ["A. International Kitchen Equipment Cleaning Administration", "B. Institute of Kitchen Exhaust Compliance and Assessment", "C. International Kitchen Exhaust Cleaning Association", "D. Internal Kitchen Exhaust Cleaners of America"],
        "correctAnswer": "C. International Kitchen Exhaust Cleaning Association",
        "explanation": "IKECA is the International Kitchen Exhaust Cleaning Association, a key standards-setting body for the industry.",
        "reference": "CECS Study Guide, Cover Page"
    },
    {
        "question": "What does the acronym OSHA stand for?",
        "options": ["A. Occupational Safety and Hazard Administration", "B. Organization for Safe and Healthy Accommodations", "C. Occupational Safety and Health Administration", "D. Official Safety and Health Authority"],
        "correctAnswer": "C. Occupational Safety and Health Administration",
        "explanation": "OSHA is the U.S. government agency that sets and enforces workplace safety and health standards.",
        "reference": "General Knowledge"
    },
    {
        "question": "What does the acronym EPA stand for, and why is it relevant to exhaust cleaners?",
        "options": ["A. Exhaust Performance Agency; it sets standards for fan efficiency.", "B. Environmental Protection Agency; it regulates the proper disposal of wastewater and hazardous materials.", "C. Emergency Protocol Administration; it outlines steps to take during a fire.", "D. Equipment Protection Agency; it certifies cleaning chemicals."],
        "correctAnswer": "B. Environmental Protection Agency; it regulates the proper disposal of wastewater and hazardous materials.",
        "explanation": "The EPA's regulations, like the Clean Water Act, govern the proper disposal of wastewater and chemicals.",
        "reference": "CECS Study Guide, Page 10, Domain 4"
    },
    {
        "question": "What does the acronym PPE stand for?",
        "options": ["A. Professional Performance Equipment", "B. Pressure Protection Equipment", "C. Personal Protective Equipment", "D. Primary Protective Equipment"],
        "correctAnswer": "C. Personal Protective Equipment",
        "explanation": "PPE stands for Personal Protective Equipment, which includes items like gloves, goggles, and respirators worn for safety.",
        "reference": "CECS Study Guide, Page 22, Definition 22"
    },
    {
        "question": "In the context of Hazard Communication, what does SDS stand for?",
        "options": ["A. Standard Dilution Specifications", "B. Safety Data Sheet", "C. System Danger Sheet", "D. Service and Dilution Sheet"],
        "correctAnswer": "B. Safety Data Sheet",
        "explanation": "SDS stands for Safety Data Sheet, a document that provides comprehensive information about a hazardous chemical.",
        "reference": "CECS Study Guide, Page 21, Definition 25"
    },
    {
        "question": "What shall technicians do to prepare the kitchen appliances before cleaning?",
        "options": ["A. Move them out of the way", "B. Clean them off", "C. Wrap the hood with sheeting, plastic, or tarps", "D. Check their surface temperature"],
        "correctAnswer": "C. Wrap the hood with sheeting, plastic, or tarps",
        "explanation": "To protect appliances and surrounding areas from water and chemicals, they should be covered with plastic sheeting.",
        "reference": "IKECA/Industry Best Practice"
    },
    {
        "question": "During cleaning, what should technicians do to the fire suppression system?",
        "options": ["A. Disable the system to prevent it from accidentally discharging", "B. Wrap it in plastic", "C. Technicians should not render the fire suppression system inoperable", "D. Clean every component of it"],
        "correctAnswer": "C. Technicians should not render the fire suppression system inoperable",
        "explanation": "Only a licensed fire suppression technician may disable or service a fire suppression system.",
        "reference": "CECS Study Guide, Page 6, 4.1"
    },
    {
        "question": "According to NFPA 96, what parts of the kitchen exhaust system shall be inspected or cleaned?",
        "options": ["A. Hoods, filters, and fans", "B. The entire kitchen exhaust system", "C. The parts of the system that are easy to reach", "D. Grease removal devices such as filters"],
        "correctAnswer": "B. The entire kitchen exhaust system",
        "explanation": "The standard requires the entire system—from the hood to the fan—to be inspected and cleaned.",
        "reference": "CECS Study Guide, Page 9, 4.2"
    },
    {
        "question": "What is the primary purpose of a kitchen exhaust hood?",
        "options": ["A. To capture grease vapors and gases", "B. To make kitchen staff comfortable", "C. To recycle heated air", "D. To comply with clean air standards"],
        "correctAnswer": "A. To capture grease vapors and gases",
        "explanation": "The main function of a Type I hood is to capture the grease-laden vapors produced by commercial cooking.",
        "reference": "General Industry Knowledge"
    }
];


const QUIZ_LENGTH = 50; // Set how many questions per quiz session
let quizQuestions = [];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// --- Get DOM Elements ---
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const feedbackEl = document.getElementById('feedback');
const explanationEl = document.getElementById('explanation');
const referenceEl = document.getElementById('reference');
const quizContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const scoreSpan = document.getElementById('score');
const totalQuestionsSpan = document.getElementById('total-questions');
const restartBtn = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress-bar');
const percentageScoreSpan = document.getElementById('percentage-score');

// --- Functions ---

/**
 * Shuffles an array in place.
 * @param {Array} array The array to shuffle.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Initializes and starts a new quiz.
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    // Create a new shuffled quiz from the main questions pool
    const shuffledQuestions = [...questions];
    shuffleArray(shuffledQuestions);
    quizQuestions = shuffledQuestions.slice(0, QUIZ_LENGTH);
    
    // Reset UI
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'flex';
    
    loadQuestion();
}

/**
 * Loads the current question and options into the DOM.
 */
function loadQuestion() {
    // Reset state for the new question
    selectedAnswer = null;
    feedbackEl.textContent = '';
    feedbackEl.className = '';
    explanationEl.style.display = 'none';
    referenceEl.style.display = 'none';
    submitBtn.disabled = true;
    submitBtn.style.display = 'inline-block';
    nextBtn.style.display = 'none';

    updateProgressBar();

    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionEl.textContent = currentQuestion.question;
        optionsContainer.innerHTML = '';

        // Create and display option buttons
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-btn');
            button.addEventListener('click', () => selectOption(button, option));
            optionsContainer.appendChild(button);
        });
    } else {
        showResults();
    }
}

/**
 * Updates the progress bar based on the current question index.
 */
function updateProgressBar() {
    const progressPercentage = Math.round((currentQuestionIndex / quizQuestions.length) * 100);
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
        progressBar.textContent = `${progressPercentage}%`;
    }
}

/**
 * Handles the user selecting an answer option.
 * @param {HTMLButtonElement} button The button element that was clicked.
 * @param {string} option The text content of the selected option.
 */
function selectOption(button, option) {
    // Remove 'selected' class from all buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    // Add 'selected' class to the clicked button
    button.classList.add('selected');
    selectedAnswer = option;
    submitBtn.disabled = false;
}

/**
 * Handles the submission of an answer.
 */
function submitAnswer() {
    if (selectedAnswer === null) return;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.option-btn');
    
    // Disable all option buttons
    optionButtons.forEach(btn => btn.disabled = true);
    
    // Check if the answer is correct
    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
        feedbackEl.textContent = "Correct!";
        feedbackEl.classList.add('correct-feedback');
    } else {
        feedbackEl.textContent = `Incorrect.`;
        feedbackEl.classList.add('incorrect-feedback');
    }

    // Visually mark the correct and incorrect answers
    optionButtons.forEach(btn => {
        if (btn.textContent === currentQuestion.correctAnswer) {
            btn.classList.add('correct');
        } else if (btn.textContent === selectedAnswer) {
            btn.classList.add('incorrect');
        }
    });

    // Display the explanation and reference
    explanationEl.innerHTML = `<strong>Explanation:</strong> ${currentQuestion.explanation}`;
    explanationEl.style.display = 'block';
    referenceEl.innerHTML = `<strong>Reference:</strong> ${currentQuestion.reference}`;
    referenceEl.style.display = 'block';

    // Hide submit button and show next button
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
}

/**
 * Loads the next question in the quiz.
 */
function loadNextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

/**
 * Displays the final quiz results.
 */
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Ensure progress bar is at 100% at the end
    if (progressBar) {
        progressBar.style.width = '100%';
        progressBar.textContent = '100%';
    }

    scoreSpan.textContent = score;
    totalQuestionsSpan.textContent = quizQuestions.length;

    const percentage = Math.round((score / quizQuestions.length) * 100);
    percentageScoreSpan.textContent = percentage;
}

// --- Event Listeners ---
submitBtn.addEventListener('click', submitAnswer);
nextBtn.addEventListener('click', loadNextQuestion);
restartBtn.addEventListener('click', startQuiz);

// --- Initial Start ---
startQuiz();
