import "./ItemListContainer.css"

const ItemListContainer = (props) => {
    return(
        <div className="greetings">
            <p>{props.greeting}</p>
        </div>
    )
}

export default ItemListContainer