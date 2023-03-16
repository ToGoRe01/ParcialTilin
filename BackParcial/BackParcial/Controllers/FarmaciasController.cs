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
    public class FarmaciasController : ControllerBase
    {
        private readonly RedFarmContext _context;

        public FarmaciasController(RedFarmContext context)
        {
            _context = context;
        }

        // GET: api/Farmacias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Farmacia>>> GetFarmacias()
        {
          if (_context.Farmacias == null)
          {
              return NotFound();
          }
            return await _context.Farmacias.ToListAsync();
        }

        // GET: api/Farmacias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Farmacia>> GetFarmacia(int id)
        {
          if (_context.Farmacias == null)
          {
              return NotFound();
          }
            var farmacia = await _context.Farmacias.FindAsync(id);

            if (farmacia == null)
            {
                return NotFound();
            }

            return farmacia;
        }

        // PUT: api/Farmacias/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFarmacia(int id, Farmacia farmacia)
        {
            if (id != farmacia.IdFarmacia)
            {
                return BadRequest();
            }

            _context.Entry(farmacia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FarmaciaExists(id))
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

        // POST: api/Farmacias
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Farmacia>> PostFarmacia(Farmacia farmacia)
        {
          if (_context.Farmacias == null)
          {
              return Problem("Entity set 'RedFarmContext.Farmacias'  is null.");
          }
            _context.Farmacias.Add(farmacia);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFarmacia", new { id = farmacia.IdFarmacia }, farmacia);
        }

        // DELETE: api/Farmacias/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFarmacia(int id)
        {
            if (_context.Farmacias == null)
            {
                return NotFound();
            }
            var farmacia = await _context.Farmacias.FindAsync(id);
            if (farmacia == null)
            {
                return NotFound();
            }

            _context.Farmacias.Remove(farmacia);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FarmaciaExists(int id)
        {
            return (_context.Farmacias?.Any(e => e.IdFarmacia == id)).GetValueOrDefault();
        }
    }
}
