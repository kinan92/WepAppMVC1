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

        public ActionResult CreatePeople()
        {
            return  PartialView("AjaxCreatePeople", new People());
        }

        [HttpPost]
        public ActionResult AjaxCreatePeople(string Name, string PhoneNumbers, string City)
        {
            People newPerson = new People() { Name = Name, PhoneNumbers = PhoneNumbers, City = City };

            People.people.Add(newPerson);                                                                         
          
            return PartialView("_AjaxPerson", newPerson);
        }
        [HttpPost]
        public ActionResult SearchPeople(string SearchBy , string SearchValue)
        {

            List<People> SearhList = People.people;    

            if (SearchBy == "City")  //Search for City
            {
              SearhList=SearhList.Where(r => r.City.ToLower().Contains(SearchValue.ToLower()) || SearchValue == null).ToList();

                return PartialView("SearchList", SearhList);
            }
            else if (SearchBy == "Name")    //Search for Name
            {
                SearhList=SearhList.Where(r => r.Name.ToLower().Contains(SearchValue.ToLower()) || SearchValue == null).ToList();

                 return PartialView("SearchList", SearhList);
            }
            return PartialView("SearchList", SearhList);
        }
    }

}