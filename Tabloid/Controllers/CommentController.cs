using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
     private readonly ICommentRepository _commentRepository;
     private readonly IPostRepository _postRepository;
     private readonly IUserProfileRepository _userProfileRepository;

      public CommentController(ICommentRepository commentRepository, IPostRepository postRepository, IUserProfileRepository userProfileRepository)
       {
         _commentRepository = commentRepository;
         _postRepository = postRepository;
         _userProfileRepository = userProfileRepository;
       }

            [HttpGet("GetByPostId/{postId}")]
            public IActionResult GetByPost(int postId)
            {
                var comments = _commentRepository.GetAllCommentsByPostId(postId);
                if (comments == null)
                {
                    return NotFound();
                }
                return Ok(comments);
            }

            [HttpGet("GetById/{id}")]
            public IActionResult GetById(int id)
            {
                var comment = _commentRepository.GetCommentById(id);
                if (comment == null)
                {
                    return NotFound();
                }
                return Ok(comment);
            }

            [HttpPost("add")]
            public IActionResult Post(Comment comment)
            {
                var currentUserProfile = GetCurrentUserProfile();
                comment.UserProfileId = currentUserProfile.Id;
                _commentRepository.CreateComment(comment);
                return CreatedAtAction("Get", new { id = comment.Id }, comment);
            }

            [HttpPut("{id}")]
            public IActionResult Put(int id, Comment comment)
            {
                if (id != comment.Id)
                {
                    return BadRequest();
                }

                _commentRepository.UpdateComment(comment);
                return NoContent();
            }

            [HttpDelete("delete/{commentId}")]
            public IActionResult Delete(int commentId)
            {
                _commentRepository.DeleteComment(commentId);
                return NoContent();
            }

            private UserProfile GetCurrentUserProfile()
            {
                var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
                return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            }
        }
    }
