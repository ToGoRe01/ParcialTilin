using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BackParcial.Models
{
    public partial class RedFarmContext : DbContext
    {
        public RedFarmContext()
        {
        }

        public RedFarmContext(DbContextOptions<RedFarmContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Cliente> Clientes { get; set; } = null!;
        public virtual DbSet<Farmacia> Farmacia { get; set; } = null!;
        public virtual DbSet<Farmaco> Farmacos { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=ToGoRe; Database=RedFarm; Trusted_Connection=True; TrustServerCertificate=Yes ");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.HasKey(e => e.IdCliente);

                entity.ToTable("Cliente");

                entity.Property(e => e.IdCliente).HasColumnName("idCliente");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre");

                entity.Property(e => e.NumRegistro)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("numRegistro");

                entity.Property(e => e.TipoCliente)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("tipoCliente");

                entity.Property(e => e.TipoId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("tipoId");
            });

            modelBuilder.Entity<Farmacia>(entity =>
            {
                entity.HasKey(e => e.IdFarmacia);

                entity.Property(e => e.IdFarmacia).HasColumnName("idFarmacia");

                entity.Property(e => e.Cajero)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cajero");

                entity.Property(e => e.NitAsociado)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nitAsociado");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre");

                entity.Property(e => e.Telefono)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("telefono");
            });

            modelBuilder.Entity<Farmaco>(entity =>
            {
                entity.HasKey(e => e.IdFarmacos);

                entity.ToTable("Farmaco");

                entity.Property(e => e.IdFarmacos).HasColumnName("idFarmacos");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre");

                entity.Property(e => e.Tipo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("tipo");

                entity.Property(e => e.Valor)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("valor");

                entity.HasOne(d => d.ClienteNavigation)
                    .WithMany(p => p.Farmacos)
                    .HasForeignKey(d => d.Cliente)
                    .HasConstraintName("FK_Farmaco_Cliente");

                entity.HasOne(d => d.FarmaciaNavigation)
                    .WithMany(p => p.Farmacos)
                    .HasForeignKey(d => d.Farmacia)
                    .HasConstraintName("FK_Farmaco_Farmacia");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
