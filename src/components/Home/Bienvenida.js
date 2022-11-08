const Bienvenida = () => {
    return (
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Bienvenid@s a React!</h1>
            <h2>Qué es <strong>React</strong>?</h2>
            <div className="row">
                <div className="col-md-4">
                    <h3>Declarativo</h3>
                    <p style={{textAlign:"justify"}}>React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.</p>
                </div>
                <div className="col-md-4">
                    <h3>Basado en <strong>Componentes</strong></h3>
                    <p style={{textAlign:"justify"}}>Crea componentes encapsulados que manejen su propio estado, y conviértelos en interfaces de usuario complejas.</p>
                </div>
                <div className="col-md-4">
                    <h3>Dispositivos móviles</h3>
                    <p style={{textAlign:"justify"}}>React puede también renderizar desde el servidor usando Node, así como potencializar aplicaciones móviles usando <strong>React Native</strong>.</p>
                </div>
            </div>
        </div>
    )
}

export default Bienvenida;