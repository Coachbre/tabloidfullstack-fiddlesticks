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
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public PostController(IPostRepository postRepository, IUserProfileRepository userProfileRepository)
        {
            _postRepository = postRepository;
            _userProfileRepository = userProfileRepository;
        }

        // Get all the posts
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }

        // Get a user's post
        [HttpGet("GetByUser")]
        public IActionResult GetByUser()
        {
            var user = GetCurrentUserProfile();
            if (user == null)
            {
                return Unauthorized();
            }
            else
            {
                var posts = _postRepository.GetUserPosts(user.FirebaseUserId);
                return Ok(posts);
            }
        }

        [HttpGet("GetWithComments")]
        public IActionResult GetWithComments()
        {
            var posts = _postRepository.GetAllWithComments();
            return Ok(posts);
        }

        // Get a post by an Id
        [HttpGet("GetById/{id}")]
        public IActionResult GetById(int id)
        {
            var post = _postRepository.GetPostById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        //// Adding a new post
        //[HttpPost("addPost")]
        //public IActionResult Post(Post post)
        //{
        //    var currentUserProfile = GetCurrentUserProfile();
        //    post.UserProfileId = currentUserProfile.Id;
        //    _postRepository.Add(post);
        //    return CreatedAtAction("Get", new { id = post.Id }, post);
        //}

        //// Editting a post
        //[HttpPut("{id}")]
        //public IActionResult Put(int id, Post post)
        //{
        //    if (id != post.Id)
        //    {
        //        return BadRequest();
        //    }

        //    _postRepository.Update(post);
        //    return NoContent();
        //}

        //// Delete an unwated post
        //[HttpDelete("delete/{id}")]
        //public IActionResult Delete(int id)
        //{
        //    _postRepository.Delete(id);
        //    return NoContent();
        //}

        // Get the current user
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            if (firebaseUserId != null)
            {
                return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            }
            else
            {
                return null;
            }
        }
    }
}
