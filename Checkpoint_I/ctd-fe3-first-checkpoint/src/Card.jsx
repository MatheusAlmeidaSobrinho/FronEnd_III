import './cardStyle.css'
//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (

    <div className="checkpoint-component" style={{backgroundColor:props.colorData.color}}>
        <div className="card-body">
            <p>{props.colorData.name}</p>
            <p>{props.colorData.color}</p>
        </div>
    </div>

)
}