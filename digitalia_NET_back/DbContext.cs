using digitalia_NET_back.Models;
using Microsoft.EntityFrameworkCore;
namespace digitalia_NET_back
{
    public class ApiContext : DbContext
    {
        protected override void OnConfiguring
        (DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "VentasDb");
        }
        public DbSet<Recibo> Recibos { get; set; }

    }
}