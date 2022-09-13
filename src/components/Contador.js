import "../App.css";
import { useState } from "react"

const Contador = ({inicial, stock }) => {

    const [contador, setContador] = useState (inicial);
   

const sumar = () => {
    if (contador < stock){
    setContador (contador + 1)}
}

const restar = () => {
    if (contador > inicial){
    setContador (contador - 1)}
}
const agregar = () => {
    setContador (contador);

        if(contador !== 0){
            alert(`Se han agregado al carrito ${contador} productos`)
            setContador(1);
        }

}
    return(
    <>
        <button className="btn" onClick={()=> sumar ()}>+</button>
        <span>{contador}</span>
        <button className="btn" onClick={()=> restar ()} >-</button>
        <button className="btn" onClick={()=> agregar ()}>Agregar al carrito</button>
        
    </>
    )
    }
    export default Contador;