import { useState } from "react"

const Contador = () => {

    const [contador, setContador] = useState(0)

    return (
        <>
            <h1>Este es un ejemplo de un contador</h1>
            <h2>El valor actual del contador es: {contador}</h2>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary" disabled>-1</button>
                <button type="button" class="btn btn-primary" disabled>Reiniciar</button>
                <button type="button" class="btn btn-primary" onClick={() => setContador(val => val + 1)}>+1</button>
            </div>
        </>
    )

}

export default Contador