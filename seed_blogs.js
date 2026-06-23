import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, where, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBV93yApz0oyCc3oLSO1UDFC3CdXtfZ6Fo",
    authDomain: "lasak-technologies.firebaseapp.com",
    projectId: "lasak-technologies",
    storageBucket: "lasak-technologies.firebasestorage.app",
    messagingSenderId: "367519660603",
    appId: "1:367519660603:web:795d23468f040e184e3a1e",
    measurementId: "G-F5GCBD931C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const newBlogs = [
    {
        title: "CNG Plant Design and Development",
        slug: "cng-plant-design",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600",
        excerpt: "A deep dive into high-pressure CNG plant design, process piping, compressor skids, storage cascades, and safety compliance under ASME and NFPA standards.",
        content: `
            <h2>Introduction</h2>
            <p>Compressed Natural Gas (CNG) stations are essential assets in the modern transition toward alternative fuels. However, designing and developing a CNG plant demands strict mechanical design validation, precise hydraulic profiling, and high-pressure system safety integration. Delivering a scalable CNG plant requires combining compressor engineering, storage cascade configurations, gas dispensing controls, and extensive regulatory compliance. At Lasak Technologies, our engineering group utilizes advanced 3D CAD modeling, piping calculations, and thermodynamic simulations to design CNG plants that operate with maximum efficiency, safety, and reliability.</p>
            
            <h2>Process Flow and Mechanical Design</h2>
            <p>A standard CNG plant functions by taking low-pressure natural gas from a pipeline network, passing it through filtration systems, compressing it to ultra-high pressures (typically 200–250 bar), and storing it in Cascade Cylinder Banks before dispensing it into vehicles. The design of these systems involves complex mechanical engineering and thermodynamic equations.</p>
            <p>The core compressor design uses reciprocating, multi-stage compressors. Since compressing gas generates intense thermal energy, we incorporate interstage gas coolers (heat exchangers) to maintain temperatures below critical levels, preventing seal damage and minimizing gas density loss. During the design phase, our engineers conduct transient pipe stress analysis under ASME B31.3 to ensure the high-pressure piping manifolds can withstand vibrational stresses and pressure surges during start-stop cycles.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Multi-Stage Compression:</strong> High-efficiency compressor skids up to 250 bar.</li>
                <li><strong>Cascade Control Panels:</strong> Optimized sequential refueling paths.</li>
                <li><strong>ATEX/IECEx Containment:</strong> Integrated safety detection loops and shut-off valves.</li>
                <li><strong>Modular Skid Framing:</strong> Simplifies civil site preparation and deployment.</li>
            </ul>

            <h2>Applications</h2>
            <p>Typical plant configurations include retail CNG stations for local fleets, high-capacity depots for public transport systems, and Mother-Daughter logistics networks for remote off-grid distribution.</p>
            
            <h2>Benefits</h2>
            <p>Optimized plant designs reduce power usage by 15%, extend equipment life to over 20,000 hours, and guarantee swift refueling turnaround without pressure drop delays.</p>

            <h2>FAQ</h2>
            <p><strong>Q: What standards govern CNG station piping?</strong><br>A: ASME B31.3 (Process Piping) and NFPA 52 (Vehicular Natural Gas Code) are the main standards.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "Dew Point Sensor",
        slug: "dew-point-sensor",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600",
        excerpt: "An in-depth review of dew point sensors, relative humidity calculations, thin-film polymer dielectric plates, and calibration for high-pressure gas distribution.",
        content: `
            <h2>Introduction</h2>
            <p>Moisture is a highly damaging contaminant in industrial gas pipelines, clean rooms, petrochemical processes, and compressed air grids. Left unchecked, water vapor condenses inside metal pipes, triggering rapid chemical oxidation (corrosion), forming solid methane-water structures (hydrates) that clog lines, and damaging sensitive downstream pneumatic tools. Determining absolute moisture levels under pressure requires measuring the dew point temperature. A modern dew point sensor must combine material physics, mechanical packaging, digital signal filters, and precise calibration algorithms to register trace moisture levels accurately down to parts per million (ppm).</p>
            
            <h2>Sensor Mechanics and Material Selection</h2>
            <p>To measure dew point down to extreme dry-air limits (e.g. -60°C or -80°C), modern instrumentation relies on two main sensor styles: capacitive metal-oxide/polymer sensors and high-precision optoelectronic chilled mirror hygrometers.</p>
            <p>Capacitive sensors feature a planar capacitor structure fabricated on a silicon substrate. The dielectric layer consists of a highly porous polymer or a ceramic metal-oxide (typically aluminum oxide, Al2O3). The top electrode is a gas-permeable thin gold layer, which allows moisture to diffuse into the pores of the dielectric layer. Because water has a very high relative permittivity compared to the polymer or air, even minute volumes of absorbed moisture change the overall dielectric constant. This alters the sensor's electrical capacitance.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Planar Capacitive Layer:</strong> Highly porous metal oxide for trace water vapor capture.</li>
                <li><strong>Integrated RTD Probes:</strong> High-precision temperature sensors for real-time offset corrections.</li>
                <li><strong>High-Pressure Sleeve:</strong> Machined 316L housings rated up to 350 bar.</li>
                <li><strong>Micro-Processor Filtering:</strong> Ignores oil aerosols and solvents.</li>
            </ul>

            <h2>Applications</h2>
            <p>Dew point sensors are commonly integrated into desiccant compressed air dryers, clean semiconductor manufacturing fabrication rooms, and natural gas processing loops.</p>
            
            <h2>Benefits</h2>
            <p>Accurate trace measurement prevents piping corrosion, saves up to 25% energy by optimizing dryer regeneration cycles, and improves chemical process yields.</p>

            <h2>FAQ</h2>
            <p><strong>Q: What is the difference between relative humidity and dew point?</strong><br>A: Relative humidity is temperature-dependent and represents relative saturation, whereas dew point is the physical temperature at which condensation begins, providing an absolute measure of moisture.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "Vibration Sensor",
        slug: "vibration-sensor",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=600",
        excerpt: "Understanding vibration sensors, accelerometers, FFT spectrum transformations, and predictive maintenance in compliance with ISO 10816 standards.",
        content: `
            <h2>Introduction</h2>
            <p>Industrial rotating machinery, including massive multi-stage compressors, high-speed turbines, water pumps, and gearboxes, generates signature mechanical forces. When a component degrades—such as a bearing developing fatigue cracks, a shaft running out of alignment, or a rotor losing mass balance—the mechanical vibration signature changes. Detecting these microscopic shifts before catastrophic mechanical failure occurs is the goal of predictive maintenance. The design of industrial vibration sensors and accelerometers combines high-speed structural dynamics, crystal material physics, digital signal processing algorithms, and robust hermetic packaging.</p>
            
            <h2>Accelerometer Technology & Frequency Analysis</h2>
            <p>Modern industrial vibration monitoring uses accelerometers that convert mechanical motion into electrical voltage. There are two primary types used: Piezoelectric Accelerometers and MEMS (Micro-Electro-Mechanical Systems) Accelerometers.</p>
            <p>Piezoelectric sensors utilize a seismic mass preloaded against a piezoelectric crystal element (such as quartz or lead zirconate titanate, PZT). When subjected to acceleration, the seismic mass exerts a dynamic force on the crystal. This compressive or shear stress shifts ion charges within the crystal lattice, creating an electrical charge proportional to the acceleration force. These raw charges are amplified and converted into a voltage signal inside the sensor using an internal micro-amplifier.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Piezoelectric Crystals:</strong> Quartz elements for superior high-frequency tracking.</li>
                <li><strong>On-Board FFT Compute:</strong> Converts time-domain signals to frequency spectrums.</li>
                <li><strong>Wide Bandwidth:</strong> Flat frequency response from 2 Hz up to 15 kHz.</li>
                <li><strong>Hermetic Seals:</strong> IP68 welded steel housings for harsh petrochemical environments.</li>
            </ul>

            <h2>Applications</h2>
            <p>Common applications include steam and gas turbine vibration monitoring, cooling tower gearboxes, and reciprocating compressor head diagnostics.</p>
            
            <h2>Benefits</h2>
            <p>Condition-based monitoring prevents unscheduled shutdowns, cuts maintenance repair costs by up to 90%, and improves mechanical plant safety.</p>

            <h2>FAQ</h2>
            <p><strong>Q: What velocity metrics are used for ISO standards?</strong><br>A: RMS velocity (in mm/s or inches/s) is the industry standard for evaluating machine vibration health under ISO 10816.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "Pressure Sensor",
        slug: "pressure-sensor",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?q=80&w=600",
        excerpt: "Piezoresistive pressure sensors, isolation diaphragms, Wheatstone bridge layouts, and calibration protocols for high-pressure process systems.",
        content: `
            <h2>Introduction</h2>
            <p>Pressure measurement is the single most critical variable monitored in process control networks, fluid storage facilities, clean water lines, and oil-gas distribution skids. Accurate readings prevent line overpressurization, manage pump speed cycles, and record mass flow profiles. Delivering a reliable industrial pressure transmitter requires combining silicon microstructure physics, robust metallic diaphragm engineering, stable analog-to-digital signal converters (ASICs), and vibration-resistant thread packaging. At Lasak Technologies, our engineering team details, designs, and validates pressure transmitters built to operate with high repeatability in harsh industrial conditions.</p>
            
            <h2>Transducer Technology & Signal Conditioning</h2>
            <p>At the heart of modern industrial pressure transmitters is the piezoresistive transducer chip. This sensor uses high-purity single-crystal silicon. Piezoresistive structures are diffused directly onto the silicon diaphragm using photolithographic masking and boron doping techniques. When pressure bends the diaphragm, the atomic lattice of the silicon strain gauges deforms, altering their electrical resistivity. This resistance change is measured using a balanced Wheatstone bridge circuit. The bridge translates small resistance changes into a differential voltage signal (millivolts) that is proportional to the applied pressure.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Boron-Doped Silicon Die:</strong> High-sensitivity piezoresistive strain detection.</li>
                <li><strong>Isolation Diaphragms:</strong> 316L or Hastelloy seals separating the sensor from the process.</li>
                <li><strong>ASIC Signal Processing:</strong> Converts bridge voltages to standard 4-20 mA loop outputs.</li>
                <li><strong>HART Communication:</strong> Overlays digital diagnostics onto loop currents.</li>
            </ul>

            <h2>Applications</h2>
            <p>Transmitters are commonly integrated into high-pressure gas pipelines, industrial steam boilers, and hydraulic fluid power manifolds.</p>
            
            <h2>Benefits</h2>
            <p>Piezoresistive designs achieve high accuracy (under 0.075% of span), resist chemical corrosion, and provide long-term calibration stability.</p>

            <h2>FAQ</h2>
            <p><strong>Q: Why is silicone oil used inside transmitters?</strong><br>A: Silicone oil acts as a hydraulic coupling fluid, transferring process pressures from the metallic isolation diaphragm to the inner silicon chip.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "Humidity Sensor",
        slug: "humidity-sensor",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600",
        excerpt: "Design principles of capacitive humidity transmitters, thin-film polymer dielectric layers, and environmental calibration standards.",
        content: `
            <h2>Introduction</h2>
            <p>Humidity levels are a critical variable in environmental control, pharmaceutical packing, agricultural storage, and meteorological monitoring. Excessive relative humidity (RH) fosters biological mold growth, corrodes electrical contacts, and ruins dry powders. Conversely, low humidity generates electrostatic discharge risks in semiconductor factories. Designing a high-accuracy, long-term stable humidity transmitter requires blending polymer materials science, circuit design, thermal modeling, and dust-resistant packaging. At Lasak Technologies, our engineering team designs and calibrates relative humidity instruments configured to deliver rapid response times and minimal drift.</p>
            
            <h2>Capacitive Dielectric Elements & Temp Correction</h2>
            <p>Most high-performance humidity instruments use capacitive thin-film polymer sensors. The structure is built on a ceramic or silicon substrate. First, a base metal electrode is deposited. Then, a thin dielectric layer of hygroscopic polymer is coated over the base electrode. Finally, a gas-permeable top gold electrode is deposited. As ambient humidity changes, water molecules pass through the top gold layer into the polymer. The dielectric constant of water increases the overall capacitance, which is converted to relative humidity.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Thin-Film Polymer:</strong> Absorbs water molecules selectively.</li>
                <li><strong>On-Chip RTD Sensor:</strong> Integrated thermal probe enabling active calculation curves.</li>
                <li><strong>Integrated Logic ASIC:</strong> Performs local data linearization and output coding.</li>
                <li><strong>Sintered PTFE Filter:</strong> Hydrophobic cap blocking water droplets and dust.</li>
            </ul>

            <h2>Applications</h2>
            <p>Widely utilized in hospital clean rooms, automated greenhouses, and high-temperature wood drying kilns.</p>
            
            <h2>Benefits</h2>
            <p>Delivers high relative humidity accuracy (±1.5% RH), responds to humidity changes in seconds, and provides long-term stability in corrosive environments.</p>

            <h2>FAQ</h2>
            <p><strong>Q: Why is a PTFE filter necessary on humidity probes?</strong><br>A: Porous PTFE allows water vapor to pass through freely while blocking liquid water droplets and dust that would damage the polymer dielectric.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "Dynamic Reducer",
        slug: "dynamic-reducer",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=600",
        excerpt: "High-torque planetary speed reducers, AGMA gear stress calculations, and backlash optimization for robotic and industrial drives.",
        content: `
            <h2>Introduction</h2>
            <p>Heavy-duty automation, dynamic crane drives, CNC machining centers, and electric vehicle drivetrains demand high mechanical efficiency, extreme torque density, and rapid angular acceleration. Meeting these specs is impossible with legacy parallel-shaft worm gearboxes. Instead, modern mechanical engineering utilizes planetary dynamic reducers. Designing these high-performance gearboxes combines micro-profile gear geometry, contact stress calculations (AGMA standards), dynamic backlash control mechanisms, and advanced hydrodynamic lubrication layouts. At Lasak Technologies, our engineering group designs, simulates, and optimizes dynamic reducers built for heavy duty profiles.</p>
            
            <h2>Coaxial Planetaries & Contact Stress Calculations</h2>
            <p>A planetary gear reducer consists of a central sun gear, multiple planet gears supported by a carrier frame, and an outer ring gear housing. Coaxial load sharing balances mechanical loads across multiple planet gears, providing superior torque density compared to spur gear assemblies. During the design phase, we execute contact stress simulations under AGMA 2001-D04 guidelines to model gear teeth contact points and evaluate root fillet stress profiles.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Helical Planet Assemblies:</strong> Smoother tooth contact and load distribution.</li>
                <li><strong>Tuned Low-Backlash:</strong> Backlash restricted to under 3 arc-minutes.</li>
                <li><strong>Splash Lubrication Channels:</strong> Directs oil into planet needle bearings.</li>
                <li><strong>Cast Iron Casing:</strong> Nodular cast iron with integrated cooling ribs.</li>
            </ul>

            <h2>Applications</h2>
            <p>Commonly integrated in industrial robotic joint actuators, CNC positioning axes, and heavy EOT crane hoist assemblies.</p>
            
            <h2>Benefits</h2>
            <p>Achieves 97% mechanical efficiency, provides high torque density, eliminates axis drift, and extends service life up to 20,000 hours.</p>

            <h2>FAQ</h2>
            <p><strong>Q: What is gear backlash?</strong><br>A: Backlash is the clearance gap between mating gear teeth, which can cause angular positioning errors during rotation reversals.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "Dynamic Flow Meter",
        slug: "dynamic-flow-meter",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600",
        excerpt: "Flow meter design, vortex shedding, Von Kármán effect, ultrasonic transit-time sensors, and velocity profile calibration.",
        content: `
            <h2>Introduction</h2>
            <p>Accurate measurement of fluid and gas velocity inside piping networks is critical in energy metering, chemical processing, municipal water grids, and CNG dispensing systems. Under high pressures and shifting velocities, standard turbine flow meters with mechanical gears wear out and fail. Modern flow measurement relies on dynamic, solid-state flow meters. Designing these instruments requires combining fluid mechanics, piezoelectric or ultrasonic sensor systems, digital signal noise filtering, and high-pressure metallic flanged casings. At Lasak Technologies, our engineering team designs and calibrates high-performance flow meters built for dynamic systems.</p>
            
            <h2>Shedder Bluff Bodies & Ultrasonic Delta Time</h2>
            <p>Dynamic flow meters achieve measurement accuracy by using advanced fluid dynamics principles, primarily vortex shedding and ultrasonic transit-time techniques. Vortex shedding meters place a vertical bluff body in the flow. As fluid passes, it generates alternating low-pressure swirls called Von Kármán vortices. The shedding frequency is directly proportional to fluid velocity. Ultrasonic flow meters transmit sound waves upstream and downstream, using the transit-time difference (delta) to calculate flow velocity.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Bluff Obstruction body:</strong> Generates alternating Von Kármán vortices.</li>
                <li><strong>Transit-Time Transducers:</strong> Piezoelectric elements transmitting high-frequency pulses.</li>
                <li><strong>Integrated Flow DSP:</strong> On-board calculation of fluid density and viscosity.</li>
                <li><strong>Coaxial Flanged Housing:</strong> One-piece CF8M steel rated up to 250 bar.</li>
            </ul>

            <h2>Applications</h2>
            <p>Typical applications include industrial steam line monitoring, CNG station refueling loops, and city water distribution headers.</p>
            
            <h2>Benefits</h2>
            <p>Features zero moving parts to wear out, provides a wide flow turndown range, minimizes pressure drops, and provides real-time digital diagnostics.</p>

            <h2>FAQ</h2>
            <p><strong>Q: Why are straight piping runs required before flow meters?</strong><br>A: Valves and elbows generate fluid swirls. Straight runs (10-20 diameters upstream) are required to allow the velocity profile to stabilize.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "JCB Toy Modelling",
        slug: "jcb-toy-modelling",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1581091870627-849cc7c1b525?q=80&w=600",
        excerpt: "3D CAD parametric modeling of toy backhoes, kinematic joint linkages, and DFM injection molding parameters.",
        content: `
            <h2>Introduction</h2>
            <p>Designing functional toy models of heavy industrial equipment like JCB excavators demands more than aesthetic scale duplication. It requires detailed mechanical joint design, structural wall thickness engineering, robust assembly snap-fits, and strict Design for Manufacturing (DFM) layout validation for injection molding. A functional toy model must look realistic, withstand impact drops, and operate smoothly. At Lasak Technologies, our engineering group utilizes parametric 3D CAD suites to design toy models that blend high visual detail with robust mechanical structures ready for tooling.</p>
            
            <h2>Linkage Constraints & Mold Core-Cavity Layouts</h2>
            <p>The process of modeling a JCB toy begins by compiling structural dimensions and photo references of the full-scale machine. Using parametric CAD software, we reconstruct the chassis, cabin, loader, and backhoe boom as separate parts. The backhoe links are rigged as mechanical linkages using double-shear brackets and pin joints. Every part undergoes strict DFM reviews to enforce draft angles of 1.5° to 2° and ensure uniform wall thickness (2.0mm to 2.5mm), preventing surface sink marks.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Parametric Linkage Assemblies:</strong> Functional backhoe arms and bucket joints.</li>
                <li><strong>DFM Mold Ejection Angles:</strong> 1.5° to 2° draft angles on all core ribs.</li>
                <li><strong>Cantilever Snap-Fits:</strong> Simple boltless part assembly connections.</li>
                <li><strong>Concealed Parting Lines:</strong> Splitting planes placed along cosmetic edges.</li>
            </ul>

            <h2>Applications</h2>
            <p>Applied in mass-production toy manufacturing, high-fidelity promotional scale models, and educational assembly kits.</p>
            
            <h2>Benefits</h2>
            <p>Reduces tooling revisions, ensures high structural durability against drop damage, and simplifies factory assembly lines.</p>

            <h2>FAQ</h2>
            <p><strong>Q: What plastics are selected for functional toy joints?</strong><br>A: ABS is preferred for main structural chassis and arms due to its rigidity, while POM is selected for high-wear hinge pins.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "Metal Frame Cage",
        slug: "metal-frame-cage",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600",
        excerpt: "Structural weldment design, finite element analysis stress mapping, AWS D1.1 compliance, and corrosion protection for industrial cages.",
        content: `
            <h2>Introduction</h2>
            <p>Heavy machinery systems, material containment enclosures, safety barriers, and factory retrofitting platforms rely on heavy structural steel support. Designing a durable metal frame cage demands strict stress calculations, proper weld design under AWS guidelines, secure bolt connection shear calculations, and long-term corrosion shielding. A structural cage must resist static loads, dynamic vibrations, and localized impact loads. At Lasak Technologies, our engineering group utilizes advanced structural analysis software, weldment detailing suites, and finite element modeling (FEA) to engineer metal frame cages that combine high load margins with cost-effective manufacturing processes.</p>
            
            <h2>Steel member Selection & Weld Safety calculations</h2>
            <p>Structural engineering for metal cages starts by analyzing load paths. The frame skeleton is built using standard steel profiles like Hollow Structural Sections (HSS), channel beams, and angle iron. We specify ASTM A36 carbon steel, which offers a yield strength of 250 MPa, good weldability, and mechanical ductility. We model joint geometries under AWS D1.1 standards, calculating fillet weld throat sizes to match tube shear stresses and prevent failure.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>AISC Structural Detailing:</strong> Optimized members for high-load containment.</li>
                <li><strong>FEA Load Simulation:</strong> Structural modeling evaluating Von Mises stresses.</li>
                <li><strong>Grade 8.8 Bolted Connections:</strong> High-tensile fasteners calculated for peak shear.</li>
                <li><strong>Galvanized Shielding:</strong> Hot-dip zinc coating blocking oxidation.</li>
            </ul>

            <h2>Applications</h2>
            <p>Utilized as heavy factory machine guarding cages, CNG storage skid containment frames, and plant retrofitting platforms.</p>
            
            <h2>Benefits</h2>
            <p>Guarantees safety factors exceeding 2.0, provides modular sub-assemblies for easy shipping, and resists dynamic vibration fatigue.</p>

            <h2>FAQ</h2>
            <p><strong>Q: Why is hot-dip galvanizing preferred over paint?</strong><br>A: Galvanizing creates a metallurgically bonded zinc-iron alloy coating, providing physical barriers and sacrificial cathodic protection.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "Sensor Lock",
        slug: "sensor-lock",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600",
        excerpt: "Design of smart sensor locks, electromagnetic solenoids, Hall-effect status checks, PC-ABS enclosure DFM, and power management loops.",
        content: `
            <h2>Introduction</h2>
            <p>Smart building security, safe locker containment, automated access control loops, and logistics container seals require rugged, low-power, and secure locking mechanisms. Standard mechanical locks lack digital logs and remote override verification. Delivering a secure, smart sensor lock demands integrating electromagnetic solenoids, precise deadbolt position sensors, impact-safe metal castings, and weather-proof injection-molded enclosures. At Lasak Technologies, our engineering team designs smart locking devices that combine high mechanical shear limits with robust electronic status monitoring.</p>
            
            <h2>Solenoid Actuators & Status Feedback Circuits</h2>
            <p>A sensor lock functions by driving a mechanical bolt into a strike plate using an electrical actuator, while utilizing a sensor loop to verify lock status. The primary actuator is a low-power linear solenoid or a motor-driven gearbox. We design a high-reduction gearbox using Polyoxymethylene (POM) gears, which provides self-lubrication. To verify the lock is secure, we integrate a sensor array using Hall-effect ICs to track the deadbolt position, preventing false lock signals if the deadbolt is blocked.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Solenoid Actuators:</strong> Hardened steel plungers resisting forcing loads.</li>
                <li><strong>Triple Status Sensors:</strong> Hall-effect and micro-switch confirmation loops.</li>
                <li><strong>DFM Injection Molded Shell:</strong> PC-ABS enclosure with internal guide tracks.</li>
                <li><strong>Manual Override cylinder:</strong> Keyed manual bypass for safety.</li>
            </ul>

            <h2>Applications</h2>
            <p>Applied in smart commercial door security, deposit lockers, and tracked shipping container seals.</p>
            
            <h2>Benefits</h2>
            <p>Prevents false lock status signals, resists high mechanical shear, extends battery life to over a year, and maintains manual key bypass safety.</p>

            <h2>FAQ</h2>
            <p><strong>Q: What plastic is selected for smart lock housings?</strong><br>A: PC-ABS blends are selected, combining the impact strength of polycarbonate with the injection molding ease of ABS.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "Miniature Model",
        slug: "miniature-model",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600",
        excerpt: "Industrial miniature scale modeling, SLA 3D printing tolerances, laser-cut vector layouts, and material scaling physics.",
        content: `
            <h2>Introduction</h2>
            <p>Presenting a massive industrial plant, a complex offshore oil platform, or a detailed building development to stakeholders requires clear visualization. While digital 3D renders are useful, a physical scale miniature model provides a tactile perspective that digital screens cannot match. However, fabricating a high-fidelity miniature model requires more than printing shapes. It involves dimensional scale conversions, preparing CAD models for physical printing, utilizing high-precision SLA resin methods, and aligning laser-cut acrylic structures. At Lasak Technologies, our design group specializes in scaling and fabricating high-precision physical models of complex systems.</p>
            
            <h2>CAD Simplification & SLA Printing Tolerances</h2>
            <p>The engineering of a miniature scale model begins by scaling down the master CAD model of the facility. At standard scale factors of 1:50 or 1:100, fine features like handrails or small pipes become paper-thin and fragile. Our engineers systematically thicken structural members and widen small clearances to ensure strength. We use SLA (stereolithography) resin printing to build complex details down to 25-micron layers, ensuring a smooth, high-fidelity finish.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Precision SLA Resins:</strong> Yields smooth, highly detailed micro-components.</li>
                <li><strong>Laser-Cut MDF/Acrylic:</strong> Precision cut backing plates and grid structures.</li>
                <li><strong>Modular Interlocking Frames:</strong> Split assemblies for easy transportation.</li>
                <li><strong>High Fidelity Conversion:</strong> Scaled models preserving original CAD parameters.</li>
            </ul>

            <h2>Applications</h2>
            <p>Utilized as trade show exhibition models, process flow layout validation models, and architectural spatial planning mockups.</p>
            
            <h2>Benefits</h2>
            <p>Improves client visualization, provides spatial insights for pipe routing clearances, and enables modular shipping re-assembly.</p>

            <h2>FAQ</h2>
            <p><strong>Q: What adhesives are used to join acrylic model parts?</strong><br>A: Acrylic solvent cements are used. They chemically dissolve and fuse the contact faces, creating a clean, permanent bond.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "Multi Chamber Bio Film Analyzer",
        slug: "bio-film-analyzer",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?q=80&w=600",
        excerpt: "Microfluidic flow cell systems, bioreactor engineering, biofilm sensors, and biocompatible material selections.",
        content: `
            <h2>Introduction</h2>
            <p>Bacterial biofilms present significant challenges in clean water grids, dental lines, heat exchangers, and medical implants. Biofilms are highly resistant to chemical biocides. Evaluating biocide efficacy and biofilm removal under dynamic conditions requires laboratory flow cells. A professional multi-chamber biofilm analyzer must combine biocompatible material selection, microfluidic laminar flow design, real-time sensor loops, and steam-sterilizable enclosures. At Lasak Technologies, our engineering team designs and details multi-chamber flow systems to support microbiological research and automated biocide analysis.</p>
            
            <h2>Microfluidic laminar Flow & Bio-Impedance Sensor Arrays</h2>
            <p>Growing and testing biofilms requires replicating industrial fluid shear rates in a laboratory flow cell. The design features multiple parallel flow channels, allowing researchers to run comparative tests simultaneously. The microfluidic channels must maintain a laminar flow profile, preventing turbulence that would cause chaotic detachment. Our designs apply precise channel geometries, keeping the Reynolds number well below 2100. We machine flow cells from PEEK and integrate microelectrode arrays on the floor to track growth via electrical impedance.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Multi-Chamber Fluidics:</strong> Independent parallel flow testing paths.</li>
                <li><strong>Non-Invasive OCT Windows:</strong> Borosilicate glass windows for coherence scans.</li>
                <li><strong>Bio-Impedance Arrays:</strong> Floor microelectrodes tracking cellular growth.</li>
                <li><strong>Autoclavable Seals:</strong> PEEK block assemblies sterilizable at 121°C.</li>
            </ul>

            <h2>Applications</h2>
            <p>Applied in industrial biocide development, dental tubing biofilms research, and medical implant coatings validation.</p>
            
            <h2>Benefits</h2>
            <p>Allows parallel control testing, provides real-time growth tracking without sampling stops, and ensures sterile, clean flow cell runs.</p>

            <h2>FAQ</h2>
            <p><strong>Q: Why is PEEK selected for the flow block?</strong><br>A: PEEK is biologically inert, chemically resistant to biocides, and retains its shape during high-temperature steam sterilization.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "Methanogen Culture Jar",
        slug: "methanogen-culture-jar",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600",
        excerpt: "Anaerobic culture vessel design, vacuum-tight sealing, gas manifolds, overpressure relief valves, and biological culturing mechanics.",
        content: `
            <h2>Introduction</h2>
            <p>Developing biological research vessels, anaerobic digestion systems, and biofuel reactors requires maintaining strict oxygen-free atmospheres. Cultivating methane-producing archaea (methanogens) presents significant engineering challenges, as these organisms are highly sensitive to oxygen. A professional methanogen culture jar must combine vacuum-tight structural integrity, reliable gas purge manifolds, overpressure relief safeties, and chemical-resistant glass bodies. At Lasak Technologies, our design team constructs and details anaerobic research vessels configured to maintain strict atmospheric isolation.</p>
            
            <h2>Anaerobic Seals & Spring-Loaded Safety Valves</h2>
            <p>Cultivating anaerobic methanogens in laboratory incubators requires using specialized gas-tight containers. The jar design must allow researchers to displace all oxygen. We design dual concentric O-ring grooves in the anodized aluminum lid using Viton rubber O-rings. Viton has exceptionally low gas permeability, preventing atmospheric oxygen from diffusing through the seal. The lid integrates needle valves for vacuum purging and a spring-loaded pressure safety valve (PSV) that vents gas automatically if internal pressure exceeds 0.5 bar.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Anaerobic Viton Seals:</strong> Dual O-rings preventing oxygen ingress.</li>
                <li><strong>Needle Gas Manifold:</strong> Integrated valves for vacuum and gas backfills.</li>
                <li><strong>Safety Relief Valve:</strong> Spring safety valve preventing overpressurization.</li>
                <li><strong>Borosilicate Glass Vessel:</strong> Thick-walled autoclavable glass jar body.</li>
            </ul>

            <h2>Applications</h2>
            <p>Used in waste-to-energy biofuel research, clinical anaerobic diagnostics, and wastewater treatment process optimization.</p>
            
            <h2>Benefits</h2>
            <p>Maintains strict oxygen-free atmospheres, prevents glass bursting via safety valves, and allows direct growth inspection.</p>

            <h2>FAQ</h2>
            <p><strong>Q: How is oxygen eliminated from the jar?</strong><br>A: The jar is evacuated using a vacuum manifold, backfilled with nitrogen-carbon dioxide gas, and treated with anaerobic catalyst sachets.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    },
    {
        title: "Solar Panel Umbrella Type",
        slug: "solar-panel-umbrella",
        category: "Mechanical Projects",
        image_url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600",
        excerpt: "Design of folding solar panel umbrellas, kinematic canopy linkages, FEA structural wind loads, and integrated battery charging hubs.",
        content: `
            <h2>Introduction</h2>
            <p>Clean energy deployment in public spaces, EV charging stations, and eco-resorts requires integrating solar panels into outdoor furniture. However, rigid solar panels are bulky and vulnerable to wind damage. Designing a folding solar panel umbrella canopy demands a combination of kinematic linkages, structural engineering (FEA wind loads), flexible solar cell integration, and clean internal wiring. The umbrella must expand smoothly, maximize solar harvest, and fold into a secure configuration during storms. At Lasak Technologies, our engineering group utilizes advanced CAD modeling and structural simulations to design folding solar canopy structures.</p>
            
            <h2>Kinematic folding Links & Wind Tunnel stress mapping</h2>
            <p>A folding solar panel umbrella uses a kinematic linkage mechanism to fold solar modules into a compact shape around a central shaft. The mechanism consists of a central sliding collar, struts, and segmented canopy ribs rotating on pin joints. Flexible monocrystalline panels (22% efficiency) are bonded to the ribs, flexing slightly without damage. We perform structural FEA simulations on the canopy under lift forces from 50 km/h winds, specifying 6061-T6 structural aluminum to prevent bending.</p>
            
            <h2>Key Features</h2>
            <ul>
                <li><strong>Kinematic Folding Ribs:</strong> Interconnected linkages folding without wire twist.</li>
                <li><strong>Flexible Solar Panels:</strong> Monocrystalline cells mounted on flexible backings.</li>
                <li><strong>Wind load FEA:</strong> Linkage shapes calculated to survive wind lifts.</li>
                <li><strong>Telescopic Aluminum Shaft:</strong> Hollow shaft enclosing wiring runs.</li>
            </ul>

            <h2>Applications</h2>
            <p>Integrated as public park charging docks, eco-resort shade canopies, and emergency response power hubs.</p>
            
            <h2>Benefits</h2>
            <p>Provides independent off-grid power, folds shut for wind protection, resists rust, and prevents wire wear using integrated slip rings.</p>

            <h2>FAQ</h2>
            <p><strong>Q: How is electrical power routed down the moving canopy joints?</strong><br>A: Flexible copper cables run inside hollow ribs, connecting to a sealed electrical slip ring at the top pivot before traveling down the main pole.</p>
        `,
        published: true,
        created_at: "2026-06-23T00:00:00.000Z"
    }
];

async function seed() {
    try {
        console.log("Starting database seeding for 14 Mechanical Blogs...");
        for (const blog of newBlogs) {
            console.log(`Checking if blog "${blog.title}" exists...`);
            const q = query(collection(db, 'blogs'), where('slug', '==', blog.slug));
            const snap = await getDocs(q);
            if (snap.empty) {
                console.log(`Inserting new document for "${blog.title}"...`);
                await addDoc(collection(db, 'blogs'), blog);
                console.log(`Successfully created "${blog.title}"`);
            } else {
                console.log(`Updating existing document for "${blog.title}"...`);
                const docId = snap.docs[0].id;
                await updateDoc(doc(db, 'blogs', docId), blog);
                console.log(`Successfully updated "${blog.title}"`);
            }
        }
        console.log("Seeding process completed successfully!");
    } catch (e) {
        console.error("Error during database seeding:", e);
    }
    process.exit(0);
}

seed();
