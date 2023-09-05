import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return(
        <div className="greetings">
            <p>{props.greetings}</p>
        </div>
    )
}

export default ItemListContainer