using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WepAppMVC1.Models;

namespace WepAppMVC1.Controllers
{
    public class AjaxController : Controller
    {
        // GET: Ajax
        public ActionResult AjaxIndex()
        {
            return View();
        }
        public ActionResult AjaxRemovePerson(int id)
        {
            People.people.Remove(People.people.SingleOrDefault(c => c.Id == id));

            return Content("");
        }
        public ActionResult AjaxAddPerson(string Name, string PhoneNumbers, string City)
        {
            List<People> peopleList;                                                                             //reference for list type generic or object                                                 

            peopleList = People.people;
            peopleList.Add(new People() { Name = Name, PhoneNumbers = PhoneNumbers, City = City });

            return RedirectToAction("Index");

        }

    }

}