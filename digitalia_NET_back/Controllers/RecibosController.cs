using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using digitalia_NET_back.Models;
using digitalia_NET_back.Attributes;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace digitalia_NET_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [ApiKey]
    public class RecibosController : ControllerBase
    {

        private readonly ReciboContext _context;

        public RecibosController(ReciboContext context)
        {
            _context = context;

        }



        [HttpGet]
        public async Task<ActionResult<IEnumerable<Recibo>>> ObtenerRecibos()
        {
            return await _context.Recibos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Recibo>> ObtenerRecibo(int id)
        {
            var recibo = await _context.Recibos
                .FindAsync(id);

            if (recibo == null)
            {
                return NotFound();
            }

            return recibo;
        }


        [HttpPost]
        public async Task<ActionResult<Recibo>> PostRecibo(Recibo recibo)
        {

            _context.Recibos.Add(recibo);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(ObtenerRecibo),
                new { id = recibo.idRecibo},
                recibo);
        }

    }
}
