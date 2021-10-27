using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

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

        [Required(ErrorMessage = "Informe o e-mail")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe a senha")]
        [StringLength(100, MinimumLength = 8, ErrorMessage = "A senha deve conter no mínimo 8 caracteres")]
        public string Senha { get; set; }

        public virtual ICollection<ListaDesejo> ListaDesejos { get; set; }
    }
}
