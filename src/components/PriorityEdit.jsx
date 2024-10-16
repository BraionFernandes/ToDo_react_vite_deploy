import React,{ useState, useEffect } from "react";

export default function PriorityEdit(props){
    const [priority,setPriority]=useState('');
    useEffect(() => {
        if (priority) {
            const updatedDados = props.dados.map(dado => {
                if (dado.id === props.priorityEdit.id) {
                    return {
                        ...dado,
                        priority,
                    };
                }
                console.log(props.priorityEdit);
                console.log(dado);
                return dado;
            });
            console.log(updatedDados);
            props.setDados(updatedDados);
            props.setPriorityEdit(null);
            setPriority('');
        }
    }, [priority]);
    
    return(
        <>
            {props.priorityEdit &&(
                <div className="priority-editor">
                    <div className="priority-container">
                        <div className='editor-close'>
                            <button className='editor-close-button material-symbols-outlined' onClick={()=> props.setPriorityEditClose(true)}>
                                close
                            </button>
                        </div>
                        <div className="priority-editor-buttons">
                            <button className="priority-editor-critico" onClick={() => setPriority('Critico')}>Critico</button>
                            <button className="priority-editor-alta" onClick={() => setPriority('Alta')}>Alta</button>
                            <button className="priority-editor-media" onClick={() => setPriority('Media')}>Media</button>
                            <button className="priority-editor-baixa" onClick={() => setPriority('Baixa')}>Baixa</button>
                            <button className="priority-editor-semPrioridade" onClick={() => setPriority('Sem prioridade')}>Sem prioridade</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}