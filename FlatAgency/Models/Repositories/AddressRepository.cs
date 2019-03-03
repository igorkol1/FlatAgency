using FlatAgency.Models.Database;
using FlatAgency.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatAgency.Models.Repositories
{
    public class AddressRepository : IAdressReporisoty
    {
        private readonly DatabaseContext _databaseContext;

        public AddressRepository(DatabaseContext databaseContext) => _databaseContext = databaseContext;

        public int AddAdress(Address address)
        {
            if (address == null)
            {
                throw new Exception("Address cannot be null");
            }

            _databaseContext.Addresses.Add(address);
            _databaseContext.SaveChanges();
            return address.AddressId;
        }

        public Address GetAddress(int addressId)
        {
            if (addressId <= 0)
            {
                throw new Exception("Address id cannot be less than 0");
            }

            return _databaseContext.Addresses.
                Where(address => address.AddressId == addressId).
                FirstOrDefault();
        }

        public List<Address> GetAll()
        {
            return _databaseContext.Addresses.ToList();
        }

        public int UpdateAdress(Address address)
        {
            if (address == null)
            {
                throw new Exception("Property cannot be null");
            }

            _databaseContext.Addresses.Update(address);
            _databaseContext.SaveChanges();
            return address.AddressId;
        }
    }
    
}
