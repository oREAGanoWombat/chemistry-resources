const equationsDiv = document.getElementById('equations-placeholder');
const equationByNameDiv = document.querySelectorAll(".equation-container.by-name");
// const equationByNameDiv = document.getElementById('equation-by-name');

const equationsArray = {
    equations: [
        {
            name: 'percent-excess',
            equation: '\\begin{equation} \\% \\ excess \\ = \\ \\frac{amount \\ left \\ over}{amount \\ used \\ up} *100\\% \\end{equation}',
            notes: null,
            general_chemistry: true,
            organic_chemistry: false,
        },
        {
            name: 'molarity',
            equation: '\\begin{equation} M \\ = \\ \\frac{n}{V} \\end{equation}',
            notes: "\\[ \\begin{aligned} n & = \\text{ number of moles} \\\\ V & = \\text{ volume in liters} \\end{aligned} \\]",
            general_chemistry: true,
            organic_chemistry: false,
        },
        {
            name: 'mass-percent',
            equation: '\\begin{equation} mass \\ \\% \\ = \\ \\frac{m_{solute}}{m_{solution}} \\ *100\\% \\end{equation}',
            notes: "\\[ \\begin{aligned} m & = \\text{ mass } \\end{aligned} \\]",
            general_chemistry: true,
            organic_chemistry: false,
        },
        {
            name: "ppm",
            equation: "\\begin{equation} \\text{ppm} = \\frac{g_{solute}}{1 \\times 10^6 g_{solution}} \\end{equation}",
            notes: "\\[ \\begin{aligned} g_{solute} & = \\text{ mass of solute (g)} \\\\ g_{solution} & = \\text{ mass of solution (g)} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "molality",
            equation: "\\begin{equation} m = \\frac{n}{\\text{kg solvent}} \\end{equation}",
            notes: "\\[ \\begin{aligned} m & = \\text{ molality (mol/kg)} \\\\ n & = \\text{ moles of solute} \\\\ \\text{kg solvent} & = \\text{ mass of solvent (kg)} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "percent-volume",
            equation: "\\begin{equation} \\% v/v = \\frac{V_{solute}}{V_{solution}} \\times 100\\% \\end{equation}",
            notes: "\\[ \\begin{aligned} V_{solute} & = \\text{ volume of solute} \\\\ V_{solution} & = \\text{ total volume of solution} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "mole-fraction",
            equation: "\\begin{equation} X_{solute} = \\frac{n_{solute}}{n_{total}} \\end{equation}",
            notes: "\\[ \\begin{aligned} X_{solute} & = \\text{ mole fraction of solute} \\\\ n_{solute} & = \\text{ moles of solute} \\\\ n_{total} & = \\text{ total moles in solution} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "raoult-law",
            equation: "\\begin{equation} P_{solvent} = X_{solvent} P^{\\circ}_{solvent} \\end{equation}",
            notes: "\\[ \\begin{aligned} P_{solvent} & = \\text{ vapor pressure of solvent} \\\\ X_{solvent} & = \\text{ mole fraction of solvent} \\\\ P^{\\circ}_{solvent} & = \\text{ vapor pressure of pure solvent} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "freezing-point-depression",
            equation: "\\begin{equation} \\Delta T_b = k_b m_c \\end{equation}",
            notes: "\\[ \\begin{aligned} \\Delta T_b & = \\text{ boiling point elevation} \\\\ k_b & = \\text{ boiling point elevation constant} \\\\ m_c & = \\text{ molality of solute (mol/kg)} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "boiling-point-elevation",
            equation: "\\begin{equation} \\Delta T_f = k_f m_c \\end{equation}",
            notes: "\\[ \\begin{aligned} \\Delta T_f & = \\text{ freezing point depression} \\\\ k_f & = \\text{ freezing point depression constant} \\\\ m_c & = \\text{ molality of solute (mol/kg)} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "osmotic-pressure",
            equation: "\\begin{equation} \\Pi = i M R T \\end{equation}",
            notes: "\\[ \\begin{aligned} \\Pi & = \\text{ osmotic pressure} \\\\ i & = \\text{ van 't Hoff factor} \\\\ M & = \\text{ molarity of solute (mol/L)} \\\\ R & = \\text{ ideal gas constant} \\\\ T & = \\text{ temperature (K)} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "dilution-equation",
            equation: "\\begin{equation} C_1 V_1 = C_2 V_2 \\end{equation}",
            notes: "\\[ \\begin{aligned} C_1 & = \\text{ initial concentration} \\\\ V_1 & = \\text{ initial volume} \\\\ C_2 & = \\text{ final concentration} \\\\ V_2 & = \\text{ final volume} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "gas-laws",
            equation: "\\begin{equation} 1 \\text{ atm} = 760 \\text{ mmHg} = 760 \\text{ torr} \\end{equation}",
            notes: null,
            unit_conversion: true,
            general_chemistry: false,
        },
        {
            name: "ideal-gas-constant",
            equation: "\\begin{equation} R = 0.0821 \\frac{L \\cdot atm}{K \\cdot mol} = 8.314 \\frac{J}{K \\cdot mol} \\end{equation}",
            notes: null,
            constant: true,
            general_chemistry: false,
        },
        {
            name: "kelvin-conversion",
            equation: "\\begin{equation} T(K) = T(^{\\circ}C) + 273.15 \\end{equation}",
            notes: null,
            unit_conversion: true,
            general_chemistry: false,
        },
        {
            name: "ideal-gas-law",
            equation: "\\begin{equation} PV = nRT \\end{equation}",
            notes: "\\[ \\begin{aligned} P & = \\text{ pressure (atm)} \\\\ V & = \\text{ volume (L)} \\\\ n & = \\text{ moles of gas} \\\\ R & = \\text{ ideal gas constant} \\\\ T & = \\text{ temperature (K)} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "energy-equations",
            equation: "\\begin{equation} \\Delta E_{univ} = \\Delta E_{sys} + \\Delta E_{surr} = 0 \\end{equation}",
            notes: "\\( \\Delta E = q + w \\)",
            general_chemistry: true,
        },
        {
            name: "work-equation",
            equation: "\\begin{equation} w = - \\Delta n_{gas}RT \\end{equation}",
            notes: "\\[ \\begin{aligned} w & = \\text{ work done by the system} \\\\ \\Delta n_{gas} & = \\text{ change in moles of gas} \\\\ R & = \\text{ ideal gas constant} \\\\ T & = \\text{ temperature (K)} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "heat-equation",
            equation: "\\begin{equation} q = ms \\Delta T = C \\Delta T = n \\Delta H \\end{equation}",
            notes: "\\( q_{system} = -q_{surroundings} \\)",
            general_chemistry: true,
        },
        {
            name: "enthalpy-change",
            equation: "\\begin{equation} \\begin{aligned} \\Delta H &= \\sum \\text{coeff} \\cdot \\Delta H_f^{\\circ} (\\text{products}) \\\\ &\\quad - \\sum \\text{coeff} \\cdot \\Delta H_f^{\\circ} (\\text{reactants}) \\end{aligned} \\end{equation}",
            notes: "\\[ \\begin{aligned} \\Delta H & = \\text{ enthalpy change of reaction} \\\\ \\Delta H_f^{\\circ} & = \\text{ standard enthalpy of formation} \\\\ \\text{coeff} & = \\text{ stoichiometric coefficients from balanced equation} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "standard-entropy-change",
            equation: "\\begin{equation} \\Delta S_{rxn}^{\\circ} = \\sum \\Delta S_{products}^{\\circ} - \\sum \\Delta S_{reactants}^{\\circ} \\end{equation}",
            notes: "",
            general_chemistry: true,
        },
        {
            name: "gibbs-free-energy-A",
            equation: "\\begin{equation} \\Delta G = \\Delta H - T \\Delta S \\end{equation}",
            notes: "\\[ \\begin{aligned} \\Delta G & = \\text{ Change in Gibbs Free Energy} \\\\ \\Delta H & = \\text{ Change in Enthalpy} \\\\ \\Delta S & = \\text{ Change in Entropy} \\end{aligned} \\]",
            general_chemistry: true,
        },
        {
            name: "gibbs-free-energy-B",
            equation: "\\begin{equation} \\Delta G = \\Delta G^{\\circ} + RT \\ \\ln Q \\end{equation}",
            notes: "\\( Q = \\text{ reaction quotient} \\)",
            general_chemistry: true,
        },
        {
            name: "standard-gibbs-free-energy",
            equation: "\\begin{equation} \\Delta G^{\\circ} = -RT \\ \\ln K \\end{equation}",
            notes: "\\( \\begin{aligned} R & = \\text{ universal gas constant} \\\\ T & = \\text{ temperature (K)} \\\\ K & = \\text{ equilibrium constant} \\end{aligned} \\)",
            general_chemistry: true,
        },
        {
            name: "equilibrium-constant-concentrations",
            equation: "\\begin{equation} K_{C} = \\frac{[C]^{c} [D]^{d}}{[A]^{a} [B]^{b}} \\end{equation}",
            notes: "",
            general_chemistry: true,
        },
        {
            name: "equilibrium-constant-pressures",
            equation: "\\begin{equation} K_{P} = \\frac{P_{C}^{c} P_{D}^{d}}{P_{A}^{a} P_{B}^{b}} \\end{equation}",
            notes: "",
            general_chemistry: true,
        },
        {
            name: "entropy-vaporization",
            equation: " \\begin{equation} \\Delta S_{vap} = \\frac{q_{rev}}{T_b} = \\frac{\\Delta H_{vap}}{T_b} \\end{equation}",
            notes: "\\( \\begin{aligned} q_{rev} & = \\text{ energy for the reverse reaction} \\\\ T_{b} & = \\text{ standard boiling temperature} \\end{aligned} \\)",
            general_chemistry: true,
        },
        {
            name: "reaction-quotient-concentrations",
            equation: "\\begin{equation} Q_{C} = \\frac{[C]^{c} [D]^{d}}{[A]^{a} [B]^{b}} \\end{equation}",
            notes: "",
            general_chemistry: true,
        },
        {
            name: "reaction-quotient-pressures",
            equation: "\\begin{equation} Q_{P} = \\frac{P_{C}^{c} P_{D}^{d}}{P_{A}^{a} P_{B}^{b}} \\end{equation}",
            notes: "",
            general_chemistry: true,
        }
    ]
};

