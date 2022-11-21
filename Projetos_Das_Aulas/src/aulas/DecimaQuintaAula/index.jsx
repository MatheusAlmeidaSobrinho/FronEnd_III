import { useState } from 'react'

import { DecimaQuintaAulaItem } from '../../components/DecimaQuintaAulaItem'

import './style.scss'

export function DecimaQuintaAula() {

    const [locations, setLocations] = useState([])
    const [cep, setCep] = useState('')

    const [cepError,setcepError] = useState(true)
    const [errorForm, setErrorForm] = useState(false)

    function searchCep(cepRecieved) {

        setCep(cepRecieved)

        if(cepRecieved.length < 8 || cepRecieved.length > 8) {
            setcepError(true)   
            setErrorForm(true)
        } else {
            
            setcepError(false)
            setErrorForm(false)
        }


        if(cepRecieved.length === 8) {

            fetch(`https://viacep.com.br/ws/${cepRecieved}/json/`).then(
                response => {
                    response.json().then(
                        address => {

                            if(address.erro !== undefined) {

                                formError(true)
                                console.log('erro endereço errado')

                            } else {

                                // Deu Sucesso
                                console.log('Existe Endereço')

                                setLocations([...locations, address])

                            }
                        }
                    )
                }
            )

        }

    }



    function deleteLocation(currentLocation) {

        console.log(currentLocation)

    }

    return(

        <div className="decima-quarta-aula-component">

            <form className={errorForm ? 'form-error' : ''} onSubmit={event => searchCep(event)}>

                <h1>Cadastrar endereços</h1>

                <div>
                    <label>Cep</label>
                    <input
                        
                        type="number"
                        value={cep}
                        onChange={event => searchCep(event.target.value)}
                    />
                    {cepError ? (<small>O campo nome deve conter exatamente 8 caracteres</small>) : null}
                </div>

                <button type="submit">Cadastrar</button>

            </form>

            <section className="locations">

                {
                    locations.map(
                        (location, index) => (
                            <DecimaQuintaAulaItem
                                key={index}
                                data={location}
                                onDeleteLocation={currentLocation => deleteLocation(currentLocation)}
                            />
                        )
                    )
                }

            </section>

        </div>

    )

}