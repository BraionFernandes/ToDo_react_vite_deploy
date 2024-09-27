import React,{useState} from 'react'

export default function GerenciadorTarefas(props){

    const [valor,setValor]=useState('');
    const [status,setStatus]=useState('NaoIniciado');
    const [dataIni,setDataIni]=useState('');
    const [dataTer,setDataTer]=useState('');
    const [priority,setPriority]=useState('SemPrioridade');
    
    const addElemento=(text, status, inicio, termino, prioridade)=>{
        const newDados=[
            ...props.dados,
            {
                id: Date.now(),
                text,
                status,
                dataIni: inicio,
                dataTer: termino,
                priority: prioridade,
            },
        ];
        props.setDados(newDados);
        console.log(newDados)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!valor) return;
        addElemento(valor, status, dataIni, dataTer, priority);
        props.setIsFormVisible(false);
        setValor('');
        setStatus('');
        setDataIni('');
        setDataTer('');
        setPriority('');
    }
    return(
        <div className='creator'>
            <form className='creator-form' onSubmit={handleSubmit}>
                <div className='creator-name'>
                    <label className='creator-name-label' htmlFor="tarefaNome">Nome Da Tarefa: </label>
                    <input className='creator-name-input' type="text"  name='tarefaNome' placeholder='Nome da nova tarefa...'  required value={valor}  onChange={(e)=>setValor(e.target.value)}/>
                </div>
                <div className='creator-status'>
                    <label className='creator-status-label' htmlFor="status-select">Status da Tarefa: </label>
                    <select className='creator-status-select' name="status-select" id="status-select" value={status} onChange={(e)=> setStatus(e.target.value)}>
                        <option className='creator-status-option-msg' value="" disabled>Selecione um Status</option>
                        <option className='creator-status-option-feito' value="Feito">Feito</option>
                        <option className='creator-status-option-emAndamento' value="EmAndamento">Em andamento</option>
                        <option className='creator-status-option-parado' value="Parado">Parado</option>
                        <option className='creator-status-option-naoIniciado' value="NaoIniciado">Não iniciado</option>
                    </select>
                </div>
                <div className='creator-dataIni'>
                    <label className='creator-dataIni-label' htmlFor="tarefaDataIni">Data de Inicio: </label>
                    <input className='creator-dataIni-input' type="date" name='tarefaDataIni' id='tarefaDataIni' value={dataIni}  onChange={(e)=>setDataIni(e.target.value)}/>
                </div>
                <div className='creator-dataTer'>
                    <label className='creator-dataTer-label' htmlFor="tarefaDataTer"> Data de Termino: </label>
                    <input className='creator-dataTer-input' type="date" name="tarefaDataTer" id='tarefaDataTer' value={dataTer}  onChange={(e)=>setDataTer(e.target.value)}/>
                </div>
                <div className='creator-priority'>
                    <label className='creator-priority-label' htmlFor="priority-select">Prioridade da Tarefa: </label>
                    <select className='creator-priority-select' name="priority-select" id="priority-select" value={priority} onChange={(e)=> setPriority(e.target.value)}>
                        <option className='creator-priority-option-msg' value="" disabled>Selecione uma prioridade</option>
                        <option className='creator-priority-option-critico' value="Critico">Critico</option>
                        <option className='creator-priority-option-alta' value="Alta">Alta</option>
                        <option className='creator-priority-option-media' value="Media">Média</option>
                        <option className='creator-priority-option-baixa' value="Baixa">Baixa</option>
                        <option className='creator-priority-option-semPrioridade' value="SemPrioridade">Sem prioridade</option>
                    </select>
                </div>
                <input className='creator-form-inputSubmit' type="submit" value="+"/>
            </form>
        </div>
    )
}