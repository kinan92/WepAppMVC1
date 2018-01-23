using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WepAppMVC1.Models;

namespace WepAppMVC1.Controllers
{
    public class PartialController : Controller
    {
        // GET: Partial
        public ActionResult IndexPartial()
        {
            return View();
        }

        public ActionResult PartPerson(int id)
        {
            People temp = People.people.SingleOrDefault(c => c.Id == id);
            return PartialView("_PartialPeople",temp);
        }
    

        
    }
}