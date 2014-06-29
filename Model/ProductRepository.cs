using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SportzUrWay.Model
{
    //Not a 'REAL' Repository
    public class ProductRepository
    {
        private IList<Product> products = new List<Product>();

        public ProductRepository()
        {
            this.CreateSomeProductData();
        }

        public IList<Product> GetProducts()
        {
            return this.products;
        }

        private void CreateSomeProductData()
        {
            this.CreateProduct("Trek R100", "Road bike", 885.23, "Biking");
            this.CreateProduct("Trek H100", "Hybrid bike", 799.95, "Biking");
            this.CreateProduct("Tret M100", "Moutain bike", 895.95, "Biking");
            this.CreateProduct("Univega VT", "Hybrid bike", 295.95, "Biking");
            this.CreateProduct("Univega Everest", "Mountain bike", 295.95, "Biking");
            this.CreateProduct("Raliegh Roadster", "Road bike", 399.99, "Biking");
            this.CreateProduct("Fuji Flex", "Hybrid bike", 495.95, "Biking");
            this.CreateProduct("Huffy T2000", "Mountain bike", 169.99, "Biking");
            this.CreateProduct("Coleman C12 Tent", "12 person cabin tent", 395.95, "Camping");
            this.CreateProduct("Coleman D8 Tent", "8 Person dome tent", 295.95, "Camping");
            this.CreateProduct("Coleman D4 Tent", "4 Person dome tent", 95.95, "Camping");
            this.CreateProduct("Lantern", "Propane Lantern", 49.95, "Camping");
            this.CreateProduct("Rapala cc20", "Copper Colored 20-30 ft", 14.99, "Fishing");
            this.CreateProduct("Yozury Fire Tiger", "Japanese crank, 8-15 ft floater", 9.99, "Fishing");
            this.CreateProduct("Jig Assortment", "A batch of 100 jigs of varying size color", 34.99, "Fishing");
            this.CreateProduct("Dehydrated Minnows", "Pack of 100 dehydrated minnows", 59.99, "Fishing");
            this.CreateProduct("Ugly Stick Musky Rod", "Big ol ugly stick", 214.99, "Fishing");
            this.CreateProduct("Lindy Rigs", "2 pack of lindy rigs, ready to go", 17.99, "Fishing");

        }

        private void CreateProduct(string productName, string description, double price, string category)
        {
            Product p = new Product(){ Category = category, Description = description, Name = productName, Price=price};
            p.ProductId = this.products.Count + 1;

            this.products.Add(p);
        }
    }
}