using System;
using System.Collections.Generic;

namespace BackParcial.Models
{
    public partial class Farmacia
    {
        public Farmacia()
        {
            Farmacos = new HashSet<Farmaco>();
        }

        public int IdFarmacia { get; set; }
        public string? Nombre { get; set; }
        public string? Telefono { get; set; }
        public string? NitAsociado { get; set; }
        public string? Cajero { get; set; }

        public virtual ICollection<Farmaco> Farmacos { get; set; }
    }
}
