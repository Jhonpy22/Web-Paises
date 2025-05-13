import { PaisErrores } from '../../paises/models/types/PaisErrores';
import {PaisForm} from '../../paises/models/types/PaisForm'


type PaisCreateProps={
    paisFormState: PaisForm;
    setPaisFormState: React.Dispatch<React.SetStateAction<PaisForm>>;
    errores: PaisErrores;
    setPaisErrores: React.Dispatch<React.SetStateAction<PaisErrores>>;
    enviar: () => void;
}

const FormularioPais = ({setPaisFormState,paisFormState, enviar, errores, setPaisErrores}:PaisCreateProps)=>{
    return(
        <form onSubmit={(e) => {e.preventDefault(); enviar();}} className="formulario">
            <div className="campo">
                <label htmlFor="imageURL" className="label">Imagen del país*</label>
                    <input
                        id='imageURL'
                        type="text"
                        className="input"
                        value={paisFormState.imageURL ?? ''} 
                        onChange={(e)=>{setPaisFormState({...paisFormState, imageURL: e.target.value})
                            if(errores.imageURL){
                                setPaisErrores((prev: PaisErrores) =>({
                                    ...prev,
                                    imageURL:'',
                                }));
                            }
                        }}

                        placeholder="Digite la URL del pais"
                        />
                    {errores.imageURL && (<p className="text">{errores.imageURL}</p>)}
            </div>
            <div className="campo">
                <label htmlFor="nombrePais" className="label">Nombre del país*</label>
                <input
                    id='nombrePais'
                    type="text" 
                    className="input"
                    value={paisFormState.nombrePais ?? ''} 
                    onChange={(e)=>{setPaisFormState({...paisFormState, nombrePais: e.target.value})
                            if (errores.nombrePais) {
                                setPaisErrores((prev: PaisErrores) =>({ 
                                    ...prev,
                                    nombrePais: '',
                                 })); //Limpia el error al corregir
                            }
                    }}      
                    placeholder="Digite el nombre del pais"
                    />
                {errores.nombrePais &&( <p className="styles.text">{errores.nombrePais}</p>)}
            </div>
            <div className="campo">
                <label htmlFor="nombreCapital" className="label">Nombre de la Capital*</label>
                <input 
                    id='nombreCapital'
                    type="text"
                    className="input"
                    value={paisFormState.nombreCapital ?? ''} 
                    onChange={(e)=>{setPaisFormState({...paisFormState, nombreCapital: e.target.value})
                        if(errores.nombreCapital){
                            setPaisErrores((prev: PaisErrores) =>({
                                ...prev,
                                nombreCapital:'',
                            }));
                        }
                    }}

                    placeholder="Digite el nombre de la capital"
                    />
                {errores.nombreCapital && (<p className="text">{errores.nombreCapital}</p>)}
            </div>
            <button type="submit" className="submitBtn">Crear Pais</button>
        </form>
    )

}
export default FormularioPais;