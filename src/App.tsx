import { useEffect, useState } from 'react';

function App() {
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/api/hello')
            .then(res => res.json())
            .then(data => setMensaje(data.message));
    }, []);

    return (
        <div>
            <h1>{mensaje}</h1>
        </div>
    );
}

export default App;
