import React,{ useState } from "react";

export default function DataTerEdit(props){
    const [dataTer,setDataTer]=useState('');
    
    const addElemento=(dataTer)=>{
        const updatedDados = props.dados.map(dado => {
            if (dado.id === props.dataTerEdit[0].id) {
                return {
                    ...dado,
                    dataTer,
                };
            }
            return dado;
        });
        props.setDados(updatedDados);
        props.setDataTerEdit('');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!dataTer) return;
        addElemento(dataTer);
        setDataTer("");
    }
    return(
        <>
            {props.dataTerEdit && props.dataTerEdit.length > 0 &&(
                <div className="dataTer-editor">
                    <div className="dataTer-container">
                        <div className='dataTer-close'>
                            <button className='dataTer-close-button material-symbols-outlined' onClick={()=> props.setDataTerEditClose(true)}>
                                close
                            </button>
                        </div>
                        <div className="dataTer-editor-formDiv">
                            <form onSubmit={handleSubmit} className="dataTer-editor-form">
                                <input className='dataTer-editor-form-input' type="date" name='tarefaDataTer' id='tarefaDataTer' value={dataTer}  onChange={(e)=>setDataTer(e.target.value)}/>
                                <input type="submit" className='dataTer-editor-form-inputSubmit' value="Alterar" />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
        
    )
}