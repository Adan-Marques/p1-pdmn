import React from 'react'

const TarefaLista = ({ tarefas }) => {
    return (
        tarefas.map((tarefa) => (
            <div className='row text-center'>
                <div className={estilos.padrao}>
                    {tarefa}
                </div>
            </div>
        ))
    )
}

const estilos = {
    padrao: 'bg-white border p-4 mx-auto my-4 border-dark rounded col-8'
}

export default TarefaLista