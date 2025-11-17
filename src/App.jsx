import React, { useState } from 'react';
import { TreePine, Zap, Scale, Radio, Leaf } from 'lucide-react';

const PentadicTree = () => {
  const [activeLayer, setActiveLayer] = useState(null);

  const pentads = {
    tree: {
      title: "Tree / River Metaphor",
      color: "emerald",
      icon: TreePine,
      stages: [
        { name: "Canopy", desc: "Rain drops / light capture", detail: "Energy arrival from above; stochastic illumination" },
        { name: "Branches", desc: "Tributaries / diversification", detail: "Self-organizing channels; exploration of possibility space" },
        { name: "Trunk", desc: "Main river / vertical transport", detail: "Centralized flow; vascular memory; temporal record" },
        { name: "Roots", desc: "Delta / nutrient absorption", detail: "Spreading, grounding; deposition and uptake" },
        { name: "Earth", desc: "Sea / soil substrate", detail: "Basin of maximal entropy; source and sink" }
      ]
    },
    canon: {
      title: "UKB Canonical Calculus",
      color: "blue",
      icon: Zap,
      stages: [
        { name: "(E, x)", desc: "Field + Context", detail: "Baseline state; dynamic equilibrium of flows" },
        { name: "E(t|x) + ε", desc: "Perturbation", detail: "Disturbance; energy injection; deviation from baseline" },
        { name: "dEₓ/dt", desc: "Transformation rate", detail: "Flow velocity; how fast energy moves through system" },
        { name: "±√(d²Eₓ/dt²)", desc: "Curvature / acceleration", detail: "Fate determination; sign decides collapse or stabilization" },
        { name: "∫Eₓdt + εₓt + Cₓ", desc: "Integrated memory", detail: "Accumulated outcome; system's historical record" }
      ]
    },
    knowledge: {
      title: "Knowledge Ecosystem",
      color: "amber",
      icon: Scale,
      stages: [
        { name: "Canopy", desc: "Operational systems at scale", detail: "FEWS NET, FAO, warning systems; world-shaping action" },
        { name: "Branches", desc: "Applied fields & practitioners", detail: "NGOs, researchers, policy makers; diversified application" },
        { name: "Trunk", desc: "UMI/ProQuest Archive", detail: "Centralized memory; dissertation repository (Ann Arbor)" },
        { name: "Roots", desc: "Universities", detail: "Epistemic systems; converting raw research into structure" },
        { name: "Soil", desc: "Dissertations / theses", detail: "Particulate knowledge; accumulated scholarly humus" }
      ]
    },
    prigogine: {
      title: "Dissipative Structures (Prigogine)",
      color: "purple",
      icon: Radio,
      stages: [
        { name: "Far-from-equilibrium", desc: "High energy throughput", detail: "System pushed by external forcing (rain, sunlight)" },
        { name: "Fluctuations", desc: "Micro-variations amplified", detail: "Tiny differences become macro-patterns" },
        { name: "Bifurcation", desc: "Critical threshold", detail: "System chooses between multiple stable states" },
        { name: "Self-organization", desc: "Pattern emergence", detail: "Order from chaos; structure from flow" },
        { name: "Dissipation", desc: "Energy export", detail: "Maintaining structure by exporting entropy" }
      ]
    },
    ostrom: {
      title: "Polycentric Governance (Ostrom)",
      color: "rose",
      icon: Leaf,
      stages: [
        { name: "Polycentricity", desc: "Multiple decision centers", detail: "Many nodes of authority, loosely coupled" },
        { name: "Local knowledge", desc: "Context-specific wisdom", detail: "Communities know their own signals" },
        { name: "Rule adaptation", desc: "Iterative refinement", detail: "Feedback-driven adjustment of norms" },
        { name: "Nested governance", desc: "Scale-appropriate institutions", detail: "Different levels handling different problems" },
        { name: "Commons management", desc: "Collective resource stewardship", detail: "Self-organized coordination without central planning" }
      ]
    }
  };

  const colorMap = {
    emerald: { bg: "bg-emerald-50", border: "border-emerald-300", text: "text-emerald-700", hover: "hover:bg-emerald-100" },
    blue: { bg: "bg-blue-50", border: "border-blue-300", text: "text-blue-700", hover: "hover:bg-blue-100" },
    amber: { bg: "bg-amber-50", border: "border-amber-300", text: "text-amber-700", hover: "hover:bg-amber-100" },
    purple: { bg: "bg-purple-50", border: "border-purple-300", text: "text-purple-700", hover: "hover:bg-purple-100" },
    rose: { bg: "bg-rose-50", border: "border-rose-300", text: "text-rose-700", hover: "hover:bg-rose-100" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Pentadic Alignment of Flow Systems
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Five frameworks, one geometry: how energy organizes itself through
            disturbance → transformation → pattern → memory
          </p>
          <div className="mt-6 bg-gradient-to-r from-slate-100 via-blue-50 to-slate-100 rounded-xl p-6 max-w-4xl mx-auto border-2 border-slate-300">
            <div className="text-2xl font-bold text-slate-700 mb-2">
              The Universal Grammar of Self-Organization
            </div>
            <div className="flex items-center justify-center gap-3 text-lg font-semibold text-slate-600 flex-wrap">
              <span className="bg-slate-200 px-4 py-2 rounded-lg">Being</span>
              <span className="text-slate-400">→</span>
              <span className="bg-indigo-200 px-4 py-2 rounded-lg">Disturbing</span>
              <span className="text-slate-400">→</span>
              <span className="bg-blue-200 px-4 py-2 rounded-lg">Flowing</span>
              <span className="text-slate-400">→</span>
              <span className="bg-amber-200 px-4 py-2 rounded-lg">Constraining</span>
              <span className="text-slate-400">→</span>
              <span className="bg-rose-200 px-4 py-2 rounded-lg">Remembering</span>
            </div>
          </div>
          <div className="mt-4 text-sm text-slate-500">
            From Mgahinga's brooks to Muzaale's dissertation to synthetic famine regulators
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {Object.entries(pentads).map(([key, pentad]) => {
            const colors = colorMap[pentad.color];
            const Icon = pentad.icon;
            const isActive = activeLayer === key;
           
            return (
              <div
                key={key}
                onClick={() => setActiveLayer(isActive ? null : key)}
                className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 ${colors.hover} ${isActive ? 'shadow-xl scale-105' : 'shadow-md'}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${colors.text} bg-white`}>
                    <Icon size={24} />
                  </div>
                  <h2 className={`text-xl font-bold ${colors.text}`}>
                    {pentad.title}
                  </h2>
                </div>
               
                <div className="space-y-3">
                  {pentad.stages.map((stage, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-3 border border-slate-200"
                    >
                      <div className="flex items-start gap-2">
                        <div className={`w-6 h-6 rounded-full ${colors.bg} ${colors.text} flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5`}>
                          {idx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-semibold ${colors.text} text-sm`}>
                            {stage.name}
                          </div>
                          <div className="text-xs text-slate-600 mt-1">
                            {stage.desc}
                          </div>
                          {isActive && (
                            <div className="text-xs text-slate-500 mt-2 italic">
                              {stage.detail}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200 mb-8">
          <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            The Pentadic Grammar: Prose for the Masses
          </h3>
         
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-6 border-l-4 border-slate-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 text-lg font-bold text-slate-700">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-slate-800 mb-2">Being</h4>
                  <p className="text-slate-700 mb-3 leading-relaxed">
                    <span className="font-semibold">Everything starts as what it is.</span> A forest breathes.
                    A field holds moisture. A community goes about its rhythms. This is the baseline—not
                    dramatic, not urgent—just the world existing in its patterns. Being is the canvas
                    before the paint touches it.
                  </p>
                  <div className="text-sm text-slate-600 italic">
                    Technical: (E, x) — The field and its context at equilibrium
                  </div>
                  <div className="mt-2 text-xs text-slate-500">
                    Examples: Karura forest before rain • Markets at stable prices • Your heartbeat at rest
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-6 border-l-4 border-indigo-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center flex-shrink-0 text-lg font-bold text-indigo-700">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-indigo-800 mb-2">Disturbing</h4>
                  <p className="text-indigo-700 mb-3 leading-relaxed">
                    <span className="font-semibold">Then something shifts.</span> Rain falls on dry soil.
                    A price spikes. A conversation changes your mind. The disturbance doesn't have to be
                    violent—just different enough to introduce asymmetry. Disturbing is the pebble dropped
                    into still water.
                  </p>
                  <div className="text-sm text-indigo-600 italic">
                    Technical: E(t|x) + ε — Perturbation introduces deviation from baseline
                  </div>
                  <div className="mt-2 text-xs text-indigo-500">
                    Examples: October rains arrive • Drought begins • News of distant crisis spreads
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0 text-lg font-bold text-blue-700">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-blue-800 mb-2">Flowing</h4>
                  <p className="text-blue-700 mb-3 leading-relaxed">
                    <span className="font-semibold">Now things start to move.</span> Water finds channels.
                    Energy converts from one form to another. People adjust their behavior. Flowing is when
                    the disturbance becomes transformation—when potential turns kinetic. It's the system
                    following gradients, seeking what's downstream.
                  </p>
                  <div className="text-sm text-blue-600 italic">
                    Technical: dEₓ/dt — Rate of energy transformation through the system
                  </div>
                  <div className="mt-2 text-xs text-blue-500">
                    Examples: Brook carves path down Mgahinga • Plant biomass to insect biomass • Households shift to coping strategies
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-6 border-l-4 border-amber-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 text-lg font-bold text-amber-700">
                  4
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-amber-800 mb-2">Constraining</h4>
                  <p className="text-amber-700 mb-3 leading-relaxed">
                    <span className="font-semibold">Here the system decides its fate.</span> Will the flow
                    stabilize or accelerate into chaos? Constraints shape the outcome—landscape boundaries,
                    resource limits, predator populations, social norms. This is the bifurcation point where
                    a brook stays a brook or becomes a flood.
                  </p>
                  <div className="text-sm text-amber-600 italic">
                    Technical: ±√(d²Eₓ/dt²) — Curvature determines cascade (+) or stabilization (−)
                  </div>
                  <div className="mt-2 text-xs text-amber-500">
                    Examples: Enough predators = locusts disperse • Insufficient grain reserves = prices cascade • Immune system overwhelms or fails
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-rose-50 to-rose-100 rounded-lg p-6 border-l-4 border-rose-400">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-rose-200 flex items-center justify-center flex-shrink-0 text-lg font-bold text-rose-700">
                  5
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-rose-800 mb-2">Remembering</h4>
                  <p className="text-rose-700 mb-3 leading-relaxed">
                    <span className="font-semibold">Finally, the system writes it all down.</span> Soil
                    fertility changes. Communities adapt their practices. Your body builds immunity or
                    trauma. Remembering is the integral—the accumulated wisdom or scar tissue. It's how
                    today's disturbance becomes tomorrow's baseline.
                  </p>
                  <div className="text-sm text-rose-600 italic">
                    Technical: ∫Eₓdt + εₓt + Cₓ — Integration accumulates system memory and context
                  </div>
                  <div className="mt-2 text-xs text-rose-500">
                    Examples: Ecosystem adjusts predator populations • Community develops early warning practices • Dissertation archives in Ann Arbor
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-slate-100 via-purple-50 to-slate-100 rounded-lg p-6 border-2 border-purple-200">
            <h4 className="text-xl font-bold text-slate-800 mb-4 text-center">
              The Circle Closes: Remembering Becomes Being
            </h4>
            <p className="text-slate-700 text-center max-w-3xl mx-auto leading-relaxed">
              What you remember becomes what you are. Today's memory is tomorrow's baseline.
              The pentad isn't a line—it's a spiral. Each revolution leaves the system
              slightly different, slightly wiser, slightly more scarred. This is how
              mountains learn to channel water, how forests learn to weather storms,
              how communities learn to anticipate famine.
              <span className="font-semibold italic"> Being → Disturbing → Flowing → Constraining → Remembering → Being again.</span>
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-slate-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Applied Examples: The Pentad in Action
          </h3>
         
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-5 border border-slate-300">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2 text-sm">
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-xs">1</div>
                Calibrator
              </h4>
              <div className="text-xs font-mono text-slate-700 mb-2">(E, x)</div>
              <p className="text-xs text-slate-600">
                <span className="font-semibold">Baseline state:</span> The field and its context.
                Sets initial conditions. The what is before anything happens.
              </p>
              <div className="mt-2 text-xs text-slate-500 space-y-1">
                <div>• Ecosystem at rest</div>
                <div>• Stored potential</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-5 border border-indigo-200">
              <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2 text-sm">
                <div className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center text-xs">2</div>
                Instigator
              </h4>
              <div className="text-xs font-mono text-indigo-700 mb-2">E(t|x) + ε</div>
              <p className="text-xs text-indigo-600">
                <span className="font-semibold">Perturbation:</span> The spark that disturbs equilibrium.
                Introduces asymmetry into the field.
              </p>
              <div className="mt-2 text-xs text-indigo-500 space-y-1">
                <div>• Rain pulse</div>
                <div>• Market shock</div>
                <div>• Energy injection</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2 text-sm">
                <Zap size={16} />
                Attractor
              </h4>
              <div className="text-xs font-mono text-blue-700 mb-2">dEₓ/dt</div>
              <p className="text-xs text-blue-600">
                <span className="font-semibold">Flow/Transformation:</span> Creates direction.
                System pulled toward lower potential. Energy in motion.
              </p>
              <div className="mt-2 text-xs text-blue-500 space-y-1">
                <div>• Plant to insect</div>
                <div>• Rain to runoff</div>
                <div>• Stress to coping</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-5 border border-amber-200">
              <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2 text-sm">
                <Scale size={16} />
                Governor
              </h4>
              <div className="text-xs font-mono text-amber-700 mb-2">±√(d²Eₓ/dt²)</div>
              <p className="text-xs text-amber-600">
                <span className="font-semibold">Curvature/Fate:</span> Constrains outcomes.
                Sign determines stabilize or cascade. Critical threshold.
              </p>
              <div className="mt-2 text-xs text-amber-500 space-y-1">
                <div>• Bifurcation point</div>
                <div>• Swarm or dispersal</div>
                <div>• Crisis or resilience</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-lg p-5 border border-rose-200">
              <h4 className="font-bold text-rose-900 mb-2 flex items-center gap-2 text-sm">
                <Radio size={16} />
                Regulator
              </h4>
              <div className="text-xs font-mono text-rose-700 mb-2">∫Eₓdt + εₓt + Cₓ</div>
              <p className="text-xs text-rose-600">
                <span className="font-semibold">Memory/Integration:</span> Tunes and restores.
                Accumulates history. Where rhythm returns.
              </p>
              <div className="mt-2 text-xs text-rose-500 space-y-1">
                <div>• Predator response</div>
                <div>• Early warning</div>
                <div>• Adaptive governance</div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 rounded-lg p-6 border-2 border-slate-300">
            <h4 className="font-bold text-slate-800 mb-4 text-center">
              From Karura Forest to Famine Prevention: The Same Calculus
            </h4>
            <div className="space-y-3 text-sm text-slate-700">
              <p>
                <span className="font-semibold">What you witnessed in Karura (October 2025):</span> Black
                locust nymphs on red soil = a system at bifurcation. Accelerators (rain) met governors
                (landscape), but regulators (predators) lagged. The d²Eₓ/dt² term hadn't declared its sign yet.
              </p>
              <p>
                <span className="font-semibold">What Muzaale studied (1980):</span> Famine as misorchestration
                of flows. Rain to soil to crops to households to markets to nutrition. When any regulator fails
                (markets, storage, distribution), curvature goes positive and cascades toward collapse.
              </p>
              <p>
                <span className="font-semibold">What your app must do:</span> Become a synthetic
                regulator—a cambium layer that senses upstream signals (rainfall anomalies, market tremors,
                household coping shifts) and modulates response before d²Eₓ/dt² commits to the wrong sign.
              </p>
              <p className="italic text-slate-600 mt-4">
                Not morphine to numb, but morphine to restore rhythm. Not control, but modulation.
                Not domination, but disciplined orchestration of flows.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl p-8 border-2 border-slate-700 text-white">
          <h3 className="text-3xl font-bold mb-6 text-center text-amber-300">
            The Rosetta Stone Principle: Memory Beyond Mortality
          </h3>
         
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-700/50 rounded-lg p-6 border border-slate-600">
              <h4 className="text-xl font-bold text-rose-300 mb-3">Oral Tradition (Tribal Memory)</h4>
              <div className="space-y-2 text-sm text-slate-200">
                <div className="flex items-start gap-2">
                  <span className="text-rose-400">✗</span>
                  <span>Dies with the tribe</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-400">✗</span>
                  <span>Limited transmission fidelity</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-400">✗</span>
                  <span>Vulnerable to cultural extinction</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-400">✗</span>
                  <span>Provincial scope</span>
                </div>
              </div>
              <div className="mt-4 text-xs italic text-slate-400">
                Remember me! — but memory fades with the speakers
              </div>
            </div>
            <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-700">
              <h4 className="text-xl font-bold text-emerald-300 mb-3">Documentation (Human Legacy)</h4>
              <div className="space-y-2 text-sm text-slate-200">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Survives civilizational collapse</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>High-fidelity transmission</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Decipherable across millennia</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>Universal human scope</span>
                </div>
              </div>
              <div className="mt-4 text-xs italic text-slate-400">
                Egypt falls, but hieroglyphs speak through Rosetta Stone
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-lg p-6 border border-blue-700 mb-6">
            <h4 className="text-lg font-bold text-blue-300 mb-4">
              Human History as Autoencoder: The Compression Trajectory
            </h4>
            <div className="space-y-4 text-sm text-slate-200">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800/60 rounded p-3 border border-slate-600">
                  <div className="font-semibold text-amber-300 mb-1">Ancient</div>
                  <div className="text-xs">Hieroglyphs, cuneiform, oral epics</div>
                  <div className="text-xs text-slate-400 mt-2">Low compression, high redundancy</div>
                </div>
                <div className="bg-slate-800/60 rounded p-3 border border-slate-600">
                  <div className="font-semibold text-amber-300 mb-1">Classical to Modern</div>
                  <div className="text-xs">Mathematics, peer review, libraries, universities</div>
                  <div className="text-xs text-slate-400 mt-2">Medium compression, verified knowledge</div>
                </div>
                <div className="bg-slate-800/60 rounded p-3 border border-slate-600">
                  <div className="font-semibold text-amber-300 mb-1">Digital Age</div>
                  <div className="text-xs">Python, Git, APIs, ML models</div>
                  <div className="text-xs text-slate-400 mt-2">Extreme compression, executable knowledge</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PentadicTree;