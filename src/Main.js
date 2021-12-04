import Aside from "./Aside";
import Posts from "./Posts";
import Stories from "./Stories";

export default function Main(){
    return(
    <main>
      <section>
        <Stories />
        <Posts />
      </section>
      <Aside/>
    </main>
    )
}