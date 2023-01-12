import '../mi-css.css';
import cart from '../img/cart.png';


function CartWigdet(){
    return (
        <div className="mi-div">
            <img className='mi-img' src={cart} alt="carrito"/>
            <h3 className='carrito-texto'>12 Elementos</h3>
        </div>
    )
}

export default CartWigdet;