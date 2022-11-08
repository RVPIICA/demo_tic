import HolaMundo from "../components/Home/HolaMundo"
import Bienvenida from "../components/Home/Bienvenida"
import HolaMundoNombre from "../components/Home/HolaMundoNombre"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <Bienvenida />
            <Link to='/estado' className="btn btn-primary">Estado de la aplicación</Link>
        </>
    )
}

export default Home