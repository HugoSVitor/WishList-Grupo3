import './App.css';
import {Component} from 'react';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listaDesejos : [],
      listaUsuarios : [],
      novoDesejo : '',
      idUsuario : ''
    }
  };

  listarDesejos = () => {
    console.log("API chamada, listando os desejos")

    fetch('http://localhost:5000/api/ListaDesejos')

    .then(resposta => resposta.json())

    .then(dados => this.setState({listaDesejos : dados}))

    .catch(erro => console.log(erro))
  }

  listarUsuarios = () => {
    console.log("API chamada, listando os usuarios")

    fetch('http://localhost:5000/api/Usuarios')

    .then(resposta => resposta.json)

    .then(dados => this.setState({listaUsuarios : dados}))

    .catch(erro => console.log(erro))
  }

  componentDidMount() {
    this.listarDesejos();

    this.listarUsuarios();
  };

  render() {
    return (
      <div>
        <main>         
          <section>
            <input type="text" value={this.state.idUsuario} placeholder="Insira o id do usuario"/>
            <input type="text" value={this.state.novoDesejo} placeholder="Insira seu desejo"/>
            <button >Cadastrar</button>
          </section>
            <h2>Desejos</h2>
          <section>
            <h3>Lista dos Desejos</h3>
            <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>idUsuario</th>
                    <th>Desejo</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.listarDesejos.map((Desejo) =>{
                      return(
                        <tr key={Desejo.IdDesejo}>
                          <td>{Desejo.IdDesejo}</td>
                          <td>{Desejo.IdUsuario}</td>
                          <td>{Desejo.Descricao}</td>
                          <td>{Desejo.DataCriacao}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
            </table>
          </section>
          <h2>Usuario</h2>
          <section>
                  <h3>Lista dos usuarios</h3>
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                      </tr>
                      </thead>

                      <tbody>
                        {
                          this.state.listarUsuarios.map((Usuario) => {
                            return(
                              <tr key={Usuario.IdUsuario}>
                                <td>{Usuario.IdUsuario}</td>
                                <td>{Usuario.Nome}</td>
                                <td>{Usuario.Email}</td>
                              </tr>
                            )
                          })
                        }
                      </tbody>
                  </table>
          </section>
        </main>
      </div>
    )
  }
}




