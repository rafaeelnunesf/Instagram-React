import Aside from "./Aside";

export default function Main(){
    return(
        <main>
      <section>
        <div class="stories">
          <div class="perfil-stories" style={{marginLeft:'18px'}}>
            <img class="backgrounds" src="Assets/stories_background.jpg" />
            <img class="perfil-imagem" src="Assets/9gag 1.png" />
            <h1>9gag</h1>
          </div>

          <div class="perfil-stories">
            <img class="backgrounds" src="Assets/stories_background.jpg" />
            <img class="perfil-imagem" src="Assets/meowed 1.png" />
            <h1>meowed</h1>
          </div>

          <div class="perfil-stories">
            <img class="backgrounds" src="Assets/stories_background.jpg" />
            <img class="perfil-imagem" src="Assets/barked 1.png" />
            <h1>barked</h1>
          </div>

          <div class="perfil-stories">
            <img class="backgrounds" src="Assets/stories_background.jpg" />
            <img
              class="perfil-imagem"
              src="Assets/nathanwpylestrangeplanet 1.png"
            />
            <h1>nathanwpyle...</h1>
          </div>
          <div class="perfil-stories">
            <img class="backgrounds" src="Assets/stories_background.jpg" />
            <img class="perfil-imagem" src="Assets/wawawiwacomicsa 1.png" />
            <h1>wawawiwac...</h1>
          </div>
          <div class="perfil-stories">
            <img class="backgrounds" src="Assets/stories_background.jpg" />
            <img class="perfil-imagem" src="Assets/respondeai 1.png" />
            <h1>respondeai</h1>
          </div>
          <div class="perfil-stories">
            <img class="backgrounds" src="Assets/stories_background.jpg" />
            <img class="perfil-imagem" src="Assets/filomoderna 1.png" />
            <h1>filomoderna</h1>
          </div>
          <div class="perfil-stories">
            <img
              class="backgrounds-8"
              src="Assets/stories_background 8.png"
              style={{width:'33px'}}
            />
            <img class="ultimo-perfil" src="Assets/memeriagourmet 1.png" />
            <h1 class="nome-perfil-8">meme</h1>
          </div>
          <img class="seta-stories" src="Assets/Vector.png" />
        </div>
        <div class="posts">
          <div class="post">
            <div class="header-post">
              <img src="Assets/meowed 2.png" />
              <h2>meowed</h2>
              <h3>...</h3>
            </div>
            <img src="Assets/gato-telefone 1.png" />
            <div class="reactions">
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
              <ion-icon
                class="bookmark-reaction"
                name="bookmark-outline"
              ></ion-icon>
            </div>
            <div class="footer-post">
              <img src="Assets/respondeai 2.png" />
              <h4>
                Curtido por <span>respondeai</span> e
                <span>outras 101.523 pessoas</span>
              </h4>
            </div>
          </div>
          <div class="post">
            <div class="header-post">
              <img src="Assets/barked 2.png" />
              <h2>barked</h2>
              <h3>...</h3>
            </div>
            <img src="Assets/dog 1.png" />
            <div class="reactions">
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
              <ion-icon
                class="bookmark-reaction"
                name="bookmark-outline"
              ></ion-icon>
            </div>
            <div class="footer-post">
              <img src="Assets/adorableanimals 2.png" />
              <h4>
                Curtido por <span>adorable_animals</span> e
                <span>outras 99.159 pessoas</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
      <Aside/>
    </main>
    )
}