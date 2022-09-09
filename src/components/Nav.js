import '../App.css';
import { BsCartFill } from "react-icons/bs";
const Nav = () =>{
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-ligth shadow">
    <div className="container">
      <a className="navbar-brand">JoyShop</a>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div className="navbar-nav">
          <a className="nav-link">Anillos</a>
          <a className="nav-link">Pendientes</a>
          <a className="nav-link">Pulseras</a>
          <a className="nav-link">Collares</a>
        </div>
      </div>
    </div>
    <BsCartFill />
  </nav>
  
  </>

  );
}

export default Nav;