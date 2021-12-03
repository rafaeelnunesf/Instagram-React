export default function Footer(){
    const iconNames = ["home","search-outline","add-circle-outline","heart-outline","person-outline"]
    return(
        <footer>
            {iconNames.map((item)=> <ion-icon class="icon-footer" name={item}></ion-icon>)}
        </footer>
    )
}