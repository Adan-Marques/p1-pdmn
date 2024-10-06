import React from 'react'
import TarefaEntrada from './TarefaEntrada'
import TarefaLista from './TarefaLista'

const App = () => {
  return (
    <div className='container'>
      <div className='row'>
        <TarefaEntrada />
      </div>
        <div className='mt-2 p-4 border border-warning rounded' style={{backgroundColor: '#FFFFE0'}}>
          <TarefaLista />
        </div>
    </div>

  )
}

export default App