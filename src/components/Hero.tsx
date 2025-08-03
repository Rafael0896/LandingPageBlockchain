// src/components/Hero.tsx

const Hero = () => {
    return (
        // Cambiamos id="hero" por className="hero-section"
        <section className="hero-section">
            <h1>Descubre el Mundo de Blockchain</h1>
            <p>
                Una introducción a la tecnología descentralizada que está revolucionando
                el futuro de internet, las finanzas y mucho más.
            </p>
            {/* Añadimos una clase al botón para darle un estilo único */}
            <button className="cta-button">Aprende Más</button>
        </section>
    );
};

export default Hero;