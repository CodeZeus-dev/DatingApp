using API.Data;
using API.entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  public class AntibugController : BaseApiController
  {
    private readonly DataContext _context;
    public AntibugController(DataContext context)
    {
      _context = context;
    }

    [Authorize]
    [HttpGet("auth")]
    public ActionResult<string> GetSecret()
    {
      return "Secret Text";
    }
    
    [HttpGet("not-found")]
    public ActionResult<AppUser> GetNotFound()
    {
      var dummyUser = _context.Users.Find(-1);

      if (dummyUser == null) return NotFound();

      return Ok(dummyUser);
    }

    [HttpGet("server-error")]
    public ActionResult<string> GetServerError()
    {
      var dummyUser = _context.Users.Find(-1);
      var dummyUserStringified = dummyUser.ToString();

      return dummyUserStringified;
    }

    [HttpGet("bad-request")]
    public ActionResult<string> GetBadRequest()
    {
      return BadRequest("What an evil request...");
    }
  }
}