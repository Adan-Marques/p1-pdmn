import React, { Component } from 'react'

export default class TarefaEntrada extends Component {

    state = {
        termoTarefa: ''
    }

    onTermoAlterado = (evento) => {
        console.log(evento.target.value)
        this.setState({ termoTarefa: evento.target.value })
    }

    onFormSubmit = (evento) => {
        evento.preventDefault()
        console.log("Deu submit")
        this.props.onCadastroRealizado(this.state.termoTarefa)
    }

    render() {
        return (
            <div>
                <div className="input-group mt-4">
                    <input type="text" onChange={this.onTermoAlterado} className="form-control p-4 text-center" placeholder='Digite a descrição de uma nova tarefa' />
                </div>
                <button type="button" onClick={this.onFormSubmit} className="btn btn-outline-primary col-12 mt-2 p-4">OK</button>
            </div>
        )
    }
}
