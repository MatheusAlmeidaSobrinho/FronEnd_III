import { useState } from 'react'
import './style.scss'
import { Aula_07_Mesa_Card } from "../../components/Aula_07_Mesa_Card"

export function Aula_08() {

    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productImage, setProductImage] = useState('')

    const [allProducts, setAllProducts] = useState([
        {
            id: 1,
            name: 'Xbox',
            price: '3.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
        },
        {
            id: 2,
            name: 'Playstation 5',
            price: '5.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
        },
        {
            id: 3,
            name: 'Switch',
            price: '2.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
        }
    ])

    const newProduct = {
        name: 'Playstation 4',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

    function addNewProduct() {

        setAllProducts([...allProducts, newProduct])

    }

    function registerProduct(event) {
      event.preventDefault()
      
      const newRegisterProduct = {
        name: productName,
        price: productPrice,
        image: productImage

      }

      setAllProducts([...allProducts, newRegisterProduct])

      setProductName('')
      setProductPrice('')
      setProductImage('')
    }

    return (

        <main className="setima-aula-component">

            <div className="tittle-wrapper">
                <h1>Produtos</h1>
                <button onClick={addNewProduct}>Adicionar novo produto</button>
            </div>

            <form onSubmit={event => registerProduct(event)}>
              <div>
                <label htmlFor="nomeProduto">Nome produto</label>
                <input type="text"  value={productName} onChange={event => setProductName(event.target.value)}/>
              </div>
              <div>
                <label htmlFor="precoProduto">Preço produto</label>
                <input type="text"  value={productPrice} onChange={event => setProductPrice(event.target.value)}/>
              </div>
              <div>
                <label htmlFor="imagemProduto">Imagem produto</label>
                <input type="text"  value={productImage} onChange={event => setProductImage(event.target.value)}/>
              </div>

              <button type='submit'>Cadastrar Produto</button>
              <button type='reset'>batata</button>
            </form>

            <section className='products'>
                {
                    allProducts.map(
                        product => {
                            return (
                                <Aula_07_Mesa_Card
                                    productData={product}
                                />
                            )
                        }
                    )
                }
            </section>

        </main>

    )

}