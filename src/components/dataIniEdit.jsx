import React,{ useState } from "react";

export default function DataIniEdit(props){
    const [dataIni,setDataIni]=useState('');
    
    const addElemento=(dataIni)=>{
        const updatedDados = props.dados.map(dado => {
            if (dado.id === props.dataIniEdit[0].id) {
                return {
                    ...dado,
                    dataIni,
                };
            }
            return dado;
        });
        props.setDados(updatedDados);
        props.setDataIniEdit('');
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!dataIni) return;
        addElemento(dataIni);
        setDataIni("");
    }
    return(
        <>
            {props.dataIniEdit && props.dataIniEdit.length > 0 &&(
                <div className="dataIni-editor">
                    <div className="dataIni-container">
                        <div className='dataIni-close'>
                            <button className='dataIni-close-button material-symbols-outlined' onClick={()=> props.setDataIniEditClose(true)}>
                                close
                            </button>
                        </div>
                        <div className="dataIni-editor-formDiv">
                            <form onSubmit={handleSubmit} className="dataIni-editor-form">
                                <input className='dataIni-editor-form-input' type="date" name='tarefaDataIni' id='tarefaDataIni' value={dataIni}  onChange={(e)=>setDataIni(e.target.value)}/>
                                <input type="submit" className='dataIni-editor-form-inputSubmit' value="Alterar" />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}