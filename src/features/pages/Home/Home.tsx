/*import Footer from "../layout/Footer";*/
import PaisList from "../pais-list/PaisList";
import Footer from "../../layout/Footer/Footer";
import './HomeStyle.css'

const Home = () => (
    <>
        <section className="hero">
            <img src="https://i.ibb.co/5xctFdT9/depositphotos-32468047-stock-illustration-central-america-map.webp" alt="Mundo" className="icono-mundo" />
            <h1>Bienvenido a la App de Países</h1>
            <p>Gestioná países fácilmente. Crea, edita, explora y administra información desde un solo lugar.</p>
        </section>
        <PaisList />
        <Footer />
    </>
);

export default Home;
