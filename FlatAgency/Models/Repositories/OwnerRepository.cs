using FlatAgency.Models.Database;
using FlatAgency.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatAgency.Models.Repositories
{
    public class OwnerRepository : IOwnerRepository
    {
        private readonly DatabaseContext _databaseContext;

        public OwnerRepository(DatabaseContext databaseContext) => _databaseContext = databaseContext;

        public int AddOwner(Owner owner)
        {
            if (owner == null)
            {
                throw new Exception("Owner cannot be null");
            }

            _databaseContext.Owners.Add(owner);
            _databaseContext.SaveChanges();
            return owner.OwnerId;
        }

        public Owner GetOwner(int ownerId)
        {
            if (ownerId <= 0)
            {
                throw new Exception("Owner id cannot be less than 0");
            }

            return _databaseContext.Owners.
                Where(owner => owner.OwnerId == ownerId).
                FirstOrDefault();
        }
    }
}
