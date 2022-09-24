import NavbarComponent from "../navbar/Navbar"
import './HomePageComponent.css'
import { Link} from 'react-router-dom';

import logo from '../../assets/logo.png'
function HomePageComponent(){
    return(
        <>
            <NavbarComponent/>
            <div>
                <Home/>
            </div>

        </>
    )
}

function Home(){

    return(
        <>
        <div>
            <img className="Logo" src={logo} alt="Logo" />
        </div>
        <br/>
        <Link to="/login">
            <button className="Login"type="submit">Iniciar Sesion</button>
        </Link>
        <Link to="/Signup">
            <button className="Login"type="submit">Crear Usuario</button>
        </Link>
        </>
  )
}

export default HomePageComponent