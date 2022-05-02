using BlazorAppGanttByPolygonChart;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;

// required for registering IgniteUIBlazor 
using IgniteUI.Blazor.Controls;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

// registering Infragistics Blazor
builder.Services.AddScoped(typeof(IIgniteUIBlazor), typeof(IgniteUIBlazor));

await builder.Build().RunAsync();
