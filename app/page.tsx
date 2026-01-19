import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-16 text-center border-b border-gray-300 pb-12">
          <h1 className="text-5xl font-serif font-bold mb-4 text-gray-900">
            Generative AI and Firm Values
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Occupation and Firm Exposure Data Repository
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            This repository provides publicly available data on occupational and firm-level exposure
            to generative AI technologies, supporting research on labor market impacts and firm valuations.
          </p>
        </header>

        <section className="mb-16 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-gray-900">About This Project</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              The release of ChatGPT in November 2022 marked a watershed moment for generative AI adoption.
              This research examines how financial markets responded to this technological shift, focusing on
              firms&apos; differential exposure based on their workforce composition.
            </p>
            <p>
              We construct novel measures of generative AI exposure at both the occupation and firm levels,
              leveraging detailed task-level data to assess which jobs and companies face the greatest potential
              for AI-driven transformation. Our findings reveal significant market reactions: firms with higher
              AI exposure experienced positive abnormal returns following ChatGPT&apos;s release, suggesting investors
              anticipate productivity gains from AI adoption.
            </p>
            <p>
              This data repository supports further research by journalists, academics, and policymakers interested
              in understanding the economic implications of generative AI across industries and occupations.
            </p>
          </div>
        </section>

        <section className="mb-16 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-gray-900">Key Findings</h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Stock Market Reaction to ChatGPT Release
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Image
                src="/figures/ts_w2d180_mkt_short.png"
                alt="Cumulative Abnormal Returns by Generative AI Exposure"
                width={800}
                height={500}
                className="w-full h-auto"
                unoptimized
              />
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                <strong>Figure 1: Cumulative Abnormal Returns by Generative AI Exposure.</strong> The graph shows
                cumulative abnormal returns for portfolios sorted by firms&apos; labor-based generative AI exposure.
                High-exposure firms (&quot;Artificial&quot;) outperformed low-exposure firms (&quot;Human&quot;) following
                ChatGPT&apos;s release on November 30, 2022, with the spread reaching over 2% during the event period.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Generative AI Exposure Across Industries
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <Image
                src="/figures/s12wt_by_ind3d_withsd.png"
                alt="Generative AI Exposure Within and Across Industries"
                width={800}
                height={600}
                className="w-full h-auto"
                unoptimized
              />
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                <strong>Figure 2: Generative AI Exposure Within and Across Industries.</strong> This figure displays
                the average and standard deviation of firms&apos; generative AI exposure within each NAICS 3-digit industry
                sector. Professional services, information, and finance sectors show the highest average exposure, while
                significant within-industry variation exists across most sectors.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-gray-900">Data Downloads</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Occupation-Level Generative AI Exposure
              </h3>
              <p className="text-gray-700 mb-4">
                Exposure scores for occupations based on task-level analysis of O*NET data.
                Scores indicate the degree to which generative AI can augment or automate occupational tasks.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/gschubert/website/raw/gh-pages/genaiexp_estz_occscores.csv"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  download
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CSV
                </a>
                <a
                  href="https://github.com/gschubert/website/blob/gh-pages/genaiexp_estz_occscores.dta"
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Stata Format
                </a>
              </div>
            </div>

            <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Firm-Level Generative AI Exposure
              </h3>
              <p className="text-gray-700 mb-4">
                Firm exposure scores calculated by aggregating occupation-level exposure weighted by
                firms&apos; employment composition. Based on data from publicly-traded U.S. companies.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/gschubert/website/raw/gh-pages/genaiexp_estz_firmscores.csv"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  download
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CSV
                </a>
                <a
                  href="https://github.com/gschubert/website/blob/gh-pages/genaiexp_estz_firmscores.dta"
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Stata Format
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-100 rounded-md">
            <p className="text-sm text-gray-700">
              <strong>Citation:</strong> If you use these data in your research, please cite the associated paper.
              For questions about the data or methodology, please contact the authors.
            </p>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
          <p>Data Repository for &quot;Generative AI and Firm Values&quot;</p>
          <p className="mt-2">© {new Date().getFullYear()} | All data provided for research and educational purposes</p>
        </footer>
      </div>
    </main>
  );
}
