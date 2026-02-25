import React from 'react';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-10 font-serif">

      {/* Animate Section */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 flex justify-around">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent animate-scan-down"
              style={{
                animationDuration: `${Math.random() * 5 + 3}s`,
                animationDelay: `${Math.random() * 2}s`,
                left: `${i * 10}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Pfp */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 border-2 border-white contrast-125 overflow-hidden">
        <Image
          src="/profile.jpg"
          alt="Aaron Wang"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Main Title */}
      <h1 className="text-4xl mt-6 mb-2 font-mono">Aaron Wang</h1>
      <div className="text-base mb-12 text-center">B.S. Computer Science, UC Riverside</div>

      <main className="w-full max-w-[700px] flex flex-col gap-10">
        
        {/* Experience Section */}
        <section className="w-full text-left">
          <div className="border-b border-white pb-1 mb-1 flex justify-between items-end">
            <h2 className="text-2xl mono">Experience</h2>
            <a href="/Aaron_Wang_Resume.pdf" download className="text-[0.7rem] font-mono hover:underline">
              [resume.pdf]
            </a>
          </div>
          <div className="border border-[#333] p-4 font-mono text-[0.85rem] leading-relaxed">
            <div className="font-bold text-[#ccc] mt-2 uppercase">Wevr | Burbank, CA</div>
            <p className="mb-2 text-[#aaa]">&gt; VR Quality Assurance Tester<br/>
            &gt; Nov 2025 - Feb 2026</p>
            <ul className="list-none space-y-1">
              <li>- Validated fixes and ensured stable application behavior for VR releases.</li>
              <li>- Documented defects related to user input, rendering, and performance.</li>
              <li>- Generated detailed bug reports for dev teams within a production environment.</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full text-left">
          <div className="border-b border-white pb-1 mb-1 flex justify-between items-end">
            <h2 className="text-2xl mono">Featured Projects</h2>
          </div>
          <div className="border border-[#333] p-4 font-mono text-[0.85rem] leading-relaxed space-y-6">
            
            <div>
              <div className="font-bold text-[#ccc] underline">Obfin (Finance Manager & AI Advisor)</div>
              <p className="text-[0.75rem] text-[#888] mb-1">React.js, Node.js, Firebase, Gemini Flash API</p>
              <p>- Engineered an AI assistant that analyzes financial context to offer advice.</p>
              <p>- Integrated Recharts for real-time visualization of Firestore transaction data.</p>
            </div>

            <div>
              <div className="font-bold text-[#ccc] underline">Self-Adjusting Lighting System</div>
              <p className="text-[0.75rem] text-[#888] mb-1">Python, Firebase, Jetson Nano, Scikit-learn</p>
              <p>- Built a real-time LED adjustment system using motion and ambient light sensors.</p>
              <p>- Trained a Random Forest Classifier to categorize environments based on sensor logs.</p>
            </div>

            <div>
              <div className="font-bold text-[#ccc] underline">Parallelized Sudoku Solver</div>
              <p className="text-[0.75rem] text-[#888] mb-1">Python, Multithreading</p>
              <p>- Achieved 51.9% speedup by parallelizing pre-computation of valid moves.</p>
              <p>- Implemented candidate caching to reduce computational redundancy.</p>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full text-left mb-10">
          <div className="border-b border-white pb-1 mb-1">
            <h2 className="text-2xl mono">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-[#333] p-4 font-mono text-[0.8rem]">
            <div>
              <span className="text-[#888]">Langs:</span> C/C++, JS/TS, Python, SQL, Java
            </div>
            <div>
              <span className="text-[#888]">Frameworks:</span> Next.js, React, Node, Angular
            </div>
            <div>
              <span className="text-[#888]">Tools:</span> Git, Firebase, Postman, VMWare
            </div>
            <div>
              <span className="text-[#888]">OS:</span> Linux (Ubuntu), macOS, Windows
            </div>
          </div>
        </section>

      </main>
      {/* Contact Info */}
      <div className="border-2 border-white w-full max-w-[400px] mt-5 relative bg-black pt-6 pb-5">
        <div className="absolute top-0 left-0 right-0 bg-white text-black text-center font-bold py-0.5 text-[1rem]">
          contact
        </div>
        <div className="font-mono text-[0.85rem] text-center leading-[1.8]">
          <a href="mailto:aaronwanglucky@gmail.com" className="hover:underline">aaronwanglucky@gmail.com</a><br />
          <a href="https://github.com/1aaronw" target="_blank" rel="noreferrer" className="hover:underline">github.com/1aaronw</a><br />
          <a href="https://linkedin.com/in/aaron-wang-f" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/aaron-wang-f</a>
        </div>
      </div>
    </div>
  );
}