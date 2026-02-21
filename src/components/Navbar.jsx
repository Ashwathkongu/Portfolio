import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About me', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-[0_4px_12px_rgba(34,197,94,0.1)] py-4 border-b border-green-500/20' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#home"
                    className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-white' : 'text-white mix-blend-difference'
                        }`}
                >
                    <div className="w-10 h-10 border-2 border-green-400 text-green-400 flex items-center justify-center transform -skew-x-12">
                        AN
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-bold transition-colors hover:text-green-400 focus-ring rounded-md px-2 py-1 ${isScrolled ? 'text-slate-300' : 'text-white mix-blend-difference'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2.5 bg-green-500 text-black text-sm font-bold rounded-full hover:scale-105 hover:bg-green-400 transition-all duration-300 shadow-md whitespace-nowrap focus-ring inline-block"
                    >
                        CONTACT ME
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 z-50 focus-ring rounded-md"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className={`space-y-1.5 ${isScrolled || isMobileMenuOpen ? 'text-white' : 'text-white mix-blend-difference'}`}>
                        <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-current transition duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-current transform transition duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-green-500/20 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-72 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
                    }`}
            >
                <nav className="flex flex-col px-6 py-6 gap-6 text-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white text-lg font-bold hover:text-green-400 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="w-full max-w-[200px] mx-auto py-3 bg-green-500 text-black text-sm font-bold rounded-full hover:bg-green-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        CONTACT ME
                    </a>
                </nav>
            </div>
        </header>
    );
}
