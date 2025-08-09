// src/components/BlockchainContent.tsx

const BlockchainContent = () => {
    return (
        <div className="blockchain-content">
            <h2>¿Qué es Blockchain?</h2>
            <section id="introduccion">
                <h2>Blockchain: La Tecnología que Está Cambiando las Reglas del Juego</h2>
                <p>
                    Imagina mover dinero, información o cualquier activo digital a cualquier parte del mundo,
                    en segundos y sin intermediarios. Esa es la promesa de <strong>Blockchain</strong>.
                </p>
                <p>
                    No se trata solo de una innovación tecnológica. Es una nueva forma de confiar, almacenar y
                    transferir valor,
                    con un nivel de seguridad y transparencia que antes parecía imposible.
                </p>
            </section>

            <section id="que-es">
                <h2>¿Qué es Blockchain?</h2>
                <p>
                    Es un sistema de <strong>registro digital descentralizado</strong> que conecta a miles de
                    participantes en una red
                    para almacenar información de forma segura, transparente e inmutable, sin depender de una autoridad
                    central.
                </p>
                <p>
                    En lugar de que un banco, una empresa o una institución controlen los datos,
                    <strong>todos los usuarios validan y verifican la información</strong>, garantizando que sea
                    legítima.
                </p>
            </section>

            <section id="como-funciona">
                <h2>¿Cómo Funciona?</h2>
                <ul>
                    <li><strong>Bloques:</strong> Contienen transacciones e información.</li>
                    <li><strong>Hash criptográfico:</strong> Un código único que protege cada bloque.</li>
                    <li><strong>Cadena:</strong> Cada bloque está conectado al anterior, formando un historial imposible
                        de alterar.
                    </li>
                    <li><strong>Red distribuida:</strong> Todos los nodos tienen una copia sincronizada del registro.
                    </li>
                </ul>
                <p>
                    Esta arquitectura hace que modificar un dato sea prácticamente imposible,
                    ya que requeriría cambiar toda la cadena y convencer a la mayoría de la red.
                </p>
            </section>

            <section id="por-que-importa">
                <h2>¿Por Qué Importa Blockchain?</h2>
                <p>
                    Blockchain resuelve problemas que han existido por décadas:
                </p>
                <ul>
                    <li>Falta de transparencia en transacciones.</li>
                    <li>Dependencia de intermediarios costosos e ineficientes.</li>
                    <li>Vulnerabilidad de datos frente a ataques o fraudes.</li>
                </ul>
                <p>
                    Con Blockchain, la información es pública, verificable y segura,
                    pero la identidad de los usuarios permanece protegida.
                </p>
            </section>

            <section id="aplicaciones">
                <h2>Aplicaciones Reales</h2>
                <ul>
                    <li><strong>Finanzas descentralizadas (DeFi):</strong> Préstamos, pagos e inversiones sin bancos.
                    </li>
                    <li><strong>Cadena de suministro:</strong> Rastrear productos desde el origen hasta el cliente
                        final.
                    </li>
                    <li><strong>Identidad digital:</strong> Documentos y credenciales seguras que funcionan en cualquier
                        parte del mundo.
                    </li>
                    <li><strong>Contratos inteligentes:</strong> Acuerdos que se ejecutan automáticamente al cumplirse
                        las condiciones.
                    </li>
                    <li><strong>Propiedad intelectual y NFTs:</strong> Certificación y venta de activos digitales
                        únicos.
                    </li>
                    <li><strong>Votaciones seguras:</strong> Elecciones transparentes y verificables.</li>
                </ul>
            </section>

            <section id="criptomonedas">
                <h2>Criptomonedas: El Caso Más Conocido</h2>
                <p>
                    Las criptomonedas, como <strong>Bitcoin</strong> o <strong>Ethereum</strong>, son la aplicación más
                    visible de Blockchain.
                    Funcionan como dinero digital que puede enviarse a cualquier parte del mundo sin bancos.
                </p>
                <p>
                    Sus ventajas:
                </p>
                <ul>
                    <li>Operan 24/7 en todo el mundo.</li>
                    <li>No requieren intermediarios.</li>
                    <li>Transparencia total en transacciones.</li>
                    <li>Protección contra la inflación mediante emisión controlada.</li>
                </ul>
            </section>

            <section id="mineria">
                <h2>Minería: Cómo se Mantiene Segura la Red</h2>
                <p>
                    La minería es el proceso mediante el cual miles de computadoras compiten para validar transacciones
                    y agregar nuevos bloques a la cadena.
                    Los mineros reciben criptomonedas como recompensa por mantener la red segura y operativa.
                </p>
            </section>

            <section id="conclusion">
                <h2>Conclusión</h2>
                <p>
                    Blockchain no es una moda pasajera. Es una <strong>revolución tecnológica</strong> que
                    está cambiando cómo confiamos, cómo nos conectamos y cómo intercambiamos valor.
                </p>
                <p>
                    Desde criptomonedas hasta sistemas de votación, sus aplicaciones ya están transformando industrias
                    y dando más poder a las personas.
                </p>
                <p>
                    El futuro será más descentralizado, transparente y seguro… y Blockchain está en el centro de ese
                    cambio.
                </p>
            </section>


        </div>
    );
};

export default BlockchainContent;