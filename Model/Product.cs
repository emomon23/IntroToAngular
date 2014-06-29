using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SportzUrWay.Model
{
    public class Product
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
        public string Category { get; set; }
    }
}