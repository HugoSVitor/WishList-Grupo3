using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai_WishList_Grupo3.Domains;
using Senai_WishList_Grupo3.Interfaces;
using Senai_WishList_Grupo3.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_WishList_Grupo3.Controllers
{
    [Produces("application/json")]

    [Route("api/[controller]")]
    [ApiController]
    public class ListaDesejosController : ControllerBase
    {
        private IListaDesejoRepository _listaDesejoRepository { get; set; }

        public ListaDesejosController()
        {
            _listaDesejoRepository = new ListaDesejoRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(_listaDesejoRepository.ListarTodos());
        }


        [HttpPost]
        public IActionResult Cadastrar(ListaDesejo novoDesejo)
        {
            _listaDesejoRepository.Cadastrar(novoDesejo);
            return StatusCode(201);
        }

    }
}
