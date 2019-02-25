using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlatAgency.Models;
using FlatAgency.Models.Interfaces;
using FlatAgency.Models.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlatAgency.Controllers
{
    [Produces("application/json")]
    [Route("api/address")]
    public class AdressesController : Controller
    {
        private readonly IAdressReporisoty _addressRepository;

        public AdressesController(IAdressReporisoty addressRepository)
        {
            _addressRepository = addressRepository;
        }

        [HttpPost("[action]")]
        public IActionResult AddAddress([FromBody] Address address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _addressRepository.AddAdress(address);
            return new JsonResult(address.AddressId);
        }

    }
}