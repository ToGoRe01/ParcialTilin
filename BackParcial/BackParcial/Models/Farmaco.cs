using System;
using System.Collections.Generic;

namespace BackParcial.Models
{
    public partial class Farmaco
    {
        public int IdFarmacos { get; set; }
        public string? Nombre { get; set; }
        public string? Valor { get; set; }
        public string? Tipo { get; set; }
        public int? Cliente { get; set; }
        public int? Farmacia { get; set; }

        public virtual Cliente? ClienteNavigation { get; set; }
        public virtual Farmacia? FarmaciaNavigation { get; set; }
    }
}
