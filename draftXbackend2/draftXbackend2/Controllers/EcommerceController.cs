using Microsoft.AspNetCore.Mvc;
using ThisProduct.Model;
using DbContextNamespace;
using Npgsql.EntityFrameworkCore.PostgreSQL; 



namespace draftXbackend2.Controllers;

[ApiController]
[Route("api/v1/ecommerce")]

public class EcommerceController : ControllerBase{
  private readonly ILogger<EcommerceController> _logger;
 private readonly MyDbContext _context;

    public EcommerceController(MyDbContext context,ILogger<EcommerceController> logger)
    {
        _context = context;
          _logger = logger;
    }

  [HttpGet("products/featured")]
  public IActionResult GetProducts()
  {
    var products = new[]{

            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},    new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},    new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},    new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},    new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0},
            new Product{ProductName = "Nike Shoes", Price = 0}

        };

    return Ok(products);
  }


  [HttpGet("products/shirt")]
  public IActionResult getShirts()
  {
    var products = new[]{
                   new Product{ProductName = "Bench", Price = 0},
                     new Product{ProductName = "Oxygen", Price = 0},
                       new Product{ProductName = "Human", Price = 0},
                         new Product{ProductName = "LV", Price = 0},
                            new Product{ProductName = "Bench", Price = 0},
                     new Product{ProductName = "Oxygen", Price = 0},
                       new Product{ProductName = "Human", Price = 0},
                         new Product{ProductName = "LV", Price = 0},
                            new Product{ProductName = "Bench", Price = 0},
                     new Product{ProductName = "Oxygen", Price = 0},
                       new Product{ProductName = "Human", Price = 0},
                         new Product{ProductName = "LV", Price = 0},
                            new Product{ProductName = "Bench", Price = 0},
                     new Product{ProductName = "Oxygen", Price = 0},
                       new Product{ProductName = "Human", Price = 0},
                         new Product{ProductName = "LV", Price = 0},
                            new Product{ProductName = "Bench", Price = 0},
                     new Product{ProductName = "Oxygen", Price = 0},
                       new Product{ProductName = "Human", Price = 0},
                         new Product{ProductName = "LV", Price = 0}
        };

    return Ok(products);
  }




  [HttpGet("products/all")]
  public IActionResult getAll()
  {

  
var allProducts = _context.Product.ToList();
 
        return Ok(allProducts);  // Return a 200 OK response with the list of products
  

  
  }


  [HttpPost("products/{category}")]
  public IActionResult getByCategory(string category)
  {
    switch (category)
    {
      case "Toys":
        {
      _context.Product.Add(new Product { ProductName = "Toy9", Price = 9 });

// Save changes to the database (explained later)
  _context.SaveChanges();

    return Ok(category);
     
        }
      case "1":
        {
          var products = 
                   new Product{ProductName = "One", Price = 99};
                 
             _context.Product.Add(products);

// Save changes to the database (explained later)
  _context.SaveChanges();

    return Ok(category);
  
        }

    }

    return Ok(category);
  }
}
