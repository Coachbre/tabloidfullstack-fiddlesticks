using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ITagRepository
    {
        List<Tag> GetAll();
        void Add(Tag tag);
        void Delete(int id);
        Tag GetById(int id);
        void Update(Tag tag);
    }
}
