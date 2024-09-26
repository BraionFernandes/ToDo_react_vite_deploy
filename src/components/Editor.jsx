import React,{useState} from 'react'

export default function Editor(props){
    const [valor, setValor] = useState('');
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

    const addElemento=(text)=>{
        const newDados=[
            ...props.dados,
            {
                id: props.dadosEdit[0].id,
                text,
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
        addElemento(valor);
        setValor("");
    }

    return(
        <>
            <p>Editor</p>
            <div className='editor-tarefa'>
                {props.dadosEdit && props.dadosEdit.length > 0 &&(
                    <div>
                        <p>{props.dadosEdit[0].text}</p>
                        <button onClick={isEditVisible ? handCloseEdit : handOpenEdit}><i className='material-symbols-outlined'>edit</i>Editar</button>
                        <button onClick={DeletVisible ? handCloseDelet : handOpenDelet}><i className='material-symbols-outlined'>delete</i>Excluir</button>
                    </div>
                )}
            </div>
            {isEditVisible &&(
                <form onSubmit={handleSubmit} className='editor-form'>
                    <label htmlFor="novoNome">Novo Nome:</label>
                    <input type="text" name='novoNome' className='editorBtn' placeholder='Novo Texto' value={valor} required onChange={(e)=>setValor(e.target.value)}/>
                    <input type="submit" className='editorSubmit' value="+" />
                </form>
            )}
            {DeletVisible &&(
                <div>
                    <p>Tem certeza de que deseja DELETAR está tarefa permanentemente?</p>
                    <button onClick={()=> removeElemento(props.dadosEdit[0].id)}>Confirmar</button>
                    <button onClick={DeletVisible ? handCloseDelet : handOpenDelet}>Cancelar</button>
                </div>
            )}
        </>
    ) 
}