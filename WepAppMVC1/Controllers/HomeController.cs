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
        private static Random random = new Random(DateTimeOffset.Now.Millisecond);
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

        [HttpPost]
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

        [HttpGet]//default
        public ActionResult GuessingGame()
        {
            int randomNumber = random.Next(1, 101);
            this.Session["Answer"] = randomNumber;


            if (Session["History"] == null) Session["History"] = new List<GuessingGameHistory>();


            List<GuessingGameHistory> history = (List<GuessingGameHistory>)Session["History"];
            if(history.Count > 0)
            {
                history[history.Count - 1].Display = true;
            }
            history.Add(new GuessingGameHistory {  Number = randomNumber, Display = false });
            Session["History"] = history;


            this.Session["GuessList"] = new List<int>();
            GuessGame guess = new GuessGame
            {
                Answer = (int)this.Session["Answer"],               
            };                    
            return View(guess);
        }

        [HttpPost]
        public ActionResult GuessingGame(GuessGame guess )
        {            
            (this.Session["GuessList"] as List<int>).Add(guess.Num);            
            ViewBag.guessList = (this.Session["GuessList"] as List<int>);
            guess.Answer = (int)this.Session["Answer"];
            guess.Compare();
            List<GuessingGameHistory> history = (List<GuessingGameHistory>)Session["History"];
            history[history.Count - 1].Tried += 1;
            return View(guess);
        }

    }

}
