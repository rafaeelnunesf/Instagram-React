export default function Aside(){
  const perfilsugestao = [
    {
    img:"Assets/badvibesmemes 1.png",
    h1:"bad.vibe.memes"
    },
    {
    img:"Assets/chibirdart 1.png",
    h1:"chibirdat"
    },
    {
    img:"Assets/razoesparaacreditar 1.png",
    h1:"razoesparaacreditar"
    },
    {
    img:"Assets/adorableanimals 1.png",
    h1:"adorable_animals"
    },
    {
    img:"Assets/smallcutecats 1.png",
    h1:"smallcutecats"
    }
  ]

    return(
      <aside>
        <section class="perfil">
          <img src="Assets/catanacomics 1.png" />
          <h1>catanacomics</h1>
          <h2>Catana</h2>
        </section>
        <section class="sugestoes">
          <div class="cabecalho">
            <h1>Sugestões para você</h1>
            <h2>Ver tudo</h2>
          </div>
          <section class="perfis">
            {perfilsugestao.map((item)=><PerfilSugestao img={item.img} h1={item.h1}/>)}
          </section>
        </section>
        <div class="informacoes">
          <h1>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </h1>
          <h2>© 2021 INSTAGRAM DO FACEBOOK</h2>
        </div>
      </aside>
    )
}
function PerfilSugestao(props) {
  return(
      <div class="perfil-sugestao">
        <img src={props.img} />
        <h1>{props.h1}</h1>
        <h2>Segue você</h2>
        <h3>Seguir</h3>
      </div>
  )
}