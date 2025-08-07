// src/components/ContactForm.tsx

const ContactForm = () => {
    return (
        // Usamos un 'id' aquí para que el enlace de la Navbar funcione
        <section id="contact" className="contact-section">
            <h2>¡Queremos saber tu opinión!</h2>
            <p>Déjanos tus datos y un comentario sobre la tecnología Blockchain.</p>

            <form className="form-container">
                <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="contact">Teléfono (Opcional)</label>
                    <input type="tel" id="contact" name="contact" />
                </div>

                <div className="form-group">
                    <label htmlFor="comment">Tu Comentario</label>
                    <textarea id="comment" name="comment" rows={5} required></textarea>
                </div>

                <button type="submit" className="submit-button">Enviar Comentario</button>
            </form>
        </section>
    );
};

export default ContactForm;