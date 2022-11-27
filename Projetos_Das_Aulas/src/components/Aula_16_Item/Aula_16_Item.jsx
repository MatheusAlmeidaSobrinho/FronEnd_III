import './style.scss'

export function Aula_16_Item(props) {
  return (
    <div className="decima-sexta-aula-item">
      <div className="setor-IdAndUser">
        <h2>Id: {props.data.id}</h2>
        <h2>User: {props.data.userId}</h2>
      </div>
      <h1>Title: {props.data.title}</h1>
    </div>
  )
}
