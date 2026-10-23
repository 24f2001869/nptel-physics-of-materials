/**
 * NPTEL Physics of Materials (Course 113106040)
 * Comprehensive Study & Exam Prep Dataset
 */

const NPTEL_DATA = {
  courseTitle: "Physics of Materials",
  courseCode: "113106040",
  instructor: "Dr. Prathap Haridoss (IIT Madras)",
  currentWeek: 12,
  weeks: [
    {
      id: 1,
      number: 1,
      title: "Introduction, Properties of Materials & Thermal Expansion",
      lectures: "Lectures 1 - 3",
      status: "active",
      summary: "Engineering vs scientific paradigms, empirical vs first-principles models, validity boundaries, positive thermal resistivity coefficient of metals, elastic modulus from linear stress-strain region, corrosion in circuits, thermal expansion mechanisms, asymmetric potential well E(r), and bimetallic strip applications.",
      studyMaterials: {
        quickOverview: "Week 1 introduces materials physics through the dual lenses of industrial engineering and fundamental science. While engineers address practical performance, reliability, and processability (such as whether a batch of rubber is stickier or if a component resists corrosion), scientists investigate atomic-scale mechanisms, crystal structure, and chemical bonding (such as polymer crosslinking density).\\n\\nModels without fundamental scientific derivations are termed empirical models; every model has defined validity boundaries beyond which its assumptions fail. In thermal physics, metals exhibit a positive temperature coefficient of resistivity because thermal lattice vibrations scatter electrons. Under tensile loading, Hooke's law yields the modulus of elasticity from the linear elastic slope. Crucially, thermal expansion arises directly from the asymmetry (anharmonicity) of the interatomic potential energy curve E(r): as thermal energy increases, atoms oscillate between turning points whose midpoint shifts outward, causing net expansion. This effect is exploited in bimetallic strips and must be engineered around in structural joints.",
        
        formulaSheet: [
          { name: "Linear Thermal Expansion", formula: "\\Delta L = \\alpha_L L_0 \\Delta T", units: "m (with \\alpha_L \\text{ in } \\text{K}^{-1})", desc: "Change in length proportional to initial length and temperature change." },
          { name: "Volumetric Thermal Expansion", formula: "\\Delta V = \\beta V_0 \\Delta T \\approx 3\\alpha_L V_0 \\Delta T", units: "m³", desc: "Isotropic volumetric expansion coefficient is approximately three times linear coefficient." },
          { name: "Hooke's Law (Elastic Modulus)", formula: "\\sigma = E \\epsilon \\iff E = \\frac{d\\sigma}{d\\epsilon}", units: "Pa (or GPa)", desc: "Young's modulus obtained from the slope of the linear elastic region of stress-strain curve." },
          { name: "Thermal Resistivity of Metals", formula: "\\rho(T) = \\rho_0 [1 + \\alpha_R (T - T_0)] \\quad (\\alpha_R > 0)", units: "\\Omega\\cdot\\text{m}", desc: "Metals have a positive temperature coefficient of electrical resistivity due to phonon scattering." },
          { name: "Interatomic Potential Energy", formula: "E(r) = -\\frac{A}{r^m} + \\frac{B}{r^n} \\quad (n > m)", units: "Joules (or eV)", desc: "Asymmetry between long-range attraction and steep short-range repulsion causes thermal expansion." },
          { name: "Radius of Curvature in Bimetallic Strip", formula: "\\frac{1}{R} \\propto (\\alpha_2 - \\alpha_1) \\Delta T", units: "m⁻¹", desc: "Bending curvature driven by the differential thermal expansion coefficients of bonded metals." }
        ],

        lecturesBreakdown: [
          {
            lectureNo: 1,
            title: "Lecture 1: Introduction to Materials Physics",
            bullets: [
              "Engineer vs Scientist Perspectives: Engineers optimize macroscopic performance, yield, and commercial reliability (e.g., rubber stickiness, corrosion prevention); scientists probe microscopic origins (e.g., polymer crosslinking degree, electronic states).",
              "Model Classification: Empirical models fit experimental observations without deep fundamental theory; first-principles models derive macroscopic properties directly from quantum and thermodynamic laws.",
              "Model Boundaries: A model is reliable and valid only within its verified envelope of assumptions, and is useless beyond those limits."
            ]
          },
          {
            lectureNo: 2,
            title: "Lecture 2: Mechanical & Electrical Properties of Materials",
            bullets: [
              "Stress-Strain Curve: Modulus of elasticity (Young's modulus $E$) is determined strictly from the slope of the initial linear elastic regime, representing interatomic spring stiffness.",
              "Resistivity Temperature Coefficient: Metals exhibit positive thermal resistivity coefficients ($\alpha_R > 0$) because rising temperature amplifies lattice vibrations (phonons), increasing electron collision frequency.",
              "Corrosion in Electrical Circuits: Electrical joints, circuit tracks, and contacts can corrode via galvanic, atmospheric, or fretting oxidation, degrading circuit conductivity."
            ]
          },
          {
            lectureNo: 3,
            title: "Lecture 3: Thermal Expansion & Interatomic Potentials",
            bullets: [
              "Asymmetric Potential Well: The interatomic potential $E(r)$ is asymmetric (steep short-range Pauli repulsion, gentle long-range electrostatic/van der Waals attraction).",
              "Origin of Thermal Expansion: At higher thermal energies, the mean separation between atoms shifts to larger values ($r_{\text{avg}} > r_0$). If the potential were purely parabolic/symmetric, materials would not expand upon heating.",
              "Negative Thermal Expansion: While most materials expand, specific anomalous materials contract over certain temperature windows (e.g., liquid water $0–4^\circ\text{C}$, $\text{ZrW}_2\text{O}_8$) due to transverse vibrational modes.",
              "Bimetallic Strips: Bonding two metals with different $\alpha_L$ creates predictable temperature-dependent deflection, utilized in thermostats and thermal safety cutoffs."
            ]
          }
        ],

        examTraps: [
          "Engineer vs Scientist Focus: Engineer $\\to$ Macroscopic practical questions (stickiness of rubber batch); Scientist $\\to$ Microscopic parameters (degree of crosslinking).",
          "Metals Resistivity: POSITIVE temperature coefficient (resistivity increases with temperature).",
          "Modulus of Elasticity: Derived from the LINEAR region of the stress-strain curve, not non-linear or area under curve.",
          "Potential Well Asymmetry: Asymmetric potential curve is the FUNDAMENTAL reason for thermal expansion.",
          "Heating Effect: Most materials expand, but SOME MATERIALS CONTRACT (not 'all materials expand').",
          "Corrosion in Circuits: Circuits CAN corrode."
        ]
      },

      assignmentQuestions: [
        {
          id: "W1-A1",
          number: 1,
          type: "single",
          question: "A typical engineer in a tyre industry deals with questions such as (most likely):",
          options: [
            "Is the new batch of rubber stickier than the old batch",
            "What is the bonding in the rubber side chain",
            "What are groups in the side chain",
            "What is the equivalent weight of the rubber"
          ],
          correctAnswer: 0,
          explanation: "Engineers focus on macroscopic performance, processability, and practical product characteristics (like tackiness and adhesion of rubber batches), whereas scientists focus on molecular bonding and chemical side-chain groups.\n\n**Correct Option: A.**",
          points: 1
        },
        {
          id: "W1-A2",
          number: 2,
          type: "single",
          question: "A typical scientist in a university, working on polymers, deals with questions such as (Most likely):",
          options: [
            "What is the extent of crosslinking in this polymer",
            "What should the pricing of a particular batch of polymer be",
            "Which colour of polymer will the customer like",
            "What is the best size of package for the order placed by the customer"
          ],
          correctAnswer: 0,
          explanation: "University research scientists focus on fundamental structural, chemical, and physical parameters, such as the degree of crosslinking that dictates polymer network mechanics.\n\n**Correct Option: A.**",
          points: 1
        },
        {
          id: "W1-A3",
          number: 3,
          type: "single",
          question: "Models built without complete understanding of the science behind the phenomena are referred to as",
          options: [
            "First principles models",
            "Empirical models",
            "Thermodynamic models",
            "Classical models"
          ],
          correctAnswer: 1,
          explanation: "Empirical models are derived from observed correlations and experimental fitting curves without a rigorous first-principles theoretical understanding of the underlying physics.\n\n**Correct Option: B (Empirical models).**",
          points: 1
        },
        {
          id: "W1-A4",
          number: 4,
          type: "single",
          question: "Models that are known to fail beyond some limits are",
          options: [
            "Useless and need to be discarded",
            "Useless within those limits",
            "Useless beyond those limits",
            "Are empirical"
          ],
          correctAnswer: 2,
          explanation: "Models with defined validity boundaries remain highly practical and useful within their operating envelope, but are useless beyond those limits where their underlying assumptions break down.\n\n**Correct Option: C (Useless beyond those limits).**",
          points: 1
        },
        {
          id: "W1-A5",
          number: 5,
          type: "single",
          question: "Metals have:",
          options: [
            "Negative coefficient of thermal resistivity",
            "Neutral coefficient of thermal resistivity",
            "Positive coefficient of thermal resistivity",
            "Zero coefficient of thermal resistivity"
          ],
          correctAnswer: 2,
          explanation: "In metals, electrical resistivity increases with temperature because thermal lattice vibrations (phonons) scatter conduction electrons, meaning metals possess a positive temperature coefficient of resistivity ($\\alpha_R > 0$).\n\n**Correct Option: C (Positive coefficient of thermal resistivity).**",
          points: 1
        },
        {
          id: "W1-A6",
          number: 6,
          type: "single",
          question: "The modulus of elasticity is obtained from:",
          options: [
            "The linear region of the stress strain curve",
            "The non-linear region of the stress strain curve",
            "The area under the stress strain curve",
            "The area above the stress strain curve"
          ],
          correctAnswer: 0,
          explanation: "By Hooke's law, elastic modulus $E = \\sigma / \\epsilon$ is the slope of the initial linear (reversible elastic) region of the engineering stress-strain curve.\n\n**Correct Option: A (The linear region of the stress strain curve).**",
          points: 1
        },
        {
          id: "W1-A7",
          number: 7,
          type: "single",
          question: "Electrical circuits",
          options: [
            "Can corrode",
            "Cannot corrode",
            "Are unrelated to corrosion",
            "Are the main source of corrosion nationally"
          ],
          correctAnswer: 0,
          explanation: "Electrical contacts, PCB copper traces, and solder joints are metal conductors that undergo galvanic, atmospheric, and fretting corrosion when exposed to moisture and environmental contaminants.\n\n**Correct Option: A (Can corrode).**",
          points: 1
        },
        {
          id: "W1-A8",
          number: 8,
          type: "single",
          question: "Thermal expansion is useful in the following application",
          options: [
            "Joints of railway lines",
            "Joints in bridges",
            "Bimetallic strips",
            "Strings on a guitar"
          ],
          correctAnswer: 2,
          explanation: "Bimetallic strips bond two metals with different coefficients of thermal expansion; heating causes the strip to bend predictably, making it widely used in thermostats and thermal circuit breakers.\n\n**Correct Option: C (Bimetallic strips).**",
          points: 1
        },
        {
          id: "W1-A9",
          number: 9,
          type: "single",
          question: "Upon heating",
          options: [
            "All materials expand",
            "All materials contract",
            "Some materials expand and some material contract",
            "Most materials expand and then contract"
          ],
          correctAnswer: 2,
          explanation: "While the vast majority of materials undergo positive thermal expansion, certain specialized materials exhibit negative thermal expansion (contract upon heating) over specific temperature intervals (e.g., water between 0°C and 4°C, $\\text{ZrW}_2\\text{O}_8$).\n\n**Correct Option: C (Some materials expand and some material contract).**",
          points: 1
        },
        {
          id: "W1-A10",
          number: 10,
          type: "single",
          question: "For most materials, the E Vs r curve is",
          options: [
            "Symmetric",
            "Asymmetric",
            "Circular",
            "A single point"
          ],
          correctAnswer: 1,
          explanation: "The interatomic potential energy curve $E(r)$ is inherently asymmetric (steep repulsive barrier at short range, softer attractive tail at long range). This asymmetry is the fundamental physical origin of thermal expansion.\n\n**Correct Option: B (Asymmetric).**",
          points: 1
        }
      ],

      masteryExamQuestions: [
        {
          id: "W1-M1",
          number: 1,
          type: "single",
          section: "Section A — Materials Science & Modeling",
          question: "What is the primary physical origin of thermal expansion in crystalline solids?",
          options: [
            "Purely symmetric harmonic oscillations of atoms",
            "The asymmetry (anharmonicity) of the interatomic potential well",
            "Nuclear decay within the crystal",
            "Gravitational compression"
          ],
          correctAnswer: 1,
          explanation: "Because the potential energy curve $E(r)$ rises much more steeply during compression than expansion, thermal excitation causes the mean interatomic separation to increase with temperature.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W1-M2",
          number: 2,
          type: "single",
          section: "Section A — Materials Science & Modeling",
          question: "If an interatomic potential energy curve were perfectly symmetric (parabolic), the coefficient of thermal expansion would be:",
          options: [
            "Infinite",
            "Positive and large",
            "Exactly zero",
            "Negative"
          ],
          correctAnswer: 2,
          explanation: "In a purely harmonic (symmetric) potential, higher vibrational states oscillate symmetrically about the equilibrium position $r_0$, so the average interatomic distance does not change with temperature, yielding zero thermal expansion.\n\n**Correct Option: C.**",
          points: 1
        },
        {
          id: "W1-M3",
          number: 3,
          type: "single",
          section: "Section A — Materials Science & Modeling",
          question: "A bimetallic strip consists of Metal A (higher thermal expansion coefficient) bonded to Metal B (lower thermal expansion coefficient). Upon heating, the strip curves:",
          options: [
            "Towards Metal A (Metal A on inside of curve)",
            "Towards Metal B (Metal B on inside of curve)",
            "Remains perfectly straight",
            "Twists randomly without bending"
          ],
          correctAnswer: 1,
          explanation: "Metal A expands more than Metal B for the same temperature change, forcing Metal A to take the longer outer arc while Metal B remains on the inner radius, curling towards Metal B.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W1-M4",
          number: 4,
          type: "single",
          section: "Section B — Mechanical & Electrical Properties",
          question: "Hooke's law in one dimension states that stress is linearly proportional to strain. This relationship holds:",
          options: [
            "Across the entire stress-strain curve up to fracture",
            "Only within the linear elastic limit",
            "Only in the plastic deformation region",
            "Exclusively at the yield point"
          ],
          correctAnswer: 1,
          explanation: "Hooke's law ($\sigma = E \epsilon$) is valid only in the initial linear elastic regime, where atomic bonds stretch reversibly without permanent atomic slip.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W1-M5",
          number: 5,
          type: "single",
          section: "Section B — Mechanical & Electrical Properties",
          question: "Why does the electrical resistance of pure copper increase as it is heated?",
          options: [
            "The number of free electrons decreases dramatically",
            "Enhanced phonon vibrations increase the electron scattering rate",
            "The copper atoms turn into insulators",
            "The cross-sectional area expands infinitely"
          ],
          correctAnswer: 1,
          explanation: "Thermal energy increases the amplitude of lattice vibrations (phonons), reducing electron mean free path and relaxation time $\\tau$, which elevates resistivity (positive thermal coefficient).\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W1-M6",
          number: 6,
          type: "single",
          section: "Section B — Mechanical & Electrical Properties",
          question: "In bridge and railway engineering, expansion joints are provided because:",
          options: [
            "Thermal expansion causes unrestrained expansion that is useful",
            "Thermal expansion causes constrained stresses that can buckle tracks and beams",
            "To allow corrosion to clean the joints",
            "To increase electrical conductivity"
          ],
          correctAnswer: 1,
          explanation: "Thermal expansion must be accommodated; constraining thermal growth produces massive internal thermal stresses ($\sigma = E \alpha \Delta T$) that cause buckling or catastrophic fracture.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W1-M7",
          number: 7,
          type: "single",
          section: "Section C — Thermal Physics & Empirical Laws",
          question: "Liquid water between 0°C and 4°C is a well-known example of:",
          options: [
            "Infinite expansion",
            "Negative thermal expansion (volume decreases upon heating)",
            "Constant density regardless of temperature",
            "Sublimation"
          ],
          correctAnswer: 1,
          explanation: "Between 0°C and 4°C, water contracts upon heating as its open hydrogen-bonded ice-like structure collapses into denser liquid packing, demonstrating negative thermal expansion.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W1-M8",
          number: 8,
          type: "single",
          section: "Section C — Thermal Physics & Empirical Laws",
          question: "An empirical model differs from a first-principles model primarily in that:",
          options: [
            "Empirical models are always 100% exact in every condition",
            "Empirical models rely on fitted experimental data rather than fundamental microscopic physics",
            "First-principles models cannot be expressed mathematically",
            "Empirical models apply only to gases"
          ],
          correctAnswer: 1,
          explanation: "Empirical models capture empirical trends without deriving them from first-principles quantum/thermodynamic laws, making them fast to use but valid only within the tested range.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W1-M9",
          number: 9,
          type: "single",
          section: "Section C — Thermal Physics & Empirical Laws",
          question: "The volumetric thermal expansion coefficient β for an isotropic solid is related to its linear coefficient α_L by:",
          options: [
            "β = α_L",
            "β ≈ 2 α_L",
            "β ≈ 3 α_L",
            "β = α_L³"
          ],
          correctAnswer: 2,
          explanation: "Because $V = L^3$, differentiating gives $\frac{\Delta V}{V_0} \approx 3 \frac{\Delta L}{L_0} \implies \beta \approx 3\alpha_L$ for small isotropic strains.\n\n**Correct Option: C.**",
          points: 1
        },
        {
          id: "W1-M10",
          number: 10,
          type: "single",
          section: "Section C — Thermal Physics & Empirical Laws",
          question: "Why is corrosion a major reliability concern in electronic circuits?",
          options: [
            "Corrosion always increases electrical conductivity",
            "Corrosion forms insulating or resistive oxide films that degrade contacts and open circuit traces",
            "Corrosion stops all electric fields from existing",
            "Corrosion only affects plastic casings"
          ],
          correctAnswer: 1,
          explanation: "Oxidation and electrochemical corrosion of copper traces and solder joints cause signal degradation, intermittent connections, and open-circuit failures.\n\n**Correct Option: B.**",
          points: 1
        }
      ]
    },
    {
      id: 2,
      number: 2,
      title: "Electrical Measurements, AC/DC Impedance & Free Electron Gas",
      lectures: "Lectures 4 - 6",
      status: "active",
      summary: "Charge carrier diversity across circuit components, impedance of pure resistors and capacitors (current leads voltage by 90°), parallel RC high-frequency behavior (Z → 0), empty space in crystalline lattices (25% - 50%), free electron gas density (~10²⁸ m⁻³ vs ideal gas ~10²⁵ m⁻³), thermal equilibrium through collisions, Maxwellian velocity isotropy, and kinetic theory of ideal gases (Cv = 3/2 R constant with T).",
      studyMaterials: {
        quickOverview: "Week 2 bridges macroscopic electrical measurements with microscopic particle kinematics. In electrical circuits, current carriers vary by medium: electrons in metallic interconnects, electrons and holes in semiconductors, and mobile ions in liquid electrolytes.\\n\\nUnder AC excitation, electrical impedance accounts for both resistance and frequency-dependent reactance. For an ideal resistor, impedance equals resistance ($Z = R$) and current is in phase with voltage. For an ideal capacitor ($Z_C = 1/j\omega C$), current leads voltage by $90^\circ$; in a parallel R-C network, high frequencies drive capacitive impedance to zero, effectively shorting the circuit ($Z \\to 0$).\\n\\nTurning to atomic packing, crystalline solids consist of 25% to 50% empty interstitial space (FCC/HCP has 26% void, BCC 32%, SC 48%). In metallic conductors, the conduction electron gas is extraordinarily dense ($n \\sim 10^{28}\\text{ m}^{-3}$), exceeding classical ideal gas density ($n \\sim 10^{25}\\text{ m}^{-3}$) by roughly a thousandfold. In thermal equilibrium, electron velocities are isotropic with no preferred direction of motion, maintained by rapid collisions with the lattice. Classical kinetic theory shows that an ideal monoatomic gas has an average translational kinetic energy $\\langle E_k \\rangle = \\frac{3}{2} k_B T$ (increasing with $T$) and a constant specific heat at constant volume $C_V = \\frac{3}{2} R$.",
        
        formulaSheet: [
          { name: "Capacitor AC Impedance", formula: "Z_C = \\frac{1}{j\\omega C} = -j\\frac{1}{\\omega C}", units: "\\Omega", desc: "Current leads voltage by 90° (phase angle +π/2)." },
          { name: "Parallel R-C Impedance", formula: "Z = \\frac{R \\cdot Z_C}{R + Z_C} = \\frac{R}{1 + j\\omega R C}", units: "\\Omega", desc: "As frequency ω → ∞, capacitive branch shorts the circuit: Z → 0." },
          { name: "Average Kinetic Energy of Ideal Gas", formula: "\\langle E_k \\rangle = \\frac{3}{2} k_B T", units: "Joules", desc: "Mean translational kinetic energy per molecule is proportional to absolute temperature." },
          { name: "Specific Heat at Constant Volume (Ideal Gas)", formula: "C_V = \\frac{3}{2} R = \\frac{3}{2} N_A k_B", units: "J/(mol·K)", desc: "Classical kinetic theory predicts temperature-independent constant heat capacity." },
          { name: "Particle Density Comparison", formula: "n_{\\text{electron}} \\sim 10^{28}\\text{ m}^{-3} \\gg n_{\\text{ideal gas}} \\sim 10^{25}\\text{ m}^{-3}", units: "m⁻³", desc: "Free electron gas is roughly 1000 times denser than an ideal gas at STP." },
          { name: "Crystalline Empty Space Fraction", formula: "\\text{Void Fraction} = 1 - \\text{APF} \\in [25\\%, 50\\%]", units: "Percentage", desc: "FCC/HCP void is 26%, BCC void is 32%, SC void is 48%." }
        ],

        lecturesBreakdown: [
          {
            lectureNo: 4,
            title: "Lecture 4: Measuring Electrical Conductivity — DC and AC",
            bullets: [
              "Charge Carrier Diversity: Charge carriers are not limited to electrons; they differ across circuit elements (electrons in wires, electrons/holes in diodes/transistors, ions in battery electrolytes).",
              "AC Impedance & Phase: For an ideal resistor, $Z = R$ and $\\phi = 0$. For a pure capacitor, $i(t) = C \\frac{dv}{dt}$ causes current to lead voltage by exactly $90^\circ$.",
              "Parallel RC Circuit: Total impedance $Z = \\frac{R}{1 + j\\omega R C}$. At high frequencies ($\\omega \\to \\infty$), capacitive reactance drops to zero, reducing the total circuit impedance to zero."
            ]
          },
          {
            lectureNo: 5,
            title: "Lecture 5: The Free Electron Gas Hypothesis",
            bullets: [
              "Crystalline Free Volume: Even in tightly packed crystals, atomic spheres leave significant interstitial empty space: 26% in FCC/HCP, 32% in BCC, and 48% in SC (typically 25% - 50%).",
              "Electron Gas Density: Valence electrons detach from parent atoms to form a free electron gas with $n \\sim 10^{28}\\text{ to } 10^{29}\\text{ m}^{-3}$, making it roughly 1000 times denser than an ideal gas at STP ($2.7 \\times 10^{25}\\text{ m}^{-3}$).",
              "Thermal Equilibrium via Collisions: Conduction electrons attain thermal equilibrium with their environment through constant scattering collisions with vibrating ionic cores and crystal defects."
            ]
          },
          {
            lectureNo: 6,
            title: "Lecture 6: The Ideal Gas & Kinetic Theory",
            bullets: [
              "Velocity Isotropy: Molecular collisions randomize directions; ideal gas molecules have no preferred direction of motion in a container.",
              "Temperature & Translational Energy: The average translational kinetic energy $\\langle E_k \\rangle = \\frac{3}{2} k_B T$ increases linearly with absolute temperature.",
              "Specific Heat $C_V$: Under classical kinetic theory, the internal energy of a monoatomic ideal gas is $U = \\frac{3}{2} n R T$, meaning specific heat at constant volume $C_V = \\frac{3}{2} R$ remains constant with temperature."
            ]
          }
        ],

        examTraps: [
          "Circuit Charge Carriers: CAN BE DIFFERENT in different parts of a circuit (not only electrons).",
          "Capacitor Phase: Current LEADS voltage by 90° (ICE rule: In a Capacitor, Current leads).",
          "Parallel RC High Frequency: Impedance is ZERO (capacitor acts as an AC short).",
          "Crystal Free Space: 25% - 50% empty space (FCC = 26%, BCC = 32%, SC = 48%).",
          "Particle Density: Free electron gas is MORE DENSE than an ideal gas (by ~1000×).",
          "Ideal Gas Specific Heat: REMAINS CONSTANT with temperature in classical kinetic theory."
        ]
      },

      assignmentQuestions: [
        {
          id: "W2-A1",
          number: 1,
          type: "single",
          question: "The charge carriers in a circuit are",
          options: [
            "The same in all parts of the circuit",
            "Must be different in different parts of the circuit",
            "Can be different in different parts of the circuit",
            "Can only be electrons"
          ],
          correctAnswer: 2,
          explanation: "Different components carry current via different charge carriers: electrons in metallic wires, holes and electrons in semiconductors, and ions in battery electrolytes.\n\n**Correct Option: C (Can be different in different parts of the circuit).**",
          points: 1
        },
        {
          id: "W2-A2",
          number: 2,
          type: "single",
          question: "Resistance and Impedance are the same for:",
          options: [
            "A pure resistor",
            "A pure capacitor",
            "A pure inductor",
            "All of the above"
          ],
          correctAnswer: 0,
          explanation: "For an ideal resistor, voltage and current are in phase ($\\phi = 0^\\circ$) at all frequencies; impedance $Z = R + j(0) = R$.\n\n**Correct Option: A (A pure resistor).**",
          points: 1
        },
        {
          id: "W2-A3",
          number: 3,
          type: "single",
          question: "For a pure capacitor subject to an AC signal",
          options: [
            "Current is in phase with voltage",
            "Current leads voltage by 90°",
            "Current leads voltage by 180°",
            "Current leads voltage by 270°"
          ],
          correctAnswer: 1,
          explanation: "Because $i(t) = C \\frac{dv}{dt}$, for a sinusoidal voltage $v(t) = V_0 \\sin(\\omega t)$, current is $i(t) = \\omega C V_0 \\cos(\\omega t) = I_0 \\sin(\\omega t + 90^\\circ)$, leading voltage by 90°.\n\n**Correct Option: B (Current leads voltage by 90°).**",
          points: 1
        },
        {
          id: "W2-A4",
          number: 4,
          type: "single",
          question: "When a resistor ‘R’ and a capacitor ‘C’ are in parallel, the high frequency impedance of the circuit is:",
          options: [
            "Zero",
            "Infinite",
            "R",
            "C"
          ],
          correctAnswer: 0,
          explanation: "Capacitor impedance is $Z_C = 1/(j\\omega C)$. As frequency $\\omega \\to \\infty$, $Z_C \\to 0$. In parallel, the zero-impedance capacitive branch shorts the entire circuit, making total impedance zero.\n\n**Correct Option: A (Zero).**",
          points: 1
        },
        {
          id: "W2-A5",
          number: 5,
          type: "single",
          question: "Crystalline solids typically have ‘empty space’ inside them of the order of:",
          options: [
            "< 25%",
            "25% - 50%",
            "50%-75%",
            "75%-100%"
          ],
          correctAnswer: 1,
          explanation: "Close-packed crystals have packing factors of 74% (FCC/HCP $\\implies 26\\%$ void), 68% (BCC $\\implies 32\\%$ void), and 52% (SC $\\implies 48\\%$ void). Hence, crystalline solids typically contain 25% - 50% empty interstitial space.\n\n**Correct Option: B (25% - 50%).**",
          points: 1
        },
        {
          id: "W2-A6",
          number: 6,
          type: "single",
          question: "In terms of particles per cubic meter, compared to an ideal gas, the free electron gas is:",
          options: [
            "Equally dense",
            "Less dense",
            "More dense",
            "Has no particles"
          ],
          correctAnswer: 2,
          explanation: "In metals, the free electron gas density is $n \\sim 10^{28}\\text{ to } 10^{29}\\text{ m}^{-3}$, whereas an ideal gas at STP has only $n \\approx 2.7 \\times 10^{25}\\text{ m}^{-3}$ (approx 1000× more dense).\n\n**Correct Option: C (More dense).**",
          points: 1
        },
        {
          id: "W2-A7",
          number: 7,
          type: "single",
          question: "In a metallic solid, with respect to their surroundings, electrons",
          options: [
            "Never attain equilibrium",
            "Attain equilibrium due to light",
            "Attain equilibrium due to collisions",
            "Attain equilibrium due to sound waves"
          ],
          correctAnswer: 2,
          explanation: "Electrons scatter off vibrating ionic cores (phonons) and impurities, transferring momentum and energy to achieve local thermal equilibrium.\n\n**Correct Option: C (Attain equilibrium due to collisions).**",
          points: 1
        },
        {
          id: "W2-A8",
          number: 8,
          type: "single",
          question: "Ideal gas molecules in a container",
          options: [
            "Move towards the top of the container",
            "Move towards the bottom of the container",
            "Move towards the middle of the container",
            "Have no preferred direction of motion"
          ],
          correctAnswer: 3,
          explanation: "By the kinetic theory of gases, random thermal collisions produce an isotropic velocity distribution with no preferred direction of motion.\n\n**Correct Option: D (Have no preferred direction of motion).**",
          points: 1
        },
        {
          id: "W2-A9",
          number: 9,
          type: "single",
          question: "The average translational kinetic energy of an ideal gas molecule,",
          options: [
            "Increases with increase in temperature",
            "Remains constant with increase in temperature",
            "Decreases with increase in temperature",
            "First decreases and stays constant with temperature"
          ],
          correctAnswer: 0,
          explanation: "By the equipartition theorem, average translational kinetic energy per molecule is $\\langle E_k \\rangle = \\frac{3}{2} k_B T$, which increases linearly with absolute temperature.\n\n**Correct Option: A (Increases with increase in temperature).**",
          points: 1
        },
        {
          id: "W2-A10",
          number: 10,
          type: "single",
          question: "As per the Kinetic Theory of gases, the specific heat at constant volume of an ideal gas",
          options: [
            "Increases with increase in temperature",
            "Remains constant with increase in temperature",
            "Decreases with increase in temperature",
            "First decreases and stays constant with temperature"
          ],
          correctAnswer: 1,
          explanation: "For a classical monoatomic ideal gas, total internal energy is $U = \\frac{3}{2} N k_B T$. Differentiating yields $C_V = \\left(\\frac{\\partial U}{\\partial T}\\right)_V = \\frac{3}{2} N k_B$, which is independent of temperature.\n\n**Correct Option: B (Remains constant with increase in temperature).**",
          points: 1
        }
      ],

      masteryExamQuestions: [
        {
          id: "W2-M1",
          number: 1,
          type: "single",
          section: "Section A — AC Impedance & Phase Relations",
          question: "In a series R-L-C circuit at very low frequencies (ω → 0), the total impedance is dominated by:",
          options: [
            "The resistor R",
            "The inductor L",
            "The capacitor C (impedance approaches infinity)",
            "Zero impedance"
          ],
          correctAnswer: 2,
          explanation: "Capacitive reactance is $X_C = 1/(\\omega C)$. As frequency $\\omega \\to 0$, $X_C \\to \\infty$, blocking DC and low-frequency current.\n\n**Correct Option: C.**",
          points: 1
        },
        {
          id: "W2-M2",
          number: 2,
          type: "single",
          section: "Section A — AC Impedance & Phase Relations",
          question: "For a pure inductor subjected to an AC sinusoidal voltage, current:",
          options: [
            "Leads voltage by 90°",
            "Lags voltage by 90°",
            "Is in phase with voltage",
            "Is 180° out of phase with voltage"
          ],
          correctAnswer: 1,
          explanation: "Because $v(t) = L \\frac{di}{dt}$, current lags voltage by $90^\\circ$ in an ideal inductor (ELI rule: Voltage leads Current in an inductor).\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W2-M3",
          number: 3,
          type: "single",
          section: "Section A — AC Impedance & Phase Relations",
          question: "Why do battery electrolytes have ionic charge carriers rather than free electrons?",
          options: [
            "Electrolytes have infinite band gaps",
            "Current flows through the physical migration of dissolved positive and negative ions in the solvent",
            "Electrons cannot exist in liquids",
            "Ions move faster than electrons"
          ],
          correctAnswer: 1,
          explanation: "Liquid electrolytes dissociate into solvated cations and anions whose physical drift constitutes electrical current.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W2-M4",
          number: 4,
          type: "single",
          section: "Section B — Lattice Packing & Free Electron Density",
          question: "Which of the following crystal structures possesses the lowest percentage of empty space?",
          options: [
            "Simple Cubic (SC)",
            "Body-Centered Cubic (BCC)",
            "Face-Centered Cubic (FCC)",
            "Diamond Cubic"
          ],
          correctAnswer: 2,
          explanation: "FCC and HCP are close-packed structures with atomic packing factor of 74% (only 26% empty space), compared to BCC (32% void), SC (48% void), and Diamond Cubic (66% void).\n\n**Correct Option: C.**",
          points: 1
        },
        {
          id: "W2-M5",
          number: 5,
          type: "single",
          section: "Section B — Lattice Packing & Free Electron Density",
          question: "The order of magnitude of free electron concentration in typical monovalent metals like copper is:",
          options: [
            "10¹⁰ m⁻³",
            "10¹⁶ m⁻³",
            "10²² m⁻³",
            "10²⁸ m⁻³"
          ],
          correctAnswer: 3,
          explanation: "Copper has roughly one conduction electron per atom and atomic density $\\sim 8.5 \\times 10^{28}\\text{ atoms/m}^3$, giving $n \\approx 8.5 \\times 10^{28}\\text{ electrons/m}^3$.\n\n**Correct Option: D.**",
          points: 1
        },
        {
          id: "W2-M6",
          number: 6,
          type: "single",
          section: "Section B — Lattice Packing & Free Electron Density",
          question: "In the classical Drude hypothesis, between successive collisions, conduction electrons move:",
          options: [
            "In circular orbits around individual atoms",
            "In straight lines at constant velocity (in zero electric field)",
            "In parabolic arcs continuously without collisions",
            "They do not move at all"
          ],
          correctAnswer: 1,
          explanation: "Between collisions, electrons are treated as free particles moving in straight lines at constant speed, with their momentum randomized instantaneously upon collision.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W2-M7",
          number: 7,
          type: "single",
          section: "Section C — Kinetic Theory of Gases",
          question: "According to Maxwell-Boltzmann statistics, the root-mean-square speed v_rms of an ideal gas molecule of mass m at temperature T is:",
          options: [
            "√(k_B T / m)",
            "√(2 k_B T / m)",
            "√(3 k_B T / m)",
            "3 k_B T / m"
          ],
          correctAnswer: 2,
          explanation: "From $\\frac{1}{2} m v_{\\text{rms}}^2 = \\frac{3}{2} k_B T$, solving for $v_{\\text{rms}}$ gives $\\sqrt{\\frac{3 k_B T}{m}}$.\n\n**Correct Option: C.**",
          points: 1
        },
        {
          id: "W2-M8",
          number: 8,
          type: "single",
          section: "Section C — Kinetic Theory of Gases",
          question: "Why does the specific heat at constant volume C_V of an ideal monoatomic gas remain constant with temperature?",
          options: [
            "It has no kinetic energy",
            "Monoatomic gases have only 3 translational degrees of freedom which are fully active at all temperatures",
            "The gas molecules lose mass as temperature rises",
            "Pressure is kept at zero"
          ],
          correctAnswer: 1,
          explanation: "Monoatomic ideal gas molecules possess only 3 translational degrees of freedom without rotational or vibrational modes, so $U = \\frac{3}{2} R T$ and $C_V = \\frac{3}{2} R$ is strictly constant.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W2-M9",
          number: 9,
          type: "single",
          section: "Section C — Kinetic Theory of Gases",
          question: "The pressure P exerted by an ideal gas of number density n and mean-square speed ⟨v²⟩ is given by:",
          options: [
            "P = n m ⟨v²⟩",
            "P = (1/2) n m ⟨v²⟩",
            "P = (1/3) n m ⟨v²⟩",
            "P = (2/3) n m ⟨v²⟩"
          ],
          correctAnswer: 2,
          explanation: "Kinetic theory pressure formula: $P = \\frac{1}{3} n m \\langle v^2 \\rangle$.\n\n**Correct Option: C.**",
          points: 1
        },
        {
          id: "W2-M10",
          number: 10,
          type: "single",
          section: "Section C — Kinetic Theory of Gases",
          question: "In kinetic theory, the assumption of velocity isotropy means:",
          options: [
            "⟨v_x²⟩ = ⟨v_y²⟩ = ⟨v_z²⟩ = (1/3) ⟨v²⟩",
            "Molecules move only along the x-axis",
            "The speed of every molecule is identical",
            "Molecules cannot collide"
          ],
          correctAnswer: 0,
          explanation: "Random collision trajectories distribute thermal energy equally across all 3 spatial directions, so $\\langle v_x^2 \\rangle = \\langle v_y^2 \\rangle = \\langle v_z^2 \\rangle = \\frac{1}{3} \\langle v^2 \\rangle$.\n\n**Correct Option: A.**",
          points: 1
        }
      ]
    },
    {
      id: 3,
      number: 3,
      title: "Drude Model — Electrical & Thermal Conductivity",
      lectures: "Lectures 7 - 10",
      status: "active",
      summary: "Classical electron transport, Ohm's law derivation, thermal conductivity, Wiedemann-Franz law, and model limitations.",
      studyMaterials: {
        quickOverview: "Week 3 focuses on Paul Drude's classical model (1900) treating electrons in metals as an ideal classical gas. It successfully explains Ohm's law, Wiedemann-Franz law, and qualitative electrical/thermal conduction, but fails to explain heat capacity, positive Hall coefficients, and temperature dependence because it neglects quantum mechanics (Fermi-Dirac statistics).",
        
        formulaSheet: [
          { name: "Ohm's Law (Microscopic)", formula: "J = \\sigma E", units: "A/m² = (S/m)(V/m)", desc: "Current density is proportional to applied electric field." },
          { name: "Drude Electrical Conductivity", formula: "\\sigma = \\frac{n e^2 \\tau}{m}", units: "S/m (or \\Omega^{-1} m^{-1})", desc: "Conductivity depends on electron density n, collision time \\tau, and electron mass m." },
          { name: "Electron Drift Velocity", formula: "v_d = \\frac{e E \\tau}{m} = \\mu E", units: "m/s", desc: "Steady average drift speed under an electric field." },
          { name: "Electron Mobility", formula: "\\mu = \\frac{e \\tau}{m}", units: "m²/(V·s)", desc: "Ratio of drift velocity to applied electric field magnitude." },
          { name: "Current Density", formula: "J = n e v_d = \\frac{I}{A}", units: "A/m²", desc: "Charge transport per unit area." },
          { name: "Fourier's Law of Heat Conduction", formula: "q = -\\kappa \\frac{dT}{dx}", units: "W/m²", desc: "Heat flux flows down the temperature gradient (opposite to dT/dx)." },
          { name: "Drude Thermal Conductivity", formula: "\\kappa = \\frac{1}{3} C_V^e \\langle v^2 \\rangle \\tau", units: "W/(m·K)", desc: "Thermal conductivity in terms of electronic specific heat and mean-square thermal speed." },
          { name: "Wiedemann-Franz Law", formula: "\\frac{\\kappa}{\\sigma T} = L", units: "W·\\Omega/K²", desc: "Ratio of thermal to electrical conductivity is proportional to temperature." },
          { name: "Classical Lorenz Number", formula: "L = \\frac{3 k_B^2}{2 e^2} \\approx 1.11 \\times 10^{-8} \\text{ W}\\Omega\\text{K}^{-2}", units: "W·\\Omega/K²", desc: "Drude prediction (experimental metals are \\approx 2.4 \\times 10^{-8} \\text{ W}\\Omega\\text{K}^{-2})." }
        ],

        lecturesBreakdown: [
          {
            lectureNo: 7,
            title: "Drude Model — Electrical Conductivity",
            bullets: [
              "Assumes conduction electrons behave as non-interacting classical gas molecules bouncing off heavy ion cores.",
              "Between collisions, electric field accelerates electrons: $F = -eE \\implies a = -eE/m$.",
              "Collisions randomize electron momentum, establishing a steady average drift velocity: $v_d = \\frac{e E \\tau}{m}$.",
              "Substituting $v_d$ into $J = n e v_d$ yields Ohm's law with $\\sigma = \\frac{n e^2 \\tau}{m}$.",
              "Relaxation time: $\\tau = \\frac{m \\sigma}{n e^2}$. Typical values for metals at room temp: $\\tau \\sim 10^{-14}\\text{ to } 10^{-15}\\text{ s}$."
            ]
          },
          {
            lectureNo: 8,
            title: "Drude Model — Thermal Conductivity",
            bullets: [
              "Three modes of heat transfer: Conduction (no bulk motion), Convection (bulk fluid flow), Radiation (EM waves, functions across vacuum).",
              "In solids, heat is carried by: (1) Free electrons and (2) Lattice vibrations (phonons).",
              "In metals, electronic thermal conduction dominates; in electrical insulators, phonons carry all the heat.",
              "Fourier's law: $q = -\\kappa \\frac{dT}{dx}$. Negative sign is crucial: heat flows from high to low temperature (opposite to gradient).",
              "Drude thermal conductivity expression: $\\kappa = \\frac{1}{3} C_V^e \\langle v^2 \\rangle \\tau$. Here $\\langle v^2 \\rangle$ is the mean-square thermal speed ($\sim 10^5\\text{ m/s}$), NOT drift speed ($\sim 10^{-3}\\text{ m/s}$)."
            ]
          },
          {
            lectureNo: 9,
            title: "Successes and Limitations of the Drude Model",
            bullets: [
              "Major Success: Explains the Wiedemann-Franz Law. Metals that conduct electricity well also conduct heat well because the same free electrons carry both charge and thermal energy.",
              "Qualitative explanation of Ohm's law and basic Hall effect geometry (carriers deflected by Lorentz force $F = q(E + v \\times B)$ to generate transverse Hall voltage).",
              "Critical Failure 1: Cannot explain positive Hall coefficients (observed in metals like Zn, Cd, Be). Classical electrons only have negative charge.",
              "Critical Failure 2: Completely fails to predict temperature dependence of resistivity ($\rho \\propto T$ experimentally, Drude gives $\rho \\propto \\sqrt{T}$).",
              "Critical Failure 3: Cannot distinguish between metals, semimetals, semiconductors, and insulators."
            ]
          },
          {
            lectureNo: 10,
            title: "Source of Shortcomings — Classical vs Quantum Statistics",
            bullets: [
              "Root flaw: Drude model used classical Maxwell-Boltzmann statistics, assuming ALL valence electrons participate in thermal processes with energy $\\frac{3}{2} k_B T$.",
              "Specific heat catastrophe: Drude predicts electronic specific heat $C_V^e = \\frac{3}{2} n k_B$. In reality, electronic specific heat at room temperature is ~100 times smaller!",
              "Why? Electrons are fermions obeying the Pauli Exclusion Principle and Fermi-Dirac statistics.",
              "Only electrons within $\\sim k_B T$ of the Fermi level ($E_F$) can absorb thermal energy and scatter into unoccupied states.",
              "The Sommerfeld Model (quantum free electron model) corrected this by applying Fermi-Dirac statistics to the electron gas."
            ]
          }
        ],

        examTraps: [
          {
            trap: "Free Electron in Vacuum vs Conductor Lattice (Q4)",
            explanation: "An isolated free electron in a vacuum electric field *keeps accelerating* ($a = eE/m = \\text{const}$). Inside a conductor with collisions, it reaches a steady terminal *drift velocity* ($v_d = \\mu E$)."
          },
          {
            trap: "Average Velocity vs Average Speed without Field (Q5)",
            explanation: "In absence of an applied electric field, average electron velocity $\\langle \\vec{v} \\rangle = 0$ (random directions cancel out), but average speed $\\langle |\\vec{v}| \\rangle \\neq 0$ (electrons move rapidly at thermal speeds $\\sim 10^5\\text{ m/s}$)."
          },
          {
            trap: "Fourier's Law Double Negative & Positive Heat Flux (Q16)",
            explanation: "Fourier's law is $q = -\\kappa \\frac{dT}{dx}$. If the temperature gradient $\\frac{dT}{dx}$ is negative (e.g., $-50\\text{ K/m}$), then $q = -(200)(-50) = +10{,}000\\text{ W/m}^2$. The two negative signs yield a **positive** heat flux flowing in the $+x$ direction towards cooler temperatures!"
          },
          {
            trap: "Collision Frequency vs Collision Time in Conductivity (Q13)",
            explanation: "In $\\sigma = \\frac{n e^2 \\tau}{m}$, doubling $\\tau$ doubles $\\sigma$. But collision frequency $\\nu = 1/\\tau$. Increasing collision frequency **decreases** collision time $\\tau$, and therefore **decreases** conductivity."
          },
          {
            trap: "Drude vs Sommerfeld Model Assumptions (Q15 & Q22)",
            explanation: "Drude model (1900) is **purely classical** (Maxwell-Boltzmann statistics). Sommerfeld model (1927) introduced **quantum mechanics & Fermi-Dirac statistics**. Conduction electrons obey the Pauli exclusion principle, so only electrons near $E_F$ participate in thermal processes."
          },
          {
            trap: "Limitations of Classical Drude Model (Q21)",
            explanation: "The Drude model fails in 3 critical ways: (1) Overestimates electronic specific heat by ~100x; (2) Cannot explain positive Hall coefficients (e.g. Zinc); (3) Completely ignores the periodic crystal lattice and band gaps."
          },
          {
            trap: "Wiedemann–Franz Law Ratio (Q19)",
            explanation: "The law states $\\frac{\\kappa}{\\sigma T} = L = \\text{constant}$ (Lorenz number). It does NOT mean $\\kappa = \\sigma$; it means their ratio divided by temperature is constant for metals."
          }
        ]
      },

      assignmentQuestions: [
        {
          id: "W3-A01",
          number: 1,
          question: "Resistance of a conductor:",
          options: [
            "Increases with increase in its length",
            "Decreases with increase in its length",
            "Is a constant independent of its length",
            "Conductors do not have resistance"
          ],
          correctAnswer: 0,
          explanation: "Resistance is given by $R = \\rho \\frac{L}{A}$. Resistance is directly proportional to length $L$. A longer conductor provides a longer path for electrons, leading to more scattering collisions.",
          source: "Assignment 3 (Q1)",
          conceptTag: "Ohm's Law & Resistance"
        },
        {
          id: "W3-A02",
          number: 2,
          question: "Conductivity of a conductor:",
          options: [
            "Increases with increase in its length",
            "Decreases with increase in its length",
            "Is a constant independent of its length",
            "Conductors only have resistivity"
          ],
          correctAnswer: 2,
          explanation: "Electrical conductivity $\\sigma$ (and resistivity $\\rho = 1/\\sigma$) is an intrinsic intensive material property. At a given temperature and material composition, it does NOT depend on sample dimensions (length or cross-sectional area).",
          source: "Assignment 3 (Q2)",
          conceptTag: "Material Property vs Geometry"
        },
        {
          id: "W3-A03",
          number: 3,
          question: "When voltage applied across a fixed length of a conductor is increased:",
          options: [
            "The electric field increases",
            "The electric field decreases",
            "The electric field is constant",
            "The electric field first increases and then decreases"
          ],
          correctAnswer: 0,
          explanation: "For a uniform conductor of fixed length $L$, the magnitude of the electric field is $E = \\frac{V}{L}$. Since $L$ is constant, increasing the applied potential difference $V$ directly increases $E$.",
          source: "Assignment 3 (Q3)",
          conceptTag: "Electric Field Relation"
        },
        {
          id: "W3-A04",
          number: 4,
          question: "In a uniform electric field, a free electron will:",
          options: [
            "Keep accelerating",
            "Will accelerate but reach a constant velocity quickly",
            "Will not respond to the field",
            "Will come to a halt"
          ],
          correctAnswer: 0,
          explanation: "A truly free electron (unconstrained, in vacuum) subjected to a constant uniform electric field experiences a constant electrostatic force $F = eE$. According to Newton's second law, $a = F/m = eE/m = \\text{constant}$, so it will continuously accelerate (velocity keeps increasing linearly with time: $v(t) = at$). Note: In a crystal lattice with collisions, electrons reach a terminal drift velocity, but for an isolated free electron, it continues accelerating.",
          source: "Assignment 3 (Q4)",
          conceptTag: "Classical Mechanics of Free Charge"
        },
        {
          id: "W3-A05",
          number: 5,
          question: "In a metallic conductor, at room temperature, in the absence of an applied field:",
          options: [
            "The average velocity of electrons is zero",
            "The instantaneous velocity of individual electrons is zero",
            "The average velocity of electrons is not zero",
            "The average speed of electrons is zero"
          ],
          correctAnswer: 0,
          explanation: "Electrons are in rapid random thermal motion in all directions. Because this motion is completely isotropic, for every electron moving with velocity $\\vec{v}$, another moves with $-\\vec{v}$, making the vector average $\\langle \\vec{v} \\rangle = 0$. However, individual electrons move rapidly, so instantaneous velocity and average scalar speed are nonzero.",
          source: "Assignment 3 (Q5)",
          conceptTag: "Random Thermal Motion"
        },
        {
          id: "W3-A06",
          number: 6,
          question: "Heat Transfer in space occurs through:",
          options: [
            "Conduction",
            "Convection",
            "Radiation",
            "Forced convection"
          ],
          correctAnswer: 2,
          explanation: "Outer space is a near-perfect vacuum. Conduction and convection both require a material medium (atoms/molecules or fluid motion) to transfer kinetic energy. Radiation transmits energy via electromagnetic waves and does not require any material medium.",
          source: "Assignment 3 (Q6)",
          conceptTag: "Modes of Heat Transfer"
        },
        {
          id: "W3-A07",
          number: 7,
          question: "Thermal conduction in a solid occurs:",
          options: [
            "Only through free electrons",
            "Only through lattice vibrations",
            "Using both free electrons as well as lattice vibrations",
            "Neither through free electrons nor through lattice vibrations"
          ],
          correctAnswer: 2,
          explanation: "In any solid, thermal energy is conducted by two primary carriers: (1) mobile conduction electrons (electronic contribution $\\kappa_e$) and (2) quantized lattice vibrations/phonons (lattice contribution $\\kappa_{ph}$). The total thermal conductivity is $\\kappa = \\kappa_e + \\kappa_{ph}$.",
          source: "Assignment 3 (Q7)",
          conceptTag: "Solid Thermal Transport"
        },
        {
          id: "W3-A08",
          number: 8,
          question: "Heat flow in a metallic sample occurs:",
          options: [
            "In the same direction as the thermal gradient",
            "In the direction opposite the thermal gradient",
            "Independent of the thermal gradient",
            "Towards the centre of the sample regardless of the thermal gradient"
          ],
          correctAnswer: 1,
          explanation: "By Fourier's Law of heat conduction, $q = -\\kappa \\frac{dT}{dx}$. Heat flows spontaneously from a region of higher temperature to lower temperature (in the direction of decreasing temperature), which is mathematically opposite to the temperature gradient vector $\\nabla T$.",
          source: "Assignment 3 (Q8)",
          conceptTag: "Fourier's Law"
        },
        {
          id: "W3-A09",
          number: 9,
          question: "Copper bottom is added to stainless steel cooking utensils:",
          options: [
            "To increase insulation",
            "To increase thermal conductivity",
            "To decrease electrical conductivity",
            "To make it heavy"
          ],
          correctAnswer: 1,
          explanation: "Stainless steel is strong and corrosion-resistant but has relatively poor thermal conductivity (~15-20 W/m·K), leading to localized hot spots. Copper has very high thermal conductivity (~400 W/m·K). Adding a copper base rapidly and uniformly spreads heat across the cooking surface.",
          source: "Assignment 3 (Q9)",
          conceptTag: "Practical Materials Applications"
        },
        {
          id: "W3-A10",
          number: 10,
          question: "Metals with high electrical conductivity typically have:",
          options: [
            "Poor thermal conductivity",
            "High level of optical transparency",
            "Good thermal conductivity",
            "High resistivity"
          ],
          correctAnswer: 2,
          explanation: "In metals, the same population of free valence electrons is responsible for transporting both electric charge and thermal kinetic energy. As formulated by the Wiedemann-Franz Law ($\\kappa/\\sigma T = L = \\text{constant}$), good electrical conductors are invariably good thermal conductors.",
          source: "Assignment 3 (Q10)",
          conceptTag: "Wiedemann-Franz Relationship"
        }
      ],

      masteryExamQuestions: [
        {
          id: "W3-M01",
          number: 1,
          type: "single",
          section: "Section A — Assignment 3 Concepts",
          question: "For a uniform conductor, what happens to resistance if its length doubles while its cross-sectional area and resistivity remain unchanged?",
          options: [
            "It becomes half.",
            "It doubles.",
            "It remains unchanged.",
            "It becomes four times larger."
          ],
          correctAnswer: 1,
          explanation: "From $R = \\rho \\frac{L}{A}$, if $L' = 2L$ with $\\rho$ and $A$ constant, $R' = \\rho \\frac{2L}{A} = 2R$. Resistance doubles.",
          points: 1
        },
        {
          id: "W3-M02",
          number: 2,
          type: "single",
          section: "Section A — Assignment 3 Concepts",
          question: "Which statement about electrical conductivity is correct for a given material at a fixed temperature?",
          options: [
            "It always increases with sample length.",
            "It always decreases with sample length.",
            "It is independent of sample length and cross-sectional area.",
            "It is always equal to resistivity."
          ],
          correctAnswer: 2,
          explanation: "Conductivity $\\sigma$ is an intensive property characteristic of the material itself, not its macroscopic geometry.",
          points: 1
        },
        {
          id: "W3-M03",
          number: 3,
          type: "single",
          section: "Section A — Assignment 3 Concepts",
          question: "A voltage of 12 V is applied across a uniform conductor of length 3 cm. What is the electric-field magnitude?",
          options: [
            "4 V/m",
            "36 V/m",
            "400 V/m",
            "0.25 V/m"
          ],
          correctAnswer: 2,
          explanation: "Convert length to meters: $L = 3\\text{ cm} = 0.03\\text{ m}$. Then $E = \\frac{V}{L} = \\frac{12\\text{ V}}{0.03\\text{ m}} = 400\\text{ V/m}$.",
          points: 1
        },
        {
          id: "W3-M04",
          number: 4,
          type: "single",
          section: "Section A — Assignment 3 Concepts",
          question: "In the Drude model, why does the average drift velocity of electrons reach a steady value rather than increase indefinitely?",
          options: [
            "The electrons stop moving randomly.",
            "Collisions produce an effective resistance to directed motion.",
            "The electric field becomes zero automatically.",
            "Electrons lose their electric charge."
          ],
          correctAnswer: 1,
          explanation: "Electrons undergo frequent collisions with ion cores with mean relaxation time $\\tau$. In each collision, momentum gained from the electric field is randomized, creating a damping force that balances the electric force.",
          points: 1
        },
        {
          id: "W3-M05",
          number: 5,
          type: "single",
          section: "Section A — Assignment 3 Concepts",
          question: "A metallic conductor is at room temperature, with no applied electric field. Which statement is correct?",
          options: [
            "Every electron is stationary.",
            "The average electron velocity is zero, but its average speed is nonzero.",
            "Both average velocity and average speed are zero.",
            "All electrons move in the same direction."
          ],
          correctAnswer: 1,
          explanation: "Thermal energy keeps electrons moving rapidly at speeds $\\sim 10^5\\text{ m/s}$, but spatial isotropy ensures net vector velocity $\\langle \\vec{v} \\rangle = 0$.",
          points: 1
        },
        {
          id: "W3-M06",
          number: 6,
          type: "single",
          section: "Section A — Assignment 3 Concepts",
          question: "Which mechanism transfers thermal energy from the Sun to Earth through the vacuum of space?",
          options: [
            "Conduction",
            "Natural convection",
            "Radiation",
            "Forced convection"
          ],
          correctAnswer: 2,
          explanation: "Electromagnetic radiation travels across the vacuum of space at the speed of light.",
          points: 1
        },
        {
          id: "W3-M07",
          number: 7,
          type: "multi",
          section: "Section A — Assignment 3 Concepts",
          question: "Which mechanisms can contribute to heat conduction in a solid? (Select all that apply)",
          options: [
            "Free electrons",
            "Lattice vibrations, described using phonons",
            "Forced convection through stationary atoms",
            "Neither electrons nor lattice vibrations"
          ],
          correctAnswer: [0, 1],
          explanation: "Heat in solids is transported by conduction electrons and acoustic lattice vibrations (phonons). Solids cannot undergo convection because atoms are fixed in lattice positions.",
          points: 2
        },
        {
          id: "W3-M08",
          number: 8,
          type: "single",
          section: "Section A — Assignment 3 Concepts",
          question: "At a location where temperature increases with the positive x-direction, in which direction does net heat flow?",
          options: [
            "Positive x-direction",
            "Negative x-direction",
            "No heat flow is possible.",
            "It must flow towards the sample's centre."
          ],
          correctAnswer: 1,
          explanation: "If temperature increases in $+x$, the gradient $dT/dx > 0$. By Fourier's law $q = -\\kappa (dT/dx)$, heat flux $q$ is negative, meaning net heat flows in the negative x-direction (hot to cold).",
          points: 1
        },
        {
          id: "W3-M09",
          number: 9,
          type: "single",
          section: "Section A — Assignment 3 Concepts",
          question: "Why is copper commonly used in the base of stainless-steel cooking utensils?",
          options: [
            "Copper has lower thermal conductivity.",
            "Copper increases heat spreading and temperature uniformity.",
            "Copper prevents all heat loss through radiation.",
            "Copper eliminates the need for a heat source."
          ],
          correctAnswer: 1,
          explanation: "High thermal conductivity of copper rapidly distributes heat across the vessel, preventing localized scorching.",
          points: 1
        },
        {
          id: "W3-M10",
          number: 10,
          type: "single",
          section: "Section A — Assignment 3 Concepts",
          question: "Why do metals that conduct electricity well often conduct heat well too?",
          options: [
            "Electrical current directly converts all heat into electricity.",
            "The same mobile electrons contribute to both transport processes.",
            "Metals transfer heat only through convection.",
            "Electrical conductivity and thermal conductivity are always numerically equal."
          ],
          correctAnswer: 1,
          explanation: "Delocalized conduction electrons carry both electric charge (coulombs) and kinetic energy (joules).",
          points: 1
        },
        {
          id: "W3-M11",
          number: 11,
          type: "single",
          section: "Section B — Drude Electrical Conductivity",
          question: "Numerical: A metal has $n = 8 \\times 10^{28}\\text{ m}^{-3}$ and mean collision time $\\tau = 2 \\times 10^{-14}\\text{ s}$. Given $e = 1.6 \\times 10^{-19}\\text{ C}$ and $m = 9.11 \\times 10^{-31}\\text{ kg}$, calculate the Drude electrical conductivity $\\sigma = \\frac{n e^2 \\tau}{m}$:",
          options: [
            "4.5 × 10⁶ S/m",
            "4.5 × 10⁷ S/m",
            "2.2 × 10⁷ S/m",
            "1.4 × 10⁸ S/m"
          ],
          correctAnswer: 1,
          explanation: "Step-by-step working:\n$$\\sigma = \\frac{n e^2 \\tau}{m} = \\frac{(8 \\times 10^{28})(1.6 \\times 10^{-19})^2 (2 \\times 10^{-14})}{9.11 \\times 10^{-31}}$$\n$$e^2 = 2.56 \\times 10^{-38}$$\n$$\\text{Numerator} = 8 \\times 10^{28} \\times 2.56 \\times 10^{-38} \\times 2 \\times 10^{-14} = 40.96 \\times 10^{-24} = 4.096 \\times 10^{-23}$$\n$$\\sigma = \\frac{4.096 \\times 10^{-23}}{9.11 \\times 10^{-31}} \\approx 0.4496 \\times 10^8 = 4.5 \\times 10^7\\text{ S/m}$$. Correct answer is B.",
          points: 2
        },
        {
          id: "W3-M12",
          number: 12,
          type: "single",
          section: "Section B — Drude Electrical Conductivity",
          question: "Numerical: The mean time between collisions for electrons is $\\tau = 2 \\times 10^{-14}\\text{ s}$. Given $e = 1.6 \\times 10^{-19}\\text{ C}$ and $m = 9.11 \\times 10^{-31}\\text{ kg}$, calculate the electron mobility $\\mu = \\frac{e \\tau}{m}$:",
          options: [
            "0.35 m²/(V·s)",
            "3.5 × 10⁻³ m²/(V·s)",
            "35 m²/(V·s)",
            "3.5 × 10⁻¹ m²/(V·s)"
          ],
          correctAnswer: 1,
          acceptedAnswers: [0, 1, 3],
          explanation: "Step-by-step working:\n$$\\mu = \\frac{e \\tau}{m} = \\frac{(1.6 \\times 10^{-19}\\text{ C})(2 \\times 10^{-14}\\text{ s})}{9.11 \\times 10^{-31}\\text{ kg}} = \\frac{3.2 \\times 10^{-33}}{9.11 \\times 10^{-31}} \\approx 0.351 \\times 10^{-2} = 3.51 \\times 10^{-3}\\text{ m}^2/(\\text{V}\\cdot\\text{s})$$.\n\n• **True Physics Option:** **B** ($3.5 \\times 10^{-3}\\text{ m}^2/(\\text{V}\\cdot\\text{s})$).\n• **Exam Key Note:** In the course exam key, Option D / A ($0.35 = 3.5 \\times 10^{-1}$) is also credited because A and D were duplicates in the original test paper. Full credit is accepted for B, D, or A.",
          points: 2
        },
        {
          id: "W3-M13",
          number: 13,
          type: "multi",
          section: "Section B — Drude Electrical Conductivity",
          question: "According to the Drude model $\\sigma = \\frac{n e^2 \\tau}{m}$, assuming other quantities remain fixed, which statements are correct? (Select all that apply)",
          options: [
            "Doubling \\tau doubles conductivity.",
            "Halving \\tau doubles conductivity.",
            "Increasing the collision frequency generally decreases \\tau.",
            "Conductivity is independent of \\tau."
          ],
          correctAnswer: [0, 2],
          explanation: "From $\\sigma = \\frac{n e^2 \\tau}{m}$:\n1. Conductivity is directly proportional to collision time $\\tau$. Doubling $\\tau$ doubles $\\sigma$ (Statement A is correct).\n2. Collision frequency is $\\nu = 1/\\tau$. Increasing collision frequency decreases collision time $\\tau$, and thus decreases conductivity (Statement C is correct).\n\n**Correct Options: A and C.**",
          points: 2
        },
        {
          id: "W3-M14",
          number: 14,
          type: "single",
          section: "Section B — Drude Electrical Conductivity",
          question: "A metal has an electron number density of $n = 5 \\times 10^{28}\\text{ m}^{-3}$. The magnitude of electron drift velocity is $v_d = 2 \\times 10^{-4}\\text{ m/s}$. Given $e = 1.6 \\times 10^{-19}\\text{ C}$, calculate the magnitude of current density $J = n e v_d$:",
          options: [
            "1.6 × 10³ A/m²",
            "1.6 × 10⁶ A/m²",
            "1.6 × 10⁸ A/m²",
            "1.6 × 10⁻³ A/m²"
          ],
          correctAnswer: 1,
          explanation: "Step-by-step calculation:\n$$J = n e v_d = (5 \\times 10^{28}\\text{ m}^{-3})(1.6 \\times 10^{-19}\\text{ C})(2 \\times 10^{-4}\\text{ m/s})$$\n$$J = (5 \\times 1.6 \\times 2) \\times 10^{28 - 19 - 4} = 16 \\times 10^5 = 1.6 \\times 10^6\\text{ A/m}^2$$.\n\n**Correct Option: B.**",
          points: 2
        },
        {
          id: "W3-M15",
          number: 15,
          type: "multi",
          section: "Section B — Drude Electrical Conductivity",
          question: "Which statements are consistent with the classical Drude model? (Select all that apply)",
          options: [
            "Electrons are treated approximately like a classical gas.",
            "Collisions help establish a steady average drift velocity.",
            "Electrons obey Fermi–Dirac statistics in the original classical model.",
            "Electrical conductivity depends on carrier density and mean collision time."
          ],
          correctAnswer: [0, 1, 3],
          explanation: "• **A is correct:** Drude treated electrons as non-interacting classical gas molecules.\n• **B is correct:** Collisions with lattice ions scatter electrons and balance electric acceleration, creating a steady average drift velocity.\n• **D is correct:** $\\sigma = \\frac{n e^2 \\tau}{m}$ directly depends on electron density $n$ and mean collision time $\\tau$.\n• *C is false:* Drude used classical Maxwell-Boltzmann statistics. Fermi-Dirac statistics were introduced later by Sommerfeld (1927).\n\n**Correct Options: A, B and D.**",
          points: 2
        },
        {
          id: "W3-M16",
          number: 16,
          type: "single",
          section: "Section C — Thermal Conductivity & Wiedemann–Franz Law",
          question: "A solid has thermal conductivity $\\kappa = 200\\text{ W/(m·K)}$ and a temperature gradient $\\frac{dT}{dx} = -50\\text{ K/m}$. Using Fourier's law $q = -\\kappa \\frac{dT}{dx}$, what is the heat-flux component $q$?",
          options: [
            "-10,000 W/m²",
            "10,000 W/m²",
            "250 W/m²",
            "4 W/m²"
          ],
          correctAnswer: 1,
          explanation: "Given:\n$$q = -\\kappa \\frac{dT}{dx}$$\n$$\\kappa = 200\\text{ W/(m·K)}, \\quad \\frac{dT}{dx} = -50\\text{ K/m}$$\nTherefore:\n$$q = -(200) \\times (-50) = +10{,}000\\text{ W/m}^2$$\n\n⚠️ **Exam Trap Alert:** The negative sign in Fourier's law combined with the negative temperature gradient produces a **POSITIVE** heat flux. Heat flows forward in the $+x$ direction towards cooler temperatures.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W3-M17",
          number: 17,
          type: "single",
          section: "Section C — Thermal Conductivity & Wiedemann–Franz Law",
          question: "The Drude model gives $\\kappa = \\frac{1}{3} C_V^e \\langle v^2 \\rangle \\tau$. If $\\tau$ doubles while electronic specific heat and mean-square speed remain unchanged, what happens to $\\kappa$?",
          options: [
            "It halves.",
            "It doubles.",
            "It remains unchanged.",
            "It becomes four times larger."
          ],
          correctAnswer: 1,
          explanation: "Thermal conductivity $\\kappa$ is directly proportional to collision relaxation time $\\tau$. Doubling $\\tau$ doubles $\\kappa$.",
          points: 1
        },
        {
          id: "W3-M18",
          number: 18,
          type: "single",
          section: "Section C — Thermal Conductivity & Wiedemann–Franz Law",
          question: "For a metal at $T = 300\\text{ K}$, assume electrical conductivity $\\sigma = 5 \\times 10^7\\text{ S/m}$ and Lorenz number $L = 2.4 \\times 10^{-8}\\text{ W}\\cdot\\Omega\\cdot\\text{K}^{-2}$. Using $\\kappa = L \\sigma T$, calculate thermal conductivity:",
          options: [
            "36 W/(m·K)",
            "360 W/(m·K)",
            "3.6 W/(m·K)",
            "3600 W/(m·K)"
          ],
          correctAnswer: 1,
          explanation: "Step-by-step working:\n$$\\kappa = L \\sigma T = (2.4 \\times 10^{-8}\\text{ W}\\Omega\\text{K}^{-2}) \\times (5 \\times 10^7\\text{ S/m}) \\times (300\\text{ K})$$\n$$\\kappa = (2.4 \\times 5 \\times 300) \\times 10^{-8 + 7} = 3600 \\times 10^{-1} = 360\\text{ W/(m}\\cdot\\text{K)}$$. Correct answer is B (typical for copper/aluminum range).",
          points: 2
        },
        {
          id: "W3-M19",
          number: 19,
          type: "single",
          section: "Section C — Thermal Conductivity & Wiedemann–Franz Law",
          question: "Which statement best describes the physical meaning of the Wiedemann–Franz law for many metals?",
          options: [
            "Thermal conductivity is always equal to electrical conductivity.",
            "The ratio \\kappa / (\\sigma T) is approximately constant.",
            "Thermal conductivity is independent of temperature for every material.",
            "Electrical conductivity is always proportional to the square of temperature."
          ],
          correctAnswer: 1,
          explanation: "From the Wiedemann–Franz law:\n$$\\frac{\\kappa}{\\sigma T} = L$$\nHere, $L$ is the Lorenz number. For many metals near room temperature, this ratio is approximately constant ($L \\approx 2.44 \\times 10^{-8}\\text{ W}\\cdot\\Omega/\\text{K}^2$).\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W3-M20",
          number: 20,
          type: "single",
          section: "Section D — Successes and Limitations",
          question: "A conductor carries current while a magnetic field is applied perpendicular to it. A transverse voltage develops. What is one primary use of this Hall effect?",
          options: [
            "Measuring the sample's melting point directly",
            "Identifying the sign of charge carriers",
            "Determining thermal conductivity without other information",
            "Proving that every conductor has positive charge carriers"
          ],
          correctAnswer: 1,
          explanation: "The direction of the transverse Hall electric field depends on whether charge carriers are negatively charged (electrons) or positively charged (holes). Measuring the sign of the Hall coefficient $R_H$ establishes the sign of dominant charge carriers.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W3-M21",
          number: 21,
          type: "multi",
          section: "Section D — Successes and Limitations",
          question: "Which are genuine limitations of the classical Drude model discussed in the course lectures? (Select all that apply)",
          options: [
            "It overestimates electronic specific heat.",
            "It cannot correctly explain all observed Hall-coefficient signs.",
            "It fully explains the differences between metals, semiconductors and insulators.",
            "It neglects important consequences of the periodic crystal structure."
          ],
          correctAnswer: [0, 1, 3],
          explanation: "• **A is correct:** It overestimates electronic specific heat by $\\sim 100\\times$ because classical Maxwell-Boltzmann statistics incorrectly assumed *all* valence electrons absorb thermal energy.\n• **B is correct:** It cannot explain why some conductors (e.g. Zinc, Beryllium) exhibit positive Hall coefficients.\n• **D is correct:** It completely neglects the periodic crystal potential and band structure.\n• *C is false:* It cannot explain the difference between conductors, semiconductors, and insulators.\n\n**Correct Options: A, B and D.**",
          points: 2
        },
        {
          id: "W3-M22",
          number: 22,
          type: "single",
          section: "Section D — Successes and Limitations",
          question: "What is the key improvement introduced by the Sommerfeld model over the classical Drude model?",
          options: [
            "It assumes electrons are completely stationary.",
            "It replaces electron motion with convection.",
            "It applies quantum mechanics and Fermi–Dirac statistics to free electrons.",
            "It assumes that electrons have no energy."
          ],
          correctAnswer: 2,
          explanation: "Sommerfeld retained the free electron assumption but replaced classical Maxwell-Boltzmann statistics with quantum Fermi-Dirac statistics obeying the Pauli exclusion principle. This immediately resolved the electronic specific heat paradox.",
          points: 1
        }
      ]
    },
    {
      id: 4,
      number: 4,
      title: "Statistical Mechanics, Maxwell–Boltzmann Statistics & Classical vs Quantum",
      lectures: "Lectures 11 - 13",
      status: "active",
      summary: "Macrostate vs microstate, most probable state, Maxwell–Boltzmann distribution, Lagrange multipliers, electronic specific heat failure, and classical vs quantum indistinguishability.",
      studyMaterials: {
        quickOverview: "Week 4 addresses the fundamental transition from classical to quantum descriptions of materials. Because solids contain ~10²⁸ electrons per cubic metre, tracking individual trajectories is impossible, necessitating statistical mechanics. We explore macrostates vs microstates, the most probable state, the classical Maxwell–Boltzmann distribution, the Lagrange method of undetermined multipliers, and why Drude's classical statistics caused an electronic specific heat overestimation by ~2 orders of magnitude (~100×), leading directly to quantum statistics and indistinguishable particles.",
        
        formulaSheet: [
          { name: "Number of Arrangements (Distinguishable Particles)", formula: "W = \\frac{n!}{\\prod_i n_i!}", units: "Dimensionless", desc: "Total microscopic arrangements (microstates) for distributing n distinguishable particles with populations n_i." },
          { name: "Maxwell–Boltzmann Distribution", formula: "n_i = \\frac{n}{P} e^{-\\varepsilon_i / (k_B T)}", units: "Particle count", desc: "Equilibrium population at energy level \\varepsilon_i; P is the partition function and k_B is the Boltzmann constant." },
          { name: "Classical Electronic Specific Heat (Drude Overestimate)", formula: "C_V^e = \\frac{3}{2} n k_B", units: "J/(m³·K)", desc: "Drude assumption that all valence electrons absorb thermal energy; overestimates experimental metallic C_V by ~100×." },
          { name: "Lagrange Method Constraints", formula: "d(\\ln W - \\alpha \\sum n_i - \\beta \\sum n_i \\varepsilon_i) = 0", units: "Mathematical method", desc: "Maximizes arrangements W subject to fixed particle count (\\sum n_i = n) and fixed total energy (\\sum n_i \\varepsilon_i = E)." },
          { name: "Random Thermal Speed vs Drift Speed", formula: "v_{\\text{th}} = \\sqrt{\\langle v^2 \\rangle} \\approx 10^5 \\text{ m/s} \\gg v_d \\approx 10^{-4}-10^{-3} \\text{ m/s}", units: "m/s", desc: "Random thermal scattering velocity vastly exceeds directed drift velocity in household closed circuits." },
          { name: "Thermodynamic Conditions Comparison", formula: "\\text{Physics: Constant }(T, V);\\quad \\text{Metallurgy: Constant }(T, P = 1\\text{ atm})", units: "Constraints", desc: "Constant volume fixes allowed quantum energy levels in physics; metallurgy standardizes on ambient atmospheric pressure." }
        ],

        lecturesBreakdown: [
          {
            lectureNo: 11,
            title: "Large Systems & Statistical Mechanics",
            bullets: [
              "A solid contains an enormous number of electrons (~10²⁸ per cubic metre); tracking every particle individually via Newton's laws is impossible.",
              "Statistical mechanics predicts macroscopic observable properties of large systems from microscopic statistical distributions without needing individual trajectories.",
              "Macrostate: Gross thermodynamic description of the system (total energy E, volume V, temperature T).",
              "Microstate: Specific microscopic arrangement of individual particles among available energy levels. A single macrostate corresponds to an astronomical number of microstates.",
              "Most Probable State: The configuration with the greatest number of arrangements (W). In macroscopic systems (N ~ 10²³), this state overwhelmingly dominates the probability distribution, effectively defining thermodynamic equilibrium.",
              "Thermodynamic constraints: Physics models typically analyze systems at constant temperature and volume (T, V) because constant volume fixes the spatial boundary conditions and allowed energy levels. Metallurgy typically uses constant temperature and pressure (T, P = 1 atm).",
              "Experimental challenge: In metallic solids, controlling volume in a predetermined manner during temperature changes is very difficult due to negligible compressibility and thermal expansion."
            ]
          },
          {
            lectureNo: 12,
            title: "Maxwell–Boltzmann Statistics",
            bullets: [
              "Maxwell–Boltzmann (MB) statistics applies to classical, identical but distinguishable particles whose trajectories can, in principle, be tracked.",
              "Drude model flaw: It assumed conduction electrons behave like classical gas molecules obeying MB statistics.",
              "The MB distribution: $n_i = \\frac{n}{P} e^{-\\varepsilon_i / (k_B T)}$, where n is total particles, P is the partition function, and k_B is the Boltzmann constant.",
              "Key takeaway: Higher energy levels have exponentially fewer particles at thermal equilibrium.",
              "Lagrange Method of Undetermined Multipliers: The mathematical optimization technique used to maximize the number of arrangements (or $\\ln W$) subject to conservation of total particle number ($\\sum n_i = n$) and conservation of total energy ($\\sum n_i \\varepsilon_i = E$)."
            ]
          },
          {
            lectureNo: 13,
            title: "Classical vs Quantum Particles",
            bullets: [
              "Why Drude fails: It overestimates the electronic specific heat at constant volume ($C_V^e$) by approximately two orders of magnitude (~100 times).",
              "Classical particles: Identical but distinguishable; individual particle trajectories can be tracked; obey Maxwell–Boltzmann statistics.",
              "Quantum particles: Identical and indistinguishable; quantum uncertainty prevents tracking individual paths; electrons are fermions obeying the Pauli exclusion principle and Fermi–Dirac statistics.",
              "Drift speed vs mean-square random speed: In a conductor carrying current under typical household conditions, drift velocity $v_d$ (~10⁻⁴ to 10⁻³ m/s) is negligible compared to the characteristic random thermal speed $\\sqrt{\\langle v^2 \\rangle}$ (~10⁵ m/s).",
              "Dominance of collisions: Under normal household conditions, electron collisions are dominated by temperature (lattice vibrations / thermal scattering), not by the applied electric field.",
              "Drude model characterization: Uses the kinetic theory of gases, uses a statistical description of energy storage, and does not determine velocities of individual electrons (All of the above).",
              "Microscopic reality: Independent of any theoretical model, electrons in a solid collide and interact with other electrons and ionic cores."
            ]
          }
        ],

        examTraps: [
          {
            trap: "Physics vs Metallurgy Boundary Conditions (Assignment Q6–Q8)",
            explanation: "Physics assumes constant T and V (volume fixed to hold allowed quantum energy levels constant). Metallurgy assumes constant T and P (typically P = 1 atm). In solids, controlling volume in a predetermined manner experimentally is very difficult."
          },
          {
            trap: "Two Orders of Magnitude = 100× (Assignment Q1 / Lecture 13)",
            explanation: "An overestimate of 'two orders of magnitude' means a factor of $10^2 = 100$. Drude's classical calculation gave $C_V^e = \\frac{3}{2} n k_B$, which is ~100 times larger than experimentally observed electronic specific heats in metals."
          },
          {
            trap: "Identical & Distinguishable vs Indistinguishable (Lecture 12 vs 13)",
            explanation: "Maxwell–Boltzmann statistics assumes particles are identical BUT DISTINGUISHABLE. Quantum statistics (Fermi–Dirac for electrons) assumes particles are identical AND INDISTINGUISHABLE."
          },
          {
            trap: "Drift Velocity vs Mean-Square Velocity (Assignment Q2)",
            explanation: "Electric current produces a very slow average drift speed ($v_d \\sim 10^{-4}-10^{-3} \\text{ m/s}$), whereas the random thermal speed $\\sqrt{\\langle v^2 \\rangle}$ is gigantic ($\sim 10^5 \\text{ m/s}$). Drift velocity is far less than mean-square velocity."
          },
          {
            trap: "Electron Collisions Dominated by Temperature, NOT Field (Assignment Q3)",
            explanation: "In household wires, the applied voltage/field only guides the directional drift. The collisions and scattering frequency are overwhelmingly governed by thermal agitation (temperature)."
          }
        ]
      },

      assignmentQuestions: [
        {
          id: "W4-A1",
          number: 1,
          type: "single",
          question: "The Drude model overestimates, by two orders of magnitude",
          options: [
            "Thermal conductivity",
            "Electronic conductivity",
            "Specific heat at constant volume",
            "The Wiedeman Franz law constant"
          ],
          correctAnswer: 2,
          explanation: "The Drude model assumes all valence electrons in a metal absorb thermal energy like classical ideal gas particles, predicting an electronic heat capacity $C_V^e = \\frac{3}{2} n k_B$. In reality, due to the Pauli exclusion principle, only a tiny fraction of electrons within $\\sim k_B T$ of the Fermi level can be thermally excited. Consequently, the actual electronic specific heat at room temperature is approximately two orders of magnitude ($\\sim 100\\times$) smaller than the classical Drude prediction.\n\n**Correct Option: Specific heat at constant volume.**",
          points: 1
        },
        {
          id: "W4-A2",
          number: 2,
          type: "single",
          question: "For electrons in a conductor in a typical household situation, in a closed circuit with flowing current",
          options: [
            "Drift velocity is equal to mean square velocity",
            "Drift velocity is zero",
            "Drift velocity is greater than mean square velocity",
            "Drift velocity is less than mean square velocity"
          ],
          correctAnswer: 3,
          explanation: "In a typical household wire carrying current (e.g., copper wire carrying a few amperes), the electron drift speed $v_d = \\frac{I}{n e A}$ is only about $10^{-4} - 10^{-3} \\text{ m/s}$ (fractions of a millimeter per second). By contrast, the characteristic random thermal speed $\\sqrt{\\langle v^2 \\rangle}$ is around $10^5 \\text{ m/s}$. Thus, the drift velocity is vastly less than the mean square / random thermal velocity.\n\n**Correct Option: Drift velocity is less than mean square velocity.**",
          points: 1
        },
        {
          id: "W4-A3",
          number: 3,
          type: "single",
          question: "In typical household applications, collisions between electrons are dominated by",
          options: [
            "The field applied",
            "The voltage applied",
            "The temperature",
            "The pressure"
          ],
          correctAnswer: 2,
          explanation: "Under typical household room-temperature conditions, thermal agitation of the crystal lattice (phonon scattering) and temperature-dependent thermal motion dominate electron scattering. The applied electric field or voltage only superimposes a minute directional drift onto the vigorous, temperature-dominated random collisions.\n\n**Correct Option: The temperature.**",
          points: 1
        },
        {
          id: "W4-A4",
          number: 4,
          type: "single",
          question: "The Drude model",
          options: [
            "Uses Kinetic theory of gases",
            "Uses a statistical description for how energy is stored within the system",
            "Does not try to determine velocities of individual electrons",
            "All of the above"
          ],
          correctAnswer: 3,
          explanation: "The Drude model:\n1. Applies the classical kinetic theory of gases to conduction electrons.\n2. Uses a statistical description (such as Maxwell–Boltzmann distribution and mean free time $\\tau$) for thermal energy storage and transport.\n3. Does not attempt to calculate or track the individual trajectories/velocities of $\\sim 10^{28}$ electrons per cubic metre.\n\nTherefore, all of the given statements are correct.\n\n**Correct Option: All of the above.**",
          points: 1
        },
        {
          id: "W4-A5",
          number: 5,
          type: "single",
          question: "Independent of any model, a collection of electrons in a solid",
          options: [
            "Do not interact with each other",
            "Do not interact with the ionic cores",
            "Significantly interact with air molecules surrounding the solid",
            "Collide with other electrons in the solid"
          ],
          correctAnswer: 3,
          explanation: "Regardless of whatever simplifying assumptions a theoretical model makes (like Drude's independent electron approximation), electrons in any real physical solid possess electrostatic charge, undergo Coulomb repulsion, and physically interact and collide with other electrons and ionic cores.\n\n**Correct Option: Collide with other electrons in the solid.**",
          points: 1
        },
        {
          id: "W4-A6",
          number: 6,
          type: "single",
          question: "While dealing with the thermodynamics of metallic systems, it is often assumed that",
          options: [
            "P = 1 atmosphere",
            "P = 10 atmosphere",
            "T = 0 Kelvin",
            "T = 0 °C"
          ],
          correctAnswer: 0,
          explanation: "In metallurgical and materials engineering thermodynamics, experimental work and process descriptions are routinely conducted at ambient laboratory conditions, which corresponds to constant temperature and a standard pressure of $P = 1\\text{ atmosphere}$.\n\n**Correct Option: P = 1 atmosphere.**",
          points: 1
        },
        {
          id: "W4-A7",
          number: 7,
          type: "single",
          question: "In Physics based discussions, systems are often examined under",
          options: [
            "Constant T and P",
            "Constant P and V",
            "Constant T and V",
            "At T = 0 °C"
          ],
          correctAnswer: 2,
          explanation: "In physics-based treatments of condensed matter and statistical mechanics, systems are typically analyzed under constant temperature ($T$) and constant volume ($V$). Keeping the volume constant fixes the spatial boundary conditions of the system, which in turn fixes the allowed quantum energy levels in the theoretical model.\n\n**Correct Option: Constant T and V.**",
          points: 1
        },
        {
          id: "W4-A8",
          number: 8,
          type: "single",
          question: "In metallic systems, experimentally, it is not easy to",
          options: [
            "Control volume in a predetermined manner",
            "Control temperature in a predetermined manner",
            "Control pressure in a predetermined manner",
            "Control electric field in a predetermined manner"
          ],
          correctAnswer: 0,
          explanation: "Metals have very small compressibilities and naturally expand/contract with temperature changes. Maintaining an exact, predetermined volume while changing temperature or pressure requires applying extreme, variable hydrostatic stresses, making precise predetermined volume control experimentally very difficult compared to controlling temperature, pressure, or electric field.\n\n**Correct Option: Control volume in a predetermined manner.**",
          points: 1
        },
        {
          id: "W4-A9",
          number: 9,
          type: "single",
          question: "Specifying the total volume, temperature and energy of the system corresponds to specifying its:",
          options: [
            "Macro state",
            "Micro state",
            "Nano state",
            "Pico state"
          ],
          correctAnswer: 0,
          explanation: "Gross thermodynamic variables that describe the system as a whole without reference to the individual states of microscopic particles—such as total energy $E$, volume $V$, and temperature $T$—define the **macrostate** of the system. In contrast, the microstate specifies the exact state/energy level of each individual particle.\n\n**Correct Option: Macro state.**",
          points: 1
        },
        {
          id: "W4-A10",
          number: 10,
          type: "single",
          question: "The mathematical method typically used to solve the problem of determining the highest point on a surface that can reached while being constrained to moving along a specific path, is referred to as",
          options: [
            "The Newton method of undetermined multipliers",
            "The Newton method of determined multipliers",
            "The Lagrange method of determined multipliers",
            "The Lagrange method of undetermined multipliers"
          ],
          correctAnswer: 3,
          explanation: "The **Lagrange method of undetermined multipliers** is the mathematical technique used in calculus and statistical mechanics to find the extrema (maxima/minima) of an objective function (such as thermodynamic probability / number of arrangements $W$) subject to equality constraints (such as fixed total particle count $\\sum n_i = N$ and fixed total energy $\\sum n_i \\varepsilon_i = E$).\n\n**Correct Option: The Lagrange method of undetermined multipliers.**",
          points: 1
        }
      ],

      masteryExamQuestions: [
        {
          id: "W4-M1",
          number: 1,
          type: "single",
          section: "Section A — Assignment Concepts",
          question: "The Drude model overestimates which quantity by approximately two orders of magnitude?",
          options: [
            "Electrical conductivity",
            "Electronic specific heat at constant volume",
            "Wiedemann–Franz constant",
            "Electrical resistivity"
          ],
          correctAnswer: 1,
          explanation: "The Drude model treats conduction electrons as classical particles, yielding $C_V^e = \\frac{3}{2} n k_B$. In reality, due to quantum Fermi-Dirac statistics, only electrons near the Fermi surface absorb thermal energy, making the true electronic specific heat $\\sim 100$ times (two orders of magnitude) smaller.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W4-M2",
          number: 2,
          type: "single",
          section: "Section A — Assignment Concepts",
          question: "In a conductor carrying current, the electron drift speed is generally:",
          options: [
            "Greater than the characteristic random speed",
            "Equal to the characteristic random speed",
            "Much smaller than the characteristic random speed",
            "Always zero"
          ],
          correctAnswer: 2,
          explanation: "Electron drift velocity ($v_d \\sim 10^{-4}-10^{-3}\\text{ m/s}$) is a tiny directed bias superimposed upon a huge random thermal velocity ($\\sqrt{\\langle v^2 \\rangle} \\sim 10^5\\text{ m/s}$). Drift speed is much smaller than the characteristic random speed.\n\n**Correct Option: C.**",
          points: 1
        },
        {
          id: "W4-M3",
          number: 3,
          type: "single",
          section: "Section A — Assignment Concepts",
          question: "Under typical household conditions, electron collisions in a metal are dominated by:",
          options: [
            "Applied voltage alone",
            "Applied electric field alone",
            "Temperature-dependent scattering",
            "Atmospheric pressure alone"
          ],
          correctAnswer: 2,
          explanation: "At room temperature in household circuits, electron scattering is dominated by thermal lattice vibrations (phonons) and thermal motion governed by temperature, not by the applied field or voltage.\n\n**Correct Option: C.**",
          points: 1
        },
        {
          id: "W4-M4",
          number: 4,
          type: "multi",
          section: "Section A — Assignment Concepts",
          question: "Which statements describe the Drude model? (Select all that apply)",
          options: [
            "It uses kinetic theory of gases.",
            "It uses a statistical description of electron behaviour.",
            "It requires tracking every electron's exact velocity individually.",
            "It treats electrons approximately like classical gas particles."
          ],
          correctAnswer: [0, 1, 3],
          explanation: "• **A is correct:** It applies classical gas kinetic theory.\n• **B is correct:** It uses statistical averages (such as mean free time $\\tau$ and average energy).\n• **D is correct:** It treats electrons as classical, distinguishable billiard balls.\n• *C is false:* Statistical mechanics is used precisely because we *cannot* track the exact velocity of each individual electron.\n\n**Correct Options: A, B, and D.**",
          points: 2
        },
        {
          id: "W4-M5",
          number: 5,
          type: "single",
          section: "Section A — Assignment Concepts",
          question: "Which method is used to maximise the number of arrangements subject to constraints on total particle number and energy?",
          options: [
            "Newton's method of undetermined multipliers",
            "Lagrange method of undetermined multipliers",
            "Fourier's method",
            "Maxwell's law"
          ],
          correctAnswer: 1,
          explanation: "The Lagrange method of undetermined multipliers is used to maximize $\\ln W$ subject to the conservation of total particles $\\sum n_i = N$ and total energy $\\sum n_i \\varepsilon_i = E$.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W4-M6",
          number: 6,
          type: "single",
          section: "Section A — Assignment Concepts",
          question: "Physics-based discussions in your lecture generally assume:",
          options: [
            "Constant temperature and pressure",
            "Constant pressure and volume",
            "Constant temperature and volume",
            "Constant temperature and zero volume"
          ],
          correctAnswer: 2,
          explanation: "In physics, constant temperature and volume ($T, V$) are assumed because fixing the system volume fixes the spatial boundary conditions and allowed energy levels.\n\n**Correct Option: C.**",
          points: 1
        },
        {
          id: "W4-M7",
          number: 7,
          type: "single",
          section: "Section A — Assignment Concepts",
          question: "In metallurgical discussions, the pressure is commonly assumed to be:",
          options: [
            "Zero",
            "10 atmospheres",
            "1 atmosphere",
            "Always variable"
          ],
          correctAnswer: 2,
          explanation: "Metallurgical thermodynamics deals with open or ambient processing conditions, standardly assumed to be $P = 1\\text{ atmosphere}$.\n\n**Correct Option: C.**",
          points: 1
        },
        {
          id: "W4-M8",
          number: 8,
          type: "single",
          section: "Section A — Assignment Concepts",
          question: "Specifying the overall energy, volume and temperature describes the system's:",
          options: [
            "Microstate",
            "Macrostate",
            "Trajectory",
            "Partition function"
          ],
          correctAnswer: 1,
          explanation: "Gross thermodynamic variables (total energy $E$, volume $V$, temperature $T$) specify the macrostate of the system.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W4-M9",
          number: 9,
          type: "single",
          section: "Section A — Assignment Concepts",
          question: "Why is constant volume useful in the Physics approach described in the lecture?",
          options: [
            "It eliminates all electron collisions.",
            "It fixes the allowed energy levels in the model.",
            "It forces all electrons to have equal energy.",
            "It makes the temperature zero."
          ],
          correctAnswer: 1,
          explanation: "Fixing the volume $V$ sets the physical dimensions of the container/box, which holds the allowed quantum energy level eigenvalues $\\varepsilon_i$ fixed during the calculation.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W4-M10",
          number: 10,
          type: "single",
          section: "Section A — Assignment Concepts",
          question: "Which quantity is difficult to control in a predetermined manner when experimentally studying metallic systems, according to the lecture?",
          options: [
            "Temperature",
            "Pressure",
            "Volume",
            "Electric field"
          ],
          correctAnswer: 2,
          explanation: "Due to thermal expansion and negligible compressibility in solid metals, controlling the volume in a predetermined manner requires enormous, dynamically adjusted stresses, making it experimentally very difficult.\n\n**Correct Option: C.**",
          points: 1
        },
        {
          id: "W4-M11",
          number: 11,
          type: "single",
          section: "Section B — Statistical Mechanics",
          question: "Statistical mechanics is useful because:",
          options: [
            "It tracks every particle exactly.",
            "It predicts the properties of large systems without tracking every particle individually.",
            "It applies only to a single particle.",
            "It eliminates the need for experimental data."
          ],
          correctAnswer: 1,
          explanation: "With $\\sim 10^{28}$ electrons per cubic metre, solving deterministic equations of motion for each particle is impossible. Statistical mechanics predicts macroscopic observable properties from statistical averages over microstates.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W4-M12",
          number: 12,
          type: "single",
          section: "Section B — Statistical Mechanics",
          question: "A microstate describes:",
          options: [
            "Only the total temperature",
            "The specific arrangement of particles among energy levels",
            "Only the volume of the system",
            "Only the total number of particles"
          ],
          correctAnswer: 1,
          explanation: "A microstate specifies the microscopic details: the exact quantum state / energy level occupied by each individual particle in the system.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W4-M13",
          number: 13,
          type: "single",
          section: "Section B — Statistical Mechanics",
          question: "A macrostate can correspond to:",
          options: [
            "Only one possible microstate",
            "Multiple microstates",
            "No microstates",
            "Only the highest energy state"
          ],
          correctAnswer: 1,
          explanation: "There are typically an astronomical number of distinct microscopic arrangements (microstates) that result in the exact same macroscopic total energy, volume, and temperature.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W4-M14",
          number: 14,
          type: "single",
          section: "Section B — Statistical Mechanics",
          question: "In a sufficiently large system, the most probable state:",
          options: [
            "Becomes effectively dominant",
            "Must have zero energy",
            "Is always the only mathematically possible state",
            "Is less probable than every other state combined"
          ],
          correctAnswer: 0,
          explanation: "As the number of particles $N$ approaches thermodynamic quantities ($N \\sim 10^{23}$), the probability distribution around the most probable distribution becomes extremely sharply peaked. The most probable state effectively dominates the system and represents thermal equilibrium.\n\n**Correct Option: A.**",
          points: 1
        },
        {
          id: "W4-M15",
          number: 15,
          type: "single",
          section: "Section B — Statistical Mechanics",
          question: "For a system of classical distinguishable particles, the number of arrangements associated with particle populations $n_0, n_1, \\ldots, n_r$ is:",
          options: [
            "\\frac{n!}{\\prod_i n_i!}",
            "\\frac{\\prod_i n_i!}{n!}",
            "n + \\sum_i n_i!",
            "\\prod_i n_i"
          ],
          correctAnswer: 0,
          explanation: "For $n$ distinguishable particles distributed such that $n_i$ particles occupy the $i$-th energy level, the number of distinct microstates (arrangements) is given by the multinomial coefficient: $W = \\frac{n!}{\\prod_i n_i!} = \\frac{n!}{n_0! n_1! \\dots n_r!}$.\n\n**Correct Option: A.**",
          points: 1
        },
        {
          id: "W4-M16",
          number: 16,
          type: "single",
          section: "Section C — Maxwell–Boltzmann Statistics",
          question: "Maxwell–Boltzmann statistics applies to:",
          options: [
            "Classical, identical but distinguishable particles",
            "Quantum, identical but indistinguishable particles only",
            "Photons only",
            "Electrons in every situation without exception"
          ],
          correctAnswer: 0,
          explanation: "Maxwell–Boltzmann statistics is classical: it assumes particles are identical in physical properties but distinguishable in principle by tracking their individual trajectories.\n\n**Correct Option: A.**",
          points: 1
        },
        {
          id: "W4-M17",
          number: 17,
          type: "single",
          section: "Section C — Maxwell–Boltzmann Statistics",
          question: "According to the MB distribution, as energy $\\varepsilon_i$ increases at fixed temperature:",
          options: [
            "The population $n_i$ increases exponentially",
            "The population $n_i$ decreases exponentially",
            "The population remains constant",
            "The population must become negative"
          ],
          correctAnswer: 1,
          explanation: "In the Maxwell–Boltzmann distribution, $n_i = \\frac{n}{P} e^{-\\varepsilon_i / (k_B T)}$. Because of the negative exponent, the population $n_i$ decreases exponentially with increasing energy $\\varepsilon_i$.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W4-M18",
          number: 18,
          type: "single",
          section: "Section C — Maxwell–Boltzmann Statistics",
          question: "In the expression $n_i = \\frac{n}{P} e^{-\\varepsilon_i / (k_B T)}$, what does $k_B$ represent?",
          options: [
            "Electrical conductivity",
            "Boltzmann constant",
            "Collision time",
            "Partition function"
          ],
          correctAnswer: 1,
          explanation: "$k_B$ is the universal Boltzmann constant ($1.3806 \\times 10^{-23}\\text{ J/K}$), connecting thermal energy to absolute temperature.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W4-M19",
          number: 19,
          type: "single",
          section: "Section D — Classical vs Quantum Particles",
          question: "Why is the classical Drude assumption unsuitable for electrons in a solid?",
          options: [
            "Electrons have no energy.",
            "Electrons follow quantum-mechanical behaviour and cannot generally be treated as classical distinguishable particles.",
            "Electrons never interact with anything.",
            "Metals have no free electrons."
          ],
          correctAnswer: 1,
          explanation: "Electrons in a metal have overlapping de Broglie wavelengths and obey the Pauli exclusion principle. They are quantum-mechanical indistinguishable fermions, not classical distinguishable particles.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W4-M20",
          number: 20,
          type: "single",
          section: "Section D — Classical vs Quantum Particles",
          question: "In quantum mechanics, identical electrons are treated as:",
          options: [
            "Identical but distinguishable",
            "Different in size from one another",
            "Identical but indistinguishable",
            "Classical balls with known trajectories"
          ],
          correctAnswer: 2,
          explanation: "Identical quantum particles are fundamentally indistinguishable: there is no physical experiment or trajectory tracking that allows us to label one identical electron from another.\n\n**Correct Option: C.**",
          points: 1
        },
        {
          id: "W4-M21",
          number: 21,
          type: "multi",
          section: "Section D — Classical vs Quantum Particles",
          question: "Which statements about the Drude model are correct? (Select all that apply)",
          options: [
            "It overestimates electronic specific heat.",
            "It assumes classical Maxwell–Boltzmann statistics for free electrons.",
            "It correctly predicts every electronic property of metals.",
            "Its shortcomings motivate a quantum-mechanical treatment."
          ],
          correctAnswer: [0, 1, 3],
          explanation: "• **A is correct:** Overestimates $C_V^e$ by $\\sim 100\\times$.\n• **B is correct:** Assumes electrons obey classical MB statistics like ideal gas molecules.\n• **D is correct:** Its failures directly motivated Sommerfeld's quantum free electron model.\n• *C is false:* Drude fails on heat capacity, positive Hall coefficients, and temperature dependence.\n\n**Correct Options: A, B, and D.**",
          points: 2
        },
        {
          id: "W4-M22",
          number: 22,
          type: "multi",
          section: "Section D — Classical vs Quantum Particles",
          question: "Which statements are correct? (Select all that apply)",
          options: [
            "Statistical mechanics helps describe large systems.",
            "One macrostate can have several microstates.",
            "Maxwell–Boltzmann statistics assumes identical but indistinguishable particles.",
            "The most probable state becomes important when studying very large systems."
          ],
          correctAnswer: [0, 1, 3],
          explanation: "• **A is correct:** It predicts macroscopic behavior of massive collections of particles.\n• **B is correct:** A single macrostate corresponds to multiple microscopic configurations.\n• **D is correct:** In the thermodynamic limit, the most probable state overwhelmingly dominates.\n• *C is false:* Maxwell–Boltzmann statistics assumes particles are *distinguishable*. Indistinguishability is a quantum property.\n\n**Correct Options: A, B, and D.**",
          points: 2
        }
      ]
    },
    {
      id: 5,
      number: 5,
      title: "History of Quantum Mechanics & Drude–Sommerfeld Model",
      lectures: "Lectures 14 - 16",
      status: "active",
      summary: "Blackbody radiation, Planck's quanta, photoelectric effect, matter waves, Schrödinger equation & uncertainty, and introduction to the Drude-Sommerfeld model.",
      studyMaterials: {
        quickOverview: "Week 5 covers the birth of quantum mechanics and the foundational shift from the classical Drude model to the Drude–Sommerfeld quantum model. Classical physics failed to explain blackbody radiation (producing the Rayleigh–Jeans ultraviolet catastrophe) and the photoelectric effect. Max Planck resolved blackbody radiation by introducing energy quantization ($E = h\\nu$), and Albert Einstein explained the photoelectric effect using localized light quanta (photons). Louis de Broglie hypothesized matter waves ($\\lambda = h/p$, verified by Davisson & Germer in 1927). Arnold Sommerfeld subsequently applied quantum mechanics, the Pauli exclusion principle, and Fermi–Dirac statistics to conduction electrons in metals, treating them as identical and indistinguishable fermions.",
        
        formulaSheet: [
          { name: "Planck Energy Quantum", formula: "E = h\\nu = \\frac{hc}{\\lambda}", units: "J or eV", desc: "Energy of a photon carrying frequency \\nu or wavelength \\lambda; h = 6.626 \\times 10^{-34} \\text{ J·s}." },
          { name: "Wave Equation", formula: "c = \\lambda \\nu", units: "m/s", desc: "Speed of light relation connecting wavelength and frequency in vacuum." },
          { name: "Wien's Displacement Law", formula: "\\lambda_{\\max} T = b \\approx 2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}", units: "m·K", desc: "Peak emission wavelength is inversely proportional to absolute temperature." },
          { name: "Stefan–Boltzmann Law", formula: "I = \\sigma T^4", units: "W/m²", desc: "Total emitted radiant power per unit area; \\sigma = 5.67 \\times 10^{-8} \\text{ W}/(\\text{m}^2\\text{K}^4)." },
          { name: "Einstein's Photoelectric Equation", formula: "K_{\\max} = h\\nu - \\phi = h(\\nu - \\nu_0)", units: "eV or J", desc: "Maximum kinetic energy of ejected photoelectron; \\phi = h\\nu_0 is the work function." },
          { name: "de Broglie Matter Wavelength", formula: "\\lambda = \\frac{h}{p} = \\frac{h}{mv}", units: "m (or Å)", desc: "Wavelength associated with any moving particle of momentum p." },
          { name: "Heisenberg Uncertainty Principle", formula: "\\Delta x \\Delta p \\ge \\frac{\\hbar}{2}", units: "J·s", desc: "Position and momentum cannot be simultaneously determined with arbitrary precision; \\hbar = h/(2\\pi)." },
          { name: "Time-Independent Schrödinger Equation", formula: "\\left[-\\frac{\\hbar^2}{2m}\\nabla^2 + V\\right]\\psi = E\\psi", units: "Energy eigenvalue", desc: "Wave equation governing stationary quantum states." },
          { name: "Born Probability Density", formula: "P(\\mathbf{r}) = |\\psi(\\mathbf{r})|^2", units: "Probability/m³", desc: "Spatial probability density of finding a particle described by wavefunction \\psi." },
          { name: "Cosmic Microwave Background (CMB)", formula: "T_{\\text{CMB}} \\approx 2.75 \\text{ K} \\approx 3 \\text{ K}", units: "Kelvin", desc: "Remnant thermal blackbody radiation from the early universe." }
        ],

        lecturesBreakdown: [
          {
            lectureNo: 14,
            title: "History of Quantum Mechanics — 1 (Blackbody Radiation)",
            bullets: [
              "Blackbody: An idealized physical body that absorbs 100% of incident electromagnetic radiation and emits a continuous thermal spectrum dependent solely on temperature.",
              "Stefan–Boltzmann Law: Total emitted power per unit surface area increases as the fourth power of absolute temperature: $I = \\sigma T^4$, where $\\sigma = 5.67 \\times 10^{-8} \\text{ W}\\cdot\\text{m}^{-2}\\text{K}^{-4}$.",
              "Wien's Displacement Law: As temperature increases, the peak intensity wavelength shifts toward shorter wavelengths: $\\lambda_{\\max} T = b \\approx 2.898 \\times 10^{-3} \\text{ m}\\cdot\\text{K}$.",
              "Classical Failure (Rayleigh–Jeans Law): Classical equipartition predicted that spectral energy density grows without bound as frequency squared ($u(\\nu) \\propto \\nu^2$), predicting infinite emitted intensity at short ultraviolet wavelengths. This catastrophic breakdown was known as the 'Ultraviolet Catastrophe'.",
              "Planck's Quantum Revolution (1900): Max Planck resolved the crisis by proposing that atomic cavity resonators can only absorb and emit radiation in discrete energy packets called quanta: $E = h\\nu$. This marked the historic birth of quantum mechanics.",
              "Cosmic Microwave Background (CMB): The universe is filled with relic radiation that conforms to an almost perfect blackbody spectrum at $T \\approx 2.75\\text{ K}$, rounded in the course to approximately $3\\text{ Kelvin}$."
            ]
          },
          {
            lectureNo: 15,
            title: "History of Quantum Mechanics — 2 (Photoelectric Effect & Matter Waves)",
            bullets: [
              "Photoelectric Effect (Einstein 1905): Heinrich Hertz discovered and Albert Einstein explained the ejection of electrons when light illuminates a metal surface. Einstein extended Planck's concept, postulating that light itself propagates as discrete packets (photons) of energy $E = h\\nu$.",
              "Photoelectric Equation: $K_{\\max} = h\\nu - \\phi$, where $\\phi = h\\nu_0$ is the metal's characteristic work function (minimum energy needed to remove an electron).",
              "Key Experimental Observations: (1) Below the threshold frequency $\\nu_0$, no electrons are emitted regardless of light intensity. (2) Above $\\nu_0$, increasing light intensity increases the number of emitted electrons (photocurrent), while increasing frequency increases their maximum kinetic energy.",
              "Matter Waves (Louis de Broglie 1924): Hypothesized wave-particle duality for matter: any particle with momentum $p$ has an associated matter wavelength $\\lambda = \\frac{h}{p}$. Verified experimentally in 1927 by Davisson and Germer via electron diffraction from nickel crystals.",
              "Foundational Quantum Formalisms: (1) Schrödinger Equation: $[-\\frac{\\hbar^2}{2m}\\nabla^2 + V]\\psi = E\\psi$. (2) Max Born: $|\psi|^2$ represents probability density. (3) Heisenberg Uncertainty: $\\Delta x \\Delta p \\ge \\frac{\\hbar}{2}$. (4) Pauli Exclusion: No two electrons can share the identical set of four quantum numbers ($n, l, m_l, m_s$)."
            ]
          },
          {
            lectureNo: 16,
            title: "Introduction to the Drude–Sommerfeld Model",
            bullets: [
              "Transition from Classical to Quantum Electron Gas: Arnold Sommerfeld (1927) replaced Drude's classical Maxwell-Boltzmann statistics with quantum Fermi-Dirac statistics.",
              "Electrons as Quantum Fermions: Conduction electrons have half-integer spin ($s = 1/2$) and obey the Pauli Exclusion Principle.",
              "Identical & Indistinguishable: Unlike classical particles that can be distinguished by continuous paths, identical quantum electrons cannot be tracked or labeled individually.",
              "Resolution of Specific Heat Paradox: Because of Pauli exclusion, only electrons residing within $\\sim k_B T$ of the Fermi level ($E_F$) can absorb thermal energy and scatter into unoccupied states. This immediately resolved Drude's 100-fold overestimation of electronic specific heat."
            ]
          }
        ],

        examTraps: [
          {
            trap: "Cosmic Microwave Background Temperature: ~3 K (Assignment Q8)",
            explanation: "The cosmic microwave background radiation temperature is approximately $2.725\\text{ K} \\approx 2.75\\text{ K}$, which rounds to 3 Kelvin. Do not confuse it with 0 K or room temperature (300 K)."
          },
          {
            trap: "Intensity vs Frequency in Photoelectric Effect (Lecture 15)",
            explanation: "Light frequency determines whether electrons can be ejected at all and sets their maximum kinetic energy ($K_{\\max} = h\\nu - \\phi$). Light intensity only controls the *rate/number* of emitted electrons (photocurrent). Increasing intensity below threshold frequency will NEVER eject electrons."
          },
          {
            trap: "Classical Distinguishability vs Quantum Indistinguishability (Assignment Q1, Q3, Q4)",
            explanation: "Classical particles (Maxwell–Boltzmann) can be identical yet distinguishable because their paths can be continuously tracked. Quantum particles (Fermi–Dirac / Bose–Einstein) can NEVER be both identical and distinguishable."
          },
          {
            trap: "Wien's Law Inverse Relationship (Assignment Q7)",
            explanation: "As temperature increases, peak wavelength decreases: $\\lambda_{\\max} \\propto 1/T$. Meanwhile, total emitted power increases rapidly ($I \\propto T^4$ via Stefan-Boltzmann)."
          },
          {
            trap: "Rayleigh–Jeans Law vs Planck's Quantum Solution (Lecture 14)",
            explanation: "The classical Rayleigh-Jeans law caused the ultraviolet catastrophe by predicting infinite intensity at short wavelengths. Planck fixed it by discretizing energy exchange ($E = h\\nu$)."
          }
        ]
      },

      assignmentQuestions: [
        {
          id: "W5-A1",
          number: 1,
          type: "single",
          question: "Maxwell–Boltzmann statistics applies to a collection of:",
          options: [
            "Identical and distinguishable particles",
            "Identical and indistinguishable particles",
            "Non-identical and indistinguishable particles",
            "Photons and phonons only"
          ],
          correctAnswer: 0,
          explanation: "Maxwell–Boltzmann (MB) statistics is the classical distribution law. In the classical picture, even if particles are identical in all physical properties (mass, charge, size), their continuous deterministic trajectories can in principle be tracked, rendering them distinguishable.\n\n**Correct Option: Identical and distinguishable particles.**",
          points: 1
        },
        {
          id: "W5-A2",
          number: 2,
          type: "single",
          question: "As temperature increases, Maxwell–Boltzmann statistics indicates:",
          options: [
            "All particles drop into the ground state",
            "More states at higher energy levels are occupied",
            "Particle occupation of higher levels decreases to zero",
            "The distribution becomes independent of energy"
          ],
          correctAnswer: 1,
          explanation: "The Maxwell–Boltzmann distribution is $n_i = \\frac{n}{P} e^{-\\varepsilon_i / (k_B T)}$. As temperature $T$ increases, the thermal energy scale $k_B T$ increases, causing the exponential factor $e^{-\\varepsilon_i / (k_B T)}$ to decay more slowly with energy. This promotes more particles into higher energy levels.\n\n**Correct Option: More states at higher energy levels are occupied.**",
          points: 1
        },
        {
          id: "W5-A3",
          number: 3,
          type: "single",
          question: "Classical particles:",
          options: [
            "Cannot have defined trajectories",
            "Must be fermions or bosons",
            "Can be identical and distinguishable",
            "Are completely indistinguishable under all circumstances"
          ],
          correctAnswer: 2,
          explanation: "In classical mechanics, identical particles (such as identical billiard balls or classical gas molecules) can be continuously tracked along their distinct trajectories through space and time, allowing us to distinguish one from another.\n\n**Correct Option: Can be identical and distinguishable.**",
          points: 1
        },
        {
          id: "W5-A4",
          number: 4,
          type: "single",
          question: "Quantum mechanical particles:",
          options: [
            "Always follow Maxwell–Boltzmann statistics",
            "Can be labeled and tracked precisely along distinct classical trajectories",
            "Only exist at zero Kelvin",
            "Cannot be both identical and distinguishable"
          ],
          correctAnswer: 3,
          explanation: "Due to wave-particle duality and the Heisenberg uncertainty principle ($\\Delta x \\Delta p \\ge \\hbar/2$), identical quantum particles (like electrons) have overlapping wavefunctions and cannot be tracked along classical paths. If two identical quantum particles are swapped, the system configuration is fundamentally indistinguishable.\n\n**Correct Option: Cannot be both identical and distinguishable.**",
          points: 1
        },
        {
          id: "W5-A5",
          number: 5,
          type: "single",
          question: "At room temperature, humans give out:",
          options: [
            "Ultraviolet (UV) radiation",
            "Visible light",
            "X-ray radiation",
            "Infrared (IR) radiation"
          ],
          correctAnswer: 3,
          explanation: "All physical bodies at finite temperatures emit thermal radiation. For human body temperature ($\\approx 37^\\circ\\text{C} = 310\\text{ K}$), Wien's displacement law yields $\\lambda_{\\max} \\approx \\frac{2.898 \\times 10^{-3}}{310} \\approx 9.35\\,\\mu\\text{m}$, which lies firmly in the Infrared (IR) spectrum.\n\n**Correct Option: Infrared (IR) radiation.**",
          points: 1
        },
        {
          id: "W5-A6",
          number: 6,
          type: "single",
          question: "A black body gives out radiation that is:",
          options: [
            "Uniform in intensity across all wavelengths",
            "Monochromatic at a single frequency only",
            "Emitted only at high temperatures above 10,000 K",
            "Highest in intensity at one wavelength, decreasing on either side"
          ],
          correctAnswer: 3,
          explanation: "A blackbody emission spectrum is a continuous curve that rises smoothly from short wavelengths to a distinct maximum intensity at a peak wavelength $\\lambda_{\\max}$, and then gradually tails off toward longer wavelengths. It is never flat or uniform.\n\n**Correct Option: Highest in intensity at one wavelength, decreasing on either side.**",
          points: 1
        },
        {
          id: "W5-A7",
          number: 7,
          type: "single",
          question: "As blackbody temperature increases:",
          options: [
            "The wavelength of maximum intensity decreases",
            "The wavelength of maximum intensity increases",
            "The total emitted power decreases",
            "The peak wavelength remains strictly unchanged"
          ],
          correctAnswer: 0,
          explanation: "According to Wien's Displacement Law: $\\lambda_{\\max} T = b = 2.898 \\times 10^{-3}\\text{ m}\\cdot\\text{K}$. As absolute temperature $T$ increases, the peak wavelength $\\lambda_{\\max}$ shifts toward shorter wavelengths (higher frequencies and photon energies).\n\n**Correct Option: The wavelength of maximum intensity decreases.**",
          points: 1
        },
        {
          id: "W5-A8",
          number: 8,
          type: "single",
          question: "Approximate cosmic microwave background temperature:",
          options: [
            "3 Kelvin",
            "30 Kelvin",
            "300 Kelvin",
            "0 Kelvin"
          ],
          correctAnswer: 0,
          explanation: "The Cosmic Microwave Background (CMB) radiation that permeates the universe has an almost perfect blackbody spectrum corresponding to $T \\approx 2.725\\text{ K} \\approx 2.75\\text{ K}$, rounded in the lectures and assignment to approximately $3\\text{ Kelvin}$.\n\n**Correct Option: 3 Kelvin.**",
          points: 1
        },
        {
          id: "W5-A9",
          number: 9,
          type: "single",
          question: "Photons of frequency $\\nu$ can have energy equal to:",
          options: [
            "Any continuous fractional value",
            "Only integral amounts of energy",
            "Zero energy only",
            "Purely imaginary energy"
          ],
          correctAnswer: 1,
          explanation: "In Max Planck's quantum hypothesis (and Einstein's photon theory), electromagnetic radiation of frequency $\\nu$ is quantized into discrete packets of energy $h\\nu$. Thus, a beam of light can only carry energy in integer multiples: $E = N h \\nu$, where $N = 1, 2, 3, \\ldots$\n\n**Correct Option: Only integral amounts of energy.**",
          points: 1
        },
        {
          id: "W5-A10",
          number: 10,
          type: "single",
          question: "The idea that particles can behave as waves was first credited to:",
          options: [
            "Isaac Newton",
            "Louis de Broglie",
            "James Clerk Maxwell",
            "Albert Einstein"
          ],
          correctAnswer: 1,
          explanation: "In 1924, Prince Louis de Broglie hypothesized that if light waves possess particle-like characteristics (photons with momentum $p = h/\\lambda$), then material particles with momentum $p$ must also exhibit wave-like properties with de Broglie wavelength $\\lambda = \\frac{h}{p}$. This was experimentally confirmed in 1927 by Davisson and Germer.\n\n**Correct Option: Louis de Broglie.**",
          points: 1
        }
      ],

      masteryExamQuestions: [
        {
          id: "W5-M1",
          number: 1,
          type: "single",
          section: "Section A — Blackbody Radiation & Planck's Theory",
          question: "Which scientist introduced the concept of energy quanta to explain blackbody radiation?",
          options: [
            "Albert Einstein",
            "Max Planck",
            "Niels Bohr",
            "Louis de Broglie"
          ],
          correctAnswer: 1,
          explanation: "In 1900, Max Planck resolved the ultraviolet catastrophe by postulating that the atomic resonators of a cavity absorb and emit thermal radiation only in discrete energy packets called quanta: $E = h\\nu$.\n\n**Correct Option: B (Max Planck).**",
          points: 1
        },
        {
          id: "W5-M2",
          number: 2,
          type: "single",
          section: "Section A — Blackbody Radiation & Planck's Theory",
          question: "The energy of a photon is directly proportional to its:",
          options: [
            "Wavelength",
            "Frequency",
            "Temperature only",
            "Speed in vacuum"
          ],
          correctAnswer: 1,
          explanation: "Photon energy is given by Planck's relation: $E = h\\nu$. It is directly proportional to frequency $\\nu$ (and inversely proportional to wavelength $\\lambda$).\n\n**Correct Option: B (Frequency).**",
          points: 1
        },
        {
          id: "W5-M3",
          number: 3,
          type: "single",
          section: "Section A — Blackbody Radiation & Planck's Theory",
          question: "If the frequency of radiation doubles, the energy of each photon:",
          options: [
            "Halves",
            "Doubles",
            "Remains unchanged",
            "Becomes four times"
          ],
          correctAnswer: 1,
          explanation: "Since $E = h\\nu$, doubling the frequency ($\\nu' = 2\\nu$) directly doubles the individual photon energy: $E' = 2E$.\n\n**Correct Option: B (Doubles).**",
          points: 1
        },
        {
          id: "W5-M4",
          number: 4,
          type: "single",
          section: "Section A — Blackbody Radiation & Planck's Theory",
          question: "The ultraviolet catastrophe arose from the failure of which law?",
          options: [
            "Wien's displacement law",
            "Stefan–Boltzmann law",
            "Rayleigh–Jeans law",
            "de Broglie relation"
          ],
          correctAnswer: 2,
          explanation: "The classical Rayleigh-Jeans law assumed equipartition of energy for electromagnetic modes, predicting that emitted intensity diverges to infinity at high frequencies (short ultraviolet wavelengths)—an unphysical result known as the 'ultraviolet catastrophe'.\n\n**Correct Option: C (Rayleigh–Jeans law).**",
          points: 1
        },
        {
          id: "W5-M5",
          number: 5,
          type: "single",
          section: "Section A — Blackbody Radiation & Planck's Theory",
          question: "A blackbody's temperature increases. What happens to its peak wavelength?",
          options: [
            "It increases",
            "It decreases",
            "It stays constant",
            "It becomes infinite"
          ],
          correctAnswer: 1,
          explanation: "Wien's displacement law states $\\lambda_{\\max} T = \\text{constant}$. As temperature increases, the peak wavelength $\\lambda_{\\max}$ decreases (shifts toward higher frequencies).\n\n**Correct Option: B (It decreases).**",
          points: 1
        },
        {
          id: "W5-M6",
          number: 6,
          type: "single",
          section: "Section A — Blackbody Radiation & Planck's Theory",
          question: "According to the Stefan–Boltzmann law, if absolute temperature doubles, emitted power per unit area becomes:",
          options: [
            "Twice",
            "Four times",
            "Eight times",
            "Sixteen times"
          ],
          correctAnswer: 3,
          explanation: "The Stefan-Boltzmann law states $I = \\sigma T^4$. If temperature doubles ($T' = 2T$), the emitted intensity becomes $I' = \\sigma (2T)^4 = 16 \\sigma T^4 = 16 I$.\n\n**Correct Option: D (Sixteen times).**",
          points: 1
        },
        {
          id: "W5-M7",
          number: 7,
          type: "single",
          section: "Section B — Photoelectric Effect",
          question: "In the photoelectric effect, the minimum frequency needed to eject electrons is called:",
          options: [
            "Resonance frequency",
            "Threshold frequency",
            "Natural frequency",
            "Cut-off wavelength"
          ],
          correctAnswer: 1,
          explanation: "The threshold frequency $\\nu_0$ is the minimum frequency of incident light required to provide the work function energy ($\\phi = h\\nu_0$) necessary to liberate an electron from the metal surface.\n\n**Correct Option: B (Threshold frequency).**",
          points: 1
        },
        {
          id: "W5-M8",
          number: 8,
          type: "single",
          section: "Section B — Photoelectric Effect",
          question: "Light has a frequency below the threshold frequency. Increasing its intensity will:",
          options: [
            "Eject more electrons",
            "Increase electron kinetic energy",
            "Still fail to eject electrons",
            "Double the threshold frequency"
          ],
          correctAnswer: 2,
          explanation: "If $\\nu < \\nu_0$, each individual photon has energy $h\\nu < \\phi$, which is insufficient to overcome the work function. Increasing intensity merely increases the number of sub-threshold photons; no electrons can be emitted.\n\n**Correct Option: C (Still fail to eject electrons).**",
          points: 1
        },
        {
          id: "W5-M9",
          number: 9,
          type: "single",
          section: "Section B — Photoelectric Effect",
          question: "Above the threshold frequency, increasing light frequency while keeping the material unchanged increases the maximum kinetic energy of emitted electrons.",
          options: [
            "True",
            "False"
          ],
          correctAnswer: 0,
          explanation: "Einstein's photoelectric equation is $K_{\\max} = h\\nu - \\phi$. Since the work function $\\phi$ depends only on the material, increasing the incident frequency $\\nu$ linearly increases the maximum kinetic energy $K_{\\max}$ of ejected electrons.\n\n**Correct Option: A (True).**",
          points: 1
        },
        {
          id: "W5-M10",
          number: 10,
          type: "single",
          section: "Section B — Photoelectric Effect",
          question: "The particle-like packets of light are called:",
          options: [
            "Phonons",
            "Electrons",
            "Photons",
            "Protons"
          ],
          correctAnswer: 2,
          explanation: "Light quanta carrying discrete energy $E = h\\nu$ and momentum $p = h/\\lambda$ are called photons.\n\n**Correct Option: C (Photons).**",
          points: 1
        },
        {
          id: "W5-M11",
          number: 11,
          type: "single",
          section: "Section C — Matter Waves & Quantum Mechanics",
          question: "The de Broglie wavelength of a particle is given by:",
          options: [
            "\\lambda = hp",
            "\\lambda = h/p",
            "\\lambda = p/h",
            "\\lambda = hc"
          ],
          correctAnswer: 1,
          explanation: "Louis de Broglie related matter wave wavelength to particle momentum: $\\lambda = \\frac{h}{p} = \\frac{h}{mv}$.\n\n**Correct Option: B (\\lambda = h/p).**",
          points: 1
        },
        {
          id: "W5-M12",
          number: 12,
          type: "single",
          section: "Section C — Matter Waves & Quantum Mechanics",
          question: "For particles with the same mass, if momentum increases, de Broglie wavelength:",
          options: [
            "Increases",
            "Decreases",
            "Remains unchanged",
            "Becomes zero immediately"
          ],
          correctAnswer: 1,
          explanation: "Because $\\lambda = h/p$, the matter wavelength is inversely proportional to momentum. Increasing momentum decreases wavelength.\n\n**Correct Option: B (Decreases).**",
          points: 1
        },
        {
          id: "W5-M13",
          number: 13,
          type: "single",
          section: "Section C — Matter Waves & Quantum Mechanics",
          question: "Electron diffraction provides direct experimental evidence for:",
          options: [
            "Electron charge only",
            "The wave nature of electrons",
            "The absence of electron momentum",
            "Classical distinguishability"
          ],
          correctAnswer: 1,
          explanation: "The 1927 Davisson-Germer experiment and G.P. Thomson's experiment demonstrated that electrons scattered by nickel crystals produce interference diffraction patterns, conclusively proving their wave nature.\n\n**Correct Option: B (The wave nature of electrons).**",
          points: 1
        },
        {
          id: "W5-M14",
          number: 14,
          type: "single",
          section: "Section C — Matter Waves & Quantum Mechanics",
          question: "Who proposed the matter-wave concept?",
          options: [
            "Max Planck",
            "Louis de Broglie",
            "Max Born",
            "Werner Heisenberg"
          ],
          correctAnswer: 1,
          explanation: "Louis de Broglie proposed matter waves in his 1924 doctoral thesis, unifying particle and wave descriptions across physics.\n\n**Correct Option: B (Louis de Broglie).**",
          points: 1
        },
        {
          id: "W5-M15",
          number: 15,
          type: "single",
          section: "Section C — Matter Waves & Quantum Mechanics",
          question: "In the Born interpretation, $|\\psi|^2$ represents:",
          options: [
            "Energy density",
            "Probability density",
            "Momentum itself",
            "Electric conductivity"
          ],
          correctAnswer: 1,
          explanation: "Max Born interpreted the squared modulus of the quantum wave function, $|\\psi(\\mathbf{r}, t)|^2$, as the probability density of finding the particle at position $\\mathbf{r}$ at time $t$.\n\n**Correct Option: B (Probability density).**",
          points: 1
        },
        {
          id: "W5-M16",
          number: 16,
          type: "single",
          section: "Section C — Matter Waves & Quantum Mechanics",
          question: "The Heisenberg uncertainty principle relates uncertainty in:",
          options: [
            "Mass and charge",
            "Position and momentum",
            "Temperature and pressure",
            "Energy and volume only"
          ],
          correctAnswer: 1,
          explanation: "Heisenberg's uncertainty principle states $\\Delta x \\Delta p \\ge \\frac{\\hbar}{2}$, meaning position and momentum cannot be simultaneously measured to arbitrary precision.\n\n**Correct Option: B (Position and momentum).**",
          points: 1
        },
        {
          id: "W5-M17",
          number: 17,
          type: "single",
          section: "Section C — Matter Waves & Quantum Mechanics",
          question: "The Pauli exclusion principle states that:",
          options: [
            "All electrons have the same energy",
            "No two electrons can have identical sets of four quantum numbers",
            "Electrons cannot have spin",
            "Electrons always occupy the highest energy level first"
          ],
          correctAnswer: 1,
          explanation: "Formulated by Wolfgang Pauli in 1925, the principle states that no two fermions in the same quantum system can simultaneously occupy the same quantum state (identical four quantum numbers $n, l, m_l, m_s$).\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W5-M18",
          number: 18,
          type: "single",
          section: "Section D — Drude–Sommerfeld Model",
          question: "Which statistics does the classical Drude model use?",
          options: [
            "Fermi–Dirac",
            "Bose–Einstein",
            "Maxwell–Boltzmann",
            "None"
          ],
          correctAnswer: 2,
          explanation: "The classical Drude model treats conduction electrons as classical ideal gas molecules obeying Maxwell–Boltzmann statistics.\n\n**Correct Option: C (Maxwell–Boltzmann).**",
          points: 1
        },
        {
          id: "W5-M19",
          number: 19,
          type: "single",
          section: "Section D — Drude–Sommerfeld Model",
          question: "Which statistics describes electrons as fermions?",
          options: [
            "Maxwell–Boltzmann",
            "Fermi–Dirac",
            "Rayleigh–Jeans",
            "Stefan–Boltzmann"
          ],
          correctAnswer: 1,
          explanation: "Electrons have half-integer spin ($s = 1/2$) and obey the Pauli exclusion principle; their equilibrium distribution is given by quantum Fermi–Dirac statistics.\n\n**Correct Option: B (Fermi–Dirac).**",
          points: 1
        },
        {
          id: "W5-M20",
          number: 20,
          type: "single",
          section: "Section D — Drude–Sommerfeld Model",
          question: "Which principle is applied in the Drude–Sommerfeld model but not in the classical Drude model?",
          options: [
            "Archimedes' principle",
            "Pauli exclusion principle",
            "Pascal's principle",
            "Equivalence principle"
          ],
          correctAnswer: 1,
          explanation: "Arnold Sommerfeld's crucial breakthrough was applying quantum mechanics and the Pauli exclusion principle to the free electron gas, drastically reducing the effective number of electrons participating in thermal excitation.\n\n**Correct Option: B (Pauli exclusion principle).**",
          points: 1
        },
        {
          id: "W5-M21",
          number: 21,
          type: "multi",
          section: "Section E — High-Yield Tricky Questions & MSQs",
          question: "Which statements are correct? (Select all that apply)",
          options: [
            "Planck introduced energy quantization.",
            "Einstein explained the photoelectric effect using photons.",
            "de Broglie proposed that particles can have wave properties.",
            "The classical Drude model uses Fermi–Dirac statistics."
          ],
          correctAnswer: [0, 1, 2],
          explanation: "• **A is correct:** Planck introduced $E = h\\nu$ for blackbody resonators.\n• **B is correct:** Einstein proposed light quanta (photons) to explain photoelectric emission.\n• **C is correct:** de Broglie introduced matter waves ($\\lambda = h/p$).\n• *D is false:* The classical Drude model uses Maxwell–Boltzmann statistics; Sommerfeld introduced Fermi–Dirac statistics.\n\n**Correct Options: A, B, and C.**",
          points: 2
        },
        {
          id: "W5-M22",
          number: 22,
          type: "multi",
          section: "Section E — High-Yield Tricky Questions & MSQs",
          question: "Which statements about blackbody radiation are correct? (Select all that apply)",
          options: [
            "A blackbody emits radiation over a range of wavelengths.",
            "Its intensity is uniform at all wavelengths.",
            "Increasing temperature increases total emitted intensity.",
            "Increasing temperature shifts peak wavelength to a lower value."
          ],
          correctAnswer: [0, 2, 3],
          explanation: "• **A is correct:** Blackbodies emit a continuous spectrum over a range of wavelengths.\n• **C is correct:** Stefan-Boltzmann law shows total intensity grows as $T^4$.\n• **D is correct:** Wien's displacement law shows $\\lambda_{\\max} \\propto 1/T$.\n• *B is false:* Blackbody intensity forms an asymmetric peak and is not uniform across wavelengths.\n\n**Correct Options: A, C, and D.**",
          points: 2
        },
        {
          id: "W5-M23",
          number: 23,
          type: "single",
          section: "Section E — High-Yield Tricky Questions & MSQs",
          question: "If the wavelength of a photon decreases while the speed of light remains constant, its energy:",
          options: [
            "Decreases",
            "Increases",
            "Remains constant",
            "Becomes zero"
          ],
          correctAnswer: 1,
          explanation: "Photon energy is $E = \\frac{hc}{\\lambda}$. Since wavelength $\\lambda$ is in the denominator, decreasing wavelength increases photon energy.\n\n**Correct Option: B (Increases).**",
          points: 1
        },
        {
          id: "W5-M24",
          number: 24,
          type: "single",
          section: "Section E — High-Yield Tricky Questions & MSQs",
          question: "Which statement best explains why the Drude–Sommerfeld model improves on the classical Drude model?",
          options: [
            "It assumes electrons are completely stationary.",
            "It incorporates quantum mechanics and Fermi–Dirac statistics.",
            "It removes all electron collisions.",
            "It assumes every energy level has unlimited electron occupancy."
          ],
          correctAnswer: 1,
          explanation: "The Drude-Sommerfeld model retains the electron gas picture but replaces classical Maxwell-Boltzmann statistics with quantum Fermi-Dirac statistics obeying Pauli exclusion, correctly explaining electronic specific heat and electron transport.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W5-M25",
          number: 25,
          type: "single",
          section: "Section E — High-Yield Tricky Questions & MSQs",
          question: "The cosmic microwave background temperature is closest to:",
          options: [
            "0 Kelvin",
            "3 Kelvin",
            "300 Kelvin",
            "3000 Kelvin"
          ],
          correctAnswer: 1,
          explanation: "The cosmic microwave background radiation is approximately $2.725\\text{ K} \\approx 2.75\\text{ K}$, rounded in the lectures and assignment to about $3\\text{ Kelvin}$.\n\n**Correct Option: B (3 Kelvin).**",
          points: 1
        }
      ]
    },
    {
      id: 6,
      number: 6,
      title: "Fermi–Dirac Statistics & Drude–Sommerfeld Model",
      lectures: "Lectures 17 - 20",
      status: "active",
      summary: "Derivation of Fermi–Dirac distribution, Stirling's approximation, conditional vs total probability, Fermi energy, and quantum resolution of electronic specific heat.",
      studyMaterials: {
        quickOverview: "Week 6 develops the mathematical and physical foundations of Fermi–Dirac (FD) statistics and the Drude–Sommerfeld quantum model of metals. Conduction electrons are treated as identical and indistinguishable fermions possessing half-integer spin (1/2) that obey the Pauli exclusion principle (at most one electron per quantum state). By maximizing the number of microstates Ω using Stirling's approximation ln(X!) ≈ X ln X - X and the Lagrange method of undetermined multipliers under conservation of particle count and total energy, we obtain the Fermi–Dirac distribution f(E) = 1 / [1 + exp((E - E_f)/(k_B T))]. In macroscopic systems, the most probable microstate occurs nearly 100% of the time. At absolute zero (0 K), all states up to the Fermi energy E_f are completely filled (f=1) and all states above are empty (f=0). For T > 0, f(E_f) = 0.5. Thermal excitation is confined to a thin energy layer of width ~k_B T around E_f, brilliantly explaining why the electronic specific heat of metals is ~100 times smaller than classical Drude predictions.",
        
        formulaSheet: [
          { name: "Fermi–Dirac Distribution Function", formula: "f(E) = \\frac{1}{1 + e^{(E - E_f)/(k_B T)}}", units: "Occupancy probability (0 to 1)", desc: "Probability that a fermionic quantum state of energy E is occupied at temperature T." },
          { name: "FD Occupancy at Fermi Level", formula: "f(E_f) = \\frac{1}{1 + e^0} = \\frac{1}{2} = 0.5 \\quad (\\text{for } T > 0)", units: "Dimensionless", desc: "At the Fermi energy, the occupancy probability is always exactly 50% for any non-zero temperature." },
          { name: "Occupancy at Absolute Zero (0 K)", formula: "f(E) = \\begin{cases} 1, & E < E_f \\\\ 0, & E > E_f \\end{cases}", units: "Step function", desc: "At T = 0 K, states below E_f are 100% full, and states above E_f are 100% empty." },
          { name: "Fermion Arrangements in Energy Level", formula: "\\Omega_i = \\binom{s_i}{n_i} = \\frac{s_i!}{n_i!(s_i - n_i)!}", units: "Arrangements", desc: "Ways to distribute n_i indistinguishable fermions among s_i states with at most 1 particle per state." },
          { name: "Total System Arrangements", formula: "\\Omega = \\prod_i \\frac{s_i!}{n_i!(s_i - n_i)!}", units: "Microstates", desc: "Total thermodynamic probability (microstates) for independent energy levels." },
          { name: "Stirling's Approximation", formula: "\\ln(X!) \\approx X\\ln(X) - X \\quad (\\text{for } X \\gg 1)", units: "Mathematical relation", desc: "Asymptotic expansion simplifying log factorials for large thermodynamic particle numbers." },
          { name: "Maximization Objective Function", formula: "d\\left[\\ln \\Omega - \\alpha \\sum n_i - \\beta \\sum n_i E_i\\right] = 0", units: "Lagrange method", desc: "Maximizes arrangements ln Ω subject to fixed particle count N and total internal energy E." },
          { name: "Thermal Excitation Window", formula: "\\Delta E \\sim k_B T \\ll E_f", units: "eV (or Joules)", desc: "Only electrons within ~k_B T of the Fermi energy can absorb thermal energy and scatter into unoccupied states." }
        ],

        lecturesBreakdown: [
          {
            lectureNo: 17,
            title: "Fermi–Dirac Statistics — Part 1 (Microstates & Combinatorics)",
            bullets: [
              "Fermionic Quantum Constraints: Electrons have half-integer spin (s = 1/2). By the Pauli Exclusion Principle, no quantum state can hold more than one electron (occupancy is either 0 or 1).",
              "Microstate Counting: In the i-th energy level having s_i available quantum states and n_i fermions (n_i <= s_i), the number of valid arrangements is the combination $\\Omega_i = \\frac{s_i!}{n_i!(s_i - n_i)!}$.",
              "Total System Microstates: $\\Omega = \\prod_i \\Omega_i = \\prod_i \\frac{s_i!}{n_i!(s_i - n_i)!}$.",
              "Stirling's Approximation: For large numbers $X \\gg 1$, $\\ln(X!) \\approx X\\ln(X) - X$. This allows differentiation of factorials.",
              "Conditional vs Total Probability: The probability of occupancy given that the system is in a specific microstate is a conditional probability. Total probability requires summing conditional probabilities weighted by each microstate's occurrence.",
              "Dominance of the Most Probable State: In a macroscopic statistical system ($N \\sim 10^{23}$), the most probable microstate occurs nearly 100% of the time, so its conditional occupancy probability accurately represents the system's equilibrium total occupancy."
            ]
          },
          {
            lectureNo: 18,
            title: "Fermi–Dirac Statistics — Part 2 (Derivation of the Distribution)",
            bullets: [
              "Mathematical Optimization: We seek to maximize $\\Omega$ (or equivalently $\\ln \\Omega$, since the natural logarithm is monotonically increasing and transforms products into manageable sums).",
              "Constraints: (1) Total number of particles is conserved: $\\sum_i n_i = N$. (2) Total energy is conserved: $\\sum_i n_i E_i = E$.",
              "Lagrange Method of Undetermined Multipliers: Setting $d[\\ln \\Omega - \\alpha \\sum n_i - \\beta \\sum n_i E_i] = 0$ and applying Stirling's approximation yields: $\\ln\\left(\\frac{s_i - n_i}{n_i}\\right) = \\alpha + \\beta E_i$.",
              "Solving for Occupancy: $\\frac{n_i}{s_i} = \\frac{1}{1 + e^{\\alpha + \\beta E_i}}$.",
              "Physical Identification of Multipliers: Setting $\\beta = \\frac{1}{k_B T}$ and $\\alpha = -\\frac{E_f}{k_B T}$ produces the celebrated Fermi–Dirac distribution: $f(E) = \\frac{1}{1 + e^{(E - E_f)/(k_B T)}}$."
            ]
          },
          {
            lectureNo: 19,
            title: "Features of the Fermi–Dirac Distribution Function",
            bullets: [
              "Absolute Zero Behavior (T = 0 K): When $E < E_f$, $(E - E_f)/(k_B T) \\to -\\infty \\implies e^{-\\infty} = 0 \\implies f(E) = 1$. When $E > E_f$, $(E - E_f)/(k_B T) \\to +\\infty \\implies e^{+\\infty} = \\infty \\implies f(E) = 0$. This is a sharp step function.",
              "Definition of Fermi Energy ($E_f$): At absolute zero, $E_f$ is strictly the highest occupied energy level.",
              "Nonzero Temperature Behavior (T > 0 K): At $E = E_f$, $f(E_f) = \\frac{1}{1 + e^0} = \\frac{1}{2} = 0.5$. The Fermi level is the energy where the probability of occupancy is exactly 50%.",
              "Thermal Broadening: As temperature rises, thermal energy $k_B T$ smooths the sharp step into a continuous curve, spreading the transition across a window of approximately $\\pm 2 k_B T$ to $3 k_B T$ around $E_f$.",
              "Symmetry of the Distribution: The probability that an electron occupies a state at $E_f + \\Delta E$ is exactly equal to the probability that a state at $E_f - \\Delta E$ is vacant (a hole): $f(E_f + \\Delta E) = 1 - f(E_f - \\Delta E)$."
            ]
          },
          {
            lectureNo: 20,
            title: "Drude–Sommerfeld Model vs Classical Drude (Specific Heat)",
            bullets: [
              "Assumptions of Drude–Sommerfeld: (1) Free electrons move in a constant, uniform potential $V_0$ inside the solid. (2) Electrons are treated as identical, indistinguishable quantum fermions. (3) Electrons obey the Pauli exclusion principle and Fermi–Dirac statistics.",
              "Why Classical Drude Failed: Drude used classical Maxwell–Boltzmann statistics, assuming every single electron can absorb $\\frac{3}{2} k_B T$ of thermal energy, giving $C_V^e = \\frac{3}{2} n k_B$.",
              "Quantum Solution to Specific Heat: In reality, states deep below $E_f$ (where $E_f - E \\gg k_B T$) have $f(E) \\approx 1$. Electrons in these states cannot absorb tiny amounts of thermal energy because the adjacent higher states are already fully occupied (forbidden by Pauli exclusion!).",
              "Active Fraction of Electrons: Only electrons within a thin thermal band of width $\\sim k_B T$ around the Fermi surface have accessible vacant states above them. The fraction of contributing electrons is only $\\sim \\frac{k_B T}{E_f} \\approx 10^{-2}$ (~1% at room temperature).",
              "Corrected Specific Heat: $C_V^e \\propto n k_B \\left(\\frac{T}{T_F}\\right) \\propto T$, resolving Drude's 100-fold overestimation and correctly predicting linear temperature dependence at low temperatures."
            ]
          }
        ],

        examTraps: [
          {
            trap: "Conditional vs Total Probability (Assignment Q5–Q7)",
            explanation: "Knowing an occupancy percentage in *one particular microstate* (e.g. 6 particles in 10 states = 60%) does NOT give the total probability of occupancy unless you know the probabilities of all microstates. In a multi-event system, total probability is weighted by how frequently each microstate occurs."
          },
          {
            trap: "Dominance of the Most Probable Microstate (Assignment Q8)",
            explanation: "In macroscopic systems with $N \\sim 10^{23}$, the most probable state occurs nearly 100% of the time because the probability distribution is intensely peaked at the maximum."
          },
          {
            trap: "Occupancy at Fermi Level at Nonzero Temperature (Mastery Q12)",
            explanation: "At any temperature $T > 0\\text{ K}$, the probability of occupancy at $E = E_f$ is ALWAYS exactly $0.5$ (or 50%) because $e^{(E_f - E_f)/(k_B T)} = e^0 = 1$."
          },
          {
            trap: "Drude–Sommerfeld Potential Assumption (Assignment Q2)",
            explanation: "The Drude–Sommerfeld model assumes a CONSTANT potential within the solid (not zero, and not varying/periodic; periodic potential is introduced later in the Kronig–Penney band theory)."
          },
          {
            trap: "Which Electrons Contribute to Specific Heat (Mastery Q17, Q18)",
            explanation: "NOT all electrons! Deep electrons are blocked by Pauli exclusion because higher states are already occupied. ONLY electrons near $E_f$ within $\\sim k_B T$ can absorb thermal energy."
          }
        ]
      },

      assignmentQuestions: [
        {
          id: "W6-A1",
          number: 1,
          type: "single",
          question: "The Drude Sommerfeld model",
          options: [
            "Ignores Pauli’s exclusion principle",
            "Applies the Pauli’s exclusion principle",
            "Treats electrons as classical particles",
            "Is the same as the classical Drude model"
          ],
          correctAnswer: 1,
          explanation: "The Drude–Sommerfeld model incorporates quantum mechanics by applying the Pauli exclusion principle and Fermi–Dirac statistics to conduction electrons in metals, resolving the classical Drude heat capacity paradox.\n\n**Correct Option: Applies the Pauli’s exclusion principle.**",
          points: 1
        },
        {
          id: "W6-A2",
          number: 2,
          type: "single",
          question: "The Drude Sommerfeld model",
          options: [
            "Assumes no potential within the solid",
            "Assumes constant potential within the solid",
            "Assumes varying potential within the solid",
            "Assumes linearly increasing potential within the solid"
          ],
          correctAnswer: 1,
          explanation: "The Drude–Sommerfeld free-electron model approximates the interior of a metal as a potential well with a constant, uniform potential $V_0$. (The periodic variation of the potential is treated later in the band theory of solids).\n\n**Correct Option: Assumes constant potential within the solid.**",
          points: 1
        },
        {
          id: "W6-A3",
          number: 3,
          type: "single",
          question: "The Drude Sommerfeld model",
          options: [
            "Electrons are not identical but distinguishable",
            "Electrons are not identical and are indistinguishable",
            "Electrons are identical but distinguishable",
            "Electrons are identical and indistinguishable"
          ],
          correctAnswer: 3,
          explanation: "In quantum mechanics, electrons are treated as identical and indistinguishable particles. Their wavefunctions overlap, and swapping two identical electrons does not produce a physically distinct state.\n\n**Correct Option: Electrons are identical and indistinguishable.**",
          points: 1
        },
        {
          id: "W6-A4",
          number: 4,
          type: "single",
          question: "Fermions possess",
          options: [
            "Zero spin",
            "Integer spin",
            "Quarter integer spin",
            "Half integer spin"
          ],
          correctAnswer: 3,
          explanation: "By definition, fermions (such as electrons, protons, and neutrons) are particles with half-integer intrinsic spin ($s = 1/2, 3/2, \\ldots$) and obey Fermi–Dirac statistics and the Pauli exclusion principle.\n\n**Correct Option: Half integer spin.**",
          points: 1
        },
        {
          id: "W6-A5",
          number: 5,
          type: "single",
          question: "The probability that a state at a given energy level is occupied, given that the system is in its most probable microstate, is an example of",
          options: [
            "Conditional probability",
            "Total probability",
            "Complete probability",
            "Certainty"
          ],
          correctAnswer: 0,
          explanation: "Because the occupancy probability is evaluated under the specific prerequisite condition that the system occupies a designated microstate, it represents a conditional probability: $P(\\text{Occupied} \\mid \\text{Microstate})$.\n\n**Correct Option: Conditional probability.**",
          points: 1
        },
        {
          id: "W6-A6",
          number: 6,
          type: "single",
          question: "For a collection of fermions, if at a given energy level there are 10 states, and there are 6 particles at that energy level, and it is not the most probable microstate, then the total probability of occupancy of a state at that energy level is",
          options: [
            "60%",
            "40%",
            "50%",
            "Insufficient information to determine"
          ],
          correctAnswer: 3,
          explanation: "The fraction $6/10 = 60\\%$ is only the *conditional* occupancy probability for this specific non-equilibrium microstate. To find the *total* probability, one must know the probability of the system being in this microstate along with all other possible microstates and their respective occupancies. Hence, there is insufficient information.\n\n**Correct Option: Insufficient information to determine.**",
          points: 1
        },
        {
          id: "W6-A7",
          number: 7,
          type: "single",
          question: "In a statistical system, if event A occurs 93% of the time, event B occurs 11% of the time, and event C occurs 47% of the time, the total probability of occupancy of an energy state in such a system is closest to",
          options: [
            "93%",
            "11%",
            "47%",
            "(93 X 11 X 47) %"
          ],
          correctAnswer: 2,
          explanation: "In this statistical model discussion from the lecture (Lecture 17), the representative event occupancy probability is given as 47%, representing the expected weighted occupancy value rather than a multiplicative product.\n\n**Correct Option: 47%.**",
          points: 1
        },
        {
          id: "W6-A8",
          number: 8,
          type: "single",
          question: "The most probable microstate of the system occurs",
          options: [
            "Nearly 50% of the time",
            "Nearly 75% of the time",
            "Nearly 85% of the time",
            "Nearly 100% of the time"
          ],
          correctAnswer: 3,
          explanation: "For a macroscopic thermodynamic system containing $N \\sim 10^{23}$ particles, the distribution of microstates is extremely sharply peaked at the maximum. Consequently, the most probable microstate overwhelmingly dominates, occurring nearly 100% of the time.\n\n**Correct Option: Nearly 100% of the time.**",
          points: 1
        },
        {
          id: "W6-A9",
          number: 9,
          type: "single",
          question: "Stirling's approximation $\\ln(X!) \\approx X\\ln(X) - X$ holds true",
          options: [
            "When X is large",
            "When X is small",
            "For any and all values of X",
            "Only when X is 0"
          ],
          correctAnswer: 0,
          explanation: "Stirling's approximation is an asymptotic series expansion valid when $X$ is large ($X \\gg 1$). In statistical mechanics, $X$ is on the order of Avogadro's number ($10^{23}$), making the approximation virtually exact.\n\n**Correct Option: When X is large.**",
          points: 1
        },
        {
          id: "W6-A10",
          number: 10,
          type: "single",
          question: "The Fermi-Dirac probability distribution for electrons",
          options: [
            "Is the same as the Maxwell-Boltzmann distribution",
            "Shows a linear relationship between probability of occupancy and energy",
            "Is impacted by changes in temperature",
            "Shows a quadratic relationship between probability of occupancy and energy"
          ],
          correctAnswer: 2,
          explanation: "Temperature enters directly into the Fermi–Dirac distribution: $f(E) = \\frac{1}{1 + e^{(E - E_f)/(k_B T)}}$. Changing $T$ broadens the transition zone around the Fermi level $E_f$ from a sharp step function at $0\\text{ K}$ to a smooth curve at higher temperatures.\n\n**Correct Option: Is impacted by changes in temperature.**",
          points: 1
        }
      ],

      masteryExamQuestions: [
        {
          id: "W6-M1",
          number: 1,
          type: "single",
          section: "Section A — Fermi–Dirac Distribution",
          question: "Which formula represents the Fermi–Dirac distribution?",
          options: [
            "f(E) = e^{-E/(k_B T)}",
            "f(E) = \\frac{1}{1 + e^{(E - E_f)/(k_B T)}}",
            "f(E) = 1 + e^{E/(k_B T)}",
            "f(E) = E/(k_B T)"
          ],
          correctAnswer: 1,
          explanation: "The Fermi–Dirac distribution function is $f(E) = \\frac{1}{1 + e^{(E - E_f)/(k_B T)}}$, specifying the probability that a fermionic state with energy $E$ is occupied at temperature $T$.\n\n**Correct Option: B.**",
          points: 1
        },
        {
          id: "W6-M2",
          number: 2,
          type: "single",
          section: "Section A — Fermi–Dirac Distribution",
          question: "At $E = E_f$ and $T > 0$, the Fermi–Dirac occupancy probability is:",
          options: [
            "0",
            "0.25",
            "0.5",
            "1"
          ],
          correctAnswer: 2,
          explanation: "Substituting $E = E_f$ into the distribution gives $f(E_f) = \\frac{1}{1 + e^0} = \\frac{1}{1 + 1} = 0.5$. The Fermi level is the energy at which occupancy probability is exactly 50%.\n\n**Correct Option: C (0.5).**",
          points: 1
        },
        {
          id: "W6-M3",
          number: 3,
          type: "single",
          section: "Section A — Fermi–Dirac Distribution",
          question: "At absolute zero, states below the Fermi energy are:",
          options: [
            "Empty",
            "Fully occupied",
            "Half occupied",
            "Randomly occupied"
          ],
          correctAnswer: 1,
          explanation: "At $T = 0\\text{ K}$, for all energies $E < E_f$, the exponential term $(E - E_f)/(k_B T) \\to -\\infty$, making $e^{-\\infty} = 0$, so $f(E) = 1$. All states below $E_f$ are completely full.\n\n**Correct Option: B (Fully occupied).**",
          points: 1
        },
        {
          id: "W6-M4",
          number: 4,
          type: "single",
          section: "Section A — Fermi–Dirac Distribution",
          question: "At absolute zero, states above the Fermi energy are:",
          options: [
            "Fully occupied",
            "Half occupied",
            "Empty",
            "Always occupied by one electron"
          ],
          correctAnswer: 2,
          explanation: "At $T = 0\\text{ K}$, for all energies $E > E_f$, $(E - E_f)/(k_B T) \\to +\\infty$, making $e^{+\\infty} = \\infty$, so $f(E) = 0$. All states above $E_f$ are completely vacant.\n\n**Correct Option: C (Empty).**",
          points: 1
        },
        {
          id: "W6-M5",
          number: 5,
          type: "single",
          section: "Section A — Fermi–Dirac Distribution",
          question: "As temperature increases, the Fermi–Dirac distribution:",
          options: [
            "Becomes a sharper step",
            "Spreads its transition over a wider energy range",
            "Becomes independent of energy",
            "Becomes identical to a straight line"
          ],
          correctAnswer: 1,
          explanation: "Rising temperature increases thermal energy $k_B T$, which broadens and smooths the transition around $E_f$ across an energy range of several $k_B T$.\n\n**Correct Option: B (Spreads its transition over a wider energy range).**",
          points: 1
        },
        {
          id: "W6-M6",
          number: 6,
          type: "single",
          section: "Section B — Fermi Energy & Electronic Specific Heat",
          question: "The Fermi energy at absolute zero is defined in your lecture as:",
          options: [
            "The lowest energy level",
            "The highest occupied energy level",
            "The average energy of all electrons",
            "The energy of an electron at rest"
          ],
          correctAnswer: 1,
          explanation: "At $T = 0\\text{ K}$, electrons fill up all the lowest available quantum states up to a distinct ceiling, which defines the Fermi energy $E_f$.\n\n**Correct Option: B (The highest occupied energy level).**",
          points: 1
        },
        {
          id: "W6-M7",
          number: 7,
          type: "single",
          section: "Section B — Fermi Energy & Electronic Specific Heat",
          question: "Which electrons primarily contribute to increasing the electronic energy when a metal's temperature rises?",
          options: [
            "All electrons equally",
            "Only electrons at the lowest energy",
            "Electrons near the Fermi energy",
            "Only electrons far above the Fermi energy"
          ],
          correctAnswer: 2,
          explanation: "Electrons deep below $E_f$ cannot absorb small thermal energies because all states immediately above them are already occupied (Pauli exclusion). Only electrons within $\\sim k_B T$ of the Fermi level have access to nearby empty states.\n\n**Correct Option: C (Electrons near the Fermi energy).**",
          points: 1
        },
        {
          id: "W6-M8",
          number: 8,
          type: "single",
          section: "Section B — Fermi Energy & Electronic Specific Heat",
          question: "Why does the Drude–Sommerfeld model explain the small electronic specific heat better than the classical Drude model?",
          options: [
            "It assumes electrons have zero energy",
            "It uses Fermi–Dirac statistics and the Pauli exclusion principle",
            "It assumes no electrons can gain energy",
            "It ignores electron energy levels"
          ],
          correctAnswer: 1,
          explanation: "By combining Fermi–Dirac statistics with Pauli exclusion, the Drude–Sommerfeld model recognizes that only a fraction $\\sim k_B T / E_f \\approx 1\\%$ of electrons can be thermally excited, resolving Drude's 100-fold overestimation.\n\n**Correct Option: B (It uses Fermi–Dirac statistics and the Pauli exclusion principle).**",
          points: 1
        },
        {
          id: "W6-M9",
          number: 9,
          type: "single",
          section: "Section C — Statistics & Derivation",
          question: "Stirling’s approximation is:",
          options: [
            "\\ln(X!) \\approx X\\ln X - X",
            "\\ln(X!) = X^2",
            "\\ln(X!) = X + 1",
            "\\ln(X!) = 1/X"
          ],
          correctAnswer: 0,
          explanation: "Stirling's approximation is $\\ln(X!) \\approx X\\ln X - X$, which simplifies factorials of large numbers $X \\gg 1$.\n\n**Correct Option: A.**",
          points: 1
        },
        {
          id: "W6-M10",
          number: 10,
          type: "single",
          section: "Section C — Statistics & Derivation",
          question: "For fermions, the number of ways to place $n_i$ particles into $s_i$ available states, with at most one particle per state, is:",
          options: [
            "\\frac{s_i!}{n_i!(s_i - n_i)!}",
            "\\frac{n_i!}{s_i!}",
            "s_i^{n_i}",
            "n_i + s_i"
          ],
          correctAnswer: 0,
          explanation: "Because fermions are indistinguishable and obey the Pauli exclusion principle (each state holds 0 or 1 particle), the number of configurations is the combination $\\binom{s_i}{n_i} = \\frac{s_i!}{n_i!(s_i - n_i)!}$.\n\n**Correct Option: A.**",
          points: 1
        },
        {
          id: "W6-M11",
          number: 11,
          type: "single",
          section: "Section C — Statistics & Derivation",
          question: "Why does the Fermi–Dirac derivation maximize the number of arrangements $\\Omega$?",
          options: [
            "To identify the most probable microstate",
            "To make the temperature zero",
            "To remove the Pauli principle",
            "To make all energy levels equally occupied"
          ],
          correctAnswer: 0,
          explanation: "In statistical mechanics, the state with the maximum number of arrangements $\\Omega$ is the most probable microstate, which represents thermodynamic equilibrium.\n\n**Correct Option: A (To identify the most probable microstate).**",
          points: 1
        },
        {
          id: "W6-M12",
          number: 12,
          type: "single",
          section: "Section C — Statistics & Derivation",
          question: "Why is maximizing $\\ln\\Omega$ mathematically useful?",
          options: [
            "It changes the location of the maximum",
            "It converts products into sums and makes differentiation easier",
            "It removes all constraints",
            "It makes \\Omega = 0"
          ],
          correctAnswer: 1,
          explanation: "Because $\\Omega = \\prod_i \\Omega_i$, taking the logarithm converts the product into a sum $\\ln\\Omega = \\sum_i \\ln\\Omega_i$. Combined with Stirling's approximation, this allows straightforward differentiation with respect to $n_i$.\n\n**Correct Option: B (It converts products into sums and makes differentiation easier).**",
          points: 1
        },
        {
          id: "W6-M13",
          number: 13,
          type: "single",
          section: "Section D — Maxwell–Boltzmann vs Fermi–Dirac & MSQs",
          question: "Which statistics does the classical Drude model use?",
          options: [
            "Fermi–Dirac",
            "Maxwell–Boltzmann",
            "Bose–Einstein",
            "None"
          ],
          correctAnswer: 1,
          explanation: "The classical Drude model treats conduction electrons as classical ideal gas particles obeying Maxwell–Boltzmann statistics.\n\n**Correct Option: B (Maxwell–Boltzmann).**",
          points: 1
        },
        {
          id: "W6-M14",
          number: 14,
          type: "single",
          section: "Section D — Maxwell–Boltzmann vs Fermi–Dirac & MSQs",
          question: "Which statistics does the Drude–Sommerfeld model use for electrons?",
          options: [
            "Maxwell–Boltzmann",
            "Bose–Einstein",
            "Fermi–Dirac",
            "Classical probability only"
          ],
          correctAnswer: 2,
          explanation: "The Drude–Sommerfeld model treats conduction electrons as quantum fermions obeying Fermi–Dirac statistics.\n\n**Correct Option: C (Fermi–Dirac).**",
          points: 1
        },
        {
          id: "W6-M15",
          number: 15,
          type: "multi",
          section: "Section D — Maxwell–Boltzmann vs Fermi–Dirac & MSQs",
          question: "Which statements are correct? (Select all that apply)",
          options: [
            "A. Electrons are fermions.",
            "B. Electrons obey the Pauli exclusion principle.",
            "C. Fermi–Dirac statistics is identical to Maxwell–Boltzmann statistics in every situation.",
            "D. Only electrons near the Fermi energy can readily gain energy into nearby unoccupied states as temperature increases."
          ],
          correctAnswer: [0, 1, 3],
          explanation: "• **A is correct:** Electrons have spin 1/2 and are fermions.\n• **B is correct:** No two electrons can occupy the same quantum state.\n• **D is correct:** Thermal excitation is restricted to states near $E_f$.\n• *C is false:* Fermi–Dirac statistics differs fundamentally from classical Maxwell–Boltzmann statistics due to the exclusion principle and quantum indistinguishability.\n\n**Correct Options: A, B, and D.**",
          points: 2
        },
        {
          id: "W6-M16",
          number: 16,
          type: "multi",
          section: "Section D — Maxwell–Boltzmann vs Fermi–Dirac & MSQs",
          question: "Which statements about Fermi energy are correct? (Select all that apply)",
          options: [
            "A. At 0 K, it marks the highest occupied energy.",
            "B. At nonzero temperature, the occupancy probability at E_f is 1/2 under the distribution used in your lecture.",
            "C. It is always the energy of the highest electron at any temperature.",
            "D. It helps explain which electrons participate in thermal excitation."
          ],
          correctAnswer: [0, 1, 3],
          explanation: "• **A is correct:** At $T = 0\\text{ K}$, $E_f$ is strictly the highest filled state.\n• **B is correct:** For $T > 0\\text{ K}$, $f(E_f) = \\frac{1}{1 + e^0} = 0.5$.\n• **D is correct:** Only electrons within $\\sim k_B T$ of $E_f$ contribute to electronic specific heat.\n• *C is false:* At $T > 0\\text{ K}$, thermal excitation gives electrons finite probability of occupying states above $E_f$.\n\n**Correct Options: A, B, and D.**",
          points: 2
        }
      ]
    },
    {
      id: 7,
      number: 7,
      title: "Anisotropy, Periodic Potential & Confinement/Quantization",
      lectures: "Lectures 21 - 23",
      status: "active",
      summary: "Electrical anisotropy in graphite, periodic potential wells, bound vs nearly free electrons, work function, and electron confinement in potential wells.",
      studyMaterials: {
        quickOverview: "Week 7 bridges free electron models and the band theory of crystalline solids. We explore directional property variations (anisotropy), exemplified by graphite's exceptional in-plane vs out-of-plane electrical conductivity, and explain why the isotropic Drude–Sommerfeld model cannot account for directional transport. We then examine the real periodic potential created by positive ionic cores: core electrons remain localized (bound electrons) in deep atomic potential wells, while valence electrons become delocalized (nearly free electrons) across the macroscopic crystal. Using the quantum particle-in-a-box model, we demonstrate that spatial confinement discretizes allowed wavelengths (k_n = nπ/a) and energies (E_n = n²h² / (8ma²)), showing that shrinking the confinement width a greatly expands the spacing between allowed energy levels (ΔE ∝ 1/a²). Finally, we reinforce the temperature behavior of the Fermi–Dirac distribution and review the work function Φ = E_vac - E_f.",
        
        formulaSheet: [
          { name: "Fermi–Dirac Distribution", formula: "f(E) = \\frac{1}{1 + e^{(E - E_f)/(k_B T)}}", units: "Occupancy probability", desc: "Temperature-dependent probability of state occupancy at energy E." },
          { name: "Occupancy at Fermi Energy", formula: "f(E_f) = 0.5 = 50\\% \\quad (\\text{for all } T > 0\\text{ K})", units: "Probability", desc: "At the Fermi level, occupancy is always 50% regardless of temperature (e.g. 50% at 50 K)." },
          { name: "Allowed Wave Vector in 1D Well", formula: "k_n = \\frac{n\\pi}{a} \\quad (n = 1, 2, 3, \\ldots)", units: "m⁻¹", desc: "Quantized wave vectors for standing waves inside an infinite potential well of width a." },
          { name: "Quantized Energy in 1D Well", formula: "E_n = \\frac{n^2 h^2}{8 m a^2} = \\frac{n^2 \\pi^2 \\hbar^2}{2 m a^2}", units: "Joules or eV", desc: "Discrete energy eigenvalues; energy increases as n² and scales inversely with a²." },
          { name: "Energy Level Separation", formula: "\\Delta E_{n, n+1} = E_{n+1} - E_n = \\frac{(2n+1)h^2}{8 m a^2} \\propto \\frac{1}{a^2}", units: "eV", desc: "Spacing between adjacent levels widens as confinement width a decreases." },
          { name: "Metal Work Function", formula: "\\Phi = E_{\\text{vacuum}} - E_f", units: "eV", desc: "Minimum energy required to liberate the most energetic electron (at E_f) from a metal to infinity." },
          { name: "de Broglie Wavelength", formula: "\\lambda = \\frac{h}{p}", units: "m (or Å)", desc: "Wavelength of matter waves with particle momentum p." }
        ],

        lecturesBreakdown: [
          {
            lectureNo: 21,
            title: "Anisotropy and Periodic Potential in a Solid",
            bullets: [
              "Anisotropy Definition: A material property is anisotropic when its magnitude varies with crystallographic direction. Isotropic properties have identical values in all directions.",
              "Graphite as the Classic Example: Graphite exhibits enormous electrical anisotropy. Within the planar graphene basal sheets (sp² bonded), electrical conductivity is very high. Perpendicular to the sheets (along the c-axis, held by weak van der Waals forces), conductivity is several orders of magnitude lower.",
              "Polycrystalline Masking: Randomly oriented grains in a polycrystal average out directional dependencies, often making an inherently anisotropic crystal appear macroscopically isotropic.",
              "Failure of the Drude–Sommerfeld Model: Because Drude–Sommerfeld assumes a constant, uniform potential ($V_0$) and treats the metal as a structureless box, it is completely incapable of explaining anisotropic electronic properties.",
              "Periodic Potential in Solids: In a real crystal, the positive nuclear charge of ionic cores creates deep Coulomb potential wells ($V(r) \\propto -e^2/r$) arranged in a strict periodic lattice."
            ]
          },
          {
            lectureNo: 22,
            title: "Bound vs Nearly Free Electrons & Work Function",
            bullets: [
              "Bound Electrons: Core electrons residing in deep inner-shell energy levels. They are strictly confined to the potential well of their parent ionic core and cannot roam the solid.",
              "Nearly Free Electrons: Outer valence electrons with energies above the barrier between adjacent wells. They delocalize and roam across the entire macroscopic crystal, carrying electrical current.",
              "Metal Work Function ($\\Phi$): The minimum energy required to remove the highest-energy available electron from the metal to the vacuum level outside the solid: $\\Phi = E_{\\text{vacuum}} - E_f$.",
              "Confinement Scales: Bound electrons are confined to atomic scales ($a \\sim 10^{-10}\\text{ m}$), whereas nearly free conduction electrons are confined to the physical dimensions of the metal specimen ($a \\sim 10^{-2}\\text{ m}$)."
            ]
          },
          {
            lectureNo: 23,
            title: "Confinement and Quantization (1D Potential Well)",
            bullets: [
              "Confinement Leads to Quantization: Confining a wave-like electron within rigid boundaries forces the wavefunction to form standing waves that vanish at the walls ($\\psi = 0$ outside and at boundaries).",
              "Boundary Conditions: $\\psi(0) = 0$ and $\\psi(a) = 0 \\implies k_n a = n\\pi \\implies k_n = \\frac{n\\pi}{a}$ with $n = 1, 2, 3, \\ldots$",
              "Energy Eigenvalues: Using $E = \\frac{\\hbar^2 k^2}{2m}$, we obtain $E_n = \\frac{n^2 h^2}{8ma^2}$. Energy levels are discrete and quadratically spaced.",
              "Confinement Dimension Effect: Because $E_n \\propto 1/a^2$, smaller confinement dimensions (such as quantum dots or atomic potential wells) produce widely separated energy levels, while macroscopic dimensions produce a quasi-continuous energy spectrum."
            ]
          }
        ],

        examTraps: [
          {
            trap: "Normalized MB Maximum Peak Value = 1.0 (Assignment Q7)",
            explanation: "In the course lecture's plotted normalization representation for the Maxwell–Boltzmann distribution function (Lecture 20/21), the peak occupancy at zero energy ($E = 0$) reaches a normalized value of 1.0."
          },
          {
            trap: "Occupancy at Fermi Level at Non-Zero Temperature (Assignment Q4)",
            explanation: "At $E = E_f$, $f(E_f) = \\frac{1}{1 + e^0} = 0.5$ (50%) at ANY non-zero temperature, including 50 K, 80 K, or 300 K. Do not get tricked by the temperature value!"
          },
          {
            trap: "Fermi Energy Independence (Assignment Q2 & Q3)",
            explanation: "For a given metal at fixed composition and temperature, the Fermi energy is a fixed characteristic material property. It does not vary with time, wire length, or sample shape."
          },
          {
            trap: "Graphite Anisotropy (Lecture 21)",
            explanation: "Graphite conducts electricity exceptionally well along the in-plane carbon hexagonal layers, but poorly perpendicular to them. Polycrystals appear isotropic due to random grain averaging."
          },
          {
            trap: "Confinement Width vs Level Separation (Lecture 23)",
            explanation: "Decreasing the well width a INCREASES the separation between allowed energy levels because $\\Delta E \\propto 1/a^2$."
          }
        ]
      },

      assignmentQuestions: [
        {
          id: "W7-A1",
          number: 1,
          type: "single",
          question: "For large systems, the Fermi Dirac distribution varies as a function of",
          options: [
            "Temperature",
            "System size",
            "Source of free electrons",
            "Number of bound electrons"
          ],
          correctAnswer: 0,
          explanation: "For large macroscopic systems, the Fermi–Dirac distribution $f(E) = \\frac{1}{1 + e^{(E - E_f)/(k_B T)}}$ is an intensive statistical distribution that depends strictly on energy $E$ and absolute temperature $T$. It is independent of system size, electron source, or the number of bound core electrons.\n\n**Correct Option: Temperature.**",
          points: 1
        },
        {
          id: "W7-A2",
          number: 2,
          type: "single",
          question: "At 0 Kelvin, for a metal, predominantly",
          options: [
            "The Fermi energy varies with time",
            "Fermi energy varies with length of the wire",
            "Fermi energy is fixed",
            "Fermi energy depends on shape of metal block"
          ],
          correctAnswer: 2,
          explanation: "At $0\\text{ K}$, the Fermi energy $E_f(0)$ is a fixed, fundamental material constant determined solely by the electron density: $E_f(0) = \\frac{\\hbar^2}{2m}(3\\pi^2 n)^{2/3}$. It does not change with time, sample shape, or wire length.\n\n**Correct Option: Fermi energy is fixed.**",
          points: 1
        },
        {
          id: "W7-A3",
          number: 3,
          type: "single",
          question: "For a metal, at room temperature",
          options: [
            "The Fermi energy is undefined",
            "Fermi energy varies as a function of energy",
            "Fermi energy is fixed",
            "Fermi energy varies with time"
          ],
          correctAnswer: 2,
          explanation: "For a given metal under specified ambient thermodynamic conditions at room temperature, the Fermi energy (chemical potential $\\mu$) is a fixed characteristic value. It does not vary with time or as a function of electron energy.\n\n**Correct Option: Fermi energy is fixed.**",
          points: 1
        },
        {
          id: "W7-A4",
          number: 4,
          type: "single",
          question: "At the Fermi energy",
          options: [
            "The probability of occupancy is always 1",
            "The probability of occupancy is 80% at 80 Kelvin",
            "The probability of occupancy is 50% at 50 Kelvin",
            "The probability of occupancy is 20% at 20 Kelvin"
          ],
          correctAnswer: 2,
          explanation: "At $E = E_f$, $(E - E_f)/(k_B T) = 0$, so $f(E_f) = \\frac{1}{1 + e^0} = \\frac{1}{2} = 50\\%$ at **any** non-zero temperature $T > 0\\text{ K}$ (including 50 K, 80 K, or room temperature). Hence, 50% at 50 Kelvin is exact.\n\n**Correct Option: The probability of occupancy is 50% at 50 Kelvin.**",
          points: 1
        },
        {
          id: "W7-A5",
          number: 5,
          type: "single",
          question: "The Fermi-Dirac distribution indicates",
          options: [
            "The probability of occupancy of a state",
            "The number of states available at that energy level",
            "The number of occupied states at that energy level",
            "The number of states available above the Fermi energy"
          ],
          correctAnswer: 0,
          explanation: "The Fermi–Dirac distribution function $f(E)$ gives solely the statistical *probability of occupancy* of a quantum state of energy $E$. To find the number of states or occupied states, $f(E)$ must be multiplied by the density of states $g(E)$.\n\n**Correct Option: The probability of occupancy of a state.**",
          points: 1
        },
        {
          id: "W7-A6",
          number: 6,
          type: "single",
          question: "In the Maxwell-Boltzmann distribution, as the temperature decreases",
          options: [
            "More levels at higher energy are occupied",
            "More levels at lower energy are occupied",
            "There is no change in the probability of occupancy across energy levels",
            "There is a step change in the occupancy as temperature drops below room temperature."
          ],
          correctAnswer: 1,
          explanation: "In the Maxwell–Boltzmann distribution, the probability is proportional to $e^{-E/(k_B T)}$. As temperature $T$ decreases, the exponential suppression of higher energy states increases sharply, causing particles to drop into and concentrate within lower energy levels.\n\n**Correct Option: More levels at lower energy are occupied.**",
          points: 1
        },
        {
          id: "W7-A7",
          number: 7,
          type: "single",
          question: "In the normalized Maxwell-Boltzmann distribution function, the highest probability of occupancy is",
          options: [
            "0",
            "0.5",
            "0.8",
            "1.0"
          ],
          correctAnswer: 3,
          explanation: "In the course lecture's plotted normalization representation for the Maxwell–Boltzmann distribution function (Lecture 20/21), the peak value at zero energy ($E = 0$) reaches a normalized maximum of 1.0 ($e^0 = 1$).\n\n**Correct Option: 1.0.**",
          points: 1
        },
        {
          id: "W7-A8",
          number: 8,
          type: "single",
          question: "The Maxwell-Boltzmann distribution",
          options: [
            "Under estimates the electronic contribution to specific heat at constant volume",
            "Over estimates the electronic contribution to specific heat at constant volume",
            "Correctly estimates the electronic contribution to specific heat at constant volume",
            "Correctly estimates the bound electron contribution to specific heat at constant volume"
          ],
          correctAnswer: 1,
          explanation: "The classical Maxwell–Boltzmann distribution erroneously assumes that *all* valence electrons absorb $\\frac{3}{2}k_B T$ of thermal energy ($C_V^e = \\frac{3}{2} n k_B$), which overestimates the true electronic specific heat of metals by approximately two orders of magnitude (~100 times).\n\n**Correct Option: Over estimates the electronic contribution to specific heat at constant volume.**",
          points: 1
        },
        {
          id: "W7-A9",
          number: 9,
          type: "single",
          question: "If electrons are assumed to follow Fermi-Dirac distribution",
          options: [
            "All electrons can access higher energy levels as the temperature in increased",
            "Electrons at the lowest energy level can access higher energy levels as the temperature in increased",
            "Electrons close to Fermi energy level can access higher energy levels as the temperature in increased",
            "No electrons can access higher energy levels as the temperature in increased"
          ],
          correctAnswer: 2,
          explanation: "Because states deep below $E_f$ are completely filled and Pauli exclusion forbids multiple occupancy, deep electrons cannot absorb small packets of thermal energy. Only electrons in states within $\\sim k_B T$ of the Fermi level have access to nearby unoccupied states and can be thermally excited.\n\n**Correct Option: Electrons close to Fermi energy level can access higher energy levels as the temperature in increased.**",
          points: 1
        },
        {
          id: "W7-A10",
          number: 10,
          type: "single",
          question: "Bound electrons are:",
          options: [
            "Restricted to the potential well in which they are present",
            "Free to roam the solid, but cannot leave the metal",
            "Usually outside the metal",
            "Usually not present in metals"
          ],
          correctAnswer: 0,
          explanation: "Bound electrons are core electrons held strongly by Coulomb attraction within the deep potential well of their specific parent ionic core. Unlike nearly free valence electrons, they cannot freely roam across the solid.\n\n**Correct Option: Restricted to the potential well in which they are present.**",
          points: 1
        }
      ],

      masteryExamQuestions: [
        {
          id: "W7-M1",
          number: 1,
          type: "single",
          section: "Section A — Anisotropy & Periodic Potential",
          question: "What is anisotropy?",
          options: [
            "A property having the same value in every direction",
            "A property that depends on direction",
            "A property that depends only on temperature",
            "A property that is independent of crystal structure"
          ],
          correctAnswer: 1,
          explanation: "Anisotropy describes directional dependence in physical properties (such as electrical conductivity, thermal expansion, or refractive index) caused by non-symmetric crystal lattice structures.\n\n**Correct Option: B (A property that depends on direction).**",
          points: 1
        },
        {
          id: "W7-M2",
          number: 2,
          type: "single",
          section: "Section A — Anisotropy & Periodic Potential",
          question: "Which material is given as an example of strong electrical anisotropy in Lecture 21?",
          options: [
            "Glass",
            "Graphite",
            "Rubber",
            "Plastic"
          ],
          correctAnswer: 1,
          explanation: "Graphite has layered sp² planar hexagonal sheets. Conduction electrons move easily within the basal planes, but conductivity perpendicular to the sheets (along the c-axis) is several orders of magnitude lower.\n\n**Correct Option: B (Graphite).**",
          points: 1
        },
        {
          id: "W7-M3",
          number: 3,
          type: "single",
          section: "Section A — Anisotropy & Periodic Potential",
          question: "Why can a randomly oriented polycrystalline sample appear isotropic?",
          options: [
            "Its atoms have no arrangement",
            "Averaging across differently oriented crystals can mask directional properties",
            "Each crystal becomes amorphous",
            "Its electrons stop moving"
          ],
          correctAnswer: 1,
          explanation: "A polycrystalline sample consists of millions of microscopic grains randomly oriented in all spatial directions. The directional variations cancel out through macroscopic spatial averaging, making the bulk material behave quasi-isotropically.\n\n**Correct Option: B (Averaging across differently oriented crystals can mask directional properties).**",
          points: 1
        },
        {
          id: "W7-M4",
          number: 4,
          type: "single",
          section: "Section A — Anisotropy & Periodic Potential",
          question: "Why is the Drude–Sommerfeld model unable to explain anisotropy adequately?",
          options: [
            "It ignores electrons entirely",
            "It assumes a uniform potential and ignores the detailed ionic arrangement",
            "It assumes electrons have zero mass",
            "It assumes no electric field can exist"
          ],
          correctAnswer: 1,
          explanation: "The Drude–Sommerfeld free electron model assumes an idealized constant (uniform) potential well $V_0$. Because it completely neglects the periodic atomic lattice arrangement and directional bonding, it cannot explain anisotropic transport.\n\n**Correct Option: B (It assumes a uniform potential and ignores the detailed ionic arrangement).**",
          points: 1
        },
        {
          id: "W7-M5",
          number: 5,
          type: "single",
          section: "Section A — Anisotropy & Periodic Potential",
          question: "What is a potential well in a solid?",
          options: [
            "A region where potential energy rises infinitely everywhere",
            "A region of lower potential energy near an ionic core",
            "A region with no electrons",
            "A region where all electrons are truly free"
          ],
          correctAnswer: 1,
          explanation: "The positive nuclear charge of an ionic core creates an attractive Coulomb potential $V(r) \\propto -e^2/r$, creating a localized region of negative potential energy (a potential well) around each atom.\n\n**Correct Option: B (A region of lower potential energy near an ionic core).**",
          points: 1
        },
        {
          id: "W7-M6",
          number: 6,
          type: "single",
          section: "Section B — Bound and Nearly Free Electrons",
          question: "Which electrons mainly contribute to electronic conductivity in a metal?",
          options: [
            "Bound electrons",
            "Nearly free electrons",
            "Electrons confined to individual ionic cores only",
            "All electrons contribute equally"
          ],
          correctAnswer: 1,
          explanation: "Valence electrons that are delocalized and can travel across the macroscopic solid (nearly free electrons) carry electrical current, whereas bound core electrons remain locked in inner atomic shells.\n\n**Correct Option: B (Nearly free electrons).**",
          points: 1
        },
        {
          id: "W7-M7",
          number: 7,
          type: "single",
          section: "Section B — Bound and Nearly Free Electrons",
          question: "What is the work function of a metal?",
          options: [
            "Energy required to remove the highest-energy available electron from the metal to infinity",
            "Energy required to melt the metal",
            "Energy required to move an electron between neighboring atoms only",
            "Total kinetic energy of all electrons"
          ],
          correctAnswer: 0,
          explanation: "The work function $\\Phi$ is the minimum energy necessary to eject an electron from the Fermi energy level $E_f$ to the vacuum level outside the solid: $\\Phi = E_{\\text{vacuum}} - E_f$.\n\n**Correct Option: A (Energy required to remove the highest-energy available electron from the metal to infinity).**",
          points: 1
        },
        {
          id: "W7-M8",
          number: 8,
          type: "single",
          section: "Section B — Bound and Nearly Free Electrons",
          question: "The de Broglie wavelength of a particle is:",
          options: [
            "\\lambda = ph",
            "\\lambda = h/p",
            "\\lambda = p/h",
            "\\lambda = h + p"
          ],
          correctAnswer: 1,
          explanation: "Louis de Broglie's relation connects a particle's wave character (wavelength $\\lambda$) to its classical momentum $p$: $\\lambda = \\frac{h}{p}$.\n\n**Correct Option: B (\\lambda = h/p).**",
          points: 1
        },
        {
          id: "W7-M9",
          number: 9,
          type: "single",
          section: "Section C — Confinement and Quantization",
          question: "What does quantization mean?",
          options: [
            "Energy can have any continuous value",
            "Only certain discrete energy values are allowed",
            "Energy is always zero",
            "Energy does not depend on confinement"
          ],
          correctAnswer: 1,
          explanation: "Spatial confinement of a quantum particle forces its wavefunction to form standing waves that satisfy specific boundary conditions, restricting its energy spectrum to discrete eigenvalue levels.\n\n**Correct Option: B (Only certain discrete energy values are allowed).**",
          points: 1
        },
        {
          id: "W7-M10",
          number: 10,
          type: "single",
          section: "Section C — Confinement and Quantization",
          question: "An electron confined in a one-dimensional infinite potential well of width $a$ has allowed wave vectors:",
          options: [
            "k = \\frac{n\\pi}{a}",
            "k = \\frac{a}{n\\pi}",
            "k = n\\pi a",
            "k = \\frac{2\\pi a}{n}"
          ],
          correctAnswer: 0,
          explanation: "Fitting an integer number of half-wavelengths into width $a$ gives $n\\frac{\\lambda}{2} = a \\implies \\lambda = \\frac{2a}{n}$. Since $k = \\frac{2\\pi}{\\lambda}$, this yields $k_n = \\frac{n\\pi}{a}$ for $n = 1, 2, 3, \\ldots$\n\n**Correct Option: A (k = \\frac{n\\pi}{a}).**",
          points: 1
        },
        {
          id: "W7-M11",
          number: 11,
          type: "single",
          section: "Section C — Confinement and Quantization",
          question: "For an electron in this well, the energy levels are:",
          options: [
            "E_n = \\frac{n^2 h^2}{8ma^2}",
            "E_n = \\frac{nh^2}{8ma}",
            "E_n = \\frac{8ma^2}{n^2 h^2}",
            "E_n = 0 \\text{ for every } n"
          ],
          correctAnswer: 0,
          explanation: "Using $E = \\frac{p^2}{2m} = \\frac{\\hbar^2 k^2}{2m}$ with $k = \\frac{n\\pi}{a}$ and $\\hbar = \\frac{h}{2\\pi}$, we get $E_n = \\frac{n^2 \\pi^2 (h/2\\pi)^2}{2ma^2} = \\frac{n^2 h^2}{8ma^2}$.\n\n**Correct Option: A (E_n = \\frac{n^2 h^2}{8ma^2}).**",
          points: 1
        },
        {
          id: "W7-M12",
          number: 12,
          type: "single",
          section: "Section C — Confinement and Quantization",
          question: "If the confinement width decreases, the separation between allowed energy levels generally:",
          options: [
            "Decreases",
            "Increases",
            "Remains unchanged",
            "Becomes zero"
          ],
          correctAnswer: 1,
          explanation: "Because the energy spacing $\\Delta E \\propto \\frac{1}{a^2}$, shrinking the physical confinement dimension $a$ drastically widens the spacing between adjacent quantum energy levels.\n\n**Correct Option: B (Increases).**",
          points: 1
        },
        {
          id: "W7-M13",
          number: 13,
          type: "single",
          section: "Section C — Confinement and Quantization",
          question: "Nearly free electrons are confined approximately to:",
          options: [
            "The size of an individual ionic core only",
            "The physical extent of the solid",
            "The nucleus",
            "A single atomic orbital only"
          ],
          correctAnswer: 1,
          explanation: "While bound electrons are confined to atomic dimensions ($a \\sim 10^{-10}\\text{ m}$), nearly free electrons roam freely across the entire macroscopic metal block ($a \\sim 10^{-2}\\text{ m}$).\n\n**Correct Option: B (The physical extent of the solid).**",
          points: 1
        },
        {
          id: "W7-M14",
          number: 14,
          type: "single",
          section: "Section C — Confinement and Quantization",
          question: "Why must the wave function vanish at the walls of an infinite potential well?",
          options: [
            "The electron has infinite mass at the walls",
            "The probability of finding the electron outside the well is zero",
            "The electron has zero momentum everywhere",
            "The potential inside the well is infinite"
          ],
          correctAnswer: 1,
          explanation: "Because the potential outside an infinite well is infinite ($V = \\infty$), the particle can never penetrate beyond the boundaries. By the Born interpretation ($P = |\\psi|^2$), the wavefunction $\\psi(x)$ must be identically zero at and beyond the walls.\n\n**Correct Option: B (The probability of finding the electron outside the well is zero).**",
          points: 1
        }
      ]
    },
    {
      id: 8,
      number: 8,
      title: "Density of States, Fermi Surface & Specific Heat",
      lectures: "Lectures 24 - 26",
      status: "active",
      summary: "3D density of states D(E) ∝ √E, Fermi sphere in k-space, Fermi temperature T_f, string boundary conditions, parabolic E-k dispersion, and linear electronic specific heat.",
      studyMaterials: {
        quickOverview: "Week 8 completes the free-electron quantum description of metals by deriving the density of states D(E), the Fermi surface, and the electronic contribution to specific heat. In a 3D box, counting allowed quantum states in spherical shells of k-space yields a density of states proportional to the square root of energy: D(E) ∝ √E. The occupied state density is N(E) = 2 f(E) D(E), where the factor of 2 accounts for electron spin. At 0 K, electrons fill all states within a sphere of radius k_F in k-space (the Fermi surface). The Fermi energy E_f corresponds to an enormous characteristic Fermi temperature T_f = E_f / k_B (typically 50,000–100,000 K). Because of Pauli exclusion, only a small fraction ~T/T_f (~1%) of electrons within ~k_B T of E_f can absorb thermal energy, explaining why the electronic specific heat is linear in temperature (C_V^e ∝ T) and ~100 times smaller than the classical Drude prediction.",
        
        formulaSheet: [
          { name: "3D Density of States", formula: "D(E) = \\frac{V}{2\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2}\\sqrt{E} \\propto \\sqrt{E}", units: "States / eV", desc: "Number of available quantum states per unit energy range for a 3D free electron gas." },
          { name: "Density of Occupied States", formula: "N(E) = 2 f(E) D(E)", units: "Occupied states / eV", desc: "Product of state density D(E), Fermi-Dirac factor f(E), and spin degeneracy factor 2." },
          { name: "Free Electron Dispersion Relation", formula: "E = \\frac{\\hbar^2 k^2}{2m}", units: "eV (or Joules)", desc: "Parabolic relationship between energy E and wave vector k for a free electron." },
          { name: "Fermi Wave Vector", formula: "k_F = (3\\pi^2 n)^{1/3}", units: "m⁻¹", desc: "Radius of the spherical Fermi surface in 3D k-space determined by electron density n." },
          { name: "Fermi Energy (3D Free Electrons)", formula: "E_f = \\frac{\\hbar^2 k_F^2}{2m} = \\frac{\\hbar^2}{2m}(3\\pi^2 n)^{2/3}", units: "eV", desc: "Highest occupied energy eigenvalue at absolute zero." },
          { name: "Fermi Temperature", formula: "T_f = \\frac{E_f}{k_B} \\quad (1\\text{ eV}/k_B \\approx 11{,}600\\text{ K})", units: "Kelvin", desc: "Characteristic thermal scale of Fermi energy; typically 50,000 K to 100,000 K for metals." },
          { name: "Electronic Specific Heat", formula: "C_V^e = \\frac{\\pi^2}{2} n k_B \\left(\\frac{T}{T_f}\\right) \\propto T", units: "J/(mol·K)", desc: "Linear electronic specific heat; reduced from classical Drude by the factor T/T_f (~10⁻²)." },
          { name: "Standing Wave Wavelengths (Tied at Both Ends)", formula: "\\lambda_n = \\frac{2L}{n} \\quad (n = 1, 2, 3, \\ldots)", units: "m", desc: "Discrete allowed wavelengths for standing waves on a string fixed at both boundaries." }
        ],

        lecturesBreakdown: [
          {
            lectureNo: 24,
            title: "Density of States & Occupied States",
            bullets: [
              "Definition of Density of States ($D(E)$): The number of allowed spatial quantum states per unit energy range per unit volume.",
              "Derivation in 3D $k$-Space: Allowed $k$-points form a cubic grid with volume per state $(\\pi/L)^3$. Counting states within a spherical octant of radius $k$ gives $N(k) = \\frac{\\pi V k^3}{6\\pi^3}$.",
              "Energy Dependence: Differentiating with respect to $E = \\frac{\\hbar^2 k^2}{2m}$ yields $D(E) = \\frac{V}{2\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2}\\sqrt{E} \\propto \\sqrt{E}$.",
              "Occupied State Distribution: The actual density of occupied states at temperature $T$ is $N(E) = 2 f(E) D(E)$, where 2 represents the two spin projections ($s_z = \\pm 1/2$).",
              "At $T = 0\\text{ K}$: $f(E) = 1$ for $E < E_f$, so $N(E) = 2 D(E)$ up to $E_f$ and drops sharply to zero for $E > E_f$."
            ]
          },
          {
            lectureNo: 25,
            title: "Fermi Energy, Fermi Surface & Fermi Temperature",
            bullets: [
              "Fermi Surface: In $k$-space, the locus of points satisfying $E(k) = E_f$ forms the Fermi surface. For an isotropic free-electron gas, this surface is a sphere of radius $k_F = (3\\pi^2 n)^{1/3}$.",
              "Fermi Energy Formula: $E_f = \\frac{\\hbar^2}{2m}(3\\pi^2 n)^{2/3}$. For typical metals (Cu, Al, Na), $E_f$ is around 3 to 12 eV.",
              "Fermi Temperature ($T_f$): Defined by $E_f = k_B T_f$. Since $1\\text{ eV} \\approx 11{,}600\\text{ K}$, a metal with $E_f = 5\\text{ eV}$ has $T_f \\approx 58{,}000\\text{ K}$.",
              "Crucial Conceptual Meaning of $T_f$: $T_f$ is NOT the physical temperature of the solid! It represents the equivalent kinetic energy of electrons at the Fermi level resulting from quantum zero-point confinement and Pauli exclusion packing.",
              "Fermi Velocity ($v_F$): Electrons at the Fermi surface move with enormous speed: $v_F = \\frac{\\hbar k_F}{m} \\sim 10^6\\text{ m/s}$, even at $0\\text{ K}$."
            ]
          },
          {
            lectureNo: 26,
            title: "Electronic Contribution to Specific Heat ($C_V^e$)",
            bullets: [
              "Classical Catastrophe Revisited: The classical Drude model predicted $C_V^e = \\frac{3}{2} n k_B$, which is ~100 times larger than experimental electronic heat capacity at room temperature.",
              "Quantum Exclusion Resolution: Due to Pauli exclusion, states below $E_f - k_B T$ are fully occupied and cannot accept energy. Only electrons within a thermal energy window $\\sim k_B T$ around $E_f$ can transition into nearby empty states.",
              "Fraction of Active Electrons: The fraction of thermally excitable electrons is approximately $\\frac{k_B T}{E_f} = \\frac{T}{T_f} \\approx \\frac{300\\text{ K}}{50{,}000\\text{ K}} \\approx 0.006$ (~0.6%).",
              "Resulting Specific Heat: Thermal energy absorbed is $\\Delta U \\approx \\left(n \\frac{T}{T_f}\\right) (k_B T) = n k_B \\frac{T^2}{T_f}$. Differentiating with respect to $T$ gives $C_V^e = \\frac{\\partial U}{\\partial T} \\propto n k_B \\left(\\frac{T}{T_f}\\right) \\propto T$.",
              "Total Specific Heat of Metals: At low temperatures, $C_V = \\gamma T + A T^3$, where the linear term $\\gamma T$ is the electronic contribution and the cubic term $A T^3$ is the lattice phonon contribution."
            ]
          }
        ],

        examTraps: [
          {
            trap: "String Tied at One End vs Both Ends (Assignment Q5 & Q6)",
            explanation: "Tied at both ends $\\implies$ standing waves with nodes at both ends, requiring discrete wavelengths $\\lambda_n = 2L/n$. Tied at ONE end and free at the other $\\implies$ no opposing nodal boundary condition, so it supports ALL continuous wavelengths."
          },
          {
            trap: "Free Electron E vs k Dispersion is a Parabola (Assignment Q7)",
            explanation: "Because $E = \\frac{\\hbar^2 k^2}{2m}$, energy depends quadratically on wave vector $k$. The curve is a parabola, not a straight line!"
          },
          {
            trap: "3D Density of States D(E) ∝ √E (Assignment Q10)",
            explanation: "In 3D, $D(E) \\propto \\sqrt{E}$. (Note: In 2D, $D(E)$ is constant; in 1D, $D(E) \\propto 1/\\sqrt{E}$)."
          },
          {
            trap: "Fermi Temperature is an Energy Scale, NOT Melting/Lattice Temp (Mastery Q18 & Q22)",
            explanation: "For $E_f = 5\\text{ eV}$, $T_f = E_f/k_B \\approx 58{,}000\\text{ K}$. The metal is at room temperature ($300\\text{ K}$); $T_f$ is simply the temperature equivalent of the quantum Fermi energy."
          },
          {
            trap: "Specific Heat Reduction Factor ~ T / T_f (Mastery Q21)",
            explanation: "The Drude–Sommerfeld specific heat is reduced from classical Drude by the factor $T/T_f \\approx 10^{-2}$ (~1/100)."
          }
        ]
      },

      assignmentQuestions: [
        {
          id: "W8-A1",
          number: 1,
          type: "single",
          question: "With respect to electrons in a solid metal",
          options: [
            "They are all free to roam the universe",
            "They are confined to individual atoms",
            "Some are confined to individual atoms while the rest can roam the universe",
            "Some are confined to individual atoms while the rest can roam the extent of the solid"
          ],
          correctAnswer: 3,
          explanation: "In a solid metal, core (bound) electrons remain localized within the deep atomic potential wells of individual ionic cores, while valence (nearly free) electrons are delocalized and can roam across the macroscopic extent of the solid.\n\n**Correct Option: Some are confined to individual atoms while the rest can roam the extent of the solid.**",
          points: 1
        },
        {
          id: "W8-A2",
          number: 2,
          type: "single",
          question: "The work function of a metal is",
          options: [
            "The same as its Fermi energy",
            "Half as much as its Fermi energy",
            "The difference between Fermi energy and the energy of a free electron at infinity",
            "Is always zero"
          ],
          correctAnswer: 2,
          explanation: "By definition, the work function $\\Phi = E_{\\text{vacuum}} - E_f$ is the minimum energy required to remove an electron from the topmost occupied level (the Fermi energy) to a state at rest at infinity outside the metal.\n\n**Correct Option: The difference between Fermi energy and the energy of a free electron at infinity.**",
          points: 1
        },
        {
          id: "W8-A3",
          number: 3,
          type: "single",
          question: "The nearly free electrons in a metal",
          options: [
            "Occupy all the energy levels within the metal",
            "Occupy no energy levels within the metal",
            "Occupy only a fraction of the energy levels within the solid",
            "Have zero energy"
          ],
          correctAnswer: 2,
          explanation: "At $0\\text{ K}$, nearly free electrons fill available states only up to the Fermi energy $E_f$. An infinite number of higher unoccupied energy levels exist above $E_f$, so electrons occupy only a fraction of the total possible energy levels.\n\n**Correct Option: Occupy only a fraction of the energy levels within the solid.**",
          points: 1
        },
        {
          id: "W8-A4",
          number: 4,
          type: "single",
          question: "The bound electrons in a metal",
          options: [
            "Occupy all the energy levels within the metal",
            "Occupy no energy levels within the metal",
            "Occupy only a fraction of the energy levels within the solid",
            "Have zero energy"
          ],
          correctAnswer: 2,
          explanation: "Bound electrons occupy only specific, localized discrete core atomic levels (e.g. 1s, 2s, 2p) within their atomic potential wells, which constitute only a small fraction of all possible energy states in the solid.\n\n**Correct Option: Occupy only a fraction of the energy levels within the solid.**",
          points: 1
        },
        {
          id: "W8-A5",
          number: 5,
          type: "single",
          question: "A string tied at one end, and free at the other can support:",
          options: [
            "No wavelengths",
            "A few wavelengths",
            "Discrete wavelengths",
            "All wavelengths"
          ],
          correctAnswer: 3,
          explanation: "A string tied at only one end has no rigid boundary condition at the opposite end to force standing-wave quantization. Consequently, waves of any continuous frequency or wavelength can travel along and reflect from the open end, supporting all wavelengths.\n\n**Correct Option: All wavelengths.**",
          points: 1
        },
        {
          id: "W8-A6",
          number: 6,
          type: "single",
          question: "A string tied at both ends can support:",
          options: [
            "No wavelengths",
            "Only one specific wavelength",
            "Discrete wavelengths",
            "All wavelengths"
          ],
          correctAnswer: 2,
          explanation: "Fixing both ends requires displacement nodes at $x = 0$ and $x = L$. This boundary condition restricts allowed standing waves to discrete resonant wavelengths: $n\\frac{\\lambda}{2} = L \\implies \\lambda_n = \\frac{2L}{n}$ ($n = 1, 2, 3, \\ldots$).\n\n**Correct Option: Discrete wavelengths.**",
          points: 1
        },
        {
          id: "W8-A7",
          number: 7,
          type: "single",
          question: "Plot of E vs k for a free electron has the shape of:",
          options: [
            "A straight line",
            "A circle",
            "A parabola",
            "A discontinuous straight line"
          ],
          correctAnswer: 2,
          explanation: "For a free quantum electron, kinetic energy is related to wave vector $k$ by $E = \\frac{p^2}{2m} = \\frac{\\hbar^2 k^2}{2m}$. Because $E \\propto k^2$, the $E-k$ dispersion curve is a parabola centered at $k = 0$.\n\n**Correct Option: A parabola.**",
          points: 1
        },
        {
          id: "W8-A8",
          number: 8,
          type: "single",
          question: "For an electron trapped in a potential well, the wave vector",
          options: [
            "Can take any value",
            "Can take only one value",
            "Can take discrete values",
            "Cannot take any value"
          ],
          correctAnswer: 2,
          explanation: "Trapping the electron inside a potential well imposes spatial boundary conditions requiring the wave function to vanish at the boundaries, quantizing the allowed wave vectors to discrete values: $k_n = \\frac{n\\pi}{a}$.\n\n**Correct Option: Can take discrete values.**",
          points: 1
        },
        {
          id: "W8-A9",
          number: 9,
          type: "single",
          question: "As the space over which the electron is confined decreases, the spacing between allowed energy levels:",
          options: [
            "Remains unchanged",
            "Increases",
            "Decreases",
            "Becomes zero"
          ],
          correctAnswer: 1,
          explanation: "For a 1D well of width $a$, the energy level spacing is $\\Delta E \\propto \\frac{1}{a^2}$. As the confinement dimension $a$ shrinks, the energy level separation increases dramatically.\n\n**Correct Option: Increases.**",
          points: 1
        },
        {
          id: "W8-A10",
          number: 10,
          type: "single",
          question: "The density of allowed states, $D(E)$",
          options: [
            "Is a constant till the Fermi energy level",
            "Continuous function proportional to $E^2$",
            "Proportional to $\\sqrt{E}$",
            "Inversely proportional to $E$"
          ],
          correctAnswer: 2,
          explanation: "For a three-dimensional free-electron gas, counting spherical shells in $k$-space gives $D(E) = \\frac{V}{2\\pi^2}\\left(\\frac{2m}{\\hbar^2}\\right)^{3/2}\\sqrt{E}$. Thus, $D(E)$ is directly proportional to $\\sqrt{E}$.\n\n**Correct Option: Proportional to \\sqrt{E}.**",
          points: 1
        }
      ],

      masteryExamQuestions: [
        {
          id: "W8-M1",
          number: 1,
          type: "single",
          section: "Section A — Density of States",
          question: "What does density of states $D(E)$ represent?",
          options: [
            "Probability that an electron occupies a state",
            "Number of available states per unit energy range",
            "Total energy of electrons",
            "Number of bound electrons only"
          ],
          correctAnswer: 1,
          explanation: "The density of states $D(E)$ specifies the number of quantum electron states available per unit energy interval per unit volume.\n\n**Correct Option: B (Number of available states per unit energy range).**",
          points: 1
        },
        {
          id: "W8-M2",
          number: 2,
          type: "single",
          section: "Section A — Density of States",
          question: "The density of occupied states is given by:",
          options: [
            "N(E) = D(E) + f(E)",
            "N(E) = D(E)/f(E)",
            "N(E) = 2f(E)D(E)",
            "N(E) = f(E) - D(E)"
          ],
          correctAnswer: 2,
          explanation: "The actual density of occupied electron states is $N(E) = 2 f(E) D(E)$, where $f(E)$ is the Fermi–Dirac probability and 2 accounts for electron spin.\n\n**Correct Option: C (N(E) = 2f(E)D(E)).**",
          points: 1
        },
        {
          id: "W8-M3",
          number: 3,
          type: "single",
          section: "Section A — Density of States",
          question: "For a three-dimensional free-electron gas, the density of states varies with energy as:",
          options: [
            "D(E) \\propto E",
            "D(E) \\propto E^2",
            "D(E) \\propto \\sqrt{E}",
            "D(E) \\propto 1/E"
          ],
          correctAnswer: 2,
          explanation: "In a 3D parabolic band, the volume of $k$-space within a spherical shell grows as $k^2 dk \\propto \\sqrt{E} dE$, giving $D(E) \\propto \\sqrt{E}$.\n\n**Correct Option: C (D(E) \\propto \\sqrt{E}).**",
          points: 1
        },
        {
          id: "W8-M4",
          number: 4,
          type: "single",
          section: "Section A — Density of States",
          question: "At $0\\text{ K}$, the Fermi–Dirac occupancy probability for $E < E_f$ is:",
          options: [
            "0",
            "0.5",
            "1",
            "Infinite"
          ],
          correctAnswer: 2,
          explanation: "At $0\\text{ K}$, all energy states below the Fermi level are completely filled with probability $f(E) = 1$.\n\n**Correct Option: C (1).**",
          points: 1
        },
        {
          id: "W8-M5",
          number: 5,
          type: "single",
          section: "Section B — Fermi Energy, Surface & Temperature",
          question: "The Fermi energy at $0\\text{ K}$ is:",
          options: [
            "The lowest occupied energy",
            "The highest occupied energy",
            "The average energy of all electrons",
            "Always zero"
          ],
          correctAnswer: 1,
          explanation: "At absolute zero, electrons pack into the lowest available states up to a distinct boundary: the Fermi energy $E_f$, which is the highest filled energy level.\n\n**Correct Option: B (The highest occupied energy).**",
          points: 1
        },
        {
          id: "W8-M6",
          number: 6,
          type: "single",
          section: "Section B — Fermi Energy, Surface & Temperature",
          question: "The Fermi surface for a free-electron gas in three dimensions is:",
          options: [
            "A cube in real space",
            "A sphere in wave-vector space",
            "A straight line in real space",
            "A parabola in ordinary space"
          ],
          correctAnswer: 1,
          explanation: "Because $E = \\frac{\\hbar^2(k_x^2 + k_y^2 + k_z^2)}{2m}$, the surface of constant energy $E = E_f$ in $k$-space defines a sphere: $k_x^2 + k_y^2 + k_z^2 = k_F^2$.\n\n**Correct Option: B (A sphere in wave-vector space).**",
          points: 1
        },
        {
          id: "W8-M7",
          number: 7,
          type: "single",
          section: "Section B — Fermi Energy, Surface & Temperature",
          question: "Fermi temperature is related to Fermi energy by:",
          options: [
            "E_f = k_B T_f",
            "E_f = T_f / k_B",
            "E_f = k_B / T_f",
            "E_f = T_f^2 k_B"
          ],
          correctAnswer: 0,
          explanation: "The Fermi temperature is defined by equating the Fermi energy to a thermal equivalent: $E_f = k_B T_f \\implies T_f = E_f / k_B$.\n\n**Correct Option: A (E_f = k_B T_f).**",
          points: 1
        },
        {
          id: "W8-M8",
          number: 8,
          type: "single",
          section: "Section B — Fermi Energy, Surface & Temperature",
          question: "If the Fermi energy is approximately $5\\text{ eV}$, the Fermi temperature is closest to:",
          options: [
            "58 K",
            "580 K",
            "58,000 K",
            "58,000,000 K"
          ],
          correctAnswer: 2,
          explanation: "Using $1\\text{ eV}/k_B \\approx 11{,}600\\text{ K}$, we have $T_f = \\frac{5\\text{ eV}}{k_B} \\approx 5 \\times 11{,}600\\text{ K} \\approx 58{,}000\\text{ K}$.\n\n**Correct Option: C (58,000 K).**",
          points: 1
        },
        {
          id: "W8-M9",
          number: 9,
          type: "single",
          section: "Section C — Electronic Specific Heat",
          question: "Which electrons mainly contribute to electronic specific heat at ordinary temperatures?",
          options: [
            "All electrons contribute equally",
            "Only bound electrons",
            "Electrons near the Fermi energy",
            "Only electrons at zero energy"
          ],
          correctAnswer: 2,
          explanation: "Electrons deep below $E_f$ cannot absorb small amounts of heat because all adjacent higher energy states are completely filled. Only electrons within $\\sim k_B T$ of the Fermi surface can scatter into unoccupied states.\n\n**Correct Option: C (Electrons near the Fermi energy).**",
          points: 1
        },
        {
          id: "W8-M10",
          number: 10,
          type: "single",
          section: "Section C — Electronic Specific Heat",
          question: "Why does the Drude–Sommerfeld model predict a much smaller electronic specific heat than the classical Drude model?",
          options: [
            "It assumes electrons have no energy",
            "It accounts for Fermi–Dirac statistics and the Pauli exclusion principle",
            "It ignores all electron motion",
            "It assumes the metal has no free electrons"
          ],
          correctAnswer: 1,
          explanation: "The Drude–Sommerfeld model incorporates the Pauli exclusion principle and Fermi–Dirac statistics, restricting thermal excitation to only a tiny fraction of electrons near the Fermi surface.\n\n**Correct Option: B (It accounts for Fermi–Dirac statistics and the Pauli exclusion principle).**",
          points: 1
        },
        {
          id: "W8-M11",
          number: 11,
          type: "single",
          section: "Section C — Electronic Specific Heat",
          question: "Compared with the classical Drude model, the Drude–Sommerfeld model predicts electronic specific heat that is approximately reduced by a factor of:",
          options: [
            "T / T_f",
            "T_f / T",
            "T + T_f",
            "T^2 / T_f"
          ],
          correctAnswer: 0,
          explanation: "Only the fraction $\\sim \\frac{k_B T}{E_f} = \\frac{T}{T_f}$ of electrons participate in thermal excitation, reducing the classical specific heat by the factor $T/T_f$.\n\n**Correct Option: A (T / T_f).**",
          points: 1
        },
        {
          id: "W8-M12",
          number: 12,
          type: "single",
          section: "Section C — Electronic Specific Heat",
          question: "Why can a metal have a Fermi temperature of thousands of kelvin while its actual temperature is near room temperature?",
          options: [
            "The Fermi temperature is the actual temperature of the whole metal",
            "Fermi temperature is a characteristic scale associated with Fermi energy, not the measured temperature of the metal",
            "The metal must be melting",
            "The electrons are all classical particles"
          ],
          correctAnswer: 1,
          explanation: "Fermi temperature $T_f = E_f/k_B$ is merely a characteristic energy scale representing the immense kinetic energy of electrons packed into the Fermi sea by Pauli exclusion; it is not the thermodynamic temperature of the lattice.\n\n**Correct Option: B.**",
          points: 1
        }
      ]
    },
    {
      id: 9,
      number: 9,
      title: "Fermi Energy, Contact Potential & Reciprocal Space",
      lectures: "Lectures 27 - 29",
      status: "active",
      summary: "Chemical potential at 0 K as Fermi energy, contact potential and electron flow, literature Fermi values (Fe), reciprocal lattice vectors, Bragg diffraction condition, Ewald sphere, and reciprocal duals (SC, FCC, BCC).",
      studyMaterials: {
        quickOverview: "Week 9 connects the electronic properties of metals (Fermi energy, chemical potential, and contact potential) with structural crystallography in reciprocal space. At low temperatures, the electron chemical potential is represented by the Fermi energy $E_f$. When two metals with different Fermi energies touch, electrons flow spontaneously from the metal with higher $E_f$ to the one with lower $E_f$ until an electrostatic contact potential difference equalizes their chemical potentials. In $k$-space, constant energy surfaces for free electrons are spheres in 3D and circles in 2D. The Drude-Sommerfeld model shows that electronic specific heat $C_V^e \\propto 1/T_f$, solving the classical catastrophe.\\n\\nLectures 27–29 introduce reciprocal space: a mathematical framework where reciprocal lattice vectors $\\mathbf{H}_{hkl}$ are strictly perpendicular to crystal planes $(hkl)$ with magnitude $|\\mathbf{H}_{hkl}| = 1/d_{hkl}$. This simplifies diffraction: Bragg's law ($n\\lambda = 2d\\sin\\theta$) is equivalent to the reciprocal-space diffraction condition requiring the scattering vector to equal a reciprocal lattice vector. The Ewald sphere (radius $1/\\lambda$) provides a direct geometric construction: diffraction occurs whenever a reciprocal lattice point touches the surface of the sphere. Crucially, the reciprocal lattice of Simple Cubic is Simple Cubic, FCC is BCC, and BCC is FCC.",
        
        formulaSheet: [
          { name: "Chemical Potential at Low T", formula: "\\mu(0\\text{ K}) = E_f", units: "eV", desc: "At low temperatures, electron chemical potential is equal to the Fermi energy." },
          { name: "Constant Energy Surface (3D vs 2D)", formula: "E = \\frac{\\hbar^2 k^2}{2m} \\implies \\text{Sphere in 3D, Circle in 2D}", units: "Dimensionless shape", desc: "Surfaces of constant energy in wave-vector k-space for isotropic free electrons." },
          { name: "Fermi Temperature & Literature Values", formula: "T_f = \\frac{E_f}{k_B} \\quad (\\text{For Fe: } E_f \\approx 11.1\\text{ eV}, T_f \\approx 12.7 \\times 10^4\\text{ K})", units: "Kelvin", desc: "Thermal scale of electron kinetic energy at Fermi level." },
          { name: "Contact Potential Electron Flow", formula: "E_{f1} > E_{f2} \\implies e^- \\text{ flows from } 1 \\to 2", units: "Volts", desc: "Electrons flow from higher Fermi energy (higher chemical potential) to lower Fermi energy until equilibrium." },
          { name: "Electronic Specific Heat Scaling", formula: "C_V^e = \\frac{\\pi^2}{2} N k_B \\left(\\frac{T}{T_f}\\right) \\propto \\frac{1}{T_f}", units: "J/(mol·K)", desc: "Electronic heat capacity is inversely proportional to Fermi temperature T_f and directly proportional to T." },
          { name: "Reciprocal Lattice Vector Direction & Magnitude", formula: "\\mathbf{H}_{hkl} \\perp (hkl) \\text{ plane}, \\quad |\\mathbf{H}_{hkl}| = \\frac{1}{d_{hkl}}", units: "m⁻¹", desc: "Reciprocal vector is normal to the (hkl) plane family with magnitude equal to inverse interplanar spacing." },
          { name: "Bragg's Law of Diffraction", formula: "n\\lambda = 2d_{hkl}\\sin\\theta", units: "Dimensionless", desc: "Condition for constructive interference of waves scattered by parallel lattice planes." },
          { name: "Reciprocal Space Diffraction Condition", formula: "\\Delta \\mathbf{k} = \\mathbf{k}' - \\mathbf{k} = \\mathbf{H}_{hkl}", units: "m⁻¹", desc: "Elastic scattering vector must connect the reciprocal space origin to a valid reciprocal lattice point." },
          { name: "Ewald Sphere Radius", formula: "R = \\frac{1}{\\lambda}", units: "m⁻¹", desc: "Radius of the Ewald sphere in reciprocal space; diffraction occurs where the sphere touches reciprocal points." },
          { name: "Reciprocal Lattice Duals", formula: "\\text{SC}^* \\to \\text{SC}, \\quad \\text{FCC}^* \\to \\text{BCC}, \\quad \\text{BCC}^* \\to \\text{FCC}", units: "Crystal symmetry", desc: "Direct lattice to reciprocal lattice relationships derived in Lecture 29." }
        ],

        lecturesBreakdown: [
          {
            lectureNo: 27,
            title: "Reciprocal Space - 1: Introduction & Fundamentals",
            bullets: [
              "Why Reciprocal Space: Describes crystal periodicity and electron wave vectors in the same dimensional framework ($[L]^{-1}$), enabling geometric analysis of diffraction and band structures.",
              "Perpendicularity: The reciprocal lattice vector $\\mathbf{H}_{hkl}$ is strictly normal (perpendicular) to the direct crystal plane family $(hkl)$.",
              "Magnitude and Interplanar Spacing: $|\\mathbf{H}_{hkl}| = \\frac{1}{d_{hkl}}$. Widely spaced planes in direct space map to dense reciprocal points near the origin.",
              "Basis Vector Transformation: Primitive reciprocal translation vectors satisfy $\\mathbf{a}_i \\cdot \\mathbf{a}_j^* = \\delta_{ij}$. Specifically, $\\mathbf{a}^* = \\frac{\\mathbf{b} \\times \\mathbf{c}}{\\mathbf{a} \\cdot (\\mathbf{b} \\times \\mathbf{c})}$."
            ]
          },
          {
            lectureNo: 28,
            title: "Reciprocal Space - 2: Condition for Diffraction",
            bullets: [
              "Bragg's Law in Real Space: Incident and scattered beams at glancing angle $\\theta$ interfere constructively when path difference equals an integer multiple of wavelength: $2d\\sin\\theta = n\\lambda$.",
              "Reciprocal Diffraction Condition (Laue condition): For elastic scattering ($|\\mathbf{k}'| = |\\mathbf{k}| = 1/\\lambda$), constructive interference occurs if and only if the scattering vector $\\Delta \\mathbf{k} = \\mathbf{k}' - \\mathbf{k}$ equals a reciprocal lattice vector $\\mathbf{H}_{hkl}$.",
              "Physical Interpretation: Every set of parallel planes in real space becomes a single point in reciprocal space, transforming geometric angle calculations into simple vector intersections."
            ]
          },
          {
            lectureNo: 29,
            title: "Reciprocal Space - 3: Ewald Sphere, SC, FCC & BCC",
            bullets: [
              "Ewald Sphere Construction: A sphere of radius $R = 1/\\lambda$ is drawn passing through the reciprocal origin with center at $-\\mathbf{k}$. Any reciprocal lattice point intersecting this spherical shell automatically satisfies the Bragg condition.",
              "Wavelength Effect: Decreasing $\\lambda$ increases sphere radius $R = 1/\\lambda$, intercepting a larger number of reciprocal lattice points.",
              "Simple Cubic Lattice: The reciprocal of a Simple Cubic lattice is another Simple Cubic lattice with reciprocal parameter $1/a$.",
              "FCC to BCC Transformation: A Face-Centered Cubic (FCC) direct lattice transforms into a Body-Centered Cubic (BCC) reciprocal lattice.",
              "BCC to FCC Transformation: A Body-Centered Cubic (BCC) direct lattice transforms into a Face-Centered Cubic (FCC) reciprocal lattice. The two structures are reciprocal duals of each other."
            ]
          }
        ],

        examTraps: [
          "Reciprocal Vector Orientation: The reciprocal vector $\\mathbf{H}_{hkl}$ is PERPENDICULAR to the $(hkl)$ real plane, never parallel or lying within it.",
          "Interplanar Spacing Formula: In the NPTEL lecture notation, $d_{hkl} = 1 / |\\mathbf{H}_{hkl}|$. Do not invert this formula.",
          "Contact Potential Direction: When two metals contact, electrons flow from HIGHER Fermi energy to LOWER Fermi energy (downhill in electrochemical potential) until the levels equilibrate.",
          "Specific Heat Temperature Dependencies: Electronic specific heat $C_V^e$ is directly proportional to temperature $T$, but INVERSELY proportional to Fermi temperature $T_f$ ($C_V^e \\propto 1/T_f$).",
          "FCC vs BCC Reciprocal Duals: Remember clearly that Direct FCC $\\implies$ Reciprocal BCC, while Direct BCC $\\implies$ Reciprocal FCC."
        ]
      },

      assignmentQuestions: [
        {
          id: "W9-A1",
          number: 1,
          type: "single",
          question: "The chemical potential of nearly free electrons in a metal is represented by",
          options: [
            "Fermi energy",
            "Two thirds of the Fermi energy",
            "Half the Fermi energy",
            "One third of the Fermi energy"
          ],
          correctAnswer: 0,
          explanation: "At low temperatures, the chemical potential $\\mu$ of nearly free electrons in a metal is represented by the Fermi energy $E_f$ (specifically $\\mu(0\\text{ K}) = E_f$).\n\n**Correct Option: A (Fermi energy).**",
          points: 1
        },
        {
          id: "W9-A2",
          number: 2,
          type: "single",
          question: "In 3D, the Fermi surface corresponding to electrons in a cube of solid has the shape of:",
          options: [
            "Circle",
            "Square",
            "Sphere",
            "Cube"
          ],
          correctAnswer: 2,
          explanation: "For an isotropic free-electron gas in 3D, the energy dispersion is $E = \\frac{\\hbar^2(k_x^2 + k_y^2 + k_z^2)}{2m}$. The surface of constant energy at $E = E_f$ satisfies $k_x^2 + k_y^2 + k_z^2 = k_F^2$, which defines a sphere in 3D $k$-space.\n\n**Correct Option: C (Sphere).**",
          points: 1
        },
        {
          id: "W9-A3",
          number: 3,
          type: "single",
          question: "In 2D, (using two k vectors) the Fermi surface corresponding to electrons in a cube of solid has the shape of:",
          options: [
            "Circle",
            "Square",
            "Sphere",
            "Cube"
          ],
          correctAnswer: 0,
          explanation: "In 2D, constant energy satisfies $k_x^2 + k_y^2 = k_F^2$, which corresponds geometrically to a circle in 2D wave-vector space.\n\n**Correct Option: A (Circle).**",
          points: 1
        },
        {
          id: "W9-A4",
          number: 4,
          type: "single",
          question: "In k space, points corresponding to constant energy lie on the surface of a",
          options: [
            "Sphere",
            "Cube",
            "Tetrahedron",
            "Octahedron"
          ],
          correctAnswer: 0,
          explanation: "For free electrons, $E = \\frac{\\hbar^2 |\\mathbf{k}|^2}{2m}$. Points of constant energy satisfy $|\\mathbf{k}| = \\text{constant}$, which forms a spherical shell (sphere) in 3D $k$-space.\n\n**Correct Option: A (Sphere).**",
          points: 1
        },
        {
          id: "W9-A5",
          number: 5,
          type: "single",
          question: "Look up literature and find the Fermi energy in eV, for Fe",
          options: [
            "4.1",
            "8.1",
            "11.1",
            "13.1"
          ],
          correctAnswer: 2,
          explanation: "Standard literature tables and course references cite the Fermi energy of iron (Fe) as approximately $11.1\\text{ eV}$.\n\n**Correct Option: C (11.1).**",
          points: 1
        },
        {
          id: "W9-A6",
          number: 6,
          type: "single",
          question: "The Fermi temperature in Kelvin, of Fe is:",
          options: [
            "$12.7 \\times 10^4$",
            "$14.7 \\times 10^4$",
            "$16.7 \\times 10^4$",
            "$18.7 \\times 10^4$"
          ],
          correctAnswer: 0,
          explanation: "Using $T_f = E_f / k_B$ with $E_f = 11.1\\text{ eV}$ and $1\\text{ eV}/k_B \\approx 11{,}600\\text{ K}$, $T_f \\approx 1.29 \\times 10^5\\text{ K} = 12.9 \\times 10^4\\text{ K}$. The course assignment designates $12.7 \\times 10^4\\text{ K}$ based on specific reference literature.\n\n**Correct Option: A ($12.7 \\times 10^4$).**",
          points: 1
        },
        {
          id: "W9-A7",
          number: 7,
          type: "single",
          question: "When two materials with different Fermi energies are physically in contact with each other, electrons will",
          options: [
            "Flow from the material with higher Fermi energy to that with lower Fermi energy",
            "Flow from the material with lower Fermi energy to that with higher Fermi energy",
            "Remain undisturbed in the respective materials",
            "Be emitted from both materials into the free space moving away from the materials"
          ],
          correctAnswer: 0,
          explanation: "Fermi energy represents the chemical potential of electrons. When brought into electrical contact, electrons spontaneously flow from higher chemical potential (higher $E_f$) to lower chemical potential (lower $E_f$) until the Fermi levels equalize, creating a contact potential difference.\n\n**Correct Option: A (Flow from the material with higher Fermi energy to that with lower Fermi energy).**",
          points: 1
        },
        {
          id: "W9-A8",
          number: 8,
          type: "single",
          question: "The Drude-Sommerfeld model improves the prediction of:",
          options: [
            "The contribution of the solid to the specific heat at constant volume",
            "The contribution of the bonds to the specific heat at constant volume",
            "The bound electron contribution to the specific heat at constant volume",
            "The free electron contribution to the specific heat at constant volume"
          ],
          correctAnswer: 3,
          explanation: "The classical Drude model drastically overestimated the electronic specific heat $C_V^e$ by $\\sim 100$ times. The Drude-Sommerfeld model utilizes Fermi-Dirac statistics to correctly predict the free electron contribution to specific heat at constant volume.\n\n**Correct Option: D (The free electron contribution to the specific heat at constant volume).**",
          points: 1
        },
        {
          id: "W9-A9",
          number: 9,
          type: "single",
          question: "The Drude-Sommerfeld model shows that $C_V^e$ is",
          options: [
            "Independent of Fermi Temperature",
            "Inversely proportional to Fermi Temperature",
            "Directly proportional to Fermi Temperature",
            "Zero"
          ],
          correctAnswer: 1,
          explanation: "In the Sommerfeld model, $C_V^e = \\frac{\\pi^2}{2} N k_B \\left(\\frac{T}{T_f}\\right)$. Thus, electronic specific heat is directly proportional to temperature $T$, but inversely proportional to Fermi temperature $T_f$ ($C_V^e \\propto 1/T_f$).\n\n**Correct Option: B (Inversely proportional to Fermi Temperature).**",
          points: 1
        },
        {
          id: "W9-A10",
          number: 10,
          type: "single",
          question: "With respect to a plane in reciprocal space:",
          options: [
            "The vector is parallel to the plane",
            "The vector lies on the plane",
            "The vector is perpendicular to the plane",
            "The vector is inclined at an angle of 45° to the plane"
          ],
          correctAnswer: 2,
          explanation: "By mathematical definition, the reciprocal lattice vector $\\mathbf{H}_{hkl}$ is strictly normal (perpendicular) to the corresponding real-space $(hkl)$ crystallographic plane family.\n\n**Correct Option: C (The vector is perpendicular to the plane).**",
          points: 1
        }
      ],

      masteryExamQuestions: [
        {
          id: "W9-M1",
          number: 1,
          type: "single",
          section: "Section A — Reciprocal Space & Vector Properties",
          question: "Why is reciprocal space useful in materials science?",
          options: [
            "It represents only atomic mass",
            "It represents crystal periodicity in the same framework as wave vectors",
            "It eliminates crystal structure",
            "It represents only temperature"
          ],
          correctAnswer: 1,
          explanation: "Both crystal lattice plane families and electron/X-ray wave vectors share inverse-length dimensions ($[L]^{-1}$). Reciprocal space allows wave diffraction, electronic band structures, and Brillouin zones to be mapped directly onto crystal geometry.\n\n**Correct Option: B (It represents crystal periodicity in the same framework as wave vectors).**",
          points: 1
        },
        {
          id: "W9-M2",
          number: 2,
          type: "single",
          section: "Section A — Reciprocal Space & Vector Properties",
          question: "A reciprocal-lattice vector corresponding to the (hkl) plane is:",
          options: [
            "Parallel to the plane",
            "Perpendicular to the plane",
            "Always inside the plane",
            "Unrelated to the plane"
          ],
          correctAnswer: 1,
          explanation: "A fundamental property of reciprocal lattice vectors is that $\\mathbf{H}_{hkl}$ is strictly perpendicular (normal) to the family of $(hkl)$ lattice planes in real space.\n\n**Correct Option: B (Perpendicular to the plane).**",
          points: 1
        },
        {
          id: "W9-M3",
          number: 3,
          type: "single",
          section: "Section A — Reciprocal Space & Vector Properties",
          question: "The spacing between parallel (hkl) planes is related to the reciprocal-vector magnitude by:",
          options: [
            "$d_{hkl} = |\\mathbf{H}_{hkl}|$",
            "$d_{hkl} = \\frac{1}{|\\mathbf{H}_{hkl}|}$",
            "$d_{hkl} = |\\mathbf{H}_{hkl}|^2$",
            "$d_{hkl} = \\frac{1}{|\\mathbf{H}_{hkl}|^2}$"
          ],
          correctAnswer: 1,
          explanation: "Under the crystallographic convention used in the course lectures, the magnitude of reciprocal lattice vector $\\mathbf{H}_{hkl}$ equals the inverse of the interplanar spacing: $d_{hkl} = \\frac{1}{|\\mathbf{H}_{hkl}|}$.\n\n**Correct Option: B ($d_{hkl} = \\frac{1}{|\\mathbf{H}_{hkl}|}$).**",
          points: 1
        },
        {
          id: "W9-M4",
          number: 4,
          type: "single",
          section: "Section B — Diffraction & Bragg's Law",
          question: "Bragg's law of diffraction is given by:",
          options: [
            "$n\\lambda = d\\sin\\theta$",
            "$n\\lambda = 2d\\sin\\theta$",
            "$\\lambda = 2nd\\cos\\theta$",
            "$n\\lambda = 2d\\cos\\theta$"
          ],
          correctAnswer: 1,
          explanation: "Bragg's law states that constructive interference from parallel crystal planes with spacing $d$ at glancing angle $\\theta$ requires a path difference of $2d\\sin\\theta = n\\lambda$.\n\n**Correct Option: B ($n\\lambda = 2d\\sin\\theta$).**",
          points: 1
        },
        {
          id: "W9-M5",
          number: 5,
          type: "single",
          section: "Section B — Diffraction & Bragg's Law",
          question: "Constructive interference occurs when the optical path difference is:",
          options: [
            "Any fraction of a wavelength",
            "An integral multiple of wavelength",
            "Always zero only",
            "Half a wavelength for every order"
          ],
          correctAnswer: 1,
          explanation: "For waves to interfere constructively, the path difference between scattered wave fronts must equal an integer multiple of the wavelength ($n\\lambda$, where $n = 1, 2, 3, \\ldots$).\n\n**Correct Option: B (An integral multiple of wavelength).**",
          points: 1
        },
        {
          id: "W9-M6",
          number: 6,
          type: "single",
          section: "Section B — Diffraction & Bragg's Law",
          question: "The reciprocal-space condition for diffraction is satisfied when:",
          options: [
            "The scattering vector corresponds to a valid reciprocal-lattice vector",
            "The crystal has no periodic structure",
            "The wavelength must be zero",
            "The incident and diffracted beams must always be parallel"
          ],
          correctAnswer: 0,
          explanation: "In reciprocal space (Laue condition), diffraction occurs when the change in wave vector (scattering vector $\\Delta \\mathbf{k} = \\mathbf{k}' - \\mathbf{k}$) coincides with a reciprocal lattice vector $\\mathbf{H}_{hkl}$.\n\n**Correct Option: A (The scattering vector corresponds to a valid reciprocal-lattice vector).**",
          points: 1
        },
        {
          id: "W9-M7",
          number: 7,
          type: "single",
          section: "Section C — Ewald Sphere & Crystal Lattice Duals",
          question: "The Ewald sphere is used to determine:",
          options: [
            "The density of electrons in real space",
            "Which diffraction directions satisfy the reciprocal-space condition",
            "The melting temperature of the crystal",
            "The work function of the metal"
          ],
          correctAnswer: 1,
          explanation: "The Ewald sphere is a geometric construction in reciprocal space. Whenever the sphere of radius $1/\\lambda$ intersects a reciprocal lattice point, Bragg's diffraction condition is satisfied in that direction.\n\n**Correct Option: B (Which diffraction directions satisfy the reciprocal-space condition).**",
          points: 1
        },
        {
          id: "W9-M8",
          number: 8,
          type: "single",
          section: "Section C — Ewald Sphere & Crystal Lattice Duals",
          question: "In reciprocal space, a simple cubic lattice is represented as:",
          options: [
            "Simple cubic",
            "FCC only",
            "BCC only",
            "Amorphous"
          ],
          correctAnswer: 0,
          explanation: "The reciprocal lattice of a simple cubic (SC) crystal with lattice constant $a$ is another simple cubic lattice with reciprocal parameter $1/a$.\n\n**Correct Option: A (Simple cubic).**",
          points: 1
        },
        {
          id: "W9-M9",
          number: 9,
          type: "single",
          section: "Section C — Ewald Sphere & Crystal Lattice Duals",
          question: "The reciprocal lattice of an FCC crystal has the structure:",
          options: [
            "Simple cubic",
            "FCC",
            "BCC",
            "Amorphous"
          ],
          correctAnswer: 2,
          explanation: "Derivation of primitive reciprocal translation vectors for a Face-Centered Cubic (FCC) real space lattice yields a Body-Centered Cubic (BCC) reciprocal lattice.\n\n**Correct Option: C (BCC).**",
          points: 1
        },
        {
          id: "W9-M10",
          number: 10,
          type: "single",
          section: "Section C — Ewald Sphere & Crystal Lattice Duals",
          question: "The reciprocal lattice of a BCC crystal has the structure:",
          options: [
            "FCC",
            "BCC",
            "Simple cubic",
            "Amorphous"
          ],
          correctAnswer: 0,
          explanation: "The reciprocal lattice of a Body-Centered Cubic (BCC) real space lattice is a Face-Centered Cubic (FCC) reciprocal lattice. FCC and BCC are reciprocal duals of each other.\n\n**Correct Option: A (FCC).**",
          points: 1
        },
        {
          id: "W9-M11",
          number: 11,
          type: "single",
          section: "Section C — Ewald Sphere & Crystal Lattice Duals",
          question: "If the incident radiation wavelength changes, what happens to the Ewald sphere radius?",
          options: [
            "It is unaffected",
            "It changes because the radius is proportional to $1/\\lambda$",
            "It becomes zero for shorter wavelengths",
            "It always equals the lattice constant"
          ],
          correctAnswer: 1,
          explanation: "The radius of the Ewald sphere is $R = 1/\\lambda$. Shorter wavelengths (higher photon energies) enlarge the sphere, allowing it to intersect more reciprocal lattice points.\n\n**Correct Option: B (It changes because the radius is proportional to $1/\\lambda$).**",
          points: 1
        },
        {
          id: "W9-M12",
          number: 12,
          type: "single",
          section: "Section C — Ewald Sphere & Crystal Lattice Duals",
          question: "A reciprocal-lattice point lies on the Ewald sphere. What does this indicate?",
          options: [
            "Diffraction can occur in the corresponding direction",
            "The material has melted",
            "All electrons are bound",
            "The Fermi energy is zero"
          ],
          correctAnswer: 0,
          explanation: "An intersection of a reciprocal lattice point with the Ewald sphere proves that the vector difference $\\mathbf{k}' - \\mathbf{k}$ matches that reciprocal lattice vector, so constructive Bragg interference (diffraction) occurs in that direction.\n\n**Correct Option: A (Diffraction can occur in the corresponding direction).**",
          points: 1
        }
      ]
    },
    {
      id: 10,
      number: 10,
      title: "Brillouin Zones, Energy Bands & Band Theory Approximations",
      lectures: "Lectures 30, 33 - 34",
      status: "active",
      summary: "Wigner–Seitz cell construction, First Brillouin Zone as reciprocal Wigner–Seitz cell, Bragg planes as perpendicular bisectors, Ewald sphere intersections, periodic potential solutions, allowed bands & forbidden gaps, conductor/semiconductor/insulator classifications, free-electron vs tight-binding approximations, and pressure-induced band tuning.",
      studyMaterials: {
        quickOverview: "Week 10 transitions from reciprocal lattice geometry to the quantum electronic band structure of solids. A Wigner–Seitz cell is the primitive region containing all points in space closer to a given lattice point than to any other. The First Brillouin Zone (1st BZ) is precisely the Wigner–Seitz cell of the reciprocal lattice, bounded by the perpendicular bisector planes (Bragg planes) to reciprocal lattice vectors drawn from the origin.\\n\\nWhen electrons move in a periodic crystal potential $V(x)$, the 1D Schrödinger equation (Kronig–Penney model) yields solutions only when the dispersion condition $\\cos(ka) = P \\frac{\\sin(\\alpha a)}{\\alpha a} + \\cos(\\alpha a)$ lies within $[-1, +1]$. Energies for which the RHS falls outside $[-1, +1]$ are forbidden, creating energy band gaps $E_g$. Solids are classified by these bands:\\n• Metals: Partially filled bands or overlapping valence and conduction bands ($E_g = 0$);\\n• Semiconductors: Filled valence band and empty conduction band at 0 K, separated by a modest band gap ($E_g < 2\\text{ eV}$);\\n• Insulators: Wide band gap ($E_g > 2\\text{ eV}$, often $> 4\\text{ eV}$).\\n\\nTwo complementary theoretical approximations bridge this behavior: the Free Electron Approximation (nearly free electron gas perturbed by weak periodic ionic potentials, ideal for simple metals), and the Tight-Binding Approximation (atomic orbitals overlapping as atoms are brought together, splitting discrete atomic energy levels into bands via Pauli exclusion, well-suited for insulators and transition metals). High hydrostatic pressure compresses the lattice, increasing orbital overlap and narrowing band gaps—potentially driving an insulator into a semiconductor and ultimately into a metal.",
        
        formulaSheet: [
          { name: "Bragg Path Difference by Order", formula: "\\Delta = n\\lambda \\quad (\\text{For } n = 3, \\Delta = 3\\lambda)", units: "m (or \\AA)", desc: "Constructive interference requires path difference equal to an integer number of wavelengths." },
          { name: "Fe Kα Characteristic Radiation", formula: "\\lambda(\\text{Fe } K\\alpha) = 1.94\\text{ \\AA} = 0.194\\text{ nm}", units: "\\AA", desc: "Standard laboratory characteristic X-ray wavelength for iron target." },
          { name: "Continuous Reciprocal Coordinates", formula: "(h,k,l) \\in \\mathbb{R} \\implies \\text{Lattice points } + \\text{ Empty space}", units: "Dimensionless", desc: "Allowing continuous non-integer Miller indices describes all space in reciprocal coordinates." },
          { name: "First Brillouin Zone Definition", formula: "\\text{1st BZ} = \\text{Wigner-Seitz cell of reciprocal lattice}", units: "Volume in k-space", desc: "The primitive reciprocal unit cell enclosed by Bragg planes closest to the origin." },
          { name: "Bragg Plane Equation", formula: "\\mathbf{k} \\cdot \\frac{1}{2}\\mathbf{G} = \\left(\\frac{1}{2}|\\mathbf{G}|\\right)^2 \\iff \\text{Perpendicular bisector of } \\mathbf{G}", units: "Plane in k-space", desc: "Plane that bisects the reciprocal lattice vector G at right angles." },
          { name: "Ewald Sphere Diffraction Criteria", formula: "\\Delta \\mathbf{k} = \\mathbf{k}' - \\mathbf{k} = \\mathbf{H}_{hkl} \\quad (R = 1/\\lambda)", units: "Points on sphere", desc: "Diffraction occurs exclusively at discrete points where the 2D spherical shell intersects reciprocal lattice points." },
          { name: "Band Gap Condition (Kronig-Penney)", formula: "\\left| P \\frac{\\sin(\\alpha a)}{\\alpha a} + \\cos(\\alpha a) \\right| \\le 1", units: "Dimensionless", desc: "Solutions exist only when dispersion expression lies between -1 and +1; outside values produce forbidden gaps." },
          { name: "Solid Classification Thresholds", formula: "\\text{Metal: } E_g = 0; \\quad \\text{Semiconductor: } E_g < 2\\text{ eV}; \\quad \\text{Insulator: } E_g > 2\\text{ eV}", units: "eV", desc: "Energy band gap criteria defined in Lecture 34." },
          { name: "Pressure Effect on Band Gaps", formula: "\\uparrow \\text{Pressure} \\implies \\downarrow a \\implies \\uparrow \\text{Overlap} \\implies \\downarrow E_g", units: "Qualitative trend", desc: "Hydrostatic compression increases orbital overlap, driving Insulator → Semiconductor → Metal." }
        ],

        lecturesBreakdown: [
          {
            lectureNo: 30,
            title: "Wigner–Seitz Cell & Introduction to Brillouin Zones",
            bullets: [
              "Wigner–Seitz Cell Construction: Connect a lattice point to its neighbors and construct the perpendicular bisector planes. The smallest enclosed polyhedron around the point contains all space closer to it than to any other lattice point.",
              "First Brillouin Zone: The Wigner–Seitz primitive cell of the RECIPROCAL lattice. It contains all wave vectors $\\mathbf{k}$ that can reach the reciprocal origin without crossing any Bragg plane.",
              "Bragg Planes: The perpendicular bisectors to the vectors connecting the reciprocal origin to all other reciprocal lattice points.",
              "Ewald Sphere Geometry: The construct consists of the two-dimensional surface of a sphere of radius $1/\\lambda$. Diffraction occurs strictly at discrete points where this surface touches reciprocal lattice points.",
              "EDS Characteristic X-Rays: In an electron microscope, high-energy incident electrons eject core electrons from sample atoms, causing outer electrons to drop down and emit characteristic X-rays unique to the sample's elements."
            ]
          },
          {
            lectureNo: 33,
            title: "Calculating Allowed Energy Bands & Forbidden Band Gaps",
            bullets: [
              "Periodic Potential Formulation: Moving electrons encounter an alternating potential that repeats every lattice constant $a$, modeled piecewise between $V=0$ (interstitial regions) and $V=V_0$ (near ionic cores).",
              "Schrödinger Equation & Bloch Solutions: Solving $\\frac{d^2\\psi}{dx^2} + \\frac{2m}{\\hbar^2}(E - V(x))\\psi = 0$ with Bloch's theorem yields the dispersion equation for electron energy $E$.",
              "Origin of Forbidden Gaps: Because the Bloch wavevector $k$ must be real for propagating electron states, the dispersion function $\\cos(ka)$ is restricted to $[-1, +1]$. Energies for which the function exceeds $+1$ or falls below $-1$ cannot propagate—forming forbidden band gaps.",
              "Energy Dispersion vs k: At the Brillouin zone boundaries ($k = \\pm n\\pi/a$), standing waves form and energy discontinuities (band gaps) emerge."
            ]
          },
          {
            lectureNo: 34,
            title: "Bands — Free Electron & Tight Binding Approximations",
            bullets: [
              "Free-Electron Approximation: Assumes electrons roam throughout the entire crystal as an electron gas, with the lattice acting as a weak periodic perturbation. Most natural for modeling simple metals.",
              "Tight-Binding Approximation: Starts with isolated atomic orbitals. As atoms are brought together into a lattice, orbital wavefunctions overlap, causing discrete atomic levels to split into continuous bands under the Pauli exclusion principle. Most natural for insulators and tightly bound core states.",
              "Band Occupancy & Electrical Properties: Metals conduct because their highest occupied band is partially filled (or overlaps with an empty band), offering readily accessible vacant states. Insulators cannot conduct at ordinary temperatures because the valence band is completely filled and the band gap is large ($E_g > 2\\text{ eV}$).",
              "Semiconductors: Have a small band gap ($E_g < 2\\text{ eV}$), enabling thermal excitation of electrons into the conduction band at room temperature.",
              "Effect of High Pressure: Compressional pressure reduces interatomic distance, enhancing wavefunction overlap and widening energy bands. This shrinks the band gap, transforming an insulator into a semiconductor and eventually into a metallic state."
            ]
          }
        ],

        examTraps: [
          "Path Difference Order: For order $n=3$, the physical path difference is $3\\lambda$. Do not forget the wavelength unit.",
          "Fe Kα Wavelength: Exactly $1.94\\text{ \\AA}$ (be careful not to confuse with $\\text{Cu } K\\alpha = 1.54\\text{ \\AA}$).",
          "Bragg Planes are Bisectors: Bragg planes are strictly the PERPENDICULAR BISECTORS of lines joining reciprocal lattice points, not arbitrary perpendicular planes or planes passing through the origin.",
          "Ewald Diffraction Geometry: Diffraction occurs at SPECIFIC POINTS on the surface of the sphere, not across the entire surface or within the volume.",
          "First Brillouin Zone Location: The 1st BZ is a Wigner–Seitz cell in RECIPROCAL space, not real space.",
          "Band Gap Thresholds: Semiconductor $E_g < 2\\text{ eV}$, Insulator $E_g > 2\\text{ eV}$ according to the NPTEL lecture benchmark.",
          "Approximation Suitability: Free electron model $\\to$ Metals; Tight binding model $\\to$ Insulators."
        ]
      },

      assignmentQuestions: [
        {
          id: "W10-A1",
          number: 1,
          type: "single",
          question: "For a third order reflection, the path difference between waves from adjacent planes is:",
          options: [
            "1",
            "2",
            "3",
            "4"
          ],
          correctAnswer: 2,
          explanation: "According to Bragg's law ($n\\lambda = 2d\\sin\\theta$), the path difference for an $n$-th order reflection is $n\\lambda$. For a third-order reflection ($n = 3$), the path difference is $3\\lambda$ (represented in the assignment as 3).\n\n**Correct Option: C (3).**",
          points: 1
        },
        {
          id: "W10-A2",
          number: 2,
          type: "single",
          question: "Look up this information: What is the wavelength of Fe Kα radiation in Å?",
          options: [
            "1.84",
            "1.94",
            "2.10",
            "2.20"
          ],
          correctAnswer: 1,
          explanation: "Standard X-ray characteristic tables state that the wavelength of Fe $K\\alpha$ radiation is approximately $1.936\\text{ \\AA} \\approx 1.94\\text{ \\AA}$.\n\n**Correct Option: B (1.94).**",
          points: 1
        },
        {
          id: "W10-A3",
          number: 3,
          type: "single",
          question: "If h, k, l are allowed to take any values, and not necessarily only integers, then in reciprocal space, they will represent",
          options: [
            "Only valid lattice points",
            "Only empty space between the lattice points",
            "Both Lattice points as well as empty space between the lattice points",
            "Nothing"
          ],
          correctAnswer: 2,
          explanation: "Integer $(h, k, l)$ values correspond strictly to the discrete reciprocal lattice points. If $h, k, l$ can take any arbitrary continuous real values, they describe the entire continuum of reciprocal space—both the lattice points and the empty space between them.\n\n**Correct Option: C (Both Lattice points as well as empty space between the lattice points).**",
          points: 1
        },
        {
          id: "W10-A4",
          number: 4,
          type: "single",
          question: "X-Rays used in energy dispersive spectroscopy in electron microscopes are:",
          options: [
            "Characteristic X-Rays from the electron gun",
            "Characteristic X-rays from the sample",
            "Continuous bremsstrahlung from the pole piece",
            "Synchrotron radiation from the detector"
          ],
          correctAnswer: 1,
          explanation: "In Energy Dispersive Spectroscopy (EDS) within an electron microscope, the focused electron beam strikes the specimen, knocking out core electrons. Relaxation of outer electrons produces characteristic X-rays unique to the elemental composition of the sample.\n\n**Correct Option: B (Characteristic X-rays from the sample).**",
          points: 1
        },
        {
          id: "W10-A5",
          number: 5,
          type: "single",
          question: "In k space, the Ewald sphere construct consists of:",
          options: [
            "A straight line",
            "A plane",
            "The surface of a sphere",
            "The volume of a sphere"
          ],
          correctAnswer: 2,
          explanation: "The Ewald construct in 3D $k$-space is a spherical shell of radius $R = 1/\\lambda$ (the two-dimensional surface of a sphere).\n\n**Correct Option: C (The surface of a sphere).**",
          points: 1
        },
        {
          id: "W10-A6",
          number: 6,
          type: "single",
          question: "In reciprocal space, a crystalline material is represented by",
          options: [
            "A three dimensional array of points",
            "A three dimensional continuous volume",
            "A Straight line",
            "A sphere"
          ],
          correctAnswer: 0,
          explanation: "Because an ideal crystal has discrete translational periodicity in real space, its Fourier transform in reciprocal space forms a discrete, infinite three-dimensional periodic array of points (the reciprocal lattice).\n\n**Correct Option: A (A three dimensional array of points).**",
          points: 1
        },
        {
          id: "W10-A7",
          number: 7,
          type: "single",
          question: "The condition for diffraction for a given incident beam vector is represented by",
          options: [
            "The entire surface of a sphere",
            "The entire volume of a sphere",
            "Specific points on the surface of a sphere",
            "Specific points within the volume of a sphere"
          ],
          correctAnswer: 2,
          explanation: "Diffraction occurs if and only if the scattering vector connects the reciprocal origin to a valid reciprocal lattice point. On the Ewald sphere, this condition is met strictly at specific discrete points on the spherical surface where the sphere intersects the reciprocal lattice.\n\n**Correct Option: C (Specific points on the surface of a sphere).**",
          points: 1
        },
        {
          id: "W10-A8",
          number: 8,
          type: "single",
          question: "An FCC lattice in real space is represented in reciprocal space by:",
          options: [
            "A simple cubic lattice",
            "An FCC Lattice",
            "A BCC lattice",
            "A sphere"
          ],
          correctAnswer: 2,
          explanation: "Calculating the primitive reciprocal vectors for a Face-Centered Cubic (FCC) direct lattice yields a Body-Centered Cubic (BCC) reciprocal lattice.\n\n**Correct Option: C (A BCC lattice).**",
          points: 1
        },
        {
          id: "W10-A9",
          number: 9,
          type: "single",
          question: "A Wigner-Seitz cell, about a lattice point is",
          options: [
            "The region in space closest to it than to any other lattice point",
            "A sphere of radius equal to the lattice parameter",
            "The region in space that is past its nearest neighbours",
            "Cylinder with height equal to the lattice parameter"
          ],
          correctAnswer: 0,
          explanation: "By definition, the Wigner-Seitz cell around a lattice point is the geometric locus of all points in space that are closer to that specific lattice point than to any other lattice point.\n\n**Correct Option: A (The region in space closest to it than to any other lattice point).**",
          points: 1
        },
        {
          id: "W10-A10",
          number: 10,
          type: "single",
          question: "Bragg planes are planes that:",
          options: [
            "Are parallel to the line joining the origin to a reciprocal lattice point",
            "Contain the line joining the origin to a reciprocal lattice point",
            "Are all planes that are perpendicular to the line joining the origin to a reciprocal lattice point",
            "Is the plane that is the perpendicular bisector to the line joining the origin to a reciprocal lattice point"
          ],
          correctAnswer: 3,
          explanation: "A Bragg plane is geometrically defined as the plane that perpendicularly bisects the line vector connecting the reciprocal origin to a reciprocal lattice point.\n\n**Correct Option: D (Is the plane that is the perpendicular bisector to the line joining the origin to a reciprocal lattice point).**",
          points: 1
        }
      ],

      masteryExamQuestions: [
        {
          id: "W10-M1",
          number: 1,
          type: "single",
          section: "Section A — Wigner–Seitz Cells & Brillouin Zones",
          question: "The first Brillouin zone is:",
          options: [
            "A Wigner–Seitz cell in real space",
            "A Wigner–Seitz cell in reciprocal space",
            "The entire reciprocal space",
            "The Ewald sphere"
          ],
          correctAnswer: 1,
          explanation: "The first Brillouin zone is defined precisely as the Wigner–Seitz primitive unit cell of the reciprocal lattice centered at the origin $\\Gamma$ ($k=0$).\n\n**Correct Option: B (A Wigner–Seitz cell in reciprocal space).**",
          points: 1
        },
        {
          id: "W10-M2",
          number: 2,
          type: "single",
          section: "Section A — Wigner–Seitz Cells & Brillouin Zones",
          question: "To construct a Wigner–Seitz cell, we draw:",
          options: [
            "Lines parallel to all lattice vectors",
            "Perpendicular bisectors between a lattice point and neighboring points",
            "Only circles around lattice points",
            "Random planes through the origin"
          ],
          correctAnswer: 1,
          explanation: "The standard geometric construction of a Wigner–Seitz cell involves drawing lines from a central point to its nearest neighbors and erecting perpendicular bisector planes at the midpoints.\n\n**Correct Option: B (Perpendicular bisectors between a lattice point and neighboring points).**",
          points: 1
        },
        {
          id: "W10-M3",
          number: 3,
          type: "single",
          section: "Section A — Wigner–Seitz Cells & Brillouin Zones",
          question: "Bragg planes are perpendicular bisectors between:",
          options: [
            "Atoms in real space only",
            "The origin and reciprocal-lattice points",
            "The incident and diffracted beams only",
            "Two arbitrary points in real space"
          ],
          correctAnswer: 1,
          explanation: "Bragg planes are constructed in reciprocal space as the perpendicular bisector planes of vectors connecting the origin to reciprocal lattice points $\\mathbf{G}$.\n\n**Correct Option: B (The origin and reciprocal-lattice points).**",
          points: 1
        },
        {
          id: "W10-M4",
          number: 4,
          type: "single",
          section: "Section A — Wigner–Seitz Cells & Brillouin Zones",
          question: "The first Brillouin zone is bounded by:",
          options: [
            "The farthest Bragg planes only",
            "The nearest collection of Bragg planes around a reciprocal-lattice point",
            "The surface of the Ewald sphere",
            "The edges of the real-space crystal"
          ],
          correctAnswer: 1,
          explanation: "The boundaries of the first Brillouin zone are formed by the set of Bragg planes closest to the central reciprocal lattice point that enclose the minimum volume around the origin.\n\n**Correct Option: B (The nearest collection of Bragg planes around a reciprocal-lattice point).**",
          points: 1
        },
        {
          id: "W10-M5",
          number: 5,
          type: "single",
          section: "Section B — Energy Bands & Periodic Potential",
          question: "In the periodic potential model, an energy is forbidden when:",
          options: [
            "The left-hand side of the derived energy equation lies outside the allowed [-1, +1] range",
            "The electron energy is always zero",
            "The potential is always zero",
            "The wavelength is infinite"
          ],
          correctAnswer: 0,
          explanation: "In the 1D Kronig–Penney / periodic potential model, electron wave solutions require $\\cos(ka) = f(E)$. Since the cosine of a real wavevector $k$ must lie within $[-1, +1]$, any energy where $|f(E)| > 1$ yields no propagating Bloch states, producing a forbidden band gap.\n\n**Correct Option: A (The left-hand side of the derived energy equation lies outside the allowed [-1, +1] range).**",
          points: 1
        },
        {
          id: "W10-M6",
          number: 6,
          type: "single",
          section: "Section B — Energy Bands & Periodic Potential",
          question: "The Schrödinger equation is used to determine:",
          options: [
            "Only the atomic mass",
            "Allowed energy bands and forbidden band gaps",
            "Only thermal conductivity",
            "Only the crystal density"
          ],
          correctAnswer: 1,
          explanation: "Solving the Schrödinger equation in a periodic lattice potential yields the dispersion relation $E(k)$, directly revealing the energy bands where solutions exist and band gaps where they do not.\n\n**Correct Option: B (Allowed energy bands and forbidden band gaps).**",
          points: 1
        },
        {
          id: "W10-M7",
          number: 7,
          type: "single",
          section: "Section B — Energy Bands & Periodic Potential",
          question: "In the periodic potential model, the potential alternates between:",
          options: [
            "Two regions with different potential values",
            "Only infinite potential",
            "Only zero potential everywhere",
            "Random values without periodicity"
          ],
          correctAnswer: 0,
          explanation: "In the 1D Kronig–Penney periodic potential model (Lecture 33), the potential is represented piecewise by alternating between region 1 ($V = 0$, between atoms) and region 2 ($V = V_0$, near ionic barriers).\n\n**Correct Option: A (Two regions with different potential values).**",
          points: 1
        },
        {
          id: "W10-M8",
          number: 8,
          type: "single",
          section: "Section C — Band Structure & Approximations",
          question: "An insulator typically has:",
          options: [
            "A partially filled band",
            "Overlapping valence and conduction bands",
            "A full valence band, empty conduction band, and a large band gap",
            "No valence band"
          ],
          correctAnswer: 2,
          explanation: "Insulators are characterized by a completely filled valence band, an empty conduction band, and a large band gap ($E_g > 2\\text{ eV}$), preventing thermal excitation of carriers across the gap at room temperature.\n\n**Correct Option: C (A full valence band, empty conduction band, and a large band gap).**",
          points: 1
        },
        {
          id: "W10-M9",
          number: 9,
          type: "single",
          section: "Section C — Band Structure & Approximations",
          question: "A semiconductor typically has a band gap:",
          options: [
            "Greater than 10 eV",
            "Less than 2 eV",
            "Always equal to zero",
            "Infinite"
          ],
          correctAnswer: 1,
          explanation: "As classified in Lecture 34, semiconductors typically have a relatively small band gap ($E_g < 2\\text{ eV}$, such as $\\text{Si} \\approx 1.1\\text{ eV}$ and $\\text{Ge} \\approx 0.67\\text{ eV}$), allowing significant thermal carrier excitation at ambient temperatures.\n\n**Correct Option: B (Less than 2 eV).**",
          points: 1
        },
        {
          id: "W10-M10",
          number: 10,
          type: "single",
          section: "Section C — Band Structure & Approximations",
          question: "Why can metals conduct electricity easily?",
          options: [
            "They have no electrons",
            "They have vacant states readily accessible near occupied states",
            "All their bands are completely empty",
            "Their band gaps are always very large"
          ],
          correctAnswer: 1,
          explanation: "In metals, the Fermi level passes through an energy band (partially filled band) or overlapping bands, meaning vacant quantum states exist infinitesimally close to filled states, allowing electrons to gain kinetic energy and drift under tiny applied voltages.\n\n**Correct Option: B (They have vacant states readily accessible near occupied states).**",
          points: 1
        },
        {
          id: "W10-M11",
          number: 11,
          type: "single",
          section: "Section C — Band Structure & Approximations",
          question: "The free-electron approximation starts by assuming:",
          options: [
            "Independent atoms with all electrons bound to them",
            "Fixed ionic cores with electrons free to move throughout the solid",
            "No electrons in the solid",
            "Random atomic positions"
          ],
          correctAnswer: 1,
          explanation: "The free-electron approximation starts with a macroscopic 'sea' of valence electrons free to move throughout the entire volume of the solid, surrounded by stationary positive ionic cores.\n\n**Correct Option: B (Fixed ionic cores with electrons free to move throughout the solid).**",
          points: 1
        },
        {
          id: "W10-M12",
          number: 12,
          type: "single",
          section: "Section C — Band Structure & Approximations",
          question: "In the tight-binding approximation, energy levels split when:",
          options: [
            "Atoms are brought close enough for their electron states to overlap",
            "Atoms are infinitely far apart",
            "Temperature becomes exactly zero",
            "The electrons disappear"
          ],
          correctAnswer: 0,
          explanation: "When isolated atoms approach each other to form a crystal lattice, their atomic wavefunctions overlap. By the Pauli exclusion principle, the degenerate discrete atomic energy levels must split into $N$ closely spaced levels, forming continuous energy bands.\n\n**Correct Option: A (Atoms are brought close enough for their electron states to overlap).**",
          points: 1
        },
        {
          id: "W10-M13",
          number: 13,
          type: "single",
          section: "Section C — Band Structure & Approximations",
          question: "Applying sufficiently high pressure can, according to the lecture's model, change a material from:",
          options: [
            "Metal to insulator in every case",
            "Insulator to semiconductor to metal",
            "Semiconductor to vacuum",
            "Crystal to an ideal gas only"
          ],
          correctAnswer: 1,
          explanation: "Hydrostatic pressure compresses the lattice parameter, forcing atoms closer together. The heightened atomic orbital overlap widens the allowed energy bands and narrows the band gap, transforming an insulator into a semiconductor and eventually into a metallic state.\n\n**Correct Option: B (Insulator to semiconductor to metal).**",
          points: 1
        },
        {
          id: "W10-M14",
          number: 14,
          type: "single",
          section: "Section C — Band Structure & Approximations",
          question: "Which approximation is typically more suited to modeling insulators?",
          options: [
            "Tight-binding approximation",
            "Free-electron approximation only",
            "Drude model only",
            "Maxwell–Boltzmann statistics alone"
          ],
          correctAnswer: 0,
          explanation: "Because electrons in insulators are tightly localized near individual atomic cores with small orbital overlap, the tight-binding approximation is naturally suited to modeling insulators and deep core states.\n\n**Correct Option: A (Tight-binding approximation).**",
          points: 1
        }
      ]
    },
    {
      id: 11,
      number: 11,
      title: "Brillouin Zone Boundaries, Band Theory & Semiconductors",
      lectures: "Lectures 33 - 35",
      status: "active",
      summary: "Brillouin zone boundary interactions, Bragg plane geometry in Ewald sphere, 1D zone boundaries at ±π/a, E-k distortion and gap opening, flat band vs E-k diagrams, Fermi surface placement in BZ, intrinsic/extrinsic semiconductor statistics, temperature dependence of conductivity, direct vs indirect band gaps, and optical absorption threshold.",
      studyMaterials: {
        quickOverview: "Week 11 brings together the geometry of reciprocal space and the electronic physics of semiconductors. When electron wavevectors $\\mathbf{k}$ reach the Brillouin zone boundaries (such as $k = \\pm \\pi/a$ for a 1D lattice of spacing $a$), electron waves undergo Bragg reflection, forming standing waves. This distorts the parabolic free-electron $E(k)$ dispersion relation, creating forbidden band gaps where propagating wave solutions do not exist. While a flat-band diagram lists band energies and gaps, it fails to show energy variations as a function of $k$-space position—which is essential to distinguish direct band gap materials (where conduction band minimum and valence band maximum align at the same $k$, enabling efficient photon emission without phonons) from indirect band gap materials.\\n\\nIn semiconductors, thermal energy or doping controls conduction. Pure intrinsic semiconductors generate electron-hole pairs ($n = p = n_i$). Doping Group IV semiconductors with Group V donors creates n-type materials with excess conduction electrons, whereas Group III acceptors create p-type materials with excess holes. Crucially, as temperature rises, metallic conductivity drops due to phonon scattering, whereas semiconductor conductivity surges exponentially because the rapid generation of free electron and hole carriers dominates over mobility reductions. The optical absorption threshold requires incident photon energy to satisfy $h\\nu \\ge E_g$.",
        
        formulaSheet: [
          { name: "1D Brillouin Zone Boundaries", formula: "k = \\pm \\frac{\\pi}{a} \\implies \\text{Spacing from origin } = \\frac{\\pi}{a}, \\text{ Total width } = \\frac{2\\pi}{a}", units: "m⁻¹ (or rad/m)", desc: "Locations of Bragg planes bounding the first Brillouin zone in 1D." },
          { name: "Bragg Plane Ewald Geometry", formula: "\\text{Bragg plane of } \\mathbf{H}_{hkl} \\text{ on Ewald surface} \\implies \\text{Passes through sphere center}", units: "Geometric relation", desc: "Because the Bragg plane bisects a chord from the origin to a point on the sphere, it passes through the sphere center." },
          { name: "Diffraction at Zone Boundary", formula: "\\mathbf{k} \\in \\text{Zone Boundary} \\implies \\text{Bragg diffraction occurs}", units: "Wavevector condition", desc: "Constructive diffraction distorts the free-electron E-k parabola and opens energy gaps." },
          { name: "Flat-Band vs E-k Diagram", formula: "\\text{Flat-band: } E \\text{ levels only; } E(k): E \\text{ vs } \\mathbf{k} \\text{ crystal momentum}", units: "Diagram comparison", desc: "E(k) dispersion reveals direct vs indirect band gap alignment." },
          { name: "Intrinsic Carrier Balance", formula: "n = p = n_i \\implies n \\cdot p = n_i^2(T) = N_c N_v e^{-E_g / k_B T}", units: "m⁻³", desc: "In pure semiconductors, electron concentration in conduction band equals hole concentration in valence band." },
          { name: "Extrinsic Doping Rules", formula: "\\text{Group IV} + \\text{Group V (Donor)} \\to \\text{n-type; } \\text{Group IV} + \\text{Group III (Acceptor)} \\to \\text{p-type}", units: "Carrier type", desc: "Donors introduce extra electrons (n >> p); acceptors introduce extra holes (p >> n)." },
          { name: "Temperature Conductivity Contrast", formula: "\\text{Metals: } \\uparrow T \\implies \\downarrow \\sigma \\ (\\downarrow \\mu); \\quad \\text{Semiconductors: } \\uparrow T \\implies \\uparrow \\sigma \\ (\\uparrow n, p)", units: "S/m", desc: "Opposite thermal response of electrical conductivity." },
          { name: "Direct vs Indirect Band Gap", formula: "\\Delta \\mathbf{k} = 0 \\implies \\text{Direct (photonic)}; \\quad \\Delta \\mathbf{k} \\ne 0 \\implies \\text{Indirect (phonon-mediated)}", units: "Momentum shift", desc: "Direct gap materials (e.g. GaAs) emit light efficiently without phonons." },
          { name: "Optical Absorption Threshold", formula: "h\\nu_{\\min} = E_g \\iff \\lambda_{\\max} = \\frac{hc}{E_g} \\approx \\frac{1240\\text{ eV}\\cdot\\text{nm}}{E_g}", units: "eV (or nm)", desc: "Minimum photon energy required for interband electron transitions." }
        ],

        lecturesBreakdown: [
          {
            lectureNo: 33,
            title: "Calculating Allowed Energy Bands & Forbidden Band Gaps",
            bullets: [
              "1D Lattice Bragg Planes: For a 1D lattice with spacing $a$, Bragg planes occur at distances of $\\pi/a$ from the origin ($k = \\pm \\pi/a$). The 1st BZ spans $[-\\pi/a, +\\pi/a]$.",
              "Bragg Reflection & Standing Waves: Near zone boundaries, forward and backward propagating waves undergo constructive interference, forming standing waves ($e^{ikx} \\pm e^{-ikx}$) with differing electrostatic interaction energies with the ionic cores.",
              "Origin of Band Gaps: The energy difference between the two standing wave states creates an energy discontinuity (band gap $E_g$) at $k = \\pm \\pi/a$. Electron states within this gap are forbidden.",
              "Flat-Band Diagram: Depicts allowed bands and forbidden band gaps as vertical energy ranges, but does NOT display energy levels as a function of wavevector position in $k$-space."
            ]
          },
          {
            lectureNo: 34,
            title: "Bands — Free Electron Approximation & Tight Binding Approximation",
            bullets: [
              "Free Electron Model: Perturbs the continuous $E(k)$ parabola at zone boundaries. Suited for simple metals where the Fermi surface intersects boundary planes.",
              "Tight-Binding Model: Isolated atomic orbitals split into bands as atoms approach, driven by the Pauli exclusion principle. Suited for insulators and tightly bound electrons.",
              "Pressure Effect on Bands: Increasing hydrostatic pressure forces atoms closer together, enhancing wavefunction overlap, broadening bands, narrowing $E_g$, and driving Insulator $\\to$ Semiconductor $\\to$ Metal."
            ]
          },
          {
            lectureNo: 35,
            title: "Semiconductors — Physics, Doping & Optoelectronics",
            bullets: [
              "Concept of a Hole: When an electron is thermally or optically promoted across $E_g$ into the conduction band, it leaves behind an unoccupied quantum state in the valence band that behaves as a positive charge carrier (a hole).",
              "Intrinsic Semiconductors: Chemically pure materials where thermal excitation generates equal numbers of electrons and holes ($n = p = n_i$).",
              "Extrinsic Doping: Doping Group IV (Si, Ge) with Group V pentavalent donors (P, As, Sb) produces an n-type semiconductor ($n \\gg p$). Doping with Group III trivalent acceptors (B, Al, Ga, In) produces a p-type semiconductor ($p \\gg n$).",
              "Thermal Response of Conductivity: In metals, conductivity decreases with rising temperature because increased phonon scattering reduces carrier mobility. In semiconductors, conductivity increases exponentially with temperature because the thermal generation of carriers ($n, p$) far outweighs mobility decreases.",
              "Direct vs Indirect Band Gap: Direct gap materials have the valence band maximum and conduction band minimum at the same wavevector $k$ ($\Delta k = 0$), allowing direct radiative recombination without phonons (ideal for LEDs and lasers). Indirect gap materials have shifted extrema ($\Delta k \\ne 0$), requiring phonon absorption/emission to conserve crystal momentum.",
              "Optical Absorption: A semiconductor absorbs incident light when photon energy meets or exceeds the band gap: $h\\nu \\ge E_g$."
            ]
          }
        ],

        examTraps: [
          "Bragg Plane Ewald Geometry: The Bragg plane corresponding to a reciprocal vector lying on the Ewald sphere PASSES THROUGH THE CENTER OF THE SPHERE.",
          "Diffraction Condition: Diffraction is satisfied when the Bragg plane touches ONE END of the wavevector (or when wavevector touches the Brillouin zone boundary).",
          "1D Bragg Plane Spacing: The distance from origin to zone boundary is $\\pi/a$. The total width from $-\\pi/a$ to $+\\pi/a$ is $2\\pi/a$.",
          "Flat-Band Diagram: Does NOT show allowed energy levels as a function of position in $k$-space.",
          "Temperature vs Conductivity: In metals, $\\sigma$ DECREASES as $T$ increases. In semiconductors, $\\sigma$ INCREASES as $T$ increases.",
          "Doping Types: Group IV + Group V = n-type (donor, extra electrons); Group IV + Group III = p-type (acceptor, extra holes).",
          "Direct Band Gap: VBM and CBM occur at the SAME $k$-location."
        ]
      },

      assignmentQuestions: [
        {
          id: "W11-A1",
          number: 1,
          type: "single",
          question: "A Brillouin zone is",
          options: [
            "A lattice in real space",
            "A Wigner Seitz cell in real space",
            "A Wigner Seitz cell in reciprocal space",
            "A sphere in real space"
          ],
          correctAnswer: 2,
          explanation: "The first Brillouin zone is defined geometrically as the Wigner-Seitz primitive unit cell constructed in reciprocal space around the reciprocal origin.\n\n**Correct Option: C (A Wigner Seitz cell in reciprocal space).**",
          points: 1
        },
        {
          id: "W11-A2",
          number: 2,
          type: "single",
          question: "Bragg planes of those reciprocal lattice vectors which lie on the surface of the Ewald sphere:",
          options: [
            "Lie on the surface of the sphere",
            "Lie outside the sphere",
            "Touch the surface of the sphere at one point",
            "Pass through the center of the sphere"
          ],
          correctAnswer: 3,
          explanation: "In the Ewald sphere construction, any reciprocal vector $\\mathbf{G}$ lying on the sphere forms a chord starting from the reciprocal origin on the sphere surface. The perpendicular bisector plane of this chord (the Bragg plane) geometrically passes through the center of the sphere.\n\n**Correct Option: D (Pass through the center of the sphere).**",
          points: 1
        },
        {
          id: "W11-A3",
          number: 3,
          type: "single",
          question: "Condition for diffraction is satisfied when a Bragg plane",
          options: [
            "Bisects a wave vector",
            "Is parallel to a wave vector",
            "Touches one end of a wave vector",
            "Passes through one third of a wave vector"
          ],
          correctAnswer: 2,
          explanation: "When the incident wavevector $\\mathbf{k}$ extends from the reciprocal origin, the condition for diffraction is satisfied when a Bragg plane touches the tip (one end) of that wavevector.\n\n**Correct Option: C (Touches one end of a wave vector).**",
          points: 1
        },
        {
          id: "W11-A4",
          number: 4,
          type: "single",
          question: "For a 1D lattice of spacing ‘a’, Bragg planes occur with spacing of",
          options: [
            "a",
            "1/a",
            "π/a",
            "2π/a"
          ],
          correctAnswer: 2,
          explanation: "For a 1D crystal with lattice parameter $a$, the first Bragg planes (zone boundaries) occur at $k = \\pm \\pi/a$. Hence, the spacing from the origin to the boundary is $\\pi/a$.\n\n**Correct Option: C (π/a).**",
          points: 1
        },
        {
          id: "W11-A5",
          number: 5,
          type: "single",
          question: "If we draw a consolidated plot that shows the wave vectors allowed for the free electrons, and the Brillouin zone boundaries corresponding to the structure of the material, to the same scale, then in this consolidated plot, diffraction will occur when:",
          options: [
            "Wave vectors are parallel to the Brillouin zone boundaries",
            "Wave vectors touch the Brillouin zone boundaries",
            "Wave vectors avoid the Brillouin zone boundaries",
            "Wave vectors encircle the Brillouin zone boundaries"
          ],
          correctAnswer: 1,
          explanation: "Brillouin zone boundaries are defined by Bragg planes. Therefore, electron waves undergo Bragg reflection (diffraction) precisely when their wavevectors touch the Brillouin zone boundaries.\n\n**Correct Option: B (Wave vectors touch the Brillouin zone boundaries).**",
          points: 1
        },
        {
          id: "W11-A6",
          number: 6,
          type: "single",
          question: "The E vs k relationship of nearly free electrons",
          options: [
            "Is unaffected at the Brillouin zone boundaries",
            "Is parallel to the Brillouin zone boundaries",
            "Is distorted at the Brillouin zone boundaries",
            "Defines the Brillouin zone boundaries"
          ],
          correctAnswer: 2,
          explanation: "At the Brillouin zone boundaries, Bragg reflection mixes forward and backward propagating waves into standing waves, opening an energy gap and distorting the otherwise parabolic $E(k)$ dispersion curve ($dE/dk = 0$).\n\n**Correct Option: C (Is distorted at the Brillouin zone boundaries).**",
          points: 1
        },
        {
          id: "W11-A7",
          number: 7,
          type: "single",
          question: "The Flat band diagram",
          options: [
            "Shows the E vs k relationship of nearly free electrons",
            "Shows the allowed energy levels as a function of position in k space",
            "Does not show the allowed energy levels as a function of position in k space",
            "Shows the location of the Brillouin zones"
          ],
          correctAnswer: 2,
          explanation: "A flat-band diagram displays energy band ranges and gaps vertically, but it completely suppresses the wavevector dependence, and thus does not show allowed energy levels as a function of position in $k$-space.\n\n**Correct Option: C (Does not show the allowed energy levels as a function of position in k space).**",
          points: 1
        },
        {
          id: "W11-A8",
          number: 8,
          type: "single",
          question: "The band structure of a metal is a result of",
          options: [
            "Its atomic weight",
            "The interaction of the E vs k diagram with volume of the sample",
            "The interaction of the E vs k diagram with the Brillouin zone boundaries",
            "The interaction of the reciprocal lattice with the Brillouin zones"
          ],
          correctAnswer: 2,
          explanation: "The electronic band structure arises from the perturbation and splitting of the parabolic $E(k)$ relationship upon interacting with the crystal periodicity at the Brillouin zone boundaries.\n\n**Correct Option: C (The interaction of the E vs k diagram with the Brillouin zone boundaries).**",
          points: 1
        },
        {
          id: "W11-A9",
          number: 9,
          type: "single",
          question: "For a given shape and size of a Brillouin zone, the band structure is decided by",
          options: [
            "The location of the Fermi surface",
            "The location of the Brillouin zone boundary",
            "The extent of the Brillouin zone",
            "The symmetry of the Brillouin Zone"
          ],
          correctAnswer: 0,
          explanation: "For a fixed Brillouin zone geometry, the placement of the Fermi surface relative to zone boundaries determines whether bands are partially filled (metal) or completely filled (insulator/semiconductor).\n\n**Correct Option: A (The location of the Fermi surface).**",
          points: 1
        },
        {
          id: "W11-A10",
          number: 10,
          type: "single",
          question: "Based on the analytical approach discussed in class, the values of E for which the equation becomes meaningless correspond to :",
          options: [
            "Allowed Bands",
            "Band gaps",
            "Continuous energy values that can be attained by electrons",
            "Discrete energy values that can be attained by electrons"
          ],
          correctAnswer: 1,
          explanation: "In Lecture 33's Kronig-Penney dispersion equation, values of $E$ where the dispersion function falls outside $[-1, +1]$ yield no real propagating Bloch wave solutions—these correspond to forbidden band gaps.\n\n**Correct Option: B (Band gaps).**",
          points: 1
        }
      ],

      masteryExamQuestions: [
        {
          id: "W11-M1",
          number: 1,
          type: "single",
          section: "Section A — Brillouin Zones & Band Distortions",
          question: "For a one-dimensional lattice with spacing a, the first Brillouin zone extends from:",
          options: [
            "0 to 2π/a",
            "-π/a to +π/a",
            "-2π/a to +2π/a",
            "-a to +a"
          ],
          correctAnswer: 1,
          explanation: "In 1D reciprocal space, the nearest Bragg planes occur at $k = -\\pi/a$ and $k = +\\pi/a$. The first Brillouin zone extends between these boundaries: $[-\\pi/a, +\\pi/a]$.\n\n**Correct Option: B (-π/a to +π/a).**",
          points: 1
        },
        {
          id: "W11-M2",
          number: 2,
          type: "single",
          section: "Section A — Brillouin Zones & Band Distortions",
          question: "What happens to the free-electron E(k) curve at a Brillouin-zone boundary?",
          options: [
            "It is always unchanged",
            "It is distorted and energy gaps can form",
            "The electron energy becomes zero",
            "The wave vector disappears"
          ],
          correctAnswer: 1,
          explanation: "Constructive Bragg reflection at the zone boundary splits the continuous energy dispersion, creating an energy band gap and forcing $dE/dk = 0$ at the boundary.\n\n**Correct Option: B (It is distorted and energy gaps can form).**",
          points: 1
        },
        {
          id: "W11-M3",
          number: 3,
          type: "single",
          section: "Section A — Brillouin Zones & Band Distortions",
          question: "Which diagram can distinguish direct-band-gap from indirect-band-gap semiconductors?",
          options: [
            "Flat-band diagram alone",
            "E-versus-k diagram",
            "Resistance-versus-length graph",
            "Density-versus-temperature graph"
          ],
          correctAnswer: 1,
          explanation: "An $E(k)$ dispersion diagram plots energy against crystal wavevector $k$, revealing whether the valence-band maximum and conduction-band minimum occur at the same $k$-location (direct) or shifted $k$-locations (indirect).\n\n**Correct Option: B (E-versus-k diagram).**",
          points: 1
        },
        {
          id: "W11-M4",
          number: 4,
          type: "single",
          section: "Section B — Approximations & Pressure Effects",
          question: "In the tight-binding approximation, why do atomic energy levels split when atoms come closer?",
          options: [
            "To obey the Pauli exclusion principle",
            "Because electrons lose their charge",
            "Because temperature must become zero",
            "Because the atoms stop interacting"
          ],
          correctAnswer: 0,
          explanation: "When isolated atomic wavefunctions overlap in a solid, the Pauli exclusion principle prohibits multiple electrons from occupying the identical quantum state, forcing discrete levels to split into continuous bands.\n\n**Correct Option: A (To obey the Pauli exclusion principle).**",
          points: 1
        },
        {
          id: "W11-M5",
          number: 5,
          type: "single",
          section: "Section B — Approximations & Pressure Effects",
          question: "Which approximation is generally more suited to modeling metallic systems?",
          options: [
            "Tight-binding approximation only",
            "Free-electron approximation",
            "Black-body approximation",
            "Maxwell–Boltzmann statistics alone"
          ],
          correctAnswer: 1,
          explanation: "The free-electron (nearly free electron) model assumes a sea of delocalized electrons moving through a weak periodic potential, which is the most natural framework for simple metals.\n\n**Correct Option: B (Free-electron approximation).**",
          points: 1
        },
        {
          id: "W11-M6",
          number: 6,
          type: "single",
          section: "Section B — Approximations & Pressure Effects",
          question: "According to Lecture 34, increasing pressure can cause a material's bands to:",
          options: [
            "Always move infinitely far apart",
            "Narrow the gap and potentially overlap",
            "Disappear completely",
            "Become independent of interatomic spacing"
          ],
          correctAnswer: 1,
          explanation: "Hydrostatic pressure compresses the lattice, increasing orbital overlap and broadening the energy bands, which narrows the band gap and can cause bands to overlap (driving Insulator $\\to$ Semiconductor $\\to$ Metal).\n\n**Correct Option: B (Narrow the gap and potentially overlap).**",
          points: 1
        },
        {
          id: "W11-M7",
          number: 7,
          type: "single",
          section: "Section C — Semiconductors: Doping, Transport & Optoelectronics",
          question: "When an electron moves from the valence band to the conduction band, it leaves behind:",
          options: [
            "A proton",
            "A hole",
            "A neutron",
            "A phonon in every case"
          ],
          correctAnswer: 1,
          explanation: "An empty electron state in an otherwise filled valence band acts as a positively charged mobile quasiparticle called a hole.\n\n**Correct Option: B (A hole).**",
          points: 1
        },
        {
          id: "W11-M8",
          number: 8,
          type: "single",
          section: "Section C — Semiconductors: Doping, Transport & Optoelectronics",
          question: "An n-type semiconductor is formed by doping a Group IVA semiconductor with a:",
          options: [
            "Group IIIA element",
            "Group VA element",
            "Group VIA element only",
            "Noble gas"
          ],
          correctAnswer: 1,
          explanation: "Group VA elements (P, As, Sb) have 5 valence electrons. Four form covalent bonds with the Group IVA lattice while the fifth is easily donated into the conduction band, producing an n-type semiconductor.\n\n**Correct Option: B (Group VA element).**",
          points: 1
        },
        {
          id: "W11-M9",
          number: 9,
          type: "single",
          section: "Section C — Semiconductors: Doping, Transport & Optoelectronics",
          question: "A p-type semiconductor is formed by doping a Group IVA semiconductor with a:",
          options: [
            "Group IIIA element",
            "Group VA element",
            "Group VIIIA element",
            "Pure Group IVA element only"
          ],
          correctAnswer: 0,
          explanation: "Group IIIA elements (B, Al, Ga, In) have 3 valence electrons, leaving a vacant bonding site (acceptor level) that accepts an electron from the valence band, producing excess holes (p-type).\n\n**Correct Option: A (Group IIIA element).**",
          points: 1
        },
        {
          id: "W11-M10",
          number: 10,
          type: "single",
          section: "Section C — Semiconductors: Doping, Transport & Optoelectronics",
          question: "In an intrinsic semiconductor, the electron and hole concentrations are:",
          options: [
            "Always unequal",
            "Equal",
            "Both zero at every temperature",
            "Independent of each other"
          ],
          correctAnswer: 1,
          explanation: "In an undoped (intrinsic) semiconductor, thermal excitation promotes electrons from the valence band to the conduction band, creating exactly one hole for every electron ($n = p = n_i$).\n\n**Correct Option: B (Equal).**",
          points: 1
        },
        {
          id: "W11-M11",
          number: 11,
          type: "single",
          section: "Section C — Semiconductors: Doping, Transport & Optoelectronics",
          question: "As temperature increases, the conductivity of a typical metal generally:",
          options: [
            "Increases because carrier concentration rises greatly",
            "Decreases because electron mobility falls",
            "Remains exactly constant",
            "Becomes zero"
          ],
          correctAnswer: 1,
          explanation: "In metals, the free electron density $n$ is constant. Rising temperature causes stronger lattice vibrations (phonon scattering), which shortens relaxation time $\\tau$ and reduces mobility $\\mu$, causing conductivity $\\sigma = n e \\mu$ to decrease.\n\n**Correct Option: B (Decreases because electron mobility falls).**",
          points: 1
        },
        {
          id: "W11-M12",
          number: 12,
          type: "single",
          section: "Section C — Semiconductors: Doping, Transport & Optoelectronics",
          question: "As temperature increases, semiconductor conductivity generally:",
          options: [
            "Increases because the carrier concentration rises",
            "Decreases to zero",
            "Never changes",
            "Becomes equal to metallic conductivity"
          ],
          correctAnswer: 0,
          explanation: "In semiconductors, heating exponentially increases the thermally excited electron and hole concentrations ($n_i \\propto e^{-E_g / 2k_B T}$), which overwhelmingly compensates for the small drop in mobility, resulting in an overall increase in conductivity.\n\n**Correct Option: A (Increases because the carrier concentration rises).**",
          points: 1
        },
        {
          id: "W11-M13",
          number: 13,
          type: "single",
          section: "Section C — Semiconductors: Doping, Transport & Optoelectronics",
          question: "Which statement about direct-band-gap semiconductors is correct?",
          options: [
            "The valence-band maximum and conduction-band minimum occur at the same k-location",
            "They always have a larger band gap than indirect semiconductors",
            "They cannot absorb light",
            "Their band structure cannot be represented using E(k)"
          ],
          correctAnswer: 0,
          explanation: "In direct-gap semiconductors, the valence band maximum and conduction band minimum coincide at the exact same wavevector in reciprocal space (typically $\\Gamma$ where $k = 0$).\n\n**Correct Option: A (The valence-band maximum and conduction-band minimum occur at the same k-location).**",
          points: 1
        },
        {
          id: "W11-M14",
          number: 14,
          type: "single",
          section: "Section C — Semiconductors: Doping, Transport & Optoelectronics",
          question: "Why are direct-band-gap materials preferred for many optoelectronic applications?",
          options: [
            "Optical transitions generally do not require an additional phonon to conserve crystal momentum",
            "They have no energy bands",
            "They contain no electrons",
            "Their conductivity is always zero"
          ],
          correctAnswer: 0,
          explanation: "Because photons carry negligible momentum ($k_{\\text{photon}} \\approx 0$), interband transitions in direct gap materials are vertical in $E(k)$ space and occur without requiring a phonon to conserve crystal momentum, enabling rapid, efficient radiative recombination.\n\n**Correct Option: A (Optical transitions generally do not require an additional phonon to conserve crystal momentum).**",
          points: 1
        },
        {
          id: "W11-M15",
          number: 15,
          type: "single",
          section: "Section C — Semiconductors: Doping, Transport & Optoelectronics",
          question: "A semiconductor can absorb a photon to excite an electron across its band gap when the photon energy is at least:",
          options: [
            "E_g",
            "E_g / 10",
            "Zero, regardless of wavelength",
            "The atomic mass of the material"
          ],
          correctAnswer: 0,
          explanation: "Conservation of energy requires that an incident photon possess at least the threshold energy $h\\nu_{\\min} = E_g$ to promote an electron from the top of the valence band to the bottom of the conduction band.\n\n**Correct Option: A (E_g).**",
          points: 1
        }
      ]
    },
    {
      id: 12,
      number: 12,
      title: "Magnetism, Superconductivity & Nanoscale Physics",
      lectures: "Lectures 36 - 40",
      status: "active",
      summary: "Fermi level in insulators, orbital splitting vs inner core states, pressure-induced metallization, intrinsic vs extrinsic semiconductor conductivity, direct-bandgap GaAs, optical transparency of defect-free ceramic crystals, ferromagnetism & spin-field Zeeman splitting, Meissner effect & BCS Cooper pairs, Bose-Einstein statistics & condensation, and quantum confinement (wells, wires, dots) & exciton band gap tuning.",
      studyMaterials: {
        quickOverview: "Week 12 culminates the Physics of Materials course by synthesizing advanced electronic, magnetic, superconducting, quantum statistical, and nanoscale phenomena.\\n\\nIn insulators and intrinsic semiconductors at 0 K, the Fermi level lies midway within the forbidden band gap. When atoms approach, outer overlapping valence orbitals split into continuous bands under the Pauli exclusion principle, while inner non-overlapping core electron levels remain pinned at their isolated atomic energies. Compressive hydrostatic pressure narrows the band gap and can induce metallic behavior.\\n\\nIn magnetism, ferromagnetic materials exhibit high positive susceptibility $\\chi \\gg 0$; when placed in an external magnetic field $\\mathbf{H}$, electrons with spins aligned parallel to the field attain lower Zeeman energy ($E = -\\boldsymbol{\\mu} \\cdot \\mathbf{B}$), driving domain magnetization. Superconductors exhibit zero electrical resistance and perfect diamagnetism via the Meissner effect (expelling all internal magnetic flux) below critical thresholds $T_c, H_c, J_c$. According to the BCS theory, attractive electron-phonon interactions bind electrons into Cooper pairs of opposite spin and momentum, forming composite integer-spin bosons ($S=0$) that undergo Bose–Einstein condensation into a single macroscopic ground state.\\n\\nUnlike fermions, bosons (such as photons, phonons, and Cooper pairs) do not obey the Pauli exclusion principle; any number of bosons can occupy the identical quantum state. Finally, in nanoscale materials, shrinking crystal dimensions below the exciton Bohr radius imposes quantum confinement (quantum wells: 1D confinement; quantum wires: 2D confinement; quantum dots: 3D confinement), widening the effective band gap ($E_g(R) = E_g^{\\text{bulk}} + \\frac{\\hbar^2 \\pi^2}{2\\mu R^2}$) and enabling size-tunable optical absorption and emission.",
        
        formulaSheet: [
          { name: "Insulator Fermi Energy", formula: "E_f = \\frac{E_v + E_c}{2} = E_v + \\frac{1}{2}E_g", units: "eV", desc: "For an intrinsic insulator/semiconductor, Fermi level lies midway within the forbidden gap." },
          { name: "Orbital Overlap Splitting", formula: "\\Delta E_{\\text{outer}} \\ne 0 \\text{ (splits)}, \\quad \\Delta E_{\\text{inner}} = 0 \\text{ (unchanged)}", units: "eV", desc: "Outer overlapping orbitals split into bands; non-overlapping core levels remain unchanged." },
          { name: "Pressure Metallization", formula: "\\uparrow \\text{Pressure} \\implies \\downarrow E_g \\implies \\text{Insulator} \\to \\text{Semiconductor} \\to \\text{Metal}", units: "Qualitative trend", desc: "High pressure compresses the crystal lattice, broadening bands until they overlap." },
          { name: "Intrinsic vs Extrinsic Conductivity", formula: "\\sigma_{\\text{int}} \\propto e^{-E_g / 2k_B T} \\ (T\\text{-dependent}); \\quad \\sigma_{\\text{ext}} \\approx q N_d \\mu_n \\ (\\text{dopant-dependent})", units: "S/m", desc: "Intrinsic conductivity is governed by temperature; extrinsic conductivity by dopant density." },
          { name: "Zeeman Magnetic Spin Energy", formula: "E = -\\boldsymbol{\\mu}_s \\cdot \\mathbf{B} = \\pm \\mu_B B", units: "Joules (or eV)", desc: "Spins aligned parallel to applied magnetic field attain lower energy." },
          { name: "Meissner Effect & Magnetic Susceptibility", formula: "\\mathbf{B}_{\\text{inside}} = 0 \\iff \\chi = -1 \\quad (\\text{Perfect diamagnetism})", units: "Dimensionless", desc: "Active expulsion of magnetic flux lines from the interior of a superconductor." },
          { name: "BCS Cooper Pair Boson Nature", formula: "S = s_1 + s_2 = +1/2 - 1/2 = 0 \\implies \\text{Integer spin boson}", units: "Dimensionless spin", desc: "Coupled electrons behave as composite bosons, enabling macroscopic condensation." },
          { name: "Bose-Einstein Distribution", formula: "f_{BE}(E) = \\frac{1}{e^{(E - \\mu)/k_B T} - 1}", units: "Dimensionless", desc: "Applies to integer-spin particles without Pauli exclusion restrictions." },
          { name: "Quantum Confinement Dimensions", formula: "\\text{Well: 1D confined; Wire: 2D confined; Dot: 3D confined}", units: "Confinement spatial degrees", desc: "Exciton spatial restriction in low-dimensional nanostructures." },
          { name: "Nanocrystal Band Gap Widening", formula: "E_g(R) = E_g^{\\text{bulk}} + \\frac{\\hbar^2 \\pi^2}{2\\mu^* R^2}", units: "eV", desc: "Decreasing particle radius R increases the effective band gap (quantum size effect)." }
        ],

        lecturesBreakdown: [
          {
            lectureNo: 34,
            title: "Lecture 34 Recap: Level Splitting, Core States & Pressure",
            bullets: [
              "Outer Orbital Splitting: As atoms approach to form a solid, overlapping valence orbitals split into continuous bands under the Pauli exclusion principle.",
              "Inner Bound Levels: Non-overlapping deep core electron states remain tightly bound to their ionic cores, preserving their atomic energy eigenvalues without splitting.",
              "Pressure-Induced Transition: Hydrostatic pressure shrinks the lattice constant $a$, forcing atoms closer together. The resultant orbital overlap broadens energy bands and eliminates the band gap, transforming an insulator into a semiconductor and ultimately into a metal."
            ]
          },
          {
            lectureNo: 35,
            title: "Lecture 35 Recap: Semiconductor Transport & Ceramics",
            bullets: [
              "Fermi Energy of Insulators: For an insulator or intrinsic semiconductor at absolute zero, the valence band is completely full and the conduction band is completely empty. The chemical potential (Fermi energy) lies midway between the top of the valence band and the bottom of the conduction band.",
              "Conductivity Driving Factors: In intrinsic semiconductors, conductivity depends exponentially on temperature ($n_i \\propto e^{-E_g / 2k_B T}$). In extrinsic semiconductors, conductivity in the working exhaustion range depends primarily on the dopant concentration ($N_d$ or $N_a$).",
              "Direct Band Gap GaAs: Gallium Arsenide is a direct-bandgap semiconductor where the conduction band minimum and valence band maximum align at the same wavevector $k$, allowing direct, highly efficient photon emission without phonon participation.",
              "Optical Transparency in Ceramics: A defect-free, single crystal ceramic has no grain boundaries, pores, or secondary phases to scatter light; if its band gap exceeds photon energy ($E_g > 3.1\\text{ eV}$), it is completely transparent to visible light."
            ]
          },
          {
            lectureNo: 38,
            title: "Lecture 38: Magnetism & Superconductivity",
            bullets: [
              "Ferromagnetism & Susceptibility: Ferromagnetic materials exhibit very high, positive magnetic susceptibility ($\\chi \\gg 0$) and spontaneous alignment of magnetic dipoles within magnetic domains.",
              "Field-Induced Spin Alignment: In an applied magnetic field, electron states whose magnetic moments align with the field drop to a lower Zeeman energy state ($E = -\\boldsymbol{\\mu} \\cdot \\mathbf{B}$), driving domain wall movement and domain rotation.",
              "Superconducting Critical Limits: Superconductivity requires three simultaneous conditions: temperature below critical temperature $T_c$, magnetic field below critical field $H_c(T)$, and current density below critical current $J_c$. Exceeding any one of these destroys the superconducting state.",
              "Meissner Effect: True superconductors actively expel interior magnetic flux lines ($\\mathbf{B} = 0$), establishing perfect diamagnetism with $\\chi = -1$.",
              "BCS Theory & Cooper Pairs: Electron-phonon-electron interactions bind pairs of electrons with opposite wavevectors and opposite spins ($[\\mathbf{k}\\uparrow, -\\mathbf{k}\\downarrow]$). The resulting Cooper pairs possess zero net momentum and integer spin ($S = 0$), behaving as composite bosons.",
              "Type-II Superconductors: Feature lower ($H_{c1}$) and upper ($H_{c2}$) critical magnetic fields. Between $H_{c1}$ and $H_{c2}$, a mixed vortex state exists where quantized magnetic flux lines penetrate normal cores while surrounding bulk remains superconducting."
            ]
          },
          {
            lectureNo: 39,
            title: "Lecture 39: Bose–Einstein Statistics & Condensation",
            bullets: [
              "Bosons vs Fermions: Bosons have integer spin ($S = 0, 1, 2, \\ldots$) and do not obey the Pauli exclusion principle; fermions have half-integer spin ($S = 1/2, 3/2, \\ldots$) and obey exclusion.",
              "Multi-Particle Occupancy: Unlike fermions (where occupancy $\\le 1$), an arbitrary number of bosons can simultaneously occupy the exact same quantum state.",
              "Examples of Bosons: Photons (spin 1), phonons, Cooper pairs (spin 0), and $\\text{He}^4$ atoms.",
              "Bose–Einstein Condensation: Below a critical temperature, a macroscopic fraction of non-interacting bosons drops into the ground state ($E = 0$), forming a coherent macroscopic quantum wave."
            ]
          },
          {
            lectureNo: 40,
            title: "Lecture 40: Nanoscale Materials & Quantum Confinement",
            bullets: [
              "Exciton Concept: An exciton is an electrically neutral quasiparticle composed of an electron and a hole bound together by their mutual electrostatic Coulomb attraction.",
              "Confinement Geometries: Quantum Well (1D confinement, free in 2D), Quantum Wire (2D confinement, free in 1D), and Quantum Dot (3D confinement, 0D free).",
              "Size-Tunable Optical Emission: Smaller quantum dots emit higher-energy (shorter wavelength / blue-shifted) photons due to the larger effective band gap."
            ]
          }
        ],

        examTraps: [
          "Insulator Fermi Energy: Always MIDWAY between valence and conduction bands (not at valence top or conduction bottom).",
          "Inner Core Electron Levels: Remain completely unchanged at their original atomic values during lattice formation.",
          "High Pressure Effect: Decreases band gap, moving semiconductor behavior TOWARDS A CONDUCTOR.",
          "Conductivity Primacy: Intrinsic $\\to$ TEMPERATURE; Extrinsic $\\to$ DOPANT LEVEL.",
          "Ferromagnetism Susceptibility: Very HIGH positive susceptibility (paramagnets have low positive, diamagnets have small negative).",
          "Field-Aligned Spins: Attain LOWER energy (Zeeman energy is minimized when dipole aligns with field).",
          "Superconductivity Destruction: Ceases if ANY of the three limits ($T > T_c$, $H > H_c$, or $J > J_c$) is breached.",
          "Cooper Pairs: Bosons with net integer spin $S = 0$.",
          "Nanoscale Band Gap: Smaller size $\\implies$ STRONGER confinement $\\implies$ LARGER band gap.",
          "Confinement Degrees: Well = 1D confined; Wire = 2D confined; Dot = 3D confined."
        ]
      },

      assignmentQuestions: [
        {
          id: "W12-A1",
          number: 1,
          type: "single",
          question: "Fermi energy of an insulator is",
          options: [
            "At the top of the conduction band",
            "At the bottom valence band",
            "At the top of the valence band",
            "Mid way between the valence band and the conduction band"
          ],
          correctAnswer: 3,
          explanation: "In an ideal insulator (or intrinsic semiconductor at 0 K), the valence band is completely full and the conduction band is completely empty. The chemical potential (Fermi energy) lies midway between the valence band maximum and conduction band minimum.\n\n**Correct Option: D (Mid way between the valence band and the conduction band).**",
          points: 1
        },
        {
          id: "W12-A2",
          number: 2,
          type: "single",
          question: "As the interatomic separation decreases",
          options: [
            "Overlapping energy levels remain at their original values",
            "Overlapping energy levels move to a new common higher value",
            "Overlapping energy levels split to new values",
            "Overlapping energy levels converge to a common lower value"
          ],
          correctAnswer: 2,
          explanation: "As atoms approach each other, their outer electron wavefunctions overlap. By the Pauli exclusion principle, the degenerate discrete atomic energy levels must split into closely spaced new energy eigenvalues, forming continuous energy bands.\n\n**Correct Option: C (Overlapping energy levels split to new values).**",
          points: 1
        },
        {
          id: "W12-A3",
          number: 3,
          type: "single",
          question: "As the interatomic separation decreases, the inner non overlapping bound electron levels",
          options: [
            "Remain at their original values",
            "Move to a new common higher value",
            "Split to new energy values",
            "Move to a common lower value"
          ],
          correctAnswer: 0,
          explanation: "Inner core electron orbitals are tightly bound to the nucleus with negligible interatomic overlap. Consequently, they remain virtually unaffected and stay at their original discrete atomic energy values.\n\n**Correct Option: A (Remain at their original values).**",
          points: 1
        },
        {
          id: "W12-A4",
          number: 4,
          type: "single",
          question: "As the pressure on a semiconducting solid is increased to very high values",
          options: [
            "Its electronic property is unaffected",
            "Its behaviour moves towards that of an insulator",
            "Its behaviour moves towards that of a conductor",
            "It loses its electronic conductivity"
          ],
          correctAnswer: 2,
          explanation: "High compressive hydrostatic pressure pushes atoms closer together, enhancing atomic orbital overlap. This widens the allowed energy bands, narrows the band gap, and can eventually cause the bands to overlap, driving the semiconductor towards metallic (conducting) behavior.\n\n**Correct Option: C (Its behaviour moves towards that of a conductor).**",
          points: 1
        },
        {
          id: "W12-A5",
          number: 5,
          type: "single",
          question: "The conductivity of intrinsic semiconductors depends primarily on",
          options: [
            "The level of dopants present",
            "The temperature",
            "Distance from switch",
            "The length of the wire"
          ],
          correctAnswer: 1,
          explanation: "In an intrinsic (pure) semiconductor, no dopants exist; free electrons and holes are generated solely through thermal excitation across the band gap ($n_i \\propto e^{-E_g / 2k_B T}$). Thus, conductivity depends primarily on temperature.\n\n**Correct Option: B (The temperature).**",
          points: 1
        },
        {
          id: "W12-A6",
          number: 6,
          type: "single",
          question: "The conductivity of extrinsic semiconductors depends primarily on",
          options: [
            "The level of dopants present",
            "The temperature",
            "Distance from switch",
            "The length of the wire"
          ],
          correctAnswer: 0,
          explanation: "In extrinsic semiconductors within normal operating temperatures (extrinsic exhaustion regime), the free carrier concentration is governed almost entirely by the concentration of intentionally added dopants ($n \\approx N_d$ or $p \\approx N_a$).\n\n**Correct Option: A (The level of dopants present).**",
          points: 1
        },
        {
          id: "W12-A7",
          number: 7,
          type: "single",
          question: "GaAs is an example of",
          options: [
            "A metal",
            "An insulator",
            "A direct bandgap semiconductor",
            "An indirect bandgap semiconductor"
          ],
          correctAnswer: 2,
          explanation: "Gallium Arsenide (GaAs) is a quintessential direct-bandgap semiconductor ($E_g \\approx 1.42\\text{ eV}$), widely used in optoelectronic devices like laser diodes and LEDs because radiative transitions do not require phonon assistance.\n\n**Correct Option: C (A direct bandgap semiconductor).**",
          points: 1
        },
        {
          id: "W12-A8",
          number: 8,
          type: "single",
          question: "A defect free single crystal of a ceramic material will most likely be",
          options: [
            "Opaque",
            "Transparent",
            "Translucent",
            "Black"
          ],
          correctAnswer: 1,
          explanation: "Ceramic materials with band gaps larger than visible photon energies ($E_g > 3.1\\text{ eV}$) do not absorb visible light. In the absence of defects, pores, or grain boundaries to scatter light, a defect-free single crystal is optically transparent (like sapphire or diamond).\n\n**Correct Option: B (Transparent).**",
          points: 1
        },
        {
          id: "W12-A9",
          number: 9,
          type: "single",
          question: "Ferromagnetic materials have",
          options: [
            "Zero susceptibility",
            "Low susceptibility",
            "High susceptibility",
            "Negative susceptibility"
          ],
          correctAnswer: 2,
          explanation: "Ferromagnetic materials (such as Fe, Co, Ni) exhibit parallel alignment of atomic magnetic dipoles within domains, leading to very large, positive magnetic susceptibilities ($\\chi \\gg 1$).\n\n**Correct Option: C (High susceptibility).**",
          points: 1
        },
        {
          id: "W12-A10",
          number: 10,
          type: "single",
          question: "When a ferromagnetic material experiences an externally applied magnetic field, the states with spin aligned in the direction of the applied magnetic field",
          options: [
            "Attain lower energy",
            "Attain higher energy",
            "Are unaffected in energy",
            "Drop to zero energy"
          ],
          correctAnswer: 0,
          explanation: "The Zeeman interaction energy of a magnetic dipole $\\boldsymbol{\\mu}$ in magnetic field $\\mathbf{B}$ is $E = -\\boldsymbol{\\mu} \\cdot \\mathbf{B}$. When the magnetic moment/spin aligns parallel with the applied field, the potential energy attains a lower value, favoring the growth of domains aligned with the field.\n\n**Correct Option: A (Attain lower energy).**",
          points: 1
        }
      ],

      masteryExamQuestions: [
        {
          id: "W12-M1",
          number: 1,
          type: "single",
          section: "Section A — Magnetism & Superconductivity",
          question: "The Meissner effect refers to:",
          options: [
            "Complete loss of electrical charge",
            "Expulsion of magnetic fields from a superconducting material",
            "Increase in resistance below critical temperature",
            "Formation of energy bands"
          ],
          correctAnswer: 1,
          explanation: "The Meissner effect is the active expulsion of magnetic field lines from the interior of a superconductor as it is cooled below its critical temperature $T_c$, demonstrating that superconductors are perfect diamagnets ($\\mathbf{B} = 0$, $\\chi = -1$).\n\n**Correct Option: B (Expulsion of magnetic fields from a superconducting material).**",
          points: 1
        },
        {
          id: "W12-M2",
          number: 2,
          type: "single",
          section: "Section A — Magnetism & Superconductivity",
          question: "Superconductivity ceases when:",
          options: [
            "Temperature exceeds the critical temperature",
            "Current density exceeds the critical value",
            "Magnetic field exceeds the critical value",
            "All of the above"
          ],
          correctAnswer: 3,
          explanation: "The superconducting state is bounded by a 3D critical surface defined by critical temperature $T_c$, critical magnetic field $H_c$, and critical current density $J_c$. Exceeding any one of these three limits destroys superconductivity.\n\n**Correct Option: D (All of the above).**",
          points: 1
        },
        {
          id: "W12-M3",
          number: 3,
          type: "single",
          section: "Section A — Magnetism & Superconductivity",
          question: "According to BCS theory, superconductivity involves:",
          options: [
            "Cooper pairs",
            "Free protons",
            "Electron–hole excitons only",
            "Neutrons moving through a lattice"
          ],
          correctAnswer: 0,
          explanation: "The Bardeen–Cooper–Schrieffer (BCS) microscopic theory explains conventional superconductivity through the pairing of electrons into Cooper pairs mediated by lattice vibrations (phonons).\n\n**Correct Option: A (Cooper pairs).**",
          points: 1
        },
        {
          id: "W12-M4",
          number: 4,
          type: "single",
          section: "Section A — Magnetism & Superconductivity",
          question: "Cooper pairs behave like bosons because they have:",
          options: [
            "Half-integer spin",
            "Integer spin, effectively zero in the described model",
            "No mass",
            "Positive electric charge"
          ],
          correctAnswer: 1,
          explanation: "A Cooper pair consists of two bound electrons with opposite spins ($s_1 = +1/2, s_2 = -1/2$), resulting in a total integer spin of $S = 0$. Systems with integer spin behave as bosons and can undergo macroscopic quantum condensation.\n\n**Correct Option: B (Integer spin, effectively zero in the described model).**",
          points: 1
        },
        {
          id: "W12-M5",
          number: 5,
          type: "single",
          section: "Section A — Magnetism & Superconductivity",
          question: "Which statement about Type-II superconductors is correct?",
          options: [
            "They cannot tolerate magnetic fields",
            "They can have a mixed state between two critical magnetic fields",
            "They superconduct at every temperature",
            "They have infinite electrical resistance"
          ],
          correctAnswer: 1,
          explanation: "Type-II superconductors have two critical magnetic fields ($H_{c1}$ and $H_{c2}$). Between these fields, they enter a mixed (vortex) state where magnetic flux penetrates in quantized filaments while the surrounding matrix remains superconducting.\n\n**Correct Option: B (They can have a mixed state between two critical magnetic fields).**",
          points: 1
        },
        {
          id: "W12-M6",
          number: 6,
          type: "single",
          section: "Section B — Bose–Einstein Statistics",
          question: "Bosons are particles that:",
          options: [
            "Must obey the Pauli exclusion principle",
            "Have half-integer spin only",
            "Can share the same quantum state",
            "Cannot occupy energy states"
          ],
          correctAnswer: 2,
          explanation: "Bosons have integer spin and symmetric wavefunctions; they do not obey the Pauli exclusion principle, allowing multiple bosons to occupy the exact same quantum state simultaneously.\n\n**Correct Option: C (Can share the same quantum state).**",
          points: 1
        },
        {
          id: "W12-M7",
          number: 7,
          type: "single",
          section: "Section B — Bose–Einstein Statistics",
          question: "Which distribution describes bosons in thermal equilibrium?",
          options: [
            "Maxwell–Boltzmann",
            "Fermi–Dirac",
            "Bose–Einstein",
            "Drude"
          ],
          correctAnswer: 2,
          explanation: "Identical, indistinguishable integer-spin particles (bosons) in thermal equilibrium obey the Bose–Einstein statistical distribution function: $f_{BE}(E) = 1 / (e^{(E-\\mu)/k_B T} - 1)$.\n\n**Correct Option: C (Bose–Einstein).**",
          points: 1
        },
        {
          id: "W12-M8",
          number: 8,
          type: "single",
          section: "Section B — Bose–Einstein Statistics",
          question: "The Bose–Einstein distribution predicts that at sufficiently low temperatures, bosons can accumulate in:",
          options: [
            "Many forbidden states",
            "A single quantum state",
            "The highest energy state only",
            "The conduction band only"
          ],
          correctAnswer: 1,
          explanation: "Below a critical temperature $T_{\\text{BEC}}$, a macroscopic fraction of bosons condenses into the single lowest energy quantum ground state ($E = 0$), forming a Bose–Einstein condensate.\n\n**Correct Option: B (A single quantum state).**",
          points: 1
        },
        {
          id: "W12-M9",
          number: 9,
          type: "single",
          section: "Section B — Bose–Einstein Statistics",
          question: "Which set contains examples of bosons discussed in the course?",
          options: [
            "Electrons and protons",
            "Photons and phonons",
            "Electrons and neutrons",
            "Electrons and holes only"
          ],
          correctAnswer: 1,
          explanation: "Photons (electromagnetic quanta with spin 1) and phonons (quantized lattice vibrations) are integer-spin quanta that obey Bose–Einstein statistics.\n\n**Correct Option: B (Photons and phonons).**",
          points: 1
        },
        {
          id: "W12-M10",
          number: 10,
          type: "single",
          section: "Section B — Bose–Einstein Statistics",
          question: "In the Bose–Einstein distribution, unlike the Fermi–Dirac distribution:",
          options: [
            "No particles can occupy the same state",
            "Only one particle can occupy each state",
            "Multiple particles can occupy the same state",
            "Temperature has no effect"
          ],
          correctAnswer: 2,
          explanation: "While Fermi–Dirac statistics strictly restricts each quantum state to a maximum of one fermion ($f \\le 1$), the Bose–Einstein occupancy can be arbitrarily large ($f \\ge 0$) without limit.\n\n**Correct Option: C (Multiple particles can occupy the same state).**",
          points: 1
        },
        {
          id: "W12-M11",
          number: 11,
          type: "single",
          section: "Section C — Nanoscale Materials & Quantum Confinement",
          question: "An exciton is:",
          options: [
            "A free neutron",
            "An electron–hole pair bound by attraction",
            "A pair of protons",
            "A magnetic domain"
          ],
          correctAnswer: 1,
          explanation: "An exciton is an electrically neutral quasiparticle consisting of an electron in the conduction band and a hole in the valence band bound together by electrostatic Coulomb attraction.\n\n**Correct Option: B (An electron–hole pair bound by attraction).**",
          points: 1
        },
        {
          id: "W12-M12",
          number: 12,
          type: "single",
          section: "Section C — Nanoscale Materials & Quantum Confinement",
          question: "According to Lecture 40, as the size of a semiconductor nanoparticle decreases and confinement becomes stronger, its band gap generally:",
          options: [
            "Increases",
            "Decreases",
            "Remains exactly constant",
            "Becomes zero"
          ],
          correctAnswer: 0,
          explanation: "Spatial confinement of carrier wavefunctions raises kinetic energy inversely with the square of nanocrystal size ($E \\propto 1/R^2$), effectively widening the band gap (quantum confinement blue shift).\n\n**Correct Option: A (Increases).**",
          points: 1
        },
        {
          id: "W12-M13",
          number: 13,
          type: "single",
          section: "Section C — Nanoscale Materials & Quantum Confinement",
          question: "In a quantum well, the exciton is confined in:",
          options: [
            "One dimension and free in two",
            "Two dimensions and free in one",
            "All three dimensions",
            "No dimensions"
          ],
          correctAnswer: 0,
          explanation: "A quantum well is confined along one spatial dimension (thickness on the order of the de Broglie wavelength) while electrons and holes remain free to propagate in the other two spatial dimensions.\n\n**Correct Option: A (One dimension and free in two).**",
          points: 1
        },
        {
          id: "W12-M14",
          number: 14,
          type: "single",
          section: "Section C — Nanoscale Materials & Quantum Confinement",
          question: "In a quantum wire, the exciton is confined in:",
          options: [
            "One dimension",
            "Two dimensions and free in one",
            "All three dimensions",
            "Zero dimensions"
          ],
          correctAnswer: 1,
          explanation: "A quantum wire is confined in two spatial dimensions (cross-section) while carriers remain free to move along the longitudinal wire axis (one dimension).\n\n**Correct Option: B (Two dimensions and free in one).**",
          points: 1
        },
        {
          id: "W12-M15",
          number: 15,
          type: "single",
          section: "Section C — Nanoscale Materials & Quantum Confinement",
          question: "In a quantum dot, the exciton is confined in:",
          options: [
            "One dimension",
            "Two dimensions",
            "All three dimensions",
            "No dimensions"
          ],
          correctAnswer: 2,
          explanation: "A quantum dot confines electrons and holes in all three spatial dimensions, producing completely discrete, atom-like energy spectra (often termed 'artificial atoms').\n\n**Correct Option: C (All three dimensions).**",
          points: 1
        }
      ]
    }
  ]
};
