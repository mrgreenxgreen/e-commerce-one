using Microsoft.AspNetCore.Mvc;
using Weather.Model;

namespace draftXbackend2.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private readonly ILogger<WeatherForecastController> _logger;
    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }
    
    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherModel> GetWeather()
    {
        var forecast = new WeatherModel{Weather = "summer", Temperature= 42};
        return  new List<WeatherModel>(){forecast};
    }
}
