const questions = [
    // NFPA 96 Standards
    {
        "question": "A routine inspection of a kitchen exhaust system reveals a grease accumulation of 0.08 inches. What is the required course of action according to NFPA 96?",
        "options": ["A. Schedule a cleaning within the next 30 days.", "B. Note the accumulation and inspect again at the next scheduled interval.", "C. The system requires cleaning before the next use.", "D. Inform the owner that the system is non-compliant but no immediate action is needed."],
        "correctAnswer": "C. The system requires cleaning before the next use.",
        "explanation": "An accumulation of 0.078 inches (2000 microns) triggers an immediate cleaning requirement.",
        "reference": "NFPA 96, 12.6.1.1.3"
    },
    {
        "question": "What is the minimum cleaning requirement for combustible contaminants inside a kitchen exhaust system?",
        "options": ["A. Cleaned down to the bare metal.", "B. Cleaned to a depth of 0.002 inches (50 microns).", "C. Cleaned to a depth of 0.02 inches (500 microns).", "D. Cleaned until no black carbon is visible."],
        "correctAnswer": "B. Cleaned to a depth of 0.002 inches (50 microns).",
        "explanation": "An exhaust system must be cleaned, at a minimum, to remove combustible contaminants down to a depth of 0.002 inches or 50 microns.",
        "reference": "NFPA 96, 12.6.1.1.1"
    },
    {
        "question": "A 24-hour restaurant primarily uses wok-style cooking. How often must its kitchen exhaust system be inspected for grease buildup?",
        "options": ["A. Annually", "B. Semiannually", "C. Quarterly", "D. Monthly"],
        "correctAnswer": "C. Quarterly",
        "explanation": "Systems serving high-volume cooking operations like wok cooking require quarterly inspections.",
        "reference": "CECS Study Guide, Page 8, 1.2.2"
    },
    {
        "question": "After a cleaning service, a written report must be provided to the system owner within what timeframe?",
        "options": ["A. 48 hours", "B. 5 business days", "C. 2 weeks", "D. 30 days"],
        "correctAnswer": "C. 2 weeks",
        "explanation": "The service provider has up to two weeks to deliver the written report detailing the cleaning to the system owner.",
        "reference": "NFPA 96, 12.6.15"
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
        "reference": "NFPA 96, 12.6.6"
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
        "reference": "NFPA 96, 7.5.1.1"
    },
    {
        "question": "What is a fundamental requirement for all grease duct systems?",
        "options": ["A. They must be internally welded and mechanically sealed.", "B. They must be constructed with internal support braces.", "C. They must be liquid-tight and feature continuous external welding on all seams.", "D. They must be wrapped in a minimum of two layers of fire-resistant material."],
        "correctAnswer": "C. They must be liquid-tight and feature continuous external welding on all seams.",
        "explanation": "To prevent dangerous grease leaks, ducts must be liquid-tight, which is achieved with continuous external welding on all seams and joints.",
        "reference": "NFPA 96, 7.5.2.1"
    },
    {
        "question": "What is the minimum clearance required between a grease duct and any combustible materials?",
        "options": ["A. 6 inches", "B. 12 inches", "C. 18 inches", "D. 24 inches"],
        "correctAnswer": "C. 18 inches",
        "explanation": "A minimum clearance of 18 inches from combustible materials is required to prevent them from igniting in case of a duct fire.",
        "reference": "NFPA 96, 4.2.1"
    },
    {
        "question": "Where is it explicitly forbidden to install an access panel on ductwork?",
        "options": ["A. On the top side of a horizontal duct.", "B. On the bottom of a duct run.", "C. Within 5 feet of a change in direction.", "D. Directly opposite another access panel."],
        "correctAnswer": "B. On the bottom of a duct run.",
        "explanation": "Access panels are not permitted on the bottom of a duct because they can leak grease and create a fire hazard.",
        "reference": "NFPA 96, 7.3.1 (by omission)"
    },
    {
        "question": "When installing a new access panel in a horizontal duct, what is the minimum distance the edge of the opening must be from any welded seams or edges of the duct?",
        "options": ["A. 0.5 inches", "B. 1.0 inch", "C. 1.5 inches", "D. 2.0 inches"],
        "correctAnswer": "C. 1.5 inches",
        "explanation": "The edge of an access panel opening must be at least 1.5 inches from all duct edges or welds to maintain structural integrity.",
        "reference": "NFPA 96, 7.4.1.5"
    },
    {
        "question": "For a fan with ductwork on both its intake and exhaust sides (an in-line fan), where must access for cleaning be provided?",
        "options": ["A. Within 3 feet of both the intake and exhaust sides of the fan.", "B. A single opening on top of the fan housing is sufficient.", "C. Within 5 feet of the fan on the downstream side only.", "D. By removing the fan from the ductwork entirely."],
        "correctAnswer": "A. Within 3 feet of both the intake and exhaust sides of the fan.",
        "explanation": "Access must be provided within 3 feet of both sides of an in-line fan to allow for proper cleaning.",
        "reference": "NFPA 96, 7.3.8"
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
        "reference": "NFPA 96, 7.8.2.1(8)"
    },
    {
        "question": "What is the proper procedure for handling fusible links during a cleaning?",
        "options": ["A. Spray them directly with degreaser to clean them.", "B. Remove them before cleaning and reinstall them after.", "C. Cover and protect them from chemicals and pressure washing.", "D. Test their function by applying heat."],
        "correctAnswer": "C. Cover and protect them from chemicals and pressure washing.",
        "explanation": "Fusible links must be protected from chemicals or physical damage, as this could impair their function.",
        "reference": "NFPA 96, 12.6.7"
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
        "reference": "CECS Study Guide, Page 22, Definition 26"
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
        "reference": "CECS Study Guide, Pages 16-17, 2.5.1"
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
        "reference": "NFPA 96, 12.6.12"
    },
    {
        "question": "According to NFPA 96, how should a hood be sized relative to the appliances it covers?",
        "options": ["A. It must be exactly flush with the edges of the appliances.", "B. It must extend a minimum of 18 inches beyond all appliances.", "C. It must be adequately sized to capture all grease-laden vapors.", "D. It must be at least twice the width of the largest appliance."],
        "correctAnswer": "C. It must be adequately sized to capture all grease-laden vapors.",
        "explanation": "The primary requirement is that the hood must be sized and configured to effectively capture the cooking vapors.",
        "reference": "NFPA 96, 6.1.1"
    },
    {
        "question": "What is the minimum required thickness for a grease duct constructed from stainless steel?",
        "options": ["A. 20 MSG", "B. 18 MSG", "C. 16 MSG", "D. 14 MSG"],
        "correctAnswer": "B. 18 MSG",
        "explanation": "Grease ducts made of stainless steel must be at least 18 MSG thick for adequate fire resistance.",
        "reference": "NFPA 96, 7.5.1.1"
    },
    {
        "question": "For vertical ductwork where personnel entry is not possible, what is the maximum distance allowed between access openings?",
        "options": ["A. On every other floor.", "B. Every 20 feet.", "C. Every 12 feet and at every change of direction.", "D. Only at the top and bottom of the run."],
        "correctAnswer": "C. Every 12 feet and at every change of direction.",
        "explanation": "Access must be provided on each floor, at intervals no more than 12 feet apart, and at all changes of direction to ensure the entire duct can be cleaned.",
        "reference": "NFPA 96, 7.3.1, 7.4.1.2, & 7.4.2.2"
    },
    {
        "question": "If a horizontal duct run is too small for a personnel entry-sized opening, what is the alternative requirement for access?",
        "options": ["A. The duct must be replaced with a larger one.", "B. Openings large enough for cleaning must be installed every 12 feet.", "C. Steam cleaning must be used exclusively.", "D. The cleaning company is not responsible for cleaning that section."],
        "correctAnswer": "B. Openings large enough for cleaning must be installed every 12 feet.",
        "explanation": "If personnel entry isn't possible, smaller access openings must be installed at a maximum of 12-foot intervals.",
        "reference": "NFPA 96, 7.4.1.2"
    },
    {
        "question": "When must the main exhaust fan be in operation?",
        "options": ["A. Only during peak cooking hours.", "B. At all times the building is occupied.", "C. Whenever the cooking equipment under the hood is turned on.", "D. During the cleaning process to vent chemical fumes."],
        "correctAnswer": "C. Whenever the cooking equipment under the hood is turned on.",
        "explanation": "The exhaust fan must operate continuously during cooking to ensure proper ventilation of grease-laden vapors.",
        "reference": "NFPA 96, 8.1.1.1"
    },
    {
        "question": "If an access panel is installed or removed for service, where should the service company place a label indicating this?",
        "options": ["A. On the surface of the access panel itself or near the opening.", "B. Inside the ductwork next to the opening.", "C. On the main electrical panel for the fan.", "D. On the front of the kitchen hood."],
        "correctAnswer": "A. On the surface of the access panel itself or near the opening.",
        "explanation": "A service label must be affixed on or near each access panel that was opened or installed.",
        "reference": "NFPA 96, 12.6.10"
    },
    {
        "question": "What type of gasket material is required for access panels?",
        "options": ["A. Airtight and rated for 500°F.", "B. Watertight and rated for 1000°F.", "C. Greasetight and rated for 1500°F.", "D. Flexible silicone rated for 1200°F."],
        "correctAnswer": "C. Greasetight and rated for 1500°F.",
        "explanation": "Access panel gaskets must be greasetight and rated for 1500°F to maintain the duct's integrity during a fire.",
        "reference": "NFPA 96, 7.4.3.2"
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
        "reference": "CECS Study Guide, Page 22, Definition 27"
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
        "explanation": "OSHA requires that SDSs be readily accessible to employees during their work shift.",
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
        "reference": "CECS Study Guide, Page 15, 1.5 & Page 22, Definition 22"
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
        "reference": "NFPA 96, 13.1.2.1"
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
        "reference": "NFPA 96, 7.8.2.1(1)"
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
        "reference": "OSHA 1926.32(f)"
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
        "reference": "NFPA 96, 12.6.17"
    },
    {
        "question": "An adhesive label attached to the hood after a cleaning must remain affixed until what time?",
        "options": ["A. The end of the calendar year", "B. The report is filed with the AHJ", "C. The next inspection or cleaning event", "D. 30 days after the service date"],
        "correctAnswer": "C. The next inspection or cleaning event",
        "explanation": "The service label must remain in place until the next service, at which point it is replaced with a new one.",
        "reference": "NFPA 96, 12.6.13.2"
    },
    {
        "question": "What must be done with grease removal devices (filters) that are found to be broken or have missing components?",
        "options": ["A. They must be cleaned and reinstalled.", "B. They must be documented in the cleaning report.", "C. They can be repaired on-site with equivalent parts.", "D. They shall be replaced."],
        "correctAnswer": "D. They shall be replaced.",
        "explanation": "A broken or incomplete grease filter cannot function as designed and must be replaced.",
        "reference": "NFPA 96, 12.6.18"
    },
    {
        "question": "A sign must be placed on all access panels. What must this sign say?",
        "options": ["A. CAUTION: HOT SURFACE", "B. RESTRICTED ACCESS", "C. ACCESS PANEL - DO NOT OBSTRUCT", "D. AUTHORIZED PERSONNEL ONLY"],
        "correctAnswer": "C. ACCESS PANEL - DO NOT OBSTRUCT",
        "explanation": "Access panels must be marked with this sign to ensure they are always reachable for inspection and cleaning.",
        "reference": "NFPA 96, 7.1.7"
    },
    {
        "question": "What is the minimum vertical distance required between the lower edge of a grease filter and the cooking surface of a solid fuel charbroiler?",
        "options": ["A. 1.5 feet", "B. 2 feet", "C. 3 feet", "D. 4 feet"],
        "correctAnswer": "D. 4 feet",
        "explanation": "A minimum clearance of 4 feet is required above solid fuel cooking due to the high heat and flare-up potential.",
        "reference": "NFPA 96, 6.2.1.2"
    },
    {
        "question": "What is the primary function of a spark arrester in a solid fuel exhaust system?",
        "options": ["A. To enhance airflow for better combustion", "B. To capture airborne grease particles", "C. To minimize the passage of airborne sparks and embers into the ductwork", "D. To reduce noise from the exhaust fan"],
        "correctAnswer": "C. To minimize the passage of airborne sparks and embers into the ductwork",
        "explanation": "A spark arrester is a critical safety component that stops sparks from entering the duct and igniting creosote.",
        "reference": "CECS Study Guide, Page 14, 2.5"
    },
    {
        "question": "What is the minimum required space between a deep fat fryer and surface flames from adjacent cooking equipment?",
        "options": ["A. 12 inches", "B. 16 inches", "C. 24 inches", "D. 36 inches"],
        "correctAnswer": "B. 16 inches",
        "explanation": "A minimum separation of 16 inches is required to prevent grease splatter from the fryer being ignited by an open flame.",
        "reference": "NFPA 96, 13.1.2.4"
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
        "explanation": "Finding an inoperable fire system is a life safety hazard requiring immediate notification and shutdown of the cooking line.",
        "reference": "IKECA/Industry Best Practice"
    },
    {
        "question": "What is the proper procedure for handling fusible links during a cleaning?",
        "options": ["A. Spray them directly with degreaser to clean them.", "B. Remove them before cleaning and reinstall them after.", "C. Cover and protect them from chemicals and pressure washing.", "D. Test their function by applying heat."],
        "correctAnswer": "C. Cover and protect them from chemicals and pressure washing.",
        "explanation": "Fusible links must be protected from chemicals or physical damage, as this could impair their function.",
        "reference": "NFPA 96, 12.6.7"
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
        "reference": "CECS Study Guide, Page 22, Definition 26"
    },
    {
        "question": "In the context of NFPA 96, what does the word 'should' signify?",
        "options": ["A. A mandatory and absolute requirement.", "B. A recommendation that is advised but not required.", "C. A requirement that can be ignored.", "D. A strict prohibition."],
        "correctAnswer": "B. A recommendation that is advised but not required.",
        "explanation": "The word 'should' indicates a recommendation or best practice, but it is not mandatory.",
        "reference": "CECS Study Guide, Page 22, Definition 27"
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
        "reference": "CECS Study Guide, Page 22, Definition 25"
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
    },
    // --- NEW DIFFICULT QUESTIONS START HERE ---
    // Specialized System Components (10 questions)
    {
        "question": "A kitchen exhaust system utilizes ultraviolet (UV-C) lights for grease control. What is the minimum inspection frequency for this type of system?",
        "options": ["A. Annually", "B. Semiannually", "C. Quarterly", "D. Monthly"],
        "correctAnswer": "C. Quarterly",
        "explanation": "Systems that incorporate UV lights must be inspected on a quarterly basis to ensure the lights are clean and functioning correctly.",
        "reference": "CECS Study Guide, Page 6, 3.4"
    },
    {
        "question": "In a recirculating system, how often must the entire hood plenum and blower section be cleaned?",
        "options": ["A. Weekly", "B. Monthly", "C. Every 3 months", "D. Every 6 months"],
        "correctAnswer": "C. Every 3 months",
        "explanation": "Recirculating systems have more stringent internal cleaning requirements; the plenum and blower must be cleaned at least every three months.",
        "reference": "CECS Study Guide, Page 5, 2.1"
    },
    {
        "question": "What is a mandatory safety feature for each filter compartment in a recirculating system?",
        "options": ["A. A pressure differential gauge", "B. A temperature sensor", "C. A visual inspection port", "D. Interlock controls"],
        "correctAnswer": "D. Interlock controls",
        "explanation": "Each filter compartment on a recirculating system must have interlock controls to ensure the system cannot operate if filters are missing or improperly installed.",
        "reference": "CECS Study Guide, Page 1, 1.3.3"
    },
    {
        "question": "In a recirculating system equipped with an Electrostatic Precipitator (ESP), what is the minimum cleaning frequency for the ESP cells?",
        "options": ["A. Weekly", "B. Monthly", "C. Quarterly", "D. Semiannually"],
        "correctAnswer": "A. Weekly",
        "explanation": "To maintain efficiency and prevent fire hazards, the electrostatic cells within a recirculating system's ESP must be cleaned at least once per week.",
        "reference": "CECS Study Guide, Page 5, 3.2"
    },
    {
        "question": "Where are ozone generators typically installed within a kitchen ventilation system for odor control?",
        "options": ["A. In the hood plenum", "B. In the bleed air duct", "C. Directly on the exhaust fan housing", "D. Downstream of the exhaust fan"],
        "correctAnswer": "B. In the bleed air duct",
        "explanation": "Ozone generators are typically installed in the bleed air duct to properly mix the ozone with the exhaust airstream for effective odor mitigation.",
        "reference": "CECS Study Guide, Page 5, 3.1"
    },
    {
        "question": "What is the primary function of potassium permanganate in specialized kitchen exhaust systems?",
        "options": ["A. Grease emulsification", "B. Fire suppression", "C. Odor control", "D. Spark arresting"],
        "correctAnswer": "C. Odor control",
        "explanation": "Potassium permanganate is a powerful oxidizing agent used in filter media specifically for the purpose of neutralizing odors.",
        "reference": "CECS Study Guide, Page 5, 3.3"
    },
    {
        "question": "A listed exhaust hood contains a constant fire-activated water system. How often must this system be maintained by a qualified person?",
        "options": ["A. Annually", "B. Semiannually", "C. Quarterly", "D. Monthly"],
        "correctAnswer": "B. Semiannually",
        "explanation": "Maintenance of listed fire-extinguishing systems, including constant water systems, must be performed by a qualified person at least every 6 months.",
        "reference": "CECS Study Guide, Page 7, 1.4"
    },
    {
        "question": "What is the key factor that causes an Electrostatic Precipitator (ESP) unit to become less efficient at capturing grease particles?",
        "options": ["A. High humidity in the airstream", "B. Low ambient temperature", "C. The collecting cells becoming coated with grease", "D. Incorrect voltage being supplied to the cells"],
        "correctAnswer": "C. The collecting cells becoming coated with grease",
        "explanation": "As the collector plates in an ESP become coated with grease, their ability to attract and hold charged particles diminishes, reducing overall efficiency.",
        "reference": "CECS Study Guide, Page 5, 1.4.2"
    },
    {
        "question": "Who must approve the location of a recirculating system installation?",
        "options": ["A. The building owner", "B. The equipment manufacturer", "C. The cleaning contractor", "D. The Authority Having Jurisdiction (AHJ)"],
        "correctAnswer": "D. The Authority Having Jurisdiction (AHJ)",
        "explanation": "Because recirculating systems do not exhaust to the outside, their location and installation are subject to approval by the AHJ.",
        "reference": "CECS Study Guide, Page 5, 2.2"
    },
    // Basic System Components (8 questions)
    {
        "question": "For a horizontal grease duct run that is 80 feet long, what is the minimum required slope per linear foot?",
        "options": ["A. 1/4 inch", "B. 1/2 inch", "C. 3/4 inch", "D. 1 inch"],
        "correctAnswer": "D. 1 inch",
        "explanation": "For horizontal runs greater than 75 feet, the minimum slope increases to 1 inch per linear foot to ensure proper grease drainage.",
        "reference": "NFPA 96, 7.1.5"
    },
    {
        "question": "A horizontal grease duct has a cross-sectional dimension of 30 inches. Its support system must be designed to handle the weight of the ductwork plus what additional load at any point?",
        "options": ["A. 250 lb", "B. 500 lb", "C. 800 lb", "D. 1000 lb"],
        "correctAnswer": "C. 800 lb",
        "explanation": "Support systems for horizontal ducts 24 inches or larger must be designed for the duct's weight plus an 800 lb point load to account for personnel.",
        "reference": "NFPA 96, 7.4.1.4"
    },
    {
        "question": "What is the minimum size for an access opening that must be provided on the curvature of an upblast fan housing for cleaning and inspection?",
        "options": ["A. 2 in. by 4 in.", "B. 3 in. by 5 in.", "C. 4 in. by 6 in.", "D. 6 in. by 6 in."],
        "correctAnswer": "B. 3 in. by 5 in.",
        "explanation": "Upblast fans must be supplied with an access opening of at least 3 inches by 5 inches (or a 4-inch circular diameter) on the fan housing curvature.",
        "reference": "CECS Study Guide, Page 3, 4.5.3"
    },
    {
        "question": "A clearance reduction system uses 0.013 in. (28 gauge) sheet metal spaced 1 in. off the duct. What is the minimum resulting clearance to combustible materials?",
        "options": ["A. 3 inches", "B. 6 inches", "C. 9 inches", "D. 12 inches"],
        "correctAnswer": "C. 9 inches",
        "explanation": "This specific clearance reduction method allows the required 18-inch clearance to combustibles to be reduced to 9 inches.",
        "reference": "NFPA 96, 4.2.3.1"
    },
    {
        "question": "What is a mandatory requirement for the motor in an in-line exhaust fan?",
        "options": ["A. It must be a variable-speed motor.", "B. It must be located outside the airstream.", "C. It must have a thermal overload switch accessible from the exterior.", "D. It must be rated for continuous duty at 200°F."],
        "correctAnswer": "B. It must be located outside the airstream.",
        "explanation": "To protect the motor from grease-laden vapors and heat, it must be located outside the airstream, with belts and pulleys protected by a greasetight housing.",
        "reference": "CECS Study Guide, Page 3, 4.4.1"
    },
    {
        "question": "Duct systems for commercial kitchen ventilation are expressly forbidden from being interconnected with what?",
        "options": ["A. The make-up air system", "B. Any other building ventilation or exhaust system", "C. The plumbing vent system", "D. The emergency smoke evacuation system"],
        "correctAnswer": "B. Any other building ventilation or exhaust system",
        "explanation": "To prevent the spread of fire and grease throughout a building, a kitchen exhaust system must be entirely separate from any other ventilation system.",
        "reference": "NFPA 96, 7.1.3"
    },
    {
        "question": "The duct connecting an oven flue to an eyebrow-type hood must be connected with a continuous weld or what alternative method?",
        "options": ["A. A high-temperature sealant and sheet metal screws", "B. A bolted flange connection with a 1500°F gasket", "C. A duct-to-duct connection", "D. A compression fitting"],
        "correctAnswer": "C. A duct-to-duct connection",
        "explanation": "The connection between the oven flue and the eyebrow hood must be either a continuous weld or a compliant duct-to-duct connection to ensure a liquid-tight seal.",
        "reference": "CECS Study Guide, Page 2, 3.6.1"
    },
    {
        "question": "What is the primary purpose of a grease reservoir in a downdraft appliance ventilation system?",
        "options": ["A. To cool the exhaust air before it enters the duct", "B. To automatically lubricate the fan bearings", "C. To collect grease from low points in the ductwork", "D. To act as a pre-filter before the main grease filters"],
        "correctAnswer": "C. To collect grease from low points in the ductwork",
        "explanation": "Downdraft systems inherently have low points where grease can collect; a grease reservoir is required to safely contain this accumulation.",
        "reference": "CECS Study Guide, Page 2, 3.4.1"
    },
    // Procedures for Inspection and Maintenance (8 questions)
    {
        "question": "A measured grease depth of 0.125 inches (3175 µm) is found in an exhaust fan housing. What action is required?",
        "options": ["A. Note the depth and schedule cleaning within 7 days.", "B. Replace the fan bearings at the next service.", "C. The surfaces shall be cleaned.", "D. Immediately shut down and lock out the fan."],
        "correctAnswer": "C. The surfaces shall be cleaned.",
        "explanation": "A grease depth of 0.125 inches (3175 µm) in the fan housing is a specific trigger point that requires the system to be cleaned.",
        "reference": "NFPA 96, 12.6.1.1.4"
    },
    {
        "question": "What test must be performed on grease ducts prior to them being concealed or wrapped?",
        "options": ["A. A pressure decay test", "B. A light leak test", "C. A velocity profile test", "D. A sound level test"],
        "correctAnswer": "B. A light leak test",
        "explanation": "A light leak test is performed by shining a bright light on the exterior of the duct welds in a darkened environment to visually identify any gaps or pinholes from the inside.",
        "reference": "CECS Study Guide, Page 8, 1.6.1"
    },
    {
        "question": "According to NFPA 96, what must be done with electrical switches at the start of the cleaning process?",
        "options": ["A. They must be de-energized by the building owner.", "B. They must be tagged with a 'Cleaning in Progress' sign.", "C. They shall be locked out.", "D. They should be tested for proper operation."],
        "correctAnswer": "C. They shall be locked out.",
        "explanation": "To prevent accidental activation during cleaning, electrical switches that control exhaust system components must be locked out.",
        "reference": "NFPA 96, 12.6.3"
    },
    {
        "question": "After cleaning an exhaust system, what is the NFPA 96 rule regarding coating the interior surfaces?",
        "options": ["A. A thin layer of food-grade oil is permitted to prevent rust.", "B. A fire-retardant powder may be applied.", "C. The system shall not be coated with any substance.", "D. Only coatings approved by the EPA are allowed."],
        "correctAnswer": "C. The system shall not be coated with any substance.",
        "explanation": "Coating the interior of a duct system after cleaning is prohibited as it can interfere with future cleanings and may be combustible.",
        "reference": "NFPA 96, 12.6.8"
    },
    {
        "question": "A cleaning report must specify areas that were inaccessible or not cleaned. What else must be documented regarding access?",
        "options": ["A. The reason why access was not possible.", "B. The name of the person who installed the access panels.", "C. The location(s) of duct access panel(s).", "D. The time required to open each access panel."],
        "correctAnswer": "C. The location(s) of duct access panel(s).",
        "explanation": "The cleaning report must provide a record of the location of all duct access panels to aid future inspections and service.",
        "reference": "NFPA 96, 12.6.15.2(3)"
    },
    {
        "question": "Is it permissible to run multiple grease ducts within a single fire-rated interior enclosure?",
        "options": ["A. Yes, without restriction.", "B. Yes, if acceptable to the authority having jurisdiction.", "C. No, this is strictly prohibited.", "D. No, unless the ducts are from the same manufacturer."],
        "correctAnswer": "B. Yes, if acceptable to the authority having jurisdiction.",
        "explanation": "While not standard practice, multiple ducts may be run in a single enclosure if the AHJ specifically reviews and approves the design.",
        "reference": "CECS Study Guide, Page 9, 4.7"
    },
    {
        "question": "A written report must be provided to the system owner after an inspection for grease buildup. What information must this report contain?",
        "options": ["A. A recommendation for the next cleaning date.", "B. The cleaning company's insurance certificate number.", "C. Areas in need of cleaning where grease exceeds specified limits.", "D. The cost estimate for the required cleaning."],
        "correctAnswer": "C. Areas in need of cleaning where grease exceeds specified limits.",
        "explanation": "The inspection report's primary purpose is to inform the owner of any areas that are non-compliant and require cleaning.",
        "reference": "NFPA 96, 12.6.14.1(1)"
    },
    {
        "question": "When can components of a fire suppression system be rendered inoperable during the cleaning process?",
        "options": ["A. At any time, provided the cleaning company assumes liability.", "B. Only if the cooking appliances are also locked out.", "C. Never, under any circumstances.", "D. Where serviced by properly trained and qualified persons."],
        "correctAnswer": "D. Where serviced by properly trained and qualified persons.",
        "explanation": "While generally forbidden, NFPA 96 permits the fire system to be rendered inoperable during cleaning if it is done by a properly trained and qualified fire suppression technician.",
        "reference": "NFPA 96, 12.6.5"
    },
    // Common Safety Issues (7 questions)
    {
        "question": "What must an employer's written PPE program include if employees use personal protective equipment?",
        "options": ["A. The purchase date and cost of all PPE.", "B. A list of approved vendors for purchasing PPE.", "C. How to select, maintain, and evaluate the PPE.", "D. The employee's signature acknowledging receipt of PPE."],
        "correctAnswer": "C. How to select, maintain, and evaluate the PPE.",
        "explanation": "The written program must detail the procedures for selecting the correct PPE for a task, as well as how to maintain it and evaluate its effectiveness.",
        "reference": "CECS Study Guide, Page 15, 1.2"
    },
    {
        "question": "Which of the following is required to be included on a lockout/tagout tag?",
        "options": ["A. The time the lock was applied.", "B. The name of the employee applying the device.", "C. The reason for the lockout.", "D. The supervisor's signature."],
        "correctAnswer": "B. The name of the employee applying the device.",
        "explanation": "The tag on a lockout/tagout device must identify the specific employee who applied it.",
        "reference": "CECS Study Guide, Page 21, Definition 20.a"
    },
    {
        "question": "What is the 'three points of contact' rule for ladder safety?",
        "options": ["A. The ladder must contact the building at three points.", "B. The user must keep two hands and one foot, or two feet and one hand, on the ladder when climbing.", "C. The ladder must be secured with three separate tie-offs.", "D. The ladder must be inspected by three different people before use."],
        "correctAnswer": "B. The user must keep two hands and one foot, or two feet and one hand, on the ladder when climbing.",
        "explanation": "This rule ensures maximum stability for the user while ascending or descending a ladder.",
        "reference": "CECS Study Guide, Page 21, Definition 18.b"
    },
    {
        "question": "According to the CECS Study Guide, which of the following is a permissible method of fall protection?",
        "options": ["A. A body belt and a lanyard", "B. A safety monitoring system on its own", "C. A personal fall arrest system", "D. Tying off to a plumbing vent"],
        "correctAnswer": "C. A personal fall arrest system",
        "explanation": "The guide lists guardrail systems, safety net systems, and personal fall arrest systems as the primary methods of fall protection.",
        "reference": "CECS Study Guide, Page 17, 4.1"
    },
    {
        "question": "If a chemical manufacturer fails to provide an SDS for a hazardous product, what is the employer's responsibility?",
        "options": ["A. Refuse to use the product.", "B. Create a temporary SDS based on the product label.", "C. Contact the supplier to obtain the SDS and maintain a record of the contact.", "D. Use the product but require employees to wear extra PPE."],
        "correctAnswer": "C. Contact the supplier to obtain the SDS and maintain a record of the contact.",
        "explanation": "The employer has a duty to actively seek out the missing SDS from the supplier/manufacturer and document their efforts.",
        "reference": "CECS Study Guide, Page 19, 5.6.2"
    },
    {
        "question": "On a hazardous chemical label, which signal word indicates a more severe hazard?",
        "options": ["A. 'Warning'", "B. 'Danger'", "C. 'Caution'", "D. 'Notice'"],
        "correctAnswer": "B. 'Danger'",
        "explanation": "The signal word 'Danger' is used for more severe hazards, while 'Warning' is used for less severe hazards.",
        "reference": "CECS Study Guide, Page 18, 5.5.1"
    },
    {
        "question": "Who is required to inspect a respirator before it is used?",
        "options": ["A. The site supervisor", "B. The company safety officer", "C. A certified inspector", "D. The wearer"],
        "correctAnswer": "D. The wearer",
        "explanation": "The individual who will be wearing the respirator is required to inspect it for defects or damage before each use.",
        "reference": "CECS Study Guide, Page 16, 1.5.2.1"
    },
    // Solid Fuel and Mobile Cooking Operations (4 questions)
    {
        "question": "What is the NFPA 96 rule regarding wall terminations for solid fuel exhaust systems?",
        "options": ["A. They are permitted if they have a spark arrester.", "B. They are permitted if they are 10 feet from property lines.", "C. They are prohibited.", "D. They are permitted only on single-story buildings."],
        "correctAnswer": "C. They are prohibited.",
        "explanation": "Due to the high risk of embers, exhaust from solid fuel cooking operations cannot terminate through a wall; it must terminate through the roof.",
        "reference": "CECS Study Guide, Page 13, 2.4"
    },
    {
        "question": "How often must the combustion chamber of a solid fuel cooking appliance be scraped clean to its original surface?",
        "options": ["A. Daily", "B. Weekly", "C. Monthly", "D. Quarterly"],
        "correctAnswer": "B. Weekly",
        "explanation": "To prevent dangerous buildup of combustible material, the combustion chamber itself must be scraped clean on a weekly basis.",
        "reference": "CECS Study Guide, Page 13, 2.2"
    },
    {
        "question": "A solid fuel appliance's flue must be inspected weekly for what two conditions?",
        "options": ["A. Correct temperature and airflow.", "B. Discoloration and noise.", "C. Residue buildup and physical damage/corrosion.", "D. Proper draft and creosote liquefaction."],
        "correctAnswer": "C. Residue buildup and physical damage/corrosion.",
        "explanation": "The weekly inspection is to check for residue that could become fuel and for any corrosion or damage that could compromise the flue's integrity.",
        "reference": "CECS Study Guide, Page 7, 1.5.1"
    },
    {
        "question": "What is the minimum clearance required between stored solid cooking fuel (e.g., a wood pile) and any solid fuel appliance?",
        "options": ["A. 12 inches", "B. 24 inches", "C. 36 inches", "D. 48 inches"],
        "correctAnswer": "C. 36 inches",
        "explanation": "Solid fuel must be stored no closer than 3 feet (36 inches) to any appliance that could potentially ignite it.",
        "reference": "CECS Study Guide, Page 12, 1.3"
    },
    // Chemicals and Environmental Considerations (3 questions)
    {
        "question": "What is the best method to protect a roof membrane from grease exposure around an exhaust fan?",
        "options": ["A. Applying a layer of gravel around the fan curb.", "B. Painting the roof with a fire-retardant coating.", "C. Installing a grease containment system.", "D. Washing the roof with a degreaser weekly."],
        "correctAnswer": "C. Installing a grease containment system.",
        "explanation": "A grease containment system is specifically designed to collect grease discharge from the fan, preventing it from damaging the roof membrane.",
        "reference": "CECS Study Guide, Page 10, 1.1.3.1"
    },
    {
        "question": "How should solid grease that has been scraped from an exhaust system be disposed of?",
        "options": [
            "A. Placed in a bucket and poured down a sanitary sewer drain.",
            "B. Combined with solid waste and disposed of in a trash receptacle.",
            "C. Melted down and collected by a rendering company.",
            "D. Placed in the grease trap."],
        "correctAnswer": "B. Combined with solid waste and disposed of in a trash receptacle.",
        "explanation": "Scraped, solid grease should be treated as solid waste and disposed of in the regular trash, not put into the plumbing system.",
        "reference": "CECS Study Guide, Page 11, 2.3.2"
    },
    {
        "question": "What is the environmental impact of disposing of kitchen exhaust cleaning wastewater into a storm drain?",
        "options": ["A. It is acceptable as the water is filtered by the city.", "B. It is illegal as storm drains flow directly to fresh bodies of water without treatment.", "C. It is acceptable if the wastewater has been neutralized to a proper pH.", "D. It is legal but discouraged by the EPA."],
        "correctAnswer": "B. It is illegal as storm drains flow directly to fresh bodies of water without treatment.",
        "explanation": "Storm drains are for rainwater runoff only and flow directly into rivers, lakes, and streams. Dumping contaminated water into them is illegal and harmful.",
        "reference": "CECS Study Guide, Page 11, 2.2.1"
    }
    //patch
    {
        "question": "In non-listed assemblies, at what minimum angle from the horizontal must filters be installed?",
        "options": ["A. 30 degrees", "B. 45 degrees", "C. 60 degrees", "D. 90 degrees"],
        "correctAnswer": "B. 45 degrees",
        "explanation": "Filters in non-listed assemblies must be installed at an angle of not less than 45 degrees from the horizontal to ensure proper grease drainage.",
        "reference": "CECS Study Guide, Page 1, 1.1"
    },
    {
        "question": "Which of the following are required at low points in horizontal ducts to allow for the removal of grease and cleaning solutions?",
        "options": ["A. Drip Pans", "B. Drains", "C. Access Panels", "D. Dampers"],
        "correctAnswer": "B. Drains",
        "explanation": "Drains shall be provided at the low points in horizontal ductwork to facilitate the removal of trapped grease and liquids.",
        "reference": "NFPA 96, 7.1.5.3"
    },
    {
        "question": "Fasteners used to secure access panels, such as bolts or wing nuts, must be made of carbon steel or stainless steel, and their installation must not do what?",
        "options": ["A. Require special tools", "B. Be completed by one person", "C. Penetrate duct walls", "D. Use locking washers"],
        "correctAnswer": "C. Penetrate duct walls",
        "explanation": "To maintain the liquid-tight integrity of the duct, fasteners for access panels shall not penetrate the duct walls.",
        "reference": "CECS Study Guide, Page 4, 5.4"
    },
    {
        "question": "Recirculating systems are only permitted to be used with which type of cooking appliances?",
        "options": ["A. Solid fuel or electric", "B. Electric or gas-fueled", "C. Gas-fueled or solid fuel", "D. Any appliance with an interlock"],
        "correctAnswer": "B. Electric or gas-fueled",
        "explanation": "Solid fuel cooking appliances are not permitted for use with recirculating systems due to the nature of their effluent.",
        "reference": "CECS Study Guide, Page 1, 1.3.2"
    },
    {
        "question": "What is the first step to take when cleaning or inspecting a multiple-pass disposable filter pollution control unit?",
        "options": ["A. Disconnect the power source", "B. Remove the filters", "C. Inspect the operation controls", "D. Check for grease accumulation"],
        "correctAnswer": "C. Inspect the operation controls",
        "explanation": "Before servicing a pollution control unit, the technician should first inspect its operational controls to ensure it is functioning correctly before shutdown.",
        "reference": "CECS Study Guide, Page 5, 1.5"
    },
    {
        "question": "After cleaning is complete, the service provider must give the owner a written report that specifies the work performed as well as what other critical information?",
        "options": ["A. The brand of chemicals used", "B. The time the service was completed", "C. Any areas that were inaccessible or not cleaned", "D. A recommendation for the next service date"],
        "correctAnswer": "C. Any areas that were inaccessible or not cleaned",
        "explanation": "The written report must be transparent and clearly identify any parts of the system that could not be serviced, either due to inaccessibility or other reasons.",
        "reference": "CECS Study Guide, Page 8, 3.1"
    },
    {
        "question": "What information must be displayed on a service company label affixed near an access panel that has been opened?",
        "options": ["A. Technician's name and certification number", "B. The service company's name and the date of service", "C. The time of day the service was performed", "D. The type of cleaning chemicals used"],
        "correctAnswer": "B. The service company's name and the date of service",
        "explanation": "A label must be placed near any opened access panel showing the name of the service company and the date the work was performed.",
        "reference": "NFPA 96, 12.6.10"
    },
    {
        "question": "Before a technician performs maintenance that requires entry into ductwork, what is the most critical initial safety procedure?",
        "options": ["A. Ensuring the technician has a radio", "B. Setting up proper fall protection", "C. Verifying the fire suppression system is charged", "D. Implementing lock-out/tag-out on the exhaust fan"],
        "correctAnswer": "D. Implementing lock-out/tag-out on the exhaust fan",
        "explanation": "De-energizing and locking out the fan is the most critical step to prevent accidental startup while a technician is inside the system.",
        "reference": "CECS Study Guide, Page 16, 2.1"
    },
    {
        "question": "Which of the following is the best definition of solid cooking fuel as defined by NFPA 96?",
        "options": ["A. Any fuel that is not a liquid or a gas", "B. Processed wood pellets and charcoal briquettes", "C. Consumable, organic material such as hardwood or mesquite", "D. Any combustible material used for flavoring"],
        "correctAnswer": "C. Consumable, organic material such as hardwood or mesquite",
        "explanation": "NFPA 96 defines solid fuel as organic, consumable materials like hardwood or charcoal, distinguishing it from mineral-based fuels.",
        "reference": "CECS Study Guide, Page 21, Definition 28"
    },
    {
        "question": "Under what specific condition may solid fuel cooking equipment share a common hood and duct system with other cooking equipment?",
        "options": ["A. When an extra fire suppression nozzle is added", "B. When the fan is upgraded for higher airflow", "C. When the solid fuel unit is gas-operated and uses the solid fuel only for flavoring, and other conditions are met", "D. When the ductwork is inspected weekly instead of monthly"],
        "correctAnswer": "C. When the solid fuel unit is gas-operated and uses the solid fuel only for flavoring, and other conditions are met",
        "explanation": "This is a specific exception allowing combined systems if the solid fuel is only for flavoring in a gas appliance, and 12 other conditions are met.",
        "reference": "CECS Study Guide, Page 12, 1.2"
    },
    {
        "question": "Unless a reduction system is used, what is the minimum clearance required between an unenclosed exhaust duct and combustible material?",
        "options": ["A. 0 in (0 mm)", "B. 3 in (76 mm)", "C. 9 in (229 mm)", "D. 18 in (457 mm)"],
        "correctAnswer": "D. 18 in (457 mm)",
        "explanation": "NFPA 96 mandates a standard clearance of 18 inches between a grease duct and any combustible materials to prevent fire spread.",
        "reference": "NFPA 96, 4.2.1"
    },
    {
        "question": "A hinged upblast fan on a rooftop must be installed so that its point of attachment to the ductwork is at least how far away from the roof surface?",
        "options": ["A. 10 in (254 mm)", "B. 18 in (457 mm)", "C. 36 in (914 mm)", "D. 40 in (1.02 m)"],
        "correctAnswer": "B. 18 in (457 mm)",
        "explanation": "To prevent heat transfer and provide adequate space for service, the fan's connection to the duct must be at least 18 inches above the roof surface.",
        "reference": "NFPA 96, 7.8.2.1(8)(a)"
    },
    {
        "question": "When a clearance reduction system using 28-gauge sheet metal on noncombustible spacers is installed, what is the new minimum clearance to combustible material?",
        "options": ["A. 3 in (76 mm)", "B. 9 in (229 mm)", "C. 12 in (305 mm)", "D. 18 in (457 mm)"],
        "correctAnswer": "B. 9 in (229 mm)",
        "explanation": "This specific, single-layer sheet metal system allows the standard 18-inch clearance to be safely reduced to 9 inches.",
        "reference": "NFPA 96, 4.2.3.1"
    },
    {
        "question": "A hinged upblast fan on a rooftop must discharge a minimum of how far away from the roof surface?",
        "options": ["A. 18 in (457 mm)", "B. 24 in (610 mm)", "C. 36 in (914 mm)", "D. 40 in (1.02 m)"],
        "correctAnswer": "D. 40 in (1.02 m)",
        "explanation": "The fan's discharge point must be at least 40 inches from the roof surface to ensure proper dispersal of exhaust and prevent grease from accumulating on the roof.",
        "reference": "NFPA 96, 7.8.2.1(8)(b)"
    },
    {
        "question": "For cooking equipment without an exposed flame where flue gases bypass the filter, the minimum vertical distance between the filter and the cooking surface can be reduced to what measurement?",
        "options": ["A. 6 in (152 mm)", "B. 9 in (229 mm)", "C. 12 in (305 mm)", "D. 18 in (457 mm)"],
        "correctAnswer": "A. 6 in (152 mm)",
        "explanation": "In this specific scenario with lower fire risk (no direct flame, bypassed flue gas), the filter clearance can be reduced to a minimum of 6 inches.",
        "reference": "NFPA 96, 6.2.1.3"
    },
    {
        "question": "What is the minimum required clearance between an unenclosed exhaust duct and limited-combustible material?",
        "options": ["A. 0 in (0 mm)", "B. 3 in (76 mm)", "C. 6 in (152 mm)", "D. 9 in (229 mm)"],
        "correctAnswer": "B. 3 in (76 mm)",
        "explanation": "While less than the clearance for combustibles, a 3-inch clearance is still required for limited-combustible materials.",
        "reference": "NFPA 96, 4.2.1"
    },
    {
        "question": "A steel baffle plate used to protect a grease removal device must be located at least how far from the device itself?",
        "options": ["A. 3 in (76 mm)", "B. 6 in (152 mm)", "C. 12 in (305 mm)", "D. 18 in (457 mm)"],
        "correctAnswer": "B. 6 in (152 mm)",
        "explanation": "The baffle plate must be positioned no less than 6 inches away from the grease filter to ensure it doesn't interfere with the filter's function or airflow.",
        "reference": "NFPA 96, 6.2.2.4"
    },
    {
        "question": "What is the minimum distance between a grease removal device and a cooking surface, unless special conditions apply?",
        "options": ["A. 12 in (305 mm)", "B. 16 in (406 mm)", "C. 18 in (457 mm)", "D. 24 in (610 mm)"],
        "correctAnswer": "C. 18 in (457 mm)",
        "explanation": "The standard minimum vertical distance between the bottom of the filter and the cooking surface is 18 inches to prevent filter fires.",
        "reference": "NFPA 96, 6.2.1.1"
    },
    {
        "question": "The requirement for a 16-inch space between a fryer and surface flames can be waived if a steel or tempered glass baffle plate of what minimum height is installed?",
        "options": ["A. 6 in (152 mm)", "B. 8 in (203 mm)", "C. 12 in (305 mm)", "D. 16 in (406 mm)"],
        "correctAnswer": "B. 8 in (203 mm)",
        "explanation": "An 8-inch high baffle plate can be used as an alternative to the 16-inch physical separation between a fryer and an open flame.",
        "reference": "NFPA 96, 13.1.2.5"
    },
    {
        "question": "A rooftop termination fan housing must have a minimum horizontal clearance of what distance from any combustible structure?",
        "options": ["A. 3 ft (0.92 m)", "B. 5 ft (1.5 m)", "C. 10 ft (3 m)", "D. 18 ft (5.5 m)"],
        "correctAnswer": "B. 5 ft (1.5 m)",
        "explanation": "To prevent ignition of combustible roof structures, the fan housing itself must be at least 5 feet away.",
        "reference": "NFPA 96, 7.8.2.1(2)"
    },
    {
        "question": "When a baffle plate is used to protect a grease removal device, it must be sized so that flames travel a distance of at least how far from the heat source to the device?",
        "options": ["A. 6 in (152 mm)", "B. 12 in (305 mm)", "C. 18 in (457 mm)", "D. 24 in (610 mm)"],
        "correctAnswer": "C. 18 in (457 mm)",
        "explanation": "The baffle must create a path that forces flames or hot gases to travel at least 18 inches before they can reach the grease filter.",
        "reference": "NFPA 96, 6.2.2.3"
    },
    {
        "question": "What is the minimum clearance between an unenclosed exhaust duct and noncombustible material?",
        "options": ["A. 0 in (0 mm)", "B. 1 in (25 mm)", "C. 3 in (76 mm)", "D. 6 in (152 mm)"],
        "correctAnswer": "A. 0 in (0 mm)",
        "explanation": "No clearance is required between a grease duct and materials that are noncombustible, such as concrete or steel.",
        "reference": "NFPA 96, 4.2.1"
    },
    {
        "question": "A rooftop exhaust outlet must have a vertical separation of what distance above any air intakes that are located within 10 feet horizontally?",
        "options": ["A. 18 in (457 mm)", "B. 2 ft (0.61 m)", "C. 3 ft (0.92 m)", "D. 5 ft (1.5 m)"],
        "correctAnswer": "C. 3 ft (0.92 m)",
        "explanation": "To prevent exhaust fumes from being drawn back into the building, the exhaust outlet must be at least 3 feet above any nearby air intakes.",
        "reference": "NFPA 96, 7.8.2.1(3)"
    },
    {
        "question": "At what measured depth of grease accumulation must a fan housing be cleaned?",
        "options": ["A. 1000 µm (0.039 in)", "B. 2000 µm (0.078 in)", "C. 2500 µm (0.098 in)", "D. 3175 µm (0.125 in)"],
        "correctAnswer": "D. 3175 µm (0.125 in)",
        "explanation": "The cleaning trigger for a fan housing is specifically set at 3175 µm (0.125 in) due to the rotational forces and fire risk.",
        "reference": "NFPA 96, 12.6.1.1.4"
    },
    {
        "question": "When a clearance reduction system using 22-gauge sheet metal on 1-inch mineral wool batts is installed, what is the new minimum clearance to combustible material?",
        "options": ["A. 3 in (76 mm)", "B. 6 in (152 mm)", "C. 9 in (229 mm)", "D. 12 in (305 mm)"],
        "correctAnswer": "A. 3 in (76 mm)",
        "explanation": "This more robust, insulated clearance reduction system allows the standard 18-inch clearance to be safely reduced to just 3 inches.",
        "reference": "NFPA 96, 4.2.3.2"
    },
    {
        "question": "Which of the following is explicitly forbidden for use as a cleaning aid in a kitchen exhaust system?",
        "options": ["A. Abrasive powders", "B. Flammable solvents", "C. High-pressure steam", "D. Caustic chemicals"],
        "correctAnswer": "B. Flammable solvents",
        "explanation": "Using flammable solvents like gasoline or mineral spirits is strictly prohibited due to the extreme risk of fire or explosion.",
        "reference": "NFPA 96, 12.6.6"
    },
    {
        "question": "Which of the following components must not have cleaning chemicals applied to them?",
        "options": ["A. Fan blades", "B. Duct access panels", "C. Fusible links", "D. Grease collection cups"],
        "correctAnswer": "C. Fusible links",
        "explanation": "Chemicals can damage or alter the triggering temperature of fusible links, compromising the fire suppression system's effectiveness.",
        "reference": "NFPA 96, 12.6.7"
    },
    {
        "question": "What is the first step that must be taken at the start of the cleaning process to ensure safety?",
        "options": ["A. Cover all cooking appliances.", "B. Notify the local fire department.", "C. Lock out electrical switches that could be accidentally activated.", "D. Test the fire suppression system."],
        "correctAnswer": "C. Lock out electrical switches that could be accidentally activated.",
        "explanation": "Before any work begins, all relevant electrical equipment, primarily the exhaust fan, must be de-energized and locked out.",
        "reference": "NFPA 96, 12.6.3"
    },
    {
        "question": "After cleaning is completed, what must be done with access panels and cover plates?",
        "options": ["A. Tagged with the date of the next required cleaning.", "B. Restored to their normal operational condition.", "C. Sealed with a temporary, non-grease-tight sealant.", "D. Left open for 24 hours to allow for ventilation."],
        "correctAnswer": "B. Restored to their normal operational condition.",
        "explanation": "All access panels must be properly re-secured to ensure the duct system is returned to its original, grease-tight, and fire-safe condition.",
        "reference": "NFPA 96, 12.6.9"
    },
    {
        "question": "Who is permitted to render a fire-extinguishing system inoperable during the cleaning process?",
        "options": ["A. Any certified cleaning technician", "B. The building owner or agent", "C. Properly trained and qualified persons servicing the system", "D. The local authority having jurisdiction"],
        "correctAnswer": "C. Properly trained and qualified persons servicing the system",
        "explanation": "Only a qualified fire suppression technician is permitted to take a system offline for service, even during cleaning.",
        "reference": "NFPA 96, 12.6.5"
    },
    {
        "question": "When working on a sloped roof, at what height must fall protection systems be utilized?",
        "options": ["A. Any height above 4 feet.", "B. Any height above 6 feet.", "C. Any height where there is a risk of a fall to a lower level.", "D. Only when the slope exceeds 4:12 pitch."],
        "correctAnswer": "B. Any height above 6 feet.",
        "explanation": "OSHA requires fall protection for any potential fall of 6 feet or more to a lower level, which is a common scenario on commercial rooftops.",
        "reference": "OSHA 1926.501(b)(1)"
    },
    {
        "question": "Before entering a duct system for cleaning, what must be done if the duct has multiple entry points?",
        "options": ["A. Only the nearest entry point needs to be secured.", "B. All entry points must be marked with a 'Caution' sign.", "C. All potential entry points must be secured and monitored.", "D. Only entry points visible from the work area need attention."],
        "correctAnswer": "C. All potential entry points must be secured and monitored.",
        "explanation": "To ensure the safety of a technician inside a duct, all possible entry points must be secured to prevent another person from entering or introducing a hazard.",
        "reference": "OSHA Confined Space Entry Procedures"
    },
    {
        "question": "What is the primary risk associated with working in an unventilated area filled with cleaning fumes?",
        "options": ["A. Increased cleaning solution evaporation.", "B. Asphyxiation or chemical poisoning.", "C. Damage to the cleaning equipment.", "D. Discoloration of the ductwork."],
        "correctAnswer": "B. Asphyxiation or chemical poisoning.",
        "explanation": "Inhaling concentrated chemical fumes in an enclosed space can quickly lead to respiratory failure, poisoning, or oxygen displacement.",
        "reference": "OSHA Hazard Communication Standard"
    },
    {
        "question": "What is a common cause of slips, trips, and falls during kitchen exhaust cleaning operations?",
        "options": ["A. Using too much water for cleaning.", "B. Grease and cleaning solution residue on floors and work surfaces.", "C. Insufficient lighting in the kitchen area.", "D. Lack of communication among team members."],
        "correctAnswer": "B. Grease and cleaning solution residue on floors and work surfaces.",
        "explanation": "The combination of water, degreaser, and grease creates an extremely slippery environment, which is a leading cause of injuries.",
        "reference": "OSHA General Safety and Health Provisions"
    },
    {
        "question": "What is the primary function of a baffle filter in a commercial kitchen exhaust system?",
        "options": ["A. To remove odors from the exhaust air.", "B. To create tortuous pathways to separate grease particles from the air.", "C. To chemically neutralize grease vapors.", "D. To provide structural support for the hood."],
        "correctAnswer": "B. To create tortuous pathways to separate grease particles from the air.",
        "explanation": "Baffle filters force the air to make sharp turns, causing heavier grease particles to impact the baffles and drain away.",
        "reference": "General Industry Knowledge"
    },
    {
        "question": "Which type of hood is designed to directly capture effluent from a cooking appliance without requiring a full canopy?",
        "options": ["A. Island canopy hood.", "B. Compensating hood.", "C. Eyebrow hood.", "D. Pass-over hood."],
        "correctAnswer": "C. Eyebrow hood.",
        "explanation": "Eyebrow hoods are small, shelf-like hoods mounted directly over appliances like convection ovens to capture their vented exhaust.",
        "reference": "CECS Study Guide, Page 2, 3.6"
    },
    {
        "question": "In a commercial kitchen, what is the general purpose of a make-up air unit?",
        "options": ["A. To filter the exhaust air before discharge.", "B. To replenish air exhausted by the hood, preventing negative pressure.", "C. To cool the cooking line.", "D. To provide backup ventilation during fan failure."],
        "correctAnswer": "B. To replenish air exhausted by the hood, preventing negative pressure.",
        "explanation": "A make-up air unit replaces the air removed by the exhaust fan, ensuring proper fan performance and preventing drafts or back-drafting of combustion appliances.",
        "reference": "General HVAC/NFPA 96 Principles"
    },
    {
        "question": "How often must filters be removed and cleaned or replaced to prevent excessive grease accumulation?",
        "options": ["A. Annually.", "B. Monthly.", "C. Weekly.", "D. As often as necessary to maintain acceptable grease levels."],
        "correctAnswer": "D. As often as necessary to maintain acceptable grease levels.",
        "explanation": "There is no single prescribed frequency; filters must be maintained often enough to prevent them from becoming heavily loaded with grease.",
        "reference": "NFPA 96, 6.1.3"
    },
    {
        "question": "What is the primary function of an access panel in a kitchen exhaust duct system?",
        "options": ["A. To allow for airflow measurement.", "B. To permit inspection and cleaning of the duct interior.", "C. To provide a point for chemical injection.", "D. To mount auxiliary equipment."],
        "correctAnswer": "B. To permit inspection and cleaning of the duct interior.",
        "explanation": "Access panels are the primary means by which technicians can physically reach the interior surfaces of the ductwork for cleaning and inspection.",
        "reference": "CECS Study Guide, Page 4, 5.1"
    },
    {
        "question": "Which component of a Pollution Control Unit (PCU) is specifically designed to remove very fine grease particles using an electrical charge?",
        "options": ["A. UV-C lamp.", "B. Carbon filter.", "C. Electrostatic Precipitator (ESP).", "D. Catalytic converter."],
        "correctAnswer": "C. Electrostatic Precipitator (ESP).",
        "explanation": "An ESP works by charging grease particles with an ionizer and then collecting them on oppositely charged plates.",
        "reference": "CECS Study Guide, Page 5, 1.4.1"
    },
    {
        "question": "What is the primary method by which UV-C light systems reduce grease buildup in exhaust ducts?",
        "options": ["A. By physically scrubbing the duct surfaces.", "B. By creating a chemical reaction that oxidizes grease vapors into smaller, less adhesive particles.", "C. By heating the grease until it evaporates.", "D. By repelling grease particles with an electric field."],
        "correctAnswer": "B. By creating a chemical reaction that oxidizes grease vapors into smaller, less adhesive particles.",
        "explanation": "UV-C light, often in conjunction with ozone, breaks down grease molecules (photolysis and ozonolysis), making them less likely to stick to duct surfaces.",
        "reference": "CECS Study Guide, Page 5, 3.4"
    },
    {
        "question": "In a recirculating system, where must a listed fire damper be installed?",
        "options": ["A. At the entrance to the hood.", "B. On the discharge side of the recirculating system.", "C. Within the ductwork leading to the fan.", "D. Inside the air intake plenum."],
        "correctAnswer": "B. On the discharge side of the recirculating system.",
        "explanation": "A fire damper is required at the discharge point to prevent fire from spreading from the unit into the surrounding space.",
        "reference": "NFPA 96, 14.6.4"
    },
    {
        "question": "How does a catalytic converter typically function within a PCU to reduce emissions?",
        "options": ["A. By electrically charging particles.", "B. By oxidizing grease into dust using UV light.", "C. By converting pollutants into less harmful substances through chemical reactions.", "D. By filtering particles physically."],
        "correctAnswer": "C. By converting pollutants into less harmful substances through chemical reactions.",
        "explanation": "A catalyst facilitates a chemical reaction at a lower temperature, converting harmful pollutants like carbon monoxide and unburned hydrocarbons into carbon dioxide and water.",
        "reference": "General PCU Knowledge"
    },
    {
        "question": "What safety feature is critical for UV-C lamps in exhaust systems to prevent exposure to personnel?",
        "options": ["A. A clear glass housing.", "B. An interlock that deactivates the lamp when access panels are opened.", "C. A manual shut-off switch located outside the kitchen.", "D. A warning light that illuminates during operation."],
        "correctAnswer": "B. An interlock that deactivates the lamp when access panels are opened.",
        "explanation": "UV-C light is harmful to eyes and skin. An interlock that automatically shuts off the lamp when the system is accessed is a mandatory safety feature.",
        "reference": "General PCU/UV System Safety"
    },
    {
        "question": "What is the typical flow direction of air through an electrostatic precipitator unit?",
        "options": ["A. Fan, collecting cell, ionizer.", "B. Collecting cell, ionizer, fan.", "C. Ionizer, collecting cell, fan.", "D. Fan, ionizer, collecting cell."],
        "correctAnswer": "C. Ionizer, collecting cell, fan.",
        "explanation": "Air must first pass through the ionizer to charge the grease particles, then through the collecting cell to capture them, before finally being pulled through by the fan.",
        "reference": "General PCU Knowledge"
    },
    {
        "question": "If, upon inspection, an exhaust system is found to be contaminated with deposits, who is primarily responsible for ensuring it is cleaned?",
        "options": ["A. The local Authority Having Jurisdiction (AHJ).", "B. The certified cleaning technician.", "C. The system owner.", "D. The fire department."],
        "correctAnswer": "C. The system owner.",
        "explanation": "While the cleaning company performs the work and the AHJ enforces the code, the ultimate responsibility for maintaining the system and ensuring it is cleaned rests with the owner of the establishment.",
        "reference": "NFPA 96, 4.1.5"
    },
    {
        "question": "A commercial kitchen is equipped with a Pollution Control Unit (PCU) utilizing an Electrostatic Precipitator (ESP). During routine maintenance, a technician notes a significant drop in collection efficiency despite proper cleaning of the collecting plates. What is the most likely underlying issue?",
        "options": ["A. The UV-C lamps are at the end of their service life.", "B. The activated carbon filters are saturated.", "C. The ionizing section's electrodes are misaligned or damaged.", "D. The exhaust fan is operating at an insufficient speed."],
        "correctAnswer": "C. The ionizing section's electrodes are misaligned or damaged.",
        "explanation": "If the ionizing wires are broken or misaligned, they cannot properly charge the incoming grease particles, rendering the collecting plates ineffective regardless of how clean they are.",
        "reference": "General PCU Troubleshooting"
    },
    {
        "question": "An exhaust system incorporates a UV-C light technology for grease reduction. Which of the following best describes the primary mechanism by which UV-C contributes to this reduction?",
        "options": ["A. It physically burns off accumulated grease deposits within the duct.", "B. It creates ozone, which then chemically neutralizes grease particles.", "C. It uses short-wavelength radiation to oxidize grease vapors, making them less adhesive.", "D. It causes grease particles to clump together, facilitating their capture by baffle filters."],
        "correctAnswer": "C. It uses short-wavelength radiation to oxidize grease vapors, making them less adhesive.",
        "explanation": "UV-C radiation breaks down the molecular bonds in grease vapors (photolysis) and also creates ozone which further oxidizes them (ozonolysis), turning them into a less sticky, powder-like substance.",
        "reference": "CECS Study Guide, Page 5, 3.4 (Implied)"
    },
    {
        "question": "How often must the total operation of a recirculating system be inspected and tested by qualified service personnel?",
        "options": ["A. Quarterly.", "B. Every 6 months.", "C. Annually.", "D. Bi-annually."],
        "correctAnswer": "B. Every 6 months.",
        "explanation": "While internal components are cleaned more frequently, the entire operational test of a recirculating system is required on a semi-annual basis.",
        "reference": "CECS Study Guide, Page 1, 1.3.1"
    },
    {
        "question": "A critical safety component in a recirculating system is a listed fire damper. Where is this damper typically required to be installed to prevent fire spread?",
        "options": ["A. At the entrance to the exhaust hood.", "B. Within the return air plenum directly before the supply fan.", "C. On the discharge side of the recirculating system before re-entry into the conditioned space.", "D. Immediately upstream of the grease removal devices."],
        "correctAnswer": "C. On the discharge side of the recirculating system before re-entry into the conditioned space.",
        "explanation": "To prevent a fire within the unit from spreading into the occupied space, a fire damper is required at the final discharge point.",
        "reference": "NFPA 96, 14.6.4"
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
