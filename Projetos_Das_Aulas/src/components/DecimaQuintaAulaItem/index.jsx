import './style.scss'

export function DecimaQuintaAulaItem(props) {
  return (
    <div className="decima-quinta-aula-item">
      <h1>{props.data.localidade}</h1>
      <address>{props.data.uf}</address>
      <h2>{props.data.cep}</h2>
      <button onClick={() => props.onDeleteLocation(props.data)}>
        Deletar
      </button>
    </div>
  )
}
