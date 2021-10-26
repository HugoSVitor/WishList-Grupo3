using System;
using System.Collections.Generic;

#nullable disable

namespace Senai_WishList_Grupo3.Domains
{
    public partial class Usuario
    {
        public Usuario()
        {
            ListaDesejos = new HashSet<ListaDesejo>();
        }

        public short IdUsuario { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }

        public virtual ICollection<ListaDesejo> ListaDesejos { get; set; }
    }
}
