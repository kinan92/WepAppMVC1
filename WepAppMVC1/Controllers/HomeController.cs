using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WepAppMVC1.Models;

namespace WepAppMVC1.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        // GET: About
        public ActionResult About()
        {
            return View(Person.me);
        }

        // GET: Contact
        public ActionResult Contact()
        {
            return View(Person.me);
        }

        [HttpGet]//default
        public ActionResult Celsius()
        {
            return View();
        }

        [HttpPost]// reagerar enbart på post
        public ActionResult Celsius(double FeverCelsius, string scale  )
        {
            
           ViewBag.FeverCheck = 0;

            if (scale == "Fahrenheit")
            {
                FeverCelsius = FeverCelsius / 2.664864864864865;
            }
            
            FeverCheck fever = new FeverCheck(FeverCelsius);
            ViewBag.FeverCheck = fever;
            
            return View();
        }

    }

}
