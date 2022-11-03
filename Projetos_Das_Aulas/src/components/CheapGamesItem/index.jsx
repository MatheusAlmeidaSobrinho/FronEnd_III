export function CheapGamesItem (props) {
  return(
    <div className="halloweenGames">
      <img src={props.itemCheap.picture} />

      <div className="boxComponenteHalloween">
        <div className="textoEsquerdoComponenteHalloween">
          <p>{props.itemCheap.name}</p>
          <p>{props.itemCheap.categories}</p>
        </div>
        <div className="textoDireitoComponenteHalloween">
        <p>{props.itemCheap.oldPrice}</p>
        <p className="newPriceHalloween">{props.itemCheap.newPrice}</p>
        </div>
      </div>
    </div>
  )
}