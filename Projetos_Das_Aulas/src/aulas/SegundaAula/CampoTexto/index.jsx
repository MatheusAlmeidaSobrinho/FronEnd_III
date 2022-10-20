import './CampoTexto.css'

export const CampoTexto = props => {
  const placeholderModificada = `${props.placeholder}...` // chamando por variavel
  // poderia por direto do input usando ``

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={placeholderModificada}></input>
    </div>
  )
}

