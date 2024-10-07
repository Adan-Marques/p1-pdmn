import React from 'react'
import TarefaEntrada from './TarefaEntrada'
import TarefaLista from './TarefaLista'

export default class App extends React.Component {

  state = {
    tarefas: []
  }


  onCadastroRealizado = async (descricao) => {
    if (descricao !== "") {
      this.setState({ tarefas: [...this.state.tarefas, descricao] })
    }
  }


  render() {
    console.log("vetor de tarefas: " + this.state.tarefas)
    return (
      <div className='container'>
        <div className='row'>
          <TarefaEntrada onCadastroRealizado={this.onCadastroRealizado} />
        </div>
        <div className='mt-2 p-4 border border-warning rounded' style={{ backgroundColor: '#FFFFE0' }}>
          <TarefaLista tarefas={this.state.tarefas}/>
        </div>
      </div>
    )
  }
}
