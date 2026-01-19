'use client';

import Image from 'next/image';

function CopyButton({ text, label }: { text: string; label?: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <button
      onClick={handleCopy}
      className="mt-3 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-all duration-200"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
      {label || 'Copy to clipboard'}
    </button>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Header with Gradient */}
        <header className="mb-20 text-center">
          <div className="relative">
            {/* Gradient background blob */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-60 blur-3xl"></div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 tracking-tight">
              Generative AI and <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Firm Values
              </span>
            </h1>

            <div className="text-lg text-gray-700 mb-3 font-medium">
              <p>Andrea L. Eisfeldt, Gregor Schubert, Bledi Taska, and Miao Ben Zhang</p>
            </div>
            <p className="text-sm text-gray-500 mb-8">
              UCLA Anderson · UCLA Anderson · SkyHive · USC Marshall
            </p>

            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm shadow-xl shadow-blue-100/50 rounded-2xl p-8 border border-gray-100">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold rounded-full mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  Data Repository
                </div>
                <ul className="space-y-4 text-left text-gray-700">
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-blue-200">
                      1
                    </div>
                    <span className="pt-1">Generative AI occupation exposure scores</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shadow-lg shadow-indigo-200">
                      2
                    </div>
                    <span className="pt-1">Generative AI firm exposure scores</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        <section className="mb-20 bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">About This Project</h2>
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed">
            <p className="text-lg">
              The release of ChatGPT in November 2022 marked a watershed moment for generative AI adoption.
              This research examines how financial markets responded to this technological shift, focusing on
              firms&apos; differential exposure based on their workforce composition.
            </p>
            <p className="text-lg">
              We construct novel measures of generative AI exposure at both the occupation and firm levels,
              leveraging detailed task-level data to assess which jobs and companies face the greatest potential
              for AI-driven transformation. Our findings reveal significant market reactions: firms with higher
              AI exposure experienced positive abnormal returns following ChatGPT&apos;s release, suggesting investors
              anticipate productivity gains from AI adoption.
            </p>
          </div>

          {/* AMH Portfolio Highlight */}
          <div className="mt-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-6 border border-indigo-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A−H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The &quot;Artificial Minus Human&quot; Portfolio</h3>
                <p className="text-gray-700 mb-3">
                  We construct a zero net investment portfolio that goes <strong>long</strong> on firms with the highest
                  generative AI exposure (&quot;Artificial&quot;) and <strong>short</strong> on firms with the lowest
                  exposure (&quot;Human&quot;).
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                    <span className="text-gray-500">Daily Return:</span>
                    <span className="ml-2 font-bold text-indigo-600">+0.45%</span>
                    <span className="text-gray-400 ml-1">(t = 3.53)</span>
                  </div>
                  <div className="bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                    <span className="text-gray-500">Event Period Return:</span>
                    <span className="ml-2 font-bold text-indigo-600">~5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-gray-900">Data Downloads</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Occupation-Level Generative AI Exposure
              </h3>
              <p className="text-gray-700 mb-3">
                Measures the proportion of tasks in each occupation that can be enhanced using Generative AI tools,
                assessed in March 2023 based on GPT-4 capabilities.
              </p>
              <div className="mb-6 text-sm text-gray-700 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                <p className="font-semibold mb-3 text-gray-900">Variable Structure (4 columns):</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>SOC 2010 occupational codes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <code className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md text-xs font-mono">genaiexp_estz_total</code>
                    <span className="flex-1">- Total occupational GenAI exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <code className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md text-xs font-mono">genaiexp_estz_core</code>
                    <span className="flex-1">- Exposure from core tasks only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <code className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-md text-xs font-mono">genaiexp_estz_supplemental</code>
                    <span className="flex-1">- Exposure from supplemental tasks</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/gschubert/website/raw/gh-pages/genaiexp_estz_occscores.csv"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:scale-105"
                  download="genaiexp_estz_occscores.csv"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CSV
                </a>
                <a
                  href="https://github.com/gschubert/website/blob/gh-pages/genaiexp_estz_occscores.dta"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Stata Format
                </a>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 hover:border-emerald-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Firm-Level Generative AI Exposure
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Measures expected weighted task share per firm that could benefit from Generative AI, based on
                March 2023 assessments and LinkedIn occupational employment structures.
              </p>
              <div className="mb-6 text-sm text-gray-700 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-sm">
                <p className="font-semibold mb-3 text-gray-900">Variable Structure (4 columns):</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Firm GVKEY codes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <code className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md text-xs font-mono">firmgenaiexp_estz_total</code>
                    <span className="flex-1">- Total firm GenAI exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <code className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md text-xs font-mono">firmgenaiexp_estz_core</code>
                    <span className="flex-1">- Core task contribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <code className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md text-xs font-mono">firmgenaiexp_estz_supplemental</code>
                    <span className="flex-1">- Supplemental task contribution</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/gschubert/website/raw/gh-pages/genaiexp_estz_firmscores.csv"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-medium rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 shadow-lg shadow-emerald-200 hover:shadow-xl hover:shadow-emerald-300 hover:scale-105"
                  download="genaiexp_estz_firmscores.csv"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CSV
                </a>
                <a
                  href="https://github.com/gschubert/website/blob/gh-pages/genaiexp_estz_firmscores.dta"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Stata Format
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-gray-900">Key Findings</h2>

          <div className="space-y-10">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Stock Market Reaction to ChatGPT Release
              </h3>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 p-6 rounded-2xl">
                <Image
                  src="/figures/ts_w2d180_mkt_short.png"
                  alt="Cumulative Abnormal Returns by Generative AI Exposure"
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-xl shadow-md"
                  unoptimized
                />
                <p className="text-sm text-gray-600 mt-6 leading-relaxed">
                <strong>Figure 1: Cumulative Abnormal Returns by Generative AI Exposure.</strong> The graph shows
                cumulative abnormal returns for portfolios sorted by firms&apos; labor-based generative AI exposure.
                High-exposure firms (&quot;Artificial&quot;) outperformed low-exposure firms (&quot;Human&quot;) following
                ChatGPT&apos;s release on November 30, 2022, with the spread reaching over 2% during the event period.
              </p>
            </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Generative AI Exposure Across Industries
              </h3>
              <div className="bg-gradient-to-br from-gray-50 to-indigo-50/30 p-6 rounded-2xl">
                <Image
                  src="/figures/s12wt_by_ind3d_withsd.png"
                  alt="Generative AI Exposure Within and Across Industries"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-md"
                  unoptimized
                />
                <p className="text-sm text-gray-600 mt-6 leading-relaxed">
                  <strong>Figure 2: Generative AI Exposure Within and Across Industries.</strong> This figure displays
                  the average and standard deviation of firms&apos; generative AI exposure within each NAICS 3-digit industry
                  sector. Professional services, information, and finance sectors show the highest average exposure, while
                  significant within-industry variation exists across most sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Citation</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Suggested Citation</h3>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                <p className="text-gray-800 leading-relaxed mb-4">
                  Eisfeldt, Andrea L., Gregor Schubert, Bledi Taska, and Miao Ben Zhang. 2026.
                  &quot;Generative AI and Firm Values.&quot; <em>Journal of Finance</em>, forthcoming.
                </p>
                <CopyButton text='Eisfeldt, Andrea L., Gregor Schubert, Bledi Taska, and Miao Ben Zhang. 2026. "Generative AI and Firm Values." Journal of Finance, forthcoming.' />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">BibTeX Entry</h3>
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-2xl border border-gray-200 relative">
                <pre className="text-sm text-gray-800 overflow-x-auto font-mono mb-4">
{`@article{eisfeldt2026generative,
  title={Generative AI and Firm Values},
  author={Eisfeldt, Andrea L and Schubert, Gregor and Taska, Bledi and Zhang, Miao Ben},
  journal={Journal of Finance},
  year={2026},
  note={Forthcoming}
}`}
                </pre>
                <CopyButton text={`@article{eisfeldt2026generative,
  title={Generative AI and Firm Values},
  author={Eisfeldt, Andrea L and Schubert, Gregor and Taska, Bledi and Zhang, Miao Ben},
  journal={Journal of Finance},
  year={2026},
  note={Forthcoming}
}`} />
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 pt-12 border-t border-gray-200 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-gray-600 font-medium">Data Repository for &quot;Generative AI and Firm Values&quot;</p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} · All data provided for research and educational purposes
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
