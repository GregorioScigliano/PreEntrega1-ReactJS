
function ItemListContainer (props){
    return (
        <h3 className="texto-greeting">{props.greeting}</h3>
    )
}

ItemListContainer.defaultProps = {
    greeting: "Hola Cliente!",
};

export default ItemListContainer;