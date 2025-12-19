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

document.addEventListener('DOMContentLoaded', () => {
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

    // Initial animations
    gsap.from(".navbar", { duration: 1, y: -100, opacity: 0, ease: "power4.out" });
    gsap.from(".dashboard-header", { duration: 1, delay: 0.3, y: 50, opacity: 0, ease: "power4.out" });
    gsap.from(".vehicle-svg-wrapper", { duration: 1.5, delay: 0.6, scale: 0.8, opacity: 0, ease: "power2.out" });
});
