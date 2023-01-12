
function ItemListContainer (props){
    return (
        <h3>{props.greeting}</h3>
    )
}

ItemListContainer.defaultProps = {
    greeting: "Hola Cliente!",
};

export default ItemListContainer;