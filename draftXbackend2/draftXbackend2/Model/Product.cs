namespace ThisProduct.Model{

public class Product
{
    
    public int ProductId { get; set;}
    public required string ProductName{ get; set;} = string.Empty;
    public double Price {get; set;} = 0;
  

}

}