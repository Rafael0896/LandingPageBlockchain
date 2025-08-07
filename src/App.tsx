// src/App.tsx

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css'; // Asegúrate que la ruta a tu CSS principal sea correcta

function App() {
    return (
        // Usamos un "Fragment" (<>) para agrupar los componentes
        <>
            <Navbar />
            <main>
                <Hero />
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}

export default App;