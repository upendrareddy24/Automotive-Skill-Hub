const moduleData = {
    adas: {
        title: "ADAS & SOTIF Analysis",
        content: `
            <div class="module-header">
                <h2>ADAS Sensing & SOTIF</h2>
                <img src="assets/adas_sensor.png" class="module-img" alt="ADAS Sensor">
            </div>
            <div class="module-content">
                <p>Safety of the Intended Functionality (ISO 21448). Focused on identifying hazards caused by functional insufficiencies and foreseeable human misuse.</p>
                <div class="data-card">
                    <h4>Sensor Fusion</h4>
                    <p>Front Camera + 77GHz Radar. Cross-validation of detections to reduce False Positives (Phantom Braking).</p>
                </div>
                <div class="data-card">
                    <h4>Triggering Conditions (Edge Cases)</h4>
                    <p>Reflections from metal guardrails, heavy spray from vehicles ahead, and unconventional object shapes.</p>
                </div>
                <div class="data-card">
                    <h4>SOTIF Safety Goals</h4>
                    <p>Minimize "Unknown Hazardous" scenarios through rigorous simulation and field-testing.</p>
                </div>
            </div>
        `
    },
    steering: {
        title: "EPS Steering Systems",
        content: `
            <div class="module-header">
                <h2>Electric Power Steering (EPS)</h2>
                <div class="module-img" style="background: linear-gradient(45deg, #1e293b, #0f172a); display: flex; align-items: center; justify-content: center;">
                    <i class="fas fa-project-diagram fa-3x" style="color: var(--primary);"></i>
                </div>
            </div>
            <div class="module-content">
                <p>ISO 26262 ASIL-D critical system. Ensuring the driver maintains vehicle controllability at all times.</p>
                <div class="data-card">
                    <h4>Safety Concept: Fail-Operational</h4>
                    <p>System maintains partial assist even after a single point failure (e.g., phase loss in the 3-phase motor).</p>
                </div>
                <div class="data-card">
                    <h4>Plausibility Checks</h4>
                    <p>Torque sensor 1 vs Torque sensor 2 comparison (Redundancy). If mismatch > threshold, trigger safe state.</p>
                </div>
            </div>
        `
    },
    ecu: {
        title: "Hardware & Safety Architecture",
        content: `
            <div class="module-header">
                <h2>Inside the Safety ECU</h2>
                <img src="assets/ecu_hardware.png" class="module-img" alt="ECU Hardware">
            </div>
            <div class="module-content">
                <p>Hardware/Software architecture according to ISO 26262 Part 5 & 6. Built for maximum reliability.</p>
                <div class="data-card">
                    <h4>ASIL-D Hardware Metrics</h4>
                    <p>SPFM (Single Point Fault Metric) > 99%, LFM (Latent Fault Metric) > 90%.</p>
                </div>
                <div class="data-card">
                    <h4>CPU Safety Mechanims</h4>
                    <p>Dual-core Lockstep, ECC on RAM/Flash, and independent Hardware Watchdog.</p>
                </div>
            </div>
        `
    },
    cyber: {
        title: "Automotive Cybersecurity",
        content: `
            <div class="module-header">
                <h2>ISO 21434 & Cyber Hygiene</h2>
            </div>
            <div class="module-content">
                <p>Establishing security by design across the vehicle lifecycle.</p>
                <div class="data-card">
                    <h4>TARA (Threat Analysis)</h4>
                    <p>Identifying assets (e.g., Keys, CAN logs) and assessing impact on Safety, Privacy, Financial, and Operational domains.</p>
                </div>
                <div class="data-card">
                    <h4>SecOC (Secure Onboard Communication)</h4>
                    <p>Authenticating CAN messages using MACs (Message Authentication Codes) to prevent Replay and Spoofing attacks.</p>
                </div>
            </div>
        `
    }
};

const vModelData = {
    req: {
        title: "Requirement Engineering (ISO 26262-4 / SYS.1)",
        content: "Decomposition of Customer Requirements into System Requirements. Using DOORS/Polarion for Full Traceability. Ensuring every SR is verifiable."
    },
    arch: {
        title: "System Architecture (Part 4 / SYS.3)",
        content: "Defining Functional and Technical Safety Concepts (FSC/TSC). Allocation of requirements to hardware and software components. ASIL-D decomposition."
    },
    design: {
        title: "Software Design (ISO 26262-6 / SWE.1)",
        content: "Developing detailed design using SysML or ASCET. Focused on freedom from interference and temporal/spatial isolation."
    },
    impl: {
        title: "Implementation (Embedded C / AUTOSAR)",
        content: "Coding according to MISRA-C standards. Real-time implementation of safety-critical steering/braking algorithms."
    },
    unit: {
        title: "Software Unit Testing (SWE.4)",
        content: "100% Code Coverage (Statement, Branch, MC/DC). Verification of safety requirements at the unit level."
    },
    'sw-int': {
        title: "SW Integration (SWE.5 / SWE.6)",
        content: "Testing integrated software modules on Target Hardware. Ensuring signal flow and interface consistency."
    },
    'sys-int': {
        title: "System Integration (SYS.4 / SYS.5)",
        content: "Vehicle-level validation. Testing ADAS functions in HIL/SIL environments and prototype vehicles."
    }
};

