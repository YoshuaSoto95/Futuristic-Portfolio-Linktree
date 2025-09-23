import React from 'react';
// FIX: Added Variants type import from framer-motion to help TypeScript correctly infer types.
import { motion, Variants } from 'framer-motion';
import {
    JsIcon,
    TsIcon,
    ReactIcon,
    NextIcon,
    TailwindIcon,
    TikTokIcon,
    YouTubeIcon,
    FiverrIcon,
    GlobeIcon,
    WhatsappIcon,
    GmailIcon,
    GithubIcon
} from './Icons';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

// FIX: Explicitly typed itemVariants with Variants to resolve type inference issue.
const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
};

const LinkButton: React.FC<{ icon: React.ReactNode; text: string; href: string; hoverColor?: string; }> = ({ icon, text, href, hoverColor = 'var(--terciary)' }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        className="group relative flex items-center justify-center w-full px-6 py-4 text-lg font-bold text-white bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300 overflow-hidden"
        whileHover="hover"
    >
        <motion.div
            className="absolute inset-0"
            style={{
                background: `linear-gradient(90deg, transparent, ${hoverColor}, transparent)`
            }}
            initial={{ x: '-100%' }}
            variants={{ hover: { x: '100%' } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <span className="relative z-10 mr-4">{icon}</span>
        <span className="relative z-10">{text}</span>
    </motion.a>
);

const IconButton: React.FC<{ icon: React.ReactNode; href: string; label: string; hoverColor?: string; }> = ({ icon, href, label, hoverColor = 'var(--terciary)' }) => (
    <motion.a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        className="group relative p-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm transition-all duration-300 hover:border-[var(--hover-color)]"
        whileHover={{ scale: 1.1, y: -5 }}
        // FIX: Cast style object to React.CSSProperties to allow for CSS custom properties which are not in MotionStyle by default.
        style={{ '--hover-color': hoverColor } as React.CSSProperties}
    >
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: `0 0 15px var(--hover-color)` }} />
        <span className="relative z-10">{icon}</span>
    </motion.a>
);

const PortfolioPage: React.FC = () => {
    const description = "Fullstack Developer, skilled in vanilla HTML, CSS, and JS for any Landing Page, Web, or Web App. React developer using Framer Motion and Tailwind to bring your ideas to life with the best Figma-style designs for your Landing Page or Web App.";

    return (
        <motion.main
            className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
        >
            <div className="max-w-2xl w-full mx-auto flex flex-col items-center text-center z-10">
                {/* Profile Section */}
                <motion.div variants={itemVariants} className="flex flex-col items-center">
                    <motion.div
                        className="gradient-border"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <img
                            src="../components/pictures/character.jpeg"
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover"
                        />
                    </motion.div>
                    <h2 className="text-3xl font-bold mt-6">Yoshua Daniel Soto</h2>
                    <h3 className="text-xl text-[var(--terciary)] mt-1">Dann Kloppering</h3>
                    <p className="mt-4 text-white/80 max-w-lg">{description}</p>
                </motion.div>

                {/* Tech Icons */}
                <motion.div variants={itemVariants} className="flex items-center space-x-4 mt-6">
                    <JsIcon /> <TsIcon /> <ReactIcon /> <NextIcon /> <TailwindIcon />
                </motion.div>

                {/* Links Section */}
                <motion.div variants={containerVariants} className="w-full max-w-md mt-10 grid grid-cols-2 gap-4">
                    <LinkButton icon={<TikTokIcon />} text="TikTok" href="https://www.tiktok.com/@dannkloppering1" target="_blank" hoverColor="#ff0050" />
                    <LinkButton icon={<TikTokIcon />} text="TikTok" href="https://www.tiktok.com/@dann33devfront" target="_blank" hoverColor="#00f2ea" />
                    <LinkButton icon={<YouTubeIcon />} text="YouTube" href="https://www.youtube.com/@kloppering.developer" target="_blank" hoverColor="#ff0000" />
                    <LinkButton icon={<YouTubeIcon />} text="YouTube" href="https://www.youtube.com/@dann33devfrontend" target="_blank" hoverColor="#ffffff" />
                    <LinkButton icon={<FiverrIcon />} text="Fiverr" href="https://es.fiverr.com/soto_yoshua33?public_mode=true" target="_blank" hoverColor="#1dbf73" />
                    <LinkButton icon={<GlobeIcon />} text="Portfolio" href="" />
                </motion.div>

                {/* Social Contact Section */}
                <motion.div variants={containerVariants} className="flex items-center space-x-6 mt-10">
                    <IconButton icon={<WhatsappIcon />} href="#" label="WhatsApp" hoverColor="#25d366" />
                    <IconButton icon={<GmailIcon />} href="#" label="Gmail" hoverColor="#ea4335" />
                    <IconButton icon={<GithubIcon />} href="https://github.com/YoshuaSoto95?tab=repositories" target="_blank" label="GitHub" hoverColor="#ffffff" />
                </motion.div>
            </div>
        </motion.main>
    );
};

export default PortfolioPage;