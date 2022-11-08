import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const HolaMundoNombre = ({ nombre = '' }) => {
    return (
        <>
            <h1>Hola mundo!! Me llamo: {nombre}</h1>
            <Link to='/estado' className="btn btn-primary">Continuar a estado</Link>
        </>
    )
}

export default HolaMundoNombre