export function QuintaAulaItem (props) {
  return(
    <li key={props.item.id}>
      <img src={props.item.image} />
      <h2>{props.item.title}</h2>
      <p>{props.item.text}</p>
      <p>{props.item.views}</p>
    </li>
  )
}