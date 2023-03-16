using System;
using System.Collections.Generic;

namespace BackParcial.Models
{
    public partial class Cliente
    {
        public Cliente()
        {
            Farmacos = new HashSet<Farmaco>();
        }

        public int IdCliente { get; set; }
        public string? Nombre { get; set; }
        public string? TipoId { get; set; }
        public string? NumRegistro { get; set; }
        public string? TipoCliente { get; set; }

        public virtual ICollection<Farmaco> Farmacos { get; set; }
    }
}
