import { useState } from "react"

const Formulario = ( {onCreate} ) => {

    const [name, setName] = useState('')

    return (
        <div className="row">
            <div className="col-md-6">
                <input className="form-control" value={name} onChange={ e => setName(e.target.value)} />
            </div>
            <div className="col-md-1"><button className="btn btn-primary" onClick={ () => onCreate(name) }>Guardar</button></div>
        </div>
    )
}

const Table = ({ personas, onDelete }) => {

    if(!personas) {
        return (
            <h2>Todavía no hay personas para mostrar...</h2>
        )
    }

    return (
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>{
                personas.map((persona, key) => {
                        return(
                            <tr key={key}>
                                <td>{persona}</td>
                                <td><button className="btn btn-primary" onClick={(key) => onDelete(key)}>Eliminar</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

const Mantenimiento = () => {

    const [personas, setPersonas] = useState([])

    const onCreatePersona = (name) => {
        setPersonas(oldPersonas => [...oldPersonas, name])
    }

    const onDeletePersona = (key) => {
        var personasFiltradas = [...personas]
        personasFiltradas.splice(key, 1)
        setPersonas(personasFiltradas)
    }

    return (
        <>
            <h1>Mantenimiento</h1>
            <Formulario onCreate={onCreatePersona}/>
            <div className="row mt-4">
                <div className="col-md-7">
                    <Table personas={personas} onDelete={onDeletePersona}/>
                </div>
            </div>
        </>
    )
}

export default Mantenimiento