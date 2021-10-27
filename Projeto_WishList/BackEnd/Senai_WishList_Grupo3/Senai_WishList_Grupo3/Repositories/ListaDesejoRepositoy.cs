using Senai_WishList_Grupo3.Contexts;
using Senai_WishList_Grupo3.Domains;
using Senai_WishList_Grupo3.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_WishList_Grupo3.Repositories
{
    public class ListaDesejoRepositoy : IListaDesejoRepository
    {
        WishListContext ctx = new WishListContext();

        public void CadastrarDesejo(ListaDesejo novoDesejo)
        {
            ctx.ListaDesejos.Add(novoDesejo);

            ctx.SaveChanges();
        }

        public List<ListaDesejo> ListarDesejos()
        {
            return ctx.ListaDesejos.ToList();
        }
    }
}
