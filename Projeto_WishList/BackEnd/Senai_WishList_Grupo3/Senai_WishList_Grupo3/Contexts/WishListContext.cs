using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Senai_WishList_Grupo3.Domains;

#nullable disable

namespace Senai_WishList_Grupo3.Contexts
{
    public partial class WishListContext : DbContext
    {
        public WishListContext()
        {
        }

        public WishListContext(DbContextOptions<WishListContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ListaDesejo> ListaDesejos { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=NOTE0113D1\\SQLEXPRESS; initial catalog=WishList_Senai; user Id=sa; pwd=Senai@132;");
                //optionsBuilder.UseSqlServer("Data Source=PANZERII\\SQLEXPRESS; initial catalog=WishList_Senai; user Id=sa; pwd=senai@#132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<ListaDesejo>(entity =>
            {
                entity.HasKey(e => e.IdDesejo)
                    .HasName("PK__ListaDes__5DB1341FC3838EE7");

                entity.Property(e => e.IdDesejo).HasColumnName("idDesejo");

                entity.Property(e => e.DataCriacao).HasColumnType("datetime");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.ListaDesejos)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__ListaDese__idUsu__3A81B327");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuarios__645723A606B13853");

                entity.HasIndex(e => e.Email, "UQ__Usuarios__A9D10534D19A94EC")
                    .IsUnique();

                entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(16)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
