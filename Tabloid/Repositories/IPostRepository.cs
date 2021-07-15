using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();

        public List<Post> GetUserPosts(string FirebaseUserId);

        Post GetPostById(int id);

        void Add(Post post);

        void Update(Post post);

        void Delete(int id);
    }
}