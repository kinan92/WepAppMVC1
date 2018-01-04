using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace WepAppMVC1
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
            name: "Celsius",
            url: "Celsius",
            defaults: new { controller = "Home", action = "Celsius" }
          );
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
            name: "About",
            url: "About",
            defaults: new { controller = "Home", action = "About" }
          );
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
            name: "Contact",
            url: "Contact",
            defaults: new { controller = "Home", action = "Contact" }
          );


            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
            name: "Sokoban",
            url: "Sokoban",
            defaults: new { controller = "Prodjects", action = "Sokoban" }
          );
            routes.MapRoute(
            name: "Default",
            url: "{controller}/{action}/{id}",
            defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
          );

        }
    }
}
