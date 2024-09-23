import './assets/css/App.css'
import { useState } from 'react'
import Editor from './components/Editor.jsx'
import GerenciadorTarefas from './components/GerenciadorTarefas.jsx'
import PesquisarTarefas from './components/PesquisarTarefas.jsx'
import FiltrarTarefas from './components/FiltrarTarefas.jsx'
import Elemento from './components/Elemento.jsx'
import {bancoDados} from './assets/js/bancoDados.js'
import {bancoEditor} from './assets/js/bancoEditor.js'

function App() {

  const [dados,setDados]=bancoDados();
  const [dadosEdit,setDadosEdit]=bancoEditor();
  const [search,setSearch]=useState("");
  const [filter,setFilter]=useState("All");
  const [sort,setSort]=useState("Asc");
  const [isFormVisible,setIsFormVisible]=useState(false);

  const handleOpenForm=()=>{
    setIsFormVisible(true);
  }

  return (
    <>
      <header className='header'>
        <picture className='header-logo'>
          <img className='header-logo-item' src="../img/logo/empire.png" alt="Empire Logo" />
        </picture>
        <nav className='header-nav'>
          <ul className='header-nav-lista'>
            <li className='header-nav-lista-item'><a href="#">Empire</a></li>
            <li className='header-nav-lista-item'><a href="#">Serviços</a></li>
            <li className='header-nav-lista-item'><a href="#">Suporte</a></li>
          </ul>
        </nav>
        
      </header>
      <main className='main'>
        <section className='tarefas'>
          <div className='tarefasTools'>
            <div className='tarefasTools-filter'>
              <div className='tarefas-pesquisar'>
                <PesquisarTarefas dados={dados} search={search} setSearch={setSearch}/>
              </div>
              <div className='tarefas-filtros'>
                <FiltrarTarefas filter={filter} setFilter={setFilter} setSort={setSort}/>
              </div>
            </div>
            <div className='tarefasTools-creator'>
              <button className='button-creator' onClick={handleOpenForm}>Criar Tarefa</button>
            </div>
          </div>
          <div className='tarefasRegistradas'>
            {dados
              .filter((todo) => filter === "All" ? true : filter === "completed" ? todo.isCompleted : !todo.isCompleted)
              .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
              .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
              .map((todo) =>
              <Elemento key={todo.id} todo={todo} dados={dados} setDados={setDados} dadosEdit={dadosEdit} setDadosEdit={setDadosEdit}/>
            )}
          </div>
        </section>
      </main>
      {dadosEdit && dadosEdit.length > 0 &&(
        <div className='editor'>
          <div className='editor-div'>
            <Editor dadosEdit={dadosEdit} setDadosEdit={setDadosEdit} dados={dados} setDados={setDados}/>
          </div>
        </div>
      )}
      {isFormVisible &&(
        <div className='criadorTarefas'>
            <GerenciadorTarefas dados={dados} setDados={setDados} setIsFormVisible={setIsFormVisible}/>
        </div>
      )}
    </>
  )
}

export default App
