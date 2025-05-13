import PaisDetailsCard from "../../components/pais-details/PaisDetailsCard";
import { useGetPaisId } from "../../paises/hooks/useGetPaisId";
import { useState } from "react";


const PaisDetails = () => {
    const [inputId, setInputId] = useState<number>(1); // Estado para almacenar el ID del país
    const [id, setId] = useState<number>(1); // Estado para almacenar el ID del país a buscar
    const { pais, isLoading, error} = useGetPaisId(id); 
    const [buscado, setBuscado] = useState(false); 

    const handleBuscar = ()=> {
        if (inputId > 0)
            setId(inputId);
            setBuscado(true);
        
    }


    return (
        <div>
            
            {isLoading && <p className="loadingText">Buscando el pais por Id</p>}

            {error && <p className="errorText">Error al encontrar el país: {error.message}</p>}
            <div className="btninput">
                <input 
                    className="inputBusqueda"
                    type='number' 
                    value={inputId} 
                    onChange={(e)=>setInputId(Number(e.target.value))} //Se utiliza Number ya que el input solo acepta string y se necesita un número para el id
                    placeholder='Ingrese el ID del país'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleBuscar();
                    }} 
                />
                
                <button className="buscarBtn" onClick={handleBuscar} disabled={inputId==0 }>Buscar</button>
            </div>
            <PaisDetailsCard pais={pais}/>

            {buscado  && (!pais || !pais.id) &&(
                <p className="errorText">no se encontró el país con id: {id}</p>
            )}   
        </div>
        
    )
}
export default PaisDetails;