const vaultSkills = [
    { name: "ISO 26262", desc: "International standard for functional safety of road vehicles. Focus on ASIL-D for critical steering and braking systems." },
    { name: "HARA", desc: "Hazard Analysis and Risk Assessment. Determining Safety Goals and ASIL ratings (A-D) based on Severity, Exposure, and Controllability." },
    { name: "SOTIF (ISO 21448)", desc: "Safety of the Intended Functionality. Managing risks from functional insufficiencies (e.g. sensor limitations in fog)." },
    { name: "ASPICE", desc: "Automotive Software Process Improvement and Capability dEtermination. Ensuring high-quality engineering processes (SYS.3, SWE.1, etc.)." },
    { name: "ISO 21434", desc: "Cybersecurity standard for automotive systems. Establishing a secure lifecycle and performing TARA for threat detection." },
    { name: "FMEA / FMEDA", desc: "Failure Mode and Effects Analysis. FMEDA provides hardware architectural metrics (SPFM, LFM) for ISO 26262 compliance." },
    { name: "FTA", desc: "Fault Tree Analysis. Deductive analysis to determine the root cause of a specific system failure." },
    { name: "EPS Steering", desc: "Electric Power Steering. Design of Fail-Operational architectures and torque plausibility safety mechanisms (ASIL-D)." },
    { name: "iBooster / ESC", desc: "Electronic Stability Control and Bosch iBooster braking systems. Integration of ADAS request (ACC/AEB) with chassis actuation." }
];

document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sections.forEach(s => {
                if (s.id === targetId) {
                    s.classList.remove('hidden');
                    gsap.from(s, { opacity: 0, y: 20, duration: 0.5 });
                } else if (s.id !== 'module-panel') {
                    s.classList.add('hidden');
                }
            });
        });
    });

    // Hotspots (Dashboard Only)
    const hotspots = document.querySelectorAll('.hotspot');
    const panel = document.getElementById('module-panel');
    const content = document.getElementById('module-content');
    const closeBtn = document.querySelector('.close-btn');

    hotspots.forEach(spot => {
        spot.addEventListener('click', () => {
            const moduleId = spot.getAttribute('data-module');
            const data = moduleData[moduleId];
            if (data) {
                content.innerHTML = data.content;
                panel.classList.remove('hidden');
                setTimeout(() => panel.classList.add('active'), 50);
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        panel.classList.remove('active');
        setTimeout(() => panel.classList.add('hidden'), 600);
    });

    // V-Model Interactions
    const vSteps = document.querySelectorAll('.v-step');
    const vInfo = document.getElementById('v-info-panel');
    vSteps.forEach(step => {
        step.addEventListener('click', () => {
            const key = step.getAttribute('data-info');
            const data = vModelData[key];
            vInfo.innerHTML = `<h3>${data.title}</h3><p style="margin-top:10px">${data.content}</p>`;
            gsap.from(vInfo, { scale: 0.95, opacity: 0.8, duration: 0.3 });
        });
    });

    // Vault Implementation
    const vaultGrid = document.getElementById('vaultGrid');
    const vaultSearch = document.getElementById('vaultSearch');

    function renderVault(filter = '') {
        vaultGrid.innerHTML = '';
        vaultSkills
            .filter(s => s.name.toLowerCase().includes(filter.toLowerCase()) || s.desc.toLowerCase().includes(filter.toLowerCase()))
            .forEach(skill => {
                const card = document.createElement('div');
                card.className = 'vault-card';
                card.innerHTML = `<h3>${skill.name}</h3><p>${skill.desc}</p>`;
                vaultGrid.appendChild(card);
            });
    }

    vaultSearch.addEventListener('input', (e) => renderVault(e.target.value));
    renderVault();

    // HW Points
    const hwPoints = document.querySelectorAll('.hw-point');
    const hwInfo = document.getElementById('hw-info');
    hwPoints.forEach(p => {
        p.addEventListener('mouseenter', () => {
            const type = p.getAttribute('data-hw');
            if (type === 'cpu') hwInfo.innerHTML = "<h3>Main CPU</h3><p>Dual-core Lockstep R52 processor. Executes steering/braking algorithms with real-time safety monitoring.</p>";
            if (type === 'pmic') hwInfo.innerHTML = "<h3>Power Management</h3><p>Monitors voltage rails and handles graceful shutdown/fail-safe transitions.</p>";
            if (type === 'comms') hwInfo.innerHTML = "<h3>Network I/O</h3><p>CAN-FD and Automotive Ethernet for high-speed ADAS object communication.</p>";
        });
    });

    // Initial animations
    gsap.from(".navbar", { duration: 1, y: -100, opacity: 0, ease: "power4.out" });
    gsap.from(".dashboard-header", { duration: 1, delay: 0.3, y: 50, opacity: 0, ease: "power4.out" });
    gsap.from(".vehicle-svg-wrapper", { duration: 1.5, delay: 0.6, scale: 0.8, opacity: 0, ease: "power2.out" });
});
