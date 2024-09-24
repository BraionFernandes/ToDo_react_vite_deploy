import React,{useState} from 'react'

export default function FiltrarTarefas(props){

  const [isFiltroVisible,setIsFiltroVisible]=useState(false);

  const handOpenFiltro=()=>{
    setIsFiltroVisible(true);
  }

  const handCloseFiltro=()=>{
    setIsFiltroVisible(false);
  }

    return(
        <>
          <button className='divFilter-button' onClick={isFiltroVisible ? handCloseFiltro : handOpenFiltro}><i className='material-symbols-outlined'>tune</i> Filtro</button>
          {isFiltroVisible &&(
            <div className='filter'>
              <p>Status:</p>
              <select value={props.filter} onChange={(e)=> props.setFilter(e.target.value)}>
                <option value='All'>Todas</option>
                <option value='completed'>Completo</option>
                <option value='Incomplete'>Incompletas</option>
              </select>
            </div>
          )}
          
        </>
    )
}