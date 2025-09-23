
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
    onFinished: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onFinished, 500); // Wait half a second before disappearing
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <motion.div
            className="fixed inset-0 bg-[var(--black)] flex flex-col justify-center items-center z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <div className="w-3/4 max-w-lg text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-[var(--terciary)] mb-4 tracking-widest">
                    INITIALIZING INTERFACE
                </h2>
                <div className="w-full bg-gray-800/50 rounded-full h-4 backdrop-blur-sm border border-gray-700">
                    <motion.div
                        className="h-4 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--terciary)]"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: 'linear', duration: 0.05 }}
                    />
                </div>
                <p className="mt-4 text-lg text-white/80">{progress}%</p>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
