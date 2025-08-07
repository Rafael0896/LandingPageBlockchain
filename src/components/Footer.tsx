// src/components/Footer.tsx

const Footer = () => {
    // Obtenemos el año actual dinámicamente
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-content">
                <p>&copy; {currentYear} Blockchain Explained. Todos los derechos reservados.</p>
                <div className="footer-socials">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;