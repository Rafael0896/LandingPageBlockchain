// src/components/Navbar.tsx

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-logo">
                <a href="/">Blockchain Explained</a>
            </div>
            <ul className="nav-links">
                <li><a href="#hero" className="nav-item">Inicio</a></li>
                <li><a href="#contact" className="nav-item">Contacto</a></li>
                <li><a href="https://es.react.dev/" target="_blank" rel="noopener noreferrer" className="nav-item">Blog</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;