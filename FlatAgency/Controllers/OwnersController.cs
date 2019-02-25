using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlatAgency.Models;
using FlatAgency.Models.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlatAgency.Controllers
{
    [Route("api/owner")]
    [Produces("application/json")]
    public class OwnersController : ControllerBase
    {
        private readonly IOwnerRepository _ownerRepository;

        public OwnersController(IOwnerRepository ownerRepository)
        {
            _ownerRepository = ownerRepository;
        }

        [HttpPost("[action]")]
        public IActionResult AddOwner([FromBody] Owner owner)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _ownerRepository.AddOwner(owner);

            return new JsonResult(owner.OwnerId);
        }
    }
}