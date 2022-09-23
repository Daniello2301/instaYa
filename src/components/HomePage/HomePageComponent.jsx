import NavbarComponent from "../navbar/Navbar"
import './HomePageComponent.css'
import {BrowserRouter as Router, Link} from 'react-router-dom';

function HomePageComponent(){
    return(
        <>
            <NavbarComponent/>
            <Home/>
        </>
    )
}

function Home(){
    return(
        <>
        <div>
            <img className="Logo" src="../public/instaya.png" alt="Logo" />
        </div>
        <br/>
        <Link to="/login">
            <button className="Login"type="submit">Iniciar Sesion</button>
        </Link>
        <Link to="/singup">
            <button className="Login"type="submit">Crear Usuario</button>
        </Link>
        </>
  );
}

export default HomePageComponent