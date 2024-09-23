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
          <button onClick={isFiltroVisible ? handCloseFiltro : handOpenFiltro}>Filtrar</button>
          {isFiltroVisible &&(
            <div className='filtros'>
              <div className='filtros-status'>
                <p>Status:</p>
                <select value={props.filter} onChange={(e)=> props.setFilter(e.target.value)}>
                  <option value='All'>Todas</option>
                  <option value='completed'>Completo</option>
                  <option value='Incomplete'>Incompletas</option>
                </select>
              </div>
              <div className='filtros-ordem'>
                <p>Ordem de Exibição:</p>
                <div className='filtros-ordem-buttons'>
                  <button onClick={()=> props.setSort("Asc")}>A - Z</button>
                  <button onClick={()=> props.setSort("Desc")}>Z - A</button>
                </div>
              </div>
            </div>
          )}
          
        </>
    )
}