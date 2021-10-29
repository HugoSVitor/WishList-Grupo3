import './style.css';
import { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaDesejos: [],
      listaUsuarios: [],
      novoDesejo: '',
      idUsuario: ''
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

      .then(dados => this.setState({ listaDesejos: dados }))

      .catch(erro => console.log(erro))
  }

  listarUsuarios = () => {
    console.log("API chamada, listando os usuarios")

    fetch('http://localhost:5000/api/Usuarios')

      .then(resposta => resposta.json())

      .then(dados => this.setState({ listaUsuarios: dados }))

      .catch(erro => console.log(erro))
  }

  cadastrarDesejo = (event) => {
    event.preventDefault();
    console.log("Método cadastrar chamado")

    fetch('http://localhost:5000/api/ListaDesejos', {

      method: 'POST',
      //body: { Descricao = this.state.novoDesejo  } //lembrando que aqui é o objeto JS, e nao JSON;

      body: JSON.stringify({ descricao: this.state.novoDesejo, idUsuario: this.state.idUsuario }),

      headers: { "Content-Type": "application/json" }
    })
      .then(console.log("Desejo cadastrado."))

      .catch(erro => console.log(erro))

      .then(this.listarDesejos);
  }

  componentDidMount() {
    this.listarDesejos();

    this.listarUsuarios();
  };

  render() {
    return (
      <div className="corpo">

        <header>
          <div className="container_header">
            <img className="img_header" src="LogoTipoLogo.svg" alt="LogoTipo"/>
            <nav className="nav_header">
              <a href="#">Desejos</a>
              <a href="#">Usuários</a>
            </nav>
          </div>
        </header>

        <div className="grid">
          <main className="tamanho">
            <div>
              <title className="center formatar">Desejos</title>
            </div>

            <div className="fundo_cadastrar">
              <h2 className="center">Cadastrar</h2>

              <section className="cadastrar">
                <form onSubmit={this.cadastrarDesejo}>
                  <div className="input">
                    <input type="text" value={this.state.idUsuario} placeholder="Insira o id do usuario" onChange={this.atualizaIdUsuario} />
                    <input type="text" value={this.state.novoDesejo} placeholder="Insira seu desejo" onChange={this.atualizaNovoDesejo} />
                  </div>
                  <button className="btn_cadastrar" type="submit">Cadastrar</button>
                </form>
              </section>
            </div>



            <section className="lista_desejos">
              <h2>Lista dos Desejos</h2>
              <table>

                <thead>
                  <tr className="titulo_tabela">
                    <th>idDesejo</th>
                    <th>idUsuario</th>
                    <th>Desejo</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.listaDesejos.map((Desejo) => {

                      return (
                        <tr key={Desejo.IdDesejo}>
                          {console.log(this.idDesejo)}
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

            <div>
              <title className="center formatar">Usuarios</title>
            </div>

            <section className="ajuste grif usuarios">
              <h2>Lista dos usuarios</h2>
              <table>
                <thead className="">
                  <tr className="titulo_tabela">
                    <th>#</th>
                    <th>Nome</th>
                    <th>Email</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    this.state.listaUsuarios.map((Usuario) => {
                      return (
                        <tr key={Usuario.IdUsuario}>
                          <td>{Usuario.idUsuario}</td>
                          <td>{Usuario.nome}</td>
                          <td>{Usuario.email}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </section>
          </main>
        </div>

        <footer>

          <div class="container_footer">
            <img class="img_footer" src="LogoTipoLogo.svg" alt="LogoTipo"/>
            <nav class="nav_header">
              <a href="#">Informações</a> • <a href="#">Suporte</a> • <a href="#">Privacidade e Política</a>
            </nav>
          </div>

        </footer>
      </div>
    )
  }
}




