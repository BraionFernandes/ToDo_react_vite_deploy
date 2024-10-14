import React,{useState} from 'react'

export default function Editor(props){
    const [valor, setValor]=useState('');
    const [status,setStatus]=useState('Nao iniciado');
    const [dataIni,setDataIni]=useState('');
    const [dataTer,setDataTer]=useState('');
    const [priority,setPriority]=useState('Sem prioridade');
    
    const [isEditVisible,setIsEditVisible]=useState(false);
    const [DeletVisible,setDeletVisible]=useState(false);

    const removeElemento=(id)=>{
        const newDados=[...props.dados]
        const filterDados=newDados.filter(dado => dado.id !== id ? dado : null);
        props.setDados(filterDados);
        props.setDadosEdit("");
    }
    const handOpenEdit=()=>{
        setIsEditVisible(true);
    }
    const handCloseEdit=()=>{
        setIsEditVisible(false);
    }
    const handOpenDelet=()=>{
        setDeletVisible(true);
    }
    const handCloseDelet=()=>{
        setDeletVisible(false);
    }
    const addElemento=(text, status, dataIni, dataTer, priority)=>{
        const newDados=[
            ...props.dados,
            {
                id: props.dadosEdit[0].id,
                text,
                status,
                dataIni,
                dataTer,
                priority,
            },
        ];
        props.setDados(newDados);
        props.setDadosEdit("");
    }
    const CloseEditor=()=>{
        const newDados=[
            ...props.dados,
            {
                id: props.dadosEdit[0].id,
                text: props.dadosEdit[0].text,
                status: props.dadosEdit[0].status,
                dataIni: props.dadosEdit[0].dataIni,
                dataTer: props.dadosEdit[0].dataTer,
                priority: props.dadosEdit[0].priority,
            },
        ];
        props.setDados(newDados);
        props.setDadosEdit("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!valor) return;
        addElemento(valor, status, dataIni, dataTer, priority);
        setValor("");
    }
    
    return(
        <div className='editor'>
            <div className='editor-close'><button className='editor-close-button material-symbols-outlined' onClick={CloseEditor}>close</button></div>
            <p className='editor-title'>Editor</p>
            <div className='editor-tarefaDiv'>
                {props.dadosEdit && props.dadosEdit.length > 0 &&(
                    <div className='editor-tarefa'>
                        <div className='tarefa-text'>
                            <p className='tarefa-title'>Tarefa nome:</p>
                            <p className='tarefa-name'>{props.dadosEdit[0].text}</p>
                        </div>
                        <div className='tarefa-buttons'>
                            <button className='tarefa-button-edit' onClick={isEditVisible ? handCloseEdit : handOpenEdit}><i className='material-symbols-outlined'>edit</i>Editar</button>
                            <button className='tarefa-button-delet' onClick={DeletVisible ? handCloseDelet : handOpenDelet}><i className='material-symbols-outlined'>delete</i>Excluir</button>
                        </div>
                    </div>
                )}
            </div>
            {isEditVisible &&(
                <div className='editor-formDiv'>
                    <div className='editor-form-body'>
                        <div className='editor-form-body-close'><button className='editor-form-close-button material-symbols-outlined' onClick={handCloseEdit}>close</button></div>
                        <form onSubmit={handleSubmit} className='editor-form'>
                            <div className='editor-form-name'>
                                <label className='editor-form-name-label' htmlFor="novoNome">Novo Nome:</label>
                                <input type="text" name='novoNome' className='editor-form-name-input' placeholder='Novo Texto' value={valor} required onChange={(e)=>setValor(e.target.value)}/>
                            </div>
                            <div className='editor-form-status'>
                                <label className='editor-form-status-label' htmlFor="status-select">Novo Status: </label>
                                <select className='editor-form-status-select' name="status-select" id="status-select" value={status} onChange={(e)=> setStatus(e.target.value)}>
                                    <option className='editor-form-status-option-msg' value="" disabled>Selecione um Status</option>
                                    <option className='editor-form-status-option-feito' value="Feito">Feito</option>
                                    <option className='editor-form-status-option-emAndamento' value="Em andamento">Em andamento</option>
                                    <option className='editor-form-status-option-parado' value="Parado">Parado</option>
                                    <option className='editor-form-status-option-naoIniciado' value="Nao iniciado">Não iniciado</option>
                                </select>
                            </div>
                            <div className='editor-form-dataIni'>
                                <label className='editor-form-dataIni-label' htmlFor="tarefaDataIni">Nova data Inicio: </label>
                                <input className='editor-form-dataIni-input' type="date" name='tarefaDataIni' id='tarefaDataIni' value={dataIni}  onChange={(e)=>setDataIni(e.target.value)}/>
                            </div>
                            <div className='editor-form-dataTer'>
                                <label className='editor-form-dataTer-label' htmlFor="tarefaDataTer">Nova Data Termino: </label>
                                <input className='editor-form-dataTer-input' type="date" name="tarefaDataTer" id='tarefaDataTer' value={dataTer}  onChange={(e)=>setDataTer(e.target.value)}/>
                            </div>
                            <div className='editor-form-priority'>
                                <label className='editor-form-priority-label' htmlFor="priority-select">Nova Prioridade: </label>
                                <select className='editor-form-priority-select' name="priority-select" id="priority-select" value={priority} onChange={(e)=> setPriority(e.target.value)}>
                                    <option className='editor-form-priority-option-msg' value="" disabled>Selecione uma prioridade</option>
                                    <option className='editor-form-priority-option-critico' value="Critico">Critico</option>
                                    <option className='editor-form-priority-option-alta' value="Alta">Alta</option>
                                    <option className='editor-form-priority-option-media' value="Media">Média</option>
                                    <option className='editor-form-priority-option-baixa' value="Baixa">Baixa</option>
                                    <option className='editor-form-priority-option-semPrioridade' value="Sem prioridade">Sem prioridade</option>
                                </select>
                            </div>
                            <input type="submit" className='editor-form-inputSubmit' value="Alterar" />
                        </form>
                    </div>
                </div>
            )}
            {DeletVisible &&(
                <div className='deleteDiv'>
                    <div className='delete'>
                        <p className='delete-title'>Tem certeza de que deseja DELETAR está tarefa permanentemente?</p>
                        <div className='delete-buttons'>
                            <button className='delete-confirm' onClick={()=> removeElemento(props.dadosEdit[0].id)}>Confirmar</button>
                            <button className='delete-cancel' onClick={DeletVisible ? handCloseDelet : handOpenDelet}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    ) 
}