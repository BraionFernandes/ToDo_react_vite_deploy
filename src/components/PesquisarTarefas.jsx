import React,{useState} from 'react'

export default function PesquisarTarefas(props){
    return(
        <>
              <label className='search-label' htmlFor="search">Pesquisa</label>
              <input type="search" className='search-input' name="search" id='search' placeholder='Pesquisar...' value={props.search} onInput={(e)=>props.setSearch(e.target.value)}/>
        </>
    )
}