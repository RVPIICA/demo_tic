import { Button } from "react-bootstrap"

const HolaMundoNombre = ({ nombre = '' }) => {
    return (
        <>
            <h1>Hola mundo!! Me llamo: {nombre}</h1>
        </>
    )
}

export default HolaMundoNombre