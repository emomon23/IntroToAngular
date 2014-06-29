using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SportzUrWay.Controllers
{
    public class SysAdminController : ApiController
    {
        // GET api/values
        [HttpGet]
        public string PingService()
        {
            return "Service is up";
        }
    }
}