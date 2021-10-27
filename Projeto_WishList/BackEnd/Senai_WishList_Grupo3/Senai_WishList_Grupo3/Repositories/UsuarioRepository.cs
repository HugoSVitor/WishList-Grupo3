using Senai_WishList_Grupo3.Contexts;
using Senai_WishList_Grupo3.Domains;
using Senai_WishList_Grupo3.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_WishList_Grupo3.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        WishListContext metodos = new WishListContext();


        public List<Usuario> ListarTodos()
        {
            return metodos.Usuarios.ToList();
        }
    }
}
