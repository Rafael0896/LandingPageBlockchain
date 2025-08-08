// src/components/BlockchainContent.tsx

const BlockchainContent = () => {
    return (
        <div className="blockchain-content">
            <h2>¿Qué es Blockchain?</h2>
            <section id="introduccion">
                <h2>Introducción</h2>
                <p>
                    En un mundo donde la información constituye el activo más valioso y donde la confianza en las
                    instituciones centralizadas se encuentra constantemente cuestionada, surge una tecnología que
                    promete transformar fundamentalmente la manera en que concebimos, almacenamos y transferimos valor.
                </p>
                <p>
                    La tecnología Blockchain no representa simplemente una innovación más en el panorama tecnológico
                    contemporáneo; constituye una revolución paradigmática que está redefiniendo los cimientos mismos de
                    nuestros sistemas de intercambio, verificación y almacenamiento de información.
                </p>
            </section>

            <section id="premisa">
                <h2>Premisa</h2>
                <p>
                    La tecnología Blockchain constituye una revolución tecnológica que transformará fundamentalmente la
                    forma en que almacenamos, verificamos y transferimos información y valor, estableciéndose como la
                    innovación disruptiva más significativa del siglo XXI.
                </p>
            </section>

            <section id="justificacion">
                <h2>Justificación de la Premisa</h2>
                <p>
                    Esta afirmación se fundamenta en la capacidad demostrada de Blockchain para solucionar problemas
                    críticos de confianza, transparencia y centralización que han limitado el desarrollo de sistemas
                    verdaderamente democráticos y eficientes, transformando múltiples sectores económicos y sociales
                    hacia un futuro más descentralizado, seguro y equitativo.
                </p>
            </section>

            <section id="blockchain">
                <h2>¿Qué es Blockchain?</h2>
                <p>
                    La tecnología Blockchain no es una simple innovación, sino una revolución paradigmática que redefine
                    la manera en que concebimos, almacenamos y transferimos valor e información. Se establece como la
                    innovación disruptiva más significativa del siglo XXI.
                </p>
                <p>
                    Fundamentalmente, es un sistema de registro distribuido que permite a una red de participantes
                    mantener un consenso sobre el estado de un libro mayor digital sin necesidad de una autoridad
                    central.
                </p>
                <p>
                    Blockchain busca solucionar problemas críticos de confianza, transparencia y centralización,
                    promoviendo un futuro más seguro, descentralizado y equitativo. Sustituye intermediarios costosos,
                    proporciona verificación independiente y devuelve el control de la información a los usuarios.
                </p>
                <p>
                    Su origen se remonta al 2008 con el whitepaper "Bitcoin: A Peer-to-Peer Electronic Cash System" de
                    Satoshi Nakamoto, que resolvió el problema del doble gasto sin necesidad de intermediarios, abriendo
                    la puerta a las criptomonedas y sistemas descentralizados.
                </p>

                <h3>Estructura Técnica</h3>
                <p>
                    Blockchain es una estructura de datos distribuida que contiene bloques enlazados criptográficamente.
                    Cada bloque incluye un <strong>hash</strong> del bloque anterior, marca temporal y datos de
                    transacción, creando un registro inmutable y transparente.
                </p>
                <p>
                    La <strong>criptografía</strong> es esencial. A través de criptografía de clave pública, los
                    usuarios pueden autorizar transacciones sin revelar información sensible. Algoritmos
                    como <code>SHA-256</code> y curvas elípticas garantizan seguridad y anonimato.
                </p>
                <p>
                    Las funciones <strong>hash</strong> actúan como huellas digitales. Una pequeña modificación genera
                    un hash completamente diferente, asegurando la inmutabilidad de la cadena.
                </p>
                <p>
                    Cada <strong>bloque</strong> contiene transacciones, metadatos y el hash del bloque anterior. Esta
                    conexión crea una dependencia criptográfica que impide alterar datos históricos sin rehacer toda la
                    cadena.
                </p>
                <p>
                    Los bloques enlazados forman una <strong>cadena cronológica</strong> que puede ser verificada por
                    cualquier nodo de la red, eliminando la necesidad de intermediarios.
                </p>

                <h3>Representación de una Red Blockchain</h3>
                <p>
                    En una red distribuida, cada nodo almacena una copia sincronizada del libro mayor. Esta arquitectura
                    descentralizada elimina puntos únicos de falla y garantiza la integridad del sistema.
                </p>
            </section>

            <section id="criptomonedas">
                <h2>Criptomonedas</h2>
                <p>
                    Las criptomonedas son la aplicación más visible de Blockchain. Funcionan como sistemas de
                    intercambio descentralizados, sin necesidad de bancos centrales. Bitcoin ha sido la pionera,
                    operando de forma continua desde 2009.
                </p>
                <p>
                    Ventajas de las criptomonedas:
                </p>
                <ul>
                    <li>Eliminan intermediarios.</li>
                    <li>Permiten transacciones globales 24/7.</li>
                    <li>Garantizan transparencia total.</li>
                    <li>Ofrecen protección ante la inflación con emisión controlada por algoritmos.</li>
                </ul>

                <h3>Minería de Criptomonedas</h3>
                <p>
                    La minería es el proceso mediante el cual se validan transacciones y se aseguran las redes
                    Blockchain. Los mineros compiten resolviendo problemas criptográficos, lo que mantiene la red segura
                    y descentralizada, y les permite recibir nuevas monedas como recompensa.
                </p>
            </section>

            <section id="conclusion">
                <h2>Conclusión</h2>
                <p>
                    Blockchain no es solo una innovación tecnológica; es una nueva forma de concebir la confianza, la
                    propiedad y la transferencia de valor. Sus bases técnicas—criptografía, funciones hash, bloques
                    enlazados y redes distribuidas—representan una transformación profunda en la forma en que operan
                    nuestros sistemas económicos y sociales.
                </p>
                <p>
                    Desde criptomonedas hasta contratos inteligentes, sus aplicaciones ya están revolucionando
                    industrias, democratizando el acceso a servicios y eliminando barreras tradicionales.
                </p>
                <p>
                    El futuro apunta a una sociedad más justa, transparente y descentralizada. Blockchain no solo cambia
                    la tecnología; está cambiando las reglas del juego en la organización social y económica del siglo
                    XXI.
                </p>
            </section>

        </div>
    );
};

export default BlockchainContent;