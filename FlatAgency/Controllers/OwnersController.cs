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

        [HttpGet("[action]")]
        public IActionResult GetOwner(int ownerId)
        {
            if (ownerId <= 0)
            {
                return BadRequest("Owner id can not be less than zero");
            }
            return new JsonResult(_ownerRepository.GetOwner(ownerId));
        }

        [HttpGet("[action]")]
        public IActionResult GetOwners()
        {
            return new JsonResult(_ownerRepository.GetAll());
        }

        [HttpPost("[action]")]
        public IActionResult UpdateOwner([FromBody] Owner owner)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _ownerRepository.UpdateOwner(owner);
            return new JsonResult(owner.OwnerId);
        }
        
    }
}