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

  atualizaIdUsuario = async (event) => {
    //console.log('acionou essa funcao')

    await this.setState({
        //dizendo que o target (alvo) do evento ,  vamos pegar o value(valor) 
        idUsuario: event.target.value
    });
    console.log(this.state.idUsuario);
};

atualizaNovoDesejo = async (event) => {
  //console.log('acionou essa funcao')

  await this.setState({
      //dizendo que o target (alvo) do evento ,  vamos pegar o value(valor) 
      novoDesejo: event.target.value
  });
  console.log(this.state.novoDesejo);
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
            <input type="text" value={this.state.idUsuario} placeholder="Insira o id do usuario" onChange={this.atualizaIdUsuario} />
            <input type="text" value={this.state.novoDesejo} placeholder="Insira seu desejo" onChange={this.atualizaNovoDesejo} />
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
                    this.state.listaDesejos.map((Desejo) =>{
                      console.log(Desejo);
                      return(
                        <tr key={Desejo.idDesejo}>
                          <td>{Desejo.idDesejo}</td>
                          <td>{Desejo.idUsuario}</td>
                          <td>{Desejo.descricao}</td>
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
                        {/* {
                          this.state.listaUsuarios.map((Usuario) => {
                            return(
                              <tr key={Usuario.IdUsuario}>
                                <td>{Usuario.IdUsuario}</td>
                                <td>{Usuario.Nome}</td>
                                <td>{Usuario.Email}</td>
                              </tr>
                            )
                          })
                        } */}
                      </tbody>
                  </table>
          </section>
        </main>
      </div>
    )
  }
}




