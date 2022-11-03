export function HalloweenGamesItem (props) {
  return(
    <div className="halloweenGames">
      <img src={props.itemHalloween.picture} />

      <div className="boxComponenteHalloween">
        <div className="textoEsquerdoComponenteHalloween">
          <p>{props.itemHalloween.name}</p>
          <p>{props.itemHalloween.categories}</p>
        </div>
        <div className="textoDireitoComponenteHalloween">
        <p>{props.itemHalloween.oldPrice}</p>
        <p className="newPriceHalloween">{props.itemHalloween.newPrice}</p>
        </div>
      </div>
    </div>
  )
}