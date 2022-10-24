import './style.css'

export function TerceiraAula () {

  const componentes = 
  [
    {
      title:'Creed', description:'Creed é uma banda que está em hiato desde 2012, que vem do post-grunge norte-americana, originalmente idealizada pelos amigos Scott Stapp e Mark Tremonti, tendo Scott Phillips e Brian Marshall.',
      image:'https://upload.wikimedia.org/wikipedia/pt/9/90/Creed_-_Greatest_Hits.jpg'
    },
    {
      title:'Three Days Grace', description:'Three Days Grace é uma banda de rock canadense formada em 1992 na cidade de Toronto, Ontário. A banda consiste em Matt Walst, Brad Walst, Neil Sanderson e Barry Stock.',
      image:'https://i.ebayimg.com/thumbs/images/g/AQkAAOSw03lY7WbP/s-l300.jpg'
    },
    {
      title:'Muse', description:'Muse é uma banda britânica de rock de Teignmouth, Devon, formada em 1994. O estilo de Muse é um misto de vários gêneros musicais, incluindo rock alternativo, música clássica e eletrônica.',
      image:'https://m.media-amazon.com/images/I/91ZwmJUvFDL._AC_SL1500_.jpg'
    },
    {
      title:'Billie Eilish', description:'Billie Eilish Pirate Baird O Connell, mais conhecida como Billie Eilish, é uma cantora e compositora estadunidense. Ganhou popularidade em 2016, quando lançou o single de estreia "Ocean Eyes" no SoundCloud.',
      image:'https://imgs.capitalfm.com/images/143198?width=1920&crop=16_9&signature=xK9C2_hTxAWWtBJNFradWI9EgzY='
    },
    {
      title:'Serj Tankian', description:'Serj Tankian é um cantor, compositor, poeta, multi-instrumentista e ativista político armeno-americano, mais conhecido por ser o vocalista, tecladista e compositor da banda de metal System of a Down.',
      image:'https://upload.wikimedia.org/wikipedia/pt/6/61/Harakiri_Serj_Tankian.jpg'
    },
    {
      title:'Potato Dancers', description:'Potato Dancers é uma renomada banda vinda da batatolandia, aonde se especializaram na arte da batata, e hoje fazem sucesso com o cantor Potato Fries por todo o mundo.',
      image:'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif'
    }
  ]

  return (
      <main className="mainUm">
        <header>
        <h1>Lista Bandas Favoritas Spotify</h1>
        </header>
        <ul>
            {
              componentes.map(propriedades =>(
                  <li>
                    <h2>{propriedades.title}</h2>
                    <img src={propriedades.image} />
                    <p>{propriedades.description}</p>
                  </li>
              ))
            }
        </ul>
      </main>
  )
}