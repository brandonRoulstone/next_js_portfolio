import Image from "next/image";
import styles from "./page.module.css";
import UsersUi from "@/components/AllUsers";

export default function Home() {
  return (
    <section className={styles.center}>
      <p className="text_white">Lorem ipsum</p>
      <h1 className="text_white text_2xl">Next Generation UI...</h1>
      <div className="alternate_style">
        {/* <Image className="object-fit img img-fluid" src="https://cdn-images.imagevenue.com/e2/bd/6f/ME18ART6_o.jpg" alt="catImage" height={400} width={500}/> */}
      </div>
      <div class="carousel">
    <a class="carousel-item" href="#one!"><Image src="https://cdn-images.imagevenue.com/e2/bd/6f/ME18ART6_o.jpg" alt="" width={100} height={100} /></a>
    <a class="carousel-item" href="#two!"><Image src="https://cdn-images.imagevenue.com/e2/bd/6f/ME18ART6_o.jpg" alt="" width={100} height={100} /></a>
    <a class="carousel-item" href="#three!"><Image src="https://cdn-images.imagevenue.com/e2/bd/6f/ME18ART6_o.jpg" alt="" width={100} height={100} /></a>
    <a class="carousel-item" href="#four!"><Image src="https://cdn-images.imagevenue.com/e2/bd/6f/ME18ART6_o.jpg" alt="" width={100} height={100} /></a>
    <a class="carousel-item" href="#five!"><Image src="https://cdn-images.imagevenue.com/e2/bd/6f/ME18ART6_o.jpg" alt="" width={100} height={100} /></a>
  </div>
    </section>
  );
}
