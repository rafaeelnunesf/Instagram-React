export default function Stories() {
    const imgsStorys = [
        {imgstory:"Assets/9gag 1.png", title:"9gag"},
        {imgstory:"Assets/meowed 1.png", title:"meowed"},
        {imgstory:"Assets/barked 1.png", title:"barked"},
        {imgstory:"Assets/nathanwpylestrangeplanet 1.png",title:"nathanwpyle..."},
        {imgstory:"Assets/wawawiwacomicsa 1.png",title:"wawawiwac..."},
        {imgstory:"Assets/respondeai 1.png",title:"respondeai"},
        {imgstory:"Assets/filomoderna 1.png",title:"filomoderna"},
        {imgstory:"Assets/memeriagourmet 1.png",title:"memeriago."}
    ]
    return(
    <div class="stories">
        {imgsStorys.map(({title, imgstory })=><PerfilStories titleStory={title} imgStory={imgstory} />)}
    </div>
    )
}
function PerfilStories({imgStory, titleStory}){
    return(
        <div class="perfil-stories">
          <img class="backgrounds" src="Assets/stories_background.jpg" />
          <img class="perfil-imagem" src={imgStory} />
          <h1>{titleStory}</h1>
        </div>
    )
}