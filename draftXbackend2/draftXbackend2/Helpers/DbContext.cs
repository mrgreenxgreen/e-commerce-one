using Microsoft.EntityFrameworkCore;
using ThisProduct.Model;
using Microsoft.EntityFrameworkCore.Migrations; // Add this for migrations
using Npgsql.EntityFrameworkCore.PostgreSQL; 
using Npgsql;


namespace DbContextNamespace{
public class MyDbContext : DbContext
{
    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }

    // Define your DbSet properties for your database entities
    public DbSet<Product> Product { get; set; }  // Example entity (replace with your actual entities)

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Define any model configuration for relationships, constraints, etc. (optional)
        modelBuilder.Entity<Product>()
        .Property(p => p.ProductId); // Example using the strategy
   
    }

     // This code snippet is typically placed in a separate class or file
    public class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    ProductId = table.Column<int>(nullable: false)
                     ,
                    ProductName = table.Column<string>(maxLength: 50, nullable: false),
                    Price = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.ProductId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "Products");
        }
    }
}
}