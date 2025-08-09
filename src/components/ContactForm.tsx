// src/components/ContactForm.tsx

import React, { useState } from 'react';
import axios from 'axios'; // 1. Importamos las herramientas necesarias

const ContactForm = () => {
    // 2. Creamos el estado para guardar los datos del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        comment: '',
    });

    // Estado para mostrar mensajes al usuario (éxito, error.)
    const [statusMessage, setStatusMessage] = useState('');

    // 3. Función que se ejecuta cada vez que el usuario escribe algo
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // Actualizamos el estado con el nuevo valor del campo que se está modificando
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // 4. Función que se ejecuta al enviar el formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita que la página se recargue
        setStatusMessage('Enviando...'); // Informamos al usuario

        try {
            // Hacemos la petición POST a nuestro backend con los datos del formulario
            // La URL debe coincidir con la que definiste en server.js
            const response = await axios.post('http://localhost:5002/api/comments', formData);

            // Si todo sale bien...
            setStatusMessage('¡Comentario enviado con éxito!');
            console.log('Respuesta del servidor:', response.data);

            // Limpiamos el formulario
            setFormData({
                name: '',
                email: '',
                contact: '',
                comment: '',
            });

        } catch (error) {
            // Si hay un error...
            setStatusMessage('Hubo un error al enviar el comentario. Por favor, inténtalo de nuevo.');
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <h2>¡Queremos saber tu opinión!</h2>
            <p>Déjanos tus datos y un comentario sobre la tecnología Blockchain.</p>

            {/* 5. Conectamos la función handleSubmit al evento onSubmit del formulario */}
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre Completo</label>
                    {/* Conectamos cada input al estado con 'value' y 'onChange' */}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contact">Teléfono (Opcional)</label>
                    <input
                        type="tel"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="comment">Tu Comentario</label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows={5}
                        value={formData.comment}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-button">Enviar Comentario</button>

                {/* 6. Mostramos el mensaje de estado al usuario */}
                {statusMessage && <p className="status-message">{statusMessage}</p>}
            </form>
        </section>
    );
};

export default ContactForm;