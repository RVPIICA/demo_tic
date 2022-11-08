import { useState } from "react"

const Operaciones = () => {

    const [primerValor, setPrimerValor] = useState(0)
    const [segundoValor, setSegundoValor] = useState(5)
    const [operacion, setOperacion] = useState('+')
    const [resultado, setResultado] = useState(null)

    //Función que se ejecuta al precionar el botón
    const onEjecutar = () => {
        switch (operacion) {
            case '+':
                setResultado(primerValor + segundoValor)
                break
            default:
                break;
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-md-1">
                    <input type="number" value={primerValor} onChange={e => setPrimerValor(parseInt(e.target.value))} className="form-control" />
                </div>
                <div className="col-md-1">
                    <select className="form-select" value={operacion} disabled>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="x">x</option>
                    </select>
                </div>
                <div className="col-md-1">
                    <input type="number" value={segundoValor} className="form-control" disabled/>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick={() => onEjecutar()}>Ejecutar</button>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    {resultado? <h3>El resultado es <strong>{resultado}</strong></h3> : <h3>Todavía no hay resultado</h3>}
                </div>
            </div>
        </>
    )

}

export default Operaciones