using System;
using System.Collections.Generic;

#nullable disable

namespace Senai_WishList_Grupo3.Domains
{
    public partial class ListaDesejo
    {
        public short IdDesejo { get; set; }
        public short? IdUsuario { get; set; }
        public string Descricao { get; set; }
        public DateTime? DataCriacao { get; set; }

        public virtual Usuario IdUsuarioNavigation { get; set; }
    }
}
