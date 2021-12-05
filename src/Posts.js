export default function Posts() {
    const infoPosts = [
        {nomePerfil:"meowed", fotoPerfil:"Assets/meowed 2.png", fotoPost: "Assets/gato-telefone 1.png", fotoCurtidor:"Assets/respondeai 2.png",nomeCurtidor:"respondeai"  },
        {nomePerfil:"barked", fotoPerfil:"Assets/barked 2.png" , fotoPost: "Assets/dog 1.png", fotoCurtidor:"Assets/adorableanimals 2.png",nomeCurtidor:"adorable_animals" }

    ]
    const iconNames = ["heart-outline","chatbubble-outline","paper-plane-outline","bookmark-outline"]
    return(
        <div class="posts">
            {infoPosts.map(({nomePerfil,fotoPerfil,fotoPost,fotoCurtidor,nomeCurtidor})=><Post nomePerfil={nomePerfil} fotoPerfil={fotoPerfil} fotoPost = {fotoPost} fotoCurtidor = {fotoCurtidor} nomeCurtidor={nomeCurtidor}/>)}
            <div class="post">
              <div class="header-post">
                <img src="Assets/meowed 2.png" />
                <h2>meowed</h2>
                <h3>...</h3>
              </div>
              
              <video loop autoPlay muted>
                <source src="Assets/video.mp4"/>
                <source src="Assets/video.ogv"/>
              </video>

              <div class="reactions">
                  {iconNames.map((item)=> <ion-icon name={item}></ion-icon>)}
              </div>
              <div class="footer-post">
                <img src="Assets/respondeai 2.png" />
                <h4>
                  Curtido por <span>respondeai</span> e
                  <span>outras 101.523 pessoas</span>
                </h4>
              </div>
            </div>
        </div>
    )
}
function Post({nomePerfil,fotoPerfil,fotoPost,fotoCurtidor,nomeCurtidor}){
    const iconNames = ["heart-outline","chatbubble-outline","paper-plane-outline","bookmark-outline"]

    return(
    <div class="post">
        <div class="header-post">
          <img src={fotoPerfil} />
          <h2>{nomePerfil}</h2>
          <h3>...</h3>
        </div>
        <img src={fotoPost} />
        <div class="reactions">
            {iconNames.map((item)=> <ion-icon name={item}></ion-icon>)}
        </div>
        <div class="footer-post">
          <img src={fotoCurtidor} />
          <h4>
            Curtido por <span>{nomeCurtidor}</span> e
            <span>outras 101.523 pessoas</span>
          </h4>
        </div>
      </div>
    )
}