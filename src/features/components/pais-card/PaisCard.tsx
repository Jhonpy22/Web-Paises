import styles from './PaisCard.module.css'
import { Pais } from "../../paises/models/types/Pais";

type PaisCardProps={ //Define las props del componente, esperando recibir un objeto 'pais' de tipo 'Pais' para acceder a sus propiedades y renderizarlas.
    pais: Pais
}

const PaisCard = ({pais}: PaisCardProps) =>{ 
    return(
        <article className={styles.card}>
            <header>
                <img src={pais.imageURL} alt={pais.nombrePais} className={styles.img}/>
            </header>
            <section>
                <h3>{pais.nombrePais}</h3>
                <p>Id: {pais.id}</p>
                <p>Capital: {pais.nombreCapital}</p>
            </section>
        </article>
    )
}

export default PaisCard;