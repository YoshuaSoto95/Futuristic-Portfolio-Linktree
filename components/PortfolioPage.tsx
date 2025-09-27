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
    InstagramIcon,
    YouTubeIcon,
    FiverrIcon,
    GlobeIcon,
    WhatsappIcon,
    GmailIcon,
    GithubIcon
} from './Icons';
import ImagenIcon from '../components/asset/image/character.jpeg';
const containerVariants: Variants = {
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
        <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
                backgroundColor: `var(--hover-color)`,
                boxShadow: `0 0 15px var(--hover-color)`
            }}
        />
        <span className="relative z-10">{icon}</span>
    </motion.a>
);

const PortfolioPage: React.FC = () => {
    const description = "Desarrollador Fullstack para cualquier Landing Page, Web o Web App. Desarrollo en React + Typescript usando Framer Motion y Tailwind para dar vida a tus ideas con los mejores diseños estilo Figma para tu Landing Page o Web App.";
    const techIcons = [<JsIcon />, <TsIcon />, <ReactIcon />, <NextIcon />, <TailwindIcon />];

    return (
        <main
            className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden"
        >
            <motion.div
                className="max-w-2xl w-full mx-auto flex flex-col items-center text-center z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
            >
                {/* Profile Section */}
                <motion.div variants={itemVariants}>
                    <div
                        className="gradient-border"
                    >
                        <img
                            src={ImagenIcon}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover"
                        />
                    </div>
                </motion.div>

                <motion.h2 variants={itemVariants} className="text-3xl font-bold mt-6">Yoshua Daniel Soto</motion.h2>
                <motion.h3 variants={itemVariants} className="text-xl text-[var(--terciary)] mt-1">Dann Kloppering</motion.h3>
                <motion.p variants={itemVariants} className="mt-4 text-white/80 max-w-lg">{description}</motion.p>


                {/* Tech Icons */}
                <motion.div variants={itemVariants} className="flex items-center space-x-4 mt-6">
                    {techIcons.map((icon, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.2, transition: { type: 'spring', stiffness: 300 } }}
                        >
                            {icon}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Links Section */}
                <div className="w-full max-w-md mt-10 flex flex-col gap-4">
                    <LinkButton icon={<TikTokIcon />} text="Mi TikTok" href="https://www.tiktok.com/@dannkloppering1" hoverColor="#ff0050" />
                    <LinkButton icon={<InstagramIcon />} text="Mi Instagram" href="https://www.instagram.com/dannkloppering1/" hoverColor="#C13584" />
                    <LinkButton icon={<YouTubeIcon />} text="Tutoriales en YouTube" href="https://www.youtube.com/@dannkloppering" hoverColor="#ff0000" />
                    <LinkButton icon={<FiverrIcon />} text="Mira mis servicios en Fiverr" href="https://es.fiverr.com/soto_yoshua33?public_mode=true" hoverColor="#1dbf73" />
                    <LinkButton icon={<GlobeIcon />} text="Mira mi portafolio" href="#" />
                </div>

                {/* Social Contact Section */}
                <div className="flex items-center space-x-6 mt-10">
                    <IconButton icon={<WhatsappIcon />} href="https://api.whatsapp.com/send/?phone=584164637506&text=Hola%2C+estoy+interesado+en+el+servicio+de+dise%C3%B1o+web.&type=phone_number&app_absent=0" label="WhatsApp" hoverColor="#25d366" />
                    <IconButton icon={<GmailIcon />} href="mailto:yoshuasoto54@gmail.com" label="Gmail" hoverColor="#ea4335" />
                    <IconButton icon={<GithubIcon />} href="https://github.com/YoshuaSoto95?tab=repositories" label="GitHub" hoverColor="#ffffff" />
                </div>
            </motion.div>
        </main>
    );
};

export default PortfolioPage;