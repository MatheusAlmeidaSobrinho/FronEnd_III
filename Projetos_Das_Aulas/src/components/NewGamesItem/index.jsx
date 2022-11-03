export function NewGamesItem (props) {
  return(
    <div className="newGame">
      <div className="imgNewGame">
        <img src={props.item.picture} />
      </div>
      <div className="flexTextoPrice">
        <div className="textoNewGame">
          <p>{props.item.name}</p>
          <p>{props.item.plataforms}</p>
          <p>{props.item.categories}</p>
          
        </div>
        <div className="priceNewGame">
          <p>{props.item.price}</p>
        </div>
      </div>
    </div>
  )
}