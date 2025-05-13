import styles from './PaisList.module.css'
import PaisCard from '../../components/pais-card/PaisCard'
import { useGetPais } from '../../paises/hooks/useGetPais'

const PaisList   = () => {
    const {paises, isLoading, error} = useGetPais();//Esto te permite acceder al estado que contiene la lista de usuarios traída de la API


    return(
        <div>
            {isLoading && <p className="loadingText">Está cargando...</p>}
            
            {error && <p className="errorText">Error al cargar pais {error.message}</p>}

            <div className={styles.cardContainer}>
            {/*Por cada pais, se renderiza un componente PaisCard.
            La prop 'pais' se pasa al componente hijo, y se utiliza 'pais.id' como key.*/}
                {paises.map(pais=>(
                    <PaisCard key={pais.id} pais={pais}/>
                ))}
            </div>
        </div>
    )
}
export default PaisList;