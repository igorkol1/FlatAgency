using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlatAgency.Models.Interfaces
{
    public interface IPropertyRepository
    {
        List<Property> GetAll();

        Property GetProperty(int propertyId);
    }
}
