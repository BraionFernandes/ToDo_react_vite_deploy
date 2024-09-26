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
            <form onSubmit={handleSubmit} className='criadorTarefas-form'>
                <div className='creator-name-div'>
                    <label htmlFor="tarefaNome">Nome Da Tarefa: </label>
                    <input type="text"  name='tarefaNome' placeholder='Nome da nova tarefa...'  required value={valor}  onChange={(e)=>setValor(e.target.value)}/>
                </div>
                <div className='creator-status-div'>
                    <label htmlFor="status-select">Status da Tarefa: </label>
                    <select name="status-select" id="status-select" value={status} onChange={(e)=> setStatus(e.target.value)}>
                        <option value="" disabled>Selecione um Status</option>
                        <option value="Feito">Feito</option>
                        <option value="EmAndamento">Em andamento</option>
                        <option value="Parado">Parado</option>
                        <option value="NaoIniciado">Não iniciado</option>
                    </select>
                </div>
                <div className='creator-dataIni-div'>
                    <label htmlFor="tarefaDataIni">Data de Inicio: </label>
                    <input type="date" name='tarefaDataIni' id='tarefaDataIni' value={dataIni}  onChange={(e)=>setDataIni(e.target.value)}/>
                </div>
                <div className='creator-dataTer-div'>
                    <label htmlFor="tarefaDataTer"> Data de Termino: </label>
                    <input type="date" name="tarefaDataTer" id='tarefaDataTer' value={dataTer}  onChange={(e)=>setDataTer(e.target.value)}/>
                </div>
                <div className='creator-priority-div'>
                    <label htmlFor="priority-select">Prioridade da Tarefa: </label>
                    <select name="priority-select" id="priority-select" value={priority} onChange={(e)=> setPriority(e.target.value)}>
                        <option value="" disabled>Selecione uma prioridade</option>
                        <option value="Critico">Critico</option>
                        <option value="Alta">Alta</option>
                        <option value="Media">Média</option>
                        <option value="Baixa">Baixa</option>
                        <option value="SemPrioridade">Sem prioridade</option>
                    </select>
                </div>
                <input type="submit" value="+"/>
            </form>
        </div>
    )
}