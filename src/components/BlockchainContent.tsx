// src/components/BlockchainContent.tsx

const BlockchainContent = () => {
    return (
        <div className="blockchain-content">
            <h2>¿Qué es Blockchain?</h2>
            <p>
                Blockchain, o cadena de bloques, es un registro digital distribuido,
                inmutable y compartido. Imagina un libro de contabilidad que no está
                en un solo lugar, sino que miles de copias idénticas se distribuyen
                a través de una red de computadoras.
            </p>

            <h3>Características Clave:</h3>
            <ul>
                <li><strong>Descentralización:</strong> No hay una autoridad central. La red es mantenida por sus participantes.</li>
                <li><strong>Inmutabilidad:</strong> Una vez que un dato se añade a la cadena, es prácticamente imposible modificarlo o eliminarlo.</li>
                <li><strong>Transparencia:</strong> Aunque la identidad de los participantes puede ser anónima, las transacciones suelen ser visibles para todos.</li>
            </ul>

            <p>
                Esta tecnología es la base de las criptomonedas como Bitcoin y Ethereum,
                pero sus aplicaciones van mucho más allá, incluyendo contratos inteligentes,
                gestión de la cadena de suministro, votaciones seguras y mucho más.
            </p>
        </div>
    );
};

export default BlockchainContent;