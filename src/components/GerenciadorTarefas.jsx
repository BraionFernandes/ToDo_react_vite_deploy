import React,{useState} from 'react'

export default function GerenciadorTarefas(props){

    const [valor,setValor]=useState('')
    const [dataIni,setDataIni]=useState('')
    const [dataTer,setDataTer]=useState('')
    
    const addElemento=(text, inicio, termino)=>{
        const newDados=[
            ...props.dados,
            {
                id: Date.now(),
                text,
                status: "naoIniciado",
                dataIni: inicio,
                dataTer: termino,
                priority: "naoDefinido",
            },
        ];
        props.setDados(newDados);
        console.log(newDados)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!valor) return;
        addElemento(valor, dataIni, dataTer);
        props.setIsFormVisible(false)
        setValor("");
    }

    return(
        <div className='creator'>
            <form onSubmit={handleSubmit} className='criadorTarefas-form'>
                <div className='creator-name-div'>
                    <label htmlFor="tarefaNome">Nome Da Tarefa: </label>
                    <input type="text"  name='tarefaNome' placeholder='Nome da nova tarefa...'  required value={valor}  onChange={(e)=>setValor(e.target.value)}/>
                </div>
                <div className='creator-dataIni-div'>
                    <label htmlFor="tarefaDataIni">Data de Inicio: </label>
                    <input type="date" name='tarefaDataIni' id='tarefaDataIni' required value={dataIni}  onChange={(e)=>setDataIni(e.target.value)}/>
                </div>
                <div className='creator-dataTer-div'>
                    <label htmlFor="tarefaDataTer"> Data de Termino: </label>
                    <input type="date" name="tarefaDataTer" id='tarefaDataTer' required value={dataTer}  onChange={(e)=>setDataTer(e.target.value)}/>
                </div>
                <input type="submit" value="+"/>
            </form>
        </div>
    )
}