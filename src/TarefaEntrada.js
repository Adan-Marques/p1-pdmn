import React from 'react'

const TarefaEntrada = () => {
    return (
        <div>
            <div class="input-group mt-4">
                <input type="text" class="form-control p-4 text-center" placeholder='Digite a descrição de uma nova tarefa' />
            </div>
            <button type="button" class="btn btn-outline-primary col-12 mt-2 p-4">OK</button>
        </div>
    )
}

export default TarefaEntrada