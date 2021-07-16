using Microsoft.Data.SqlClient;
using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICommentRepository
    {
        void CreateComment(Comment comment);
        void DeleteComment(int commentId);
        List<Comment> GetAllCommentsByPostId(int postId);
        Comment GetCommentById(int id);
        void UpdateComment(Comment comment);
    }
}