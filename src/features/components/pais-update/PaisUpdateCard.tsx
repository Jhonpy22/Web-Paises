import { PaisErrores } from "../../paises/models/types/PaisErrores";
import { Pais } from "../../paises/models/types/Pais";
import '../../styles/FormularioGlobal.css'

type PaisUpdateProps = {
    pais: Pais;
    setPais: (value: Pais) => void;
    errores: PaisErrores;
    setPaisErrores: React.Dispatch<React.SetStateAction<PaisErrores>>;
    actualizar: () => void;
}

const FormUpdatePais = ({pais, setPais, errores, actualizar, setPaisErrores}: PaisUpdateProps) =>{

    return(
        <form onSubmit={(e) => {e.preventDefault(); actualizar();}} className="formulario">
            <div className="campo">
                <label htmlFor="imageURL" className="label">Imagen del país*</label>

                    <input 
                        id="imageURL"
                        type="text"
                        className="input"
                        value={pais.imageURL ?? ''}
                        onChange={(e)=>{setPais({...pais, imageURL: e.target.value})//spread(..pais) para no perder el id o los demás campos
                                if (errores.imageURL) {
                                    setPaisErrores((prev:PaisErrores)=>({
                                        ...prev,
                                        imageURL:'',
                                    })); 
                                }
                            }   
                        } 
                    placeholder="Digite la URL del pais"
                    />
                    {errores.imageURL && (<p className="text">{errores.imageURL}</p>)}
            </div>
            <div className="campo"> 
                <label htmlFor="nombrePais" className="label">Nombre del país*</label>
                    <input 
                        id="nombrePais"
                        type="text"
                        className="input"
                        value={pais.nombrePais ?? ''}
                        onChange={(e)=>{setPais({...pais, nombrePais: e.target.value})//spread(..pais) para no perder el id o los demás campos
                                if (errores.nombrePais) {
                                    setPaisErrores((prev:PaisErrores)=>({
                                        ...prev,
                                        nombrePais:'',
                                    })); 
                                }
                            }   
                        } 
                    placeholder="Digite el nombre Pais"
                    />
                    {errores.nombrePais && (<p className="text">{errores.nombrePais}</p>)}
            </div>
            <div className="campo">
                <label htmlFor="nombreCapital" className="label">Nombre de la capital*</label>    
                    <input 
                        id="nombreCapital"
                        type="text"
                        className="input"
                        value={pais.nombreCapital ?? ''}
                        onChange={(e) => {setPais({...pais, nombreCapital: e.target.value})
                            if (errores.nombreCapital) {
                                setPaisErrores((prev:PaisErrores)=>({
                                    ...prev,
                                    nombrePais:'',
                                })); 
                            }
                        }}
                        placeholder="Digite el nombre de la Capital"
                    />
                    {errores.nombreCapital && (<p className="text">{errores.nombreCapital}</p>)}
            </div>
            <button type="submit" className="submitBtn">Editar Pais</button>
        </form>
    )
}

export default FormUpdatePais;