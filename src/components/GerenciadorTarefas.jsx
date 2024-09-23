import React,{useState} from 'react'

export default function GerenciadorTarefas(props){

    const [valor,setValor]=useState('')
    
    const addElemento=(text)=>{
        const newDados=[
            ...props.dados,
            {
                id: Date.now(),
                text,
                isCompleted: false,
            },
        ];
        props.setDados(newDados);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!valor) return;
        addElemento(valor);
        props.setIsFormVisible(false)
        setValor("");
    }

    return(
        <div className='criador'>
            <form onSubmit={handleSubmit} className='criadorTarefas-form'>
                <label htmlFor="tarefaNome">Adicionar nova tarefa</label>
                <input type="text"  name='tarefaNome' placeholder='Nome da nova tarefa...' value={valor} required onChange={(e)=>setValor(e.target.value)}/>
                <input type="submit" value="+"/>
            </form>
        </div>
    )
}