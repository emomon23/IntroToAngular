using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SportzUrWay.Model.DTOs
{
    public class GetProductsResponse
    {
        public string PromotionalMessage { get; set; }
        public IList<Product> Products { get; set; }

        public bool ResultIsGood { get; set; }
        public string ErrorMessage { get; set; }
    }
}