const setEquationCards = (arr = equationsArray.equations) => {
    //Determine discipline based on #equations-placeholder
    let discipline = null;
    if (equationsDiv == null) {
        return;
    }
    if (equationsDiv.classList.contains("generalChemistry")) {
        discipline = "general_chemistry";
    } else if (equationsDiv.classList.contains("organicChemistry")) {
        discipline = "organic_chemistry";
    }

    // Filter equations based on div class
    const filteredEquations = arr.filter(eq => eq[discipline]);

    // Generate equation cards
    equationsDiv.innerHTML += filteredEquations.map(({ name, equation, notes }) => `
        <div class="equation-card">
            ${equation} 
            <p><span class="equation-notes">${notes !== null ? notes : ""}</span></p>
        </div>
    `).join("");

    // Re-render MathJax to ensure equations are processed
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
};

const setEquationByName = () => {
    equationByNameDiv.forEach(div => {
        // Find a matching equation by checking if the div's class list contains an equation name
        const matchingEquation = equationsArray.equations.find(eq => div.classList.contains(eq.name));
        // const matchingEquation = arr.filter(eq => div.classList.contains(eq.name));

        if (matchingEquation) {
            // insert the equation into the div
            div.innerHTML = `
                <div class="equation-card">
                    ${matchingEquation.equation}
                    <p><span class="equation-notes">${matchingEquation.notes !== null ? matchingEquation.notes : ""}</span></p>
                </div>
            `;
        }
    });

    // re-render mathjax to process new equation
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
};

// run functions when page loads
setEquationCards();
setEquationByName();
