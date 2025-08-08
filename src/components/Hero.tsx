// src/components/Hero.tsx
import { useState } from 'react';
import BlockchainContent from './BlockchainContent';

const Hero = () => {
    // 2. Creamos una variable de estado. Por defecto, el contenido está oculto (false).
    const [showContent, setShowContent] = useState(false);

    // 3. Creamos una función para cambiar el estado cuando se hace clic en el botón.
    const handleLearnMoreClick = () => {
        setShowContent(true); // Cambiamos el estado a true para mostrar el contenido
    };
    return (
        // Cambiamos id="hero" por className="hero-section"
        <section className="hero-section">
            <h1>Descubre el Mundo de Blockchain</h1>
            <p>
                Una introducción a la tecnología descentralizada que está revolucionando
                el futuro de internet, las finanzas y mucho más.
            </p>
            {!showContent && (
                <button className="cta-button" onClick={handleLearnMoreClick}>
                    Aprende Más
                </button>
            )}
            {showContent && <BlockchainContent />}
        </section>
    );
};

export default Hero;