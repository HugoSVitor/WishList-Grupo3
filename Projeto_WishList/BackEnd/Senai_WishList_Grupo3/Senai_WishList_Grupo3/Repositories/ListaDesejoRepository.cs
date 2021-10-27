using Senai_WishList_Grupo3.Contexts;
using Senai_WishList_Grupo3.Domains;
using Senai_WishList_Grupo3.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_WishList_Grupo3.Repositories
{
    public class ListaDesejoRepository : IListaDesejoRepository
    {
        WishListContext metodos = new WishListContext();


        public void Cadastrar(ListaDesejo novoDesejo)
        {
            metodos.ListaDesejos.Add(novoDesejo);
            metodos.SaveChanges();
        }

        public List<ListaDesejo> ListarTodos()
        {
            return metodos.ListaDesejos.ToList();
        }
    }
}
