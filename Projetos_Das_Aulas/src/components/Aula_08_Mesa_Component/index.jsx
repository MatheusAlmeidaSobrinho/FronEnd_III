import './style.scss'

export function Aula_08_Mesa_Component(props) {

    return (

        <div className="oitava-aula-card-component" style={{backgroundColor:props.productData.color}}>
            <img src={props.productData.image} />
            <h1>{props.productData.pokemon}</h1>
            <div className="card-body">
                <p>{props.productData.name}</p>
                <p>{props.productData.age}</p>
            </div>
        </div>

    )

}