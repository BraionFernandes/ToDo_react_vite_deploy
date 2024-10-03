import React,{ useState } from "react";

export default function PriorityEdit(props){
    const [priority,setPriority]=useState('Sem prioridade');
    
    const addElemento=(priority)=>{
        const updatedDados = props.dados.map(dado => {
            if (dado.id === props.priorityEdit[0].id) {
                return {
                    ...dado,
                    priority,
                };
            }
            return dado;
        });
        props.setDados(updatedDados);
        props.setPriorityEdit("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!priority) return;
        addElemento(priority);
        setPriority("");
    }

    return(
        <div className="priority-editor">
            {props.priorityEdit && props.priorityEdit.length > 0 &&(
                <div className="priority-editor-formDiv">
                    <form onSubmit={handleSubmit} className="priority-editor-form">
                        <select className='priority-editor-form-select' name="priority-editor-form-select" id="priority-editor-form-select" value={priority} onChange={(e)=> setPriority(e.target.value)}>
                            <option className='priority-editor-form-option-msg' value="" disabled>Selecione uma prioridade</option>
                            <option className='priority-editor-form-option-critico' value="Critico">Critico</option>
                            <option className='priority-editor-form-option-alta' value="Alta">Alta</option>
                            <option className='priority-editor-form-option-media' value="Media">Média</option>
                            <option className='priority-editor-form-option-baixa' value="Baixa">Baixa</option>
                            <option className='priority-editor-form-option-semPrioridade' value="Sem prioridade">Sem prioridade</option>
                        </select>
                        <input type="submit" className='priority-editor-form-inputSubmit' value="Alterar" />
                    </form>
                </div>
            )}
        </div>
    )
}