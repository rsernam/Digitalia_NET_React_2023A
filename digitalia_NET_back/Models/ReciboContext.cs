
using Microsoft.EntityFrameworkCore;
namespace digitalia_NET_back.Models;

public class ReciboContext : DbContext
{
    public ReciboContext(DbContextOptions<ReciboContext> options)
        : base(options)
    {
    }

    public DbSet<Recibo> Recibos { get; set; } = null!;

}