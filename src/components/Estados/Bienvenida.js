const Bienvenida = () => {
    return (
        <div class="container-fluid py-5">
            <h1>Qué es <strong>el estado de un componente</strong>?</h1>
            <div className="row">
                <div className="col-md-12">
                    <p>El estado me permite almacenar datos dentro de un componente, cada vez que cambiamos el estado de un componente el mismo se vuelve a renderizar (se actualiza).</p>
                </div>
            </div>
        </div>
    )
}

export default Bienvenida;