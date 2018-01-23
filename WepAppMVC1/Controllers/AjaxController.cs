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

        public ActionResult AjaxEditPerson(int id)
        {
           return PartialView ("AjaxEditPerson",People.people.SingleOrDefault(c => c.Id == id));      
        }

        [HttpPost]
        public ActionResult AjaxSaveEditPeople(int id ,[Bind(Exclude = "")]People people)
        {
            People ToUpdate = People.people.SingleOrDefault(c => c.Id == id);

            ToUpdate.Name = people.Name;
            ToUpdate.PhoneNumbers = people.PhoneNumbers;
            ToUpdate.City = people.City;
            return PartialView("_AjaxPerson",ToUpdate);
        }

        public ActionResult AjaxCanselPeople(int id)
        {
            People ToUpdate = People.people.SingleOrDefault(c => c.Id == id);

            return PartialView("_AjaxPerson", ToUpdate);
        }
        public ActionResult CreatePeople (string Name, string PhoneNumbers, string City)
        {
            //People ToUpdate = People.people.SelectMany(a => people.Name == people.Name, b => people.PhoneNumbers == people.PhoneNumbers ,c =>people.City==people.City);

            //ToUpdate.Name = people.Name;
            //ToUpdate.PhoneNumbers = people.PhoneNumbers;
            List<People> peopleList = new List<People>();                                                                            //reference for list type generic or object

            peopleList.Add(new People() { Name = Name, PhoneNumbers = PhoneNumbers, City = City });

            return  View("AjaxCreatePeople");
        }

        [HttpPost]
        public ActionResult AjaxCreatePeople(string Name, string PhoneNumbers, string City)
        {
            List<People> peopleList = new List<People>();                                                                            //reference for list type generic or object
            
            peopleList.Add(new People() { Name = Name, PhoneNumbers = PhoneNumbers, City = City });
          
            return PartialView("AjaxCreatePepole",peopleList);

        }
    }

}