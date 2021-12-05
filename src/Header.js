export default function Header(){
    return(
        <header>
            <div>
                <ion-icon class="logo-instagram" name="logo-instagram"></ion-icon>
                <div class="linha-vertical"></div>
                <img src="Assets/logo.png"/>
            </div>
            <div class="barra-de-pesquisa">Pesquisar</div>
            <Icons/>
        </header>
    )
}
function Icons() {
    const iconNames = ["paper-plane-outline","compass-outline","heart-outline","person-outline"]
    return(
        <div>
            {iconNames.map((item)=><ion-icon name={item}></ion-icon>)}
        </div>
    )
}