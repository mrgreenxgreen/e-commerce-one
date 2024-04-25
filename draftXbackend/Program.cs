using Weather;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.MapGet("/weatherforecast", () =>
{
    Console.WriteLine("Meow");
    WeatherForecast status = new WeatherForecast();
    status.Weather = "Winter";
    status.Temperature = 2.1;
    return Results.Ok(status) ;
})
.WithName("GetWeatherForecast")
.WithOpenApi();

app.Run();


