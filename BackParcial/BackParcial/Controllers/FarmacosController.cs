using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackParcial.Models;

namespace BackParcial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FarmacosController : ControllerBase
    {
        private readonly RedFarmContext _context;

        public FarmacosController(RedFarmContext context)
        {
            _context = context;
        }

        // GET: api/Farmacoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Farmaco>>> GetFarmacos()
        {
          if (_context.Farmacos == null)
          {
              return NotFound();
          }
            return await _context.Farmacos.ToListAsync();
        }

        // GET: api/Farmacoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Farmaco>> GetFarmaco(int id)
        {
          if (_context.Farmacos == null)
          {
              return NotFound();
          }
            var farmaco = await _context.Farmacos.FindAsync(id);

            if (farmaco == null)
            {
                return NotFound();
            }

            return farmaco;
        }

        // PUT: api/Farmacoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFarmaco(int id, Farmaco farmaco)
        {
            if (id != farmaco.IdFarmacos)
            {
                return BadRequest();
            }

            _context.Entry(farmaco).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FarmacoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Farmacoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Farmaco>> PostFarmaco(Farmaco farmaco)
        {
          if (_context.Farmacos == null)
          {
              return Problem("Entity set 'RedFarmContext.Farmacos'  is null.");
          }
            _context.Farmacos.Add(farmaco);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFarmaco", new { id = farmaco.IdFarmacos }, farmaco);
        }

        // DELETE: api/Farmacoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFarmaco(int id)
        {
            if (_context.Farmacos == null)
            {
                return NotFound();
            }
            var farmaco = await _context.Farmacos.FindAsync(id);
            if (farmaco == null)
            {
                return NotFound();
            }

            _context.Farmacos.Remove(farmaco);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FarmacoExists(int id)
        {
            return (_context.Farmacos?.Any(e => e.IdFarmacos == id)).GetValueOrDefault();
        }
    }
}
