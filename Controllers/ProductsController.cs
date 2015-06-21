using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using SportzUrWay.Model;
using SportzUrWay.Model.DTOs;

namespace SportzUrWay.Controllers
{
    public class ProductsController : ApiController
    {
        //Sorry, No DI for the demo!
        private ProductRepository repository = new ProductRepository(); 

        // GET api/values
        [HttpGet]
        public GetProductsResponse GetProducts()
        {
            return new GetProductsResponse() { Products = repository.GetProducts(), PromotionalMessage = "Bike sale, 30% off all Univega bikes", ResultIsGood = true };
        }

        [HttpPost]
        public string SaveOrder(Order order)
        {
            //Save the order
            return string.Format("Thank you {1}. You're order has been placed.  Confirmation Code: {0}", Guid.NewGuid().ToString().Substring(0, 5), order.Name);
        }
    }
}