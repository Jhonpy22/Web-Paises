import { Pais } from '../../paises/models/types/Pais';
import styles  from './PaisDetailsCard.module.css'

type PaisCardDetailsProps={
    pais: Pais;
}

const PaisDetailsCard = ({pais}: PaisCardDetailsProps) => {
    
    return(
        <div className={styles.card}>
                <h2 className={styles.cardTitle}>{pais.nombrePais}</h2>
                {pais.nombreCapital &&
                    <p className={styles.cardText}>
                        <strong>Capital:</strong> {pais.nombreCapital }
                    </p>}

                {pais.imageURL && (
                <div className={styles.cardImgContainer}>
                    <img src={pais.imageURL} alt={`Bandera de ${pais.nombrePais}`} className={styles.cardImg} />
                </div>
                )}    
            
        </div>
    )
}
export default PaisDetailsCard;