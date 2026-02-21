export default function Home() {
    return (
        <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">

            {/* Background Gradient */}
            {/* Black with green gradient overlay */}
            <div
                className="absolute inset-0 w-full h-full bg-gradient-to-br from-black via-black to-green-950/20 z-0"
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-screen flex flex-col md:flex-row items-center justify-between pointer-events-none">

                {/* Left Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center pointer-events-auto h-full pt-24 md:pt-0">
                    <p className="text-2xl md:text-3xl font-semibold text-green-300 mb-2">Hi, I am</p>
                    <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-extrabold text-white tracking-tight leading-none mb-4 drop-shadow-lg">Ashwath Nagarajan</h1>
                    <p className="text-xl md:text-2xl font-bold text-green-400 mb-4">
                        Aspiring AI/ML & Full Stack Developer
                    </p>
                    <p className="text-lg md:text-xl font-medium text-green-200 mb-10 max-w-lg">
                        Building scalable AI systems and lightweight applications optimized for real-world constraints.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4 items-center">
                        <a href="#" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-600 to-green-500 rounded shadow-lg hover:shadow-[0_8px_16px_rgba(34,197,94,0.5)] hover:-translate-y-1.5 focus-ring transition-smooth will-change-transform group" aria-label="Email">
                            <span className="font-bold text-2xl text-black group-hover:text-white transition-smooth">@</span>
                        </a>
                        <a href="https://github.com/AshwathNagarajan" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-600 to-green-500 rounded shadow-lg hover:shadow-[0_8px_16px_rgba(34,197,94,0.5)] hover:-translate-y-1.5 focus-ring transition-smooth will-change-transform group" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black group-hover:text-white transition-smooth"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        </a>
                        <a href="https://linkedin.com/in/ashwath-nagarajan-ad31" className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-600 to-green-500 rounded shadow-lg hover:shadow-[0_8px_16px_rgba(34,197,94,0.5)] hover:-translate-y-1.5 focus-ring transition-smooth will-change-transform group" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black group-hover:text-white transition-smooth"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Right Content - Hacker Illustration */}
                <div className="w-full md:w-1/2 flex justify-center md:items-end h-full relative pointer-events-auto">
                    {/* AI Neural Network Illustration */}
                    <div className="relative w-full h-full flex items-center justify-center md:justify-end pb-0 md:pb-20">
                        <svg className="w-[300px] h-[400px] md:w-[380px] md:h-[480px] text-green-500 drop-shadow-[0_0_30px_rgba(34,197,94,0.8)]" viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <defs>
                                <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                                <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.8"/>
                                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.2"/>
                                </radialGradient>
                            </defs>

                            {/* Input Layer */}
                            <circle cx="60" cy="100" r="10" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>
                            <circle cx="60" cy="180" r="10" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>
                            <circle cx="60" cy="260" r="10" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>
                            <circle cx="60" cy="340" r="10" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>

                            {/* Hidden Layer 1 */}
                            <circle cx="150" cy="70" r="12" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>
                            <circle cx="150" cy="150" r="12" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>
                            <circle cx="150" cy="230" r="12" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>
                            <circle cx="150" cy="310" r="12" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>
                            <circle cx="150" cy="390" r="12" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>

                            {/* Hidden Layer 2 */}
                            <circle cx="250" cy="100" r="12" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>
                            <circle cx="250" cy="200" r="12" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>
                            <circle cx="250" cy="300" r="12" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>
                            <circle cx="250" cy="400" r="12" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>

                            {/* Output Layer */}
                            <circle cx="340" cy="150" r="10" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>
                            <circle cx="340" cy="250" r="10" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>
                            <circle cx="340" cy="350" r="10" fill="url(#nodeGradient)" filter="url(#neonGlow)"/>

                            {/* Connections - Input to Hidden 1 */}
                            <line x1="70" y1="100" x2="138" y2="70" stroke="currentColor" strokeWidth="0.8" opacity="0.4" filter="url(#neonGlow)"/>
                            <line x1="70" y1="100" x2="138" y2="150" stroke="currentColor" strokeWidth="0.8" opacity="0.4" filter="url(#neonGlow)"/>
                            <line x1="70" y1="180" x2="138" y2="150" stroke="currentColor" strokeWidth="0.8" opacity="0.4" filter="url(#neonGlow)"/>
                            <line x1="70" y1="180" x2="138" y2="230" stroke="currentColor" strokeWidth="0.8" opacity="0.4" filter="url(#neonGlow)"/>
                            <line x1="70" y1="260" x2="138" y2="230" stroke="currentColor" strokeWidth="0.8" opacity="0.4" filter="url(#neonGlow)"/>
                            <line x1="70" y1="260" x2="138" y2="310" stroke="currentColor" strokeWidth="0.8" opacity="0.4" filter="url(#neonGlow)"/>
                            <line x1="70" y1="340" x2="138" y2="310" stroke="currentColor" strokeWidth="0.8" opacity="0.4" filter="url(#neonGlow)"/>
                            <line x1="70" y1="340" x2="138" y2="390" stroke="currentColor" strokeWidth="0.8" opacity="0.4" filter="url(#neonGlow)"/>

                            {/* Connections - Hidden 1 to Hidden 2 */}
                            <line x1="162" y1="70" x2="238" y2="100" stroke="currentColor" strokeWidth="0.8" opacity="0.5" filter="url(#neonGlow)"/>
                            <line x1="162" y1="150" x2="238" y2="100" stroke="currentColor" strokeWidth="0.8" opacity="0.5" filter="url(#neonGlow)"/>
                            <line x1="162" y1="150" x2="238" y2="200" stroke="currentColor" strokeWidth="0.8" opacity="0.5" filter="url(#neonGlow)"/>
                            <line x1="162" y1="230" x2="238" y2="200" stroke="currentColor" strokeWidth="0.8" opacity="0.5" filter="url(#neonGlow)"/>
                            <line x1="162" y1="230" x2="238" y2="300" stroke="currentColor" strokeWidth="0.8" opacity="0.5" filter="url(#neonGlow)"/>
                            <line x1="162" y1="310" x2="238" y2="300" stroke="currentColor" strokeWidth="0.8" opacity="0.5" filter="url(#neonGlow)"/>
                            <line x1="162" y1="310" x2="238" y2="400" stroke="currentColor" strokeWidth="0.8" opacity="0.5" filter="url(#neonGlow)"/>
                            <line x1="162" y1="390" x2="238" y2="400" stroke="currentColor" strokeWidth="0.8" opacity="0.5" filter="url(#neonGlow)"/>

                            {/* Connections - Hidden 2 to Output */}
                            <line x1="262" y1="100" x2="330" y2="150" stroke="currentColor" strokeWidth="0.8" opacity="0.6" filter="url(#neonGlow)"/>
                            <line x1="262" y1="200" x2="330" y2="150" stroke="currentColor" strokeWidth="0.8" opacity="0.6" filter="url(#neonGlow)"/>
                            <line x1="262" y1="200" x2="330" y2="250" stroke="currentColor" strokeWidth="0.8" opacity="0.6" filter="url(#neonGlow)"/>
                            <line x1="262" y1="300" x2="330" y2="250" stroke="currentColor" strokeWidth="0.8" opacity="0.6" filter="url(#neonGlow)"/>
                            <line x1="262" y1="300" x2="330" y2="350" stroke="currentColor" strokeWidth="0.8" opacity="0.6" filter="url(#neonGlow)"/>
                            <line x1="262" y1="400" x2="330" y2="350" stroke="currentColor" strokeWidth="0.8" opacity="0.6" filter="url(#neonGlow)"/>

                            {/* AI Brain-like Core in center */}
                            <circle cx="200" cy="250" r="35" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3" filter="url(#neonGlow)"/>
                            <circle cx="200" cy="250" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" filter="url(#neonGlow)"/>
                            <circle cx="200" cy="250" r="15" fill="url(#nodeGradient)" strokeWidth="1" filter="url(#neonGlow)"/>

                            {/* Data Flow indicators */}
                            <circle cx="100" cy="120" r="3" fill="currentColor" opacity="0.7" filter="url(#neonGlow)"/>
                            <circle cx="180" cy="180" r="3" fill="currentColor" opacity="0.8" filter="url(#neonGlow)"/>
                            <circle cx="280" cy="220" r="3" fill="currentColor" opacity="0.9" filter="url(#neonGlow)"/>
                        </svg>
                    </div>
                </div>

            </div>
        </section>
    )
}
