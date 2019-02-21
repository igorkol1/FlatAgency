using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatAgency.Models.Interfaces
{
    public interface IAdressReporisoty
    {
        int AddAdress(Address address);

        Address GetAddress(int addressId);
    }
}
