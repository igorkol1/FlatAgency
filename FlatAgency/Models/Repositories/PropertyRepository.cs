﻿using FlatAgency.Models.Database;
using FlatAgency.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatAgency.Models.Repositories
{
    public class PropertyRepository : IPropertyRepository
    {

        private readonly DatabaseContext _databaseContext;

        public PropertyRepository(DatabaseContext databaseContext) => _databaseContext = databaseContext;

        public List<Property> GetAll()
        {
            return _databaseContext.Properties.ToList();
        }

        public Property GetProperty(int propertyId)
        {
            return _databaseContext.Properties.
                Where(property => property.Id == propertyId).
                FirstOrDefault();
        }
    }
}
