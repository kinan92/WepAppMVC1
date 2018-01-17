using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WepAppMVC1.Models;

namespace WepAppMVC1.Controllers
{
    public class PeopleReviewsController : Controller
    {
        // GET: PeopleReviews
        public ActionResult Index(string searchBy ,string search)
        {
            List<People> peopleList;                                                                              //reference for list type generic or object                                                 
      
            if (Session["Add"] != null)
            {
                peopleList = (List<People>)Session["Add"];                                  // casting session as list type the assign it to object of list same type  
            }
            else
            {
                peopleList = People.people;
            }
            var model =
            from r in peopleList
            orderby r.Id
            select r; 

            if(searchBy=="City" )
            {
              
                return View(peopleList.Where( r => r.City.ToLower().Contains (search.ToLower()) || search==null).ToList());
            }
            else if(searchBy=="Name")
            {
                return View(peopleList.Where(r => r.Name.ToLower().Contains (search.ToLower()) || search == null).ToList());
            }

            return View(model);

        }

        // GET: PeopleReviews/Create
        public ActionResult Create()
        {

            return View(new People());
        }

        // POST: PeopleReviews/Create
        [HttpPost]
        public ActionResult Create( string Name, string PhoneNumbers, string City)
        {
            List<People> peopleList;                                                                             //reference for list type generic or object                                                 

            if (Session["Add"] != null)
            {
                peopleList = (List<People>)Session["Add"];                                  // casting session as list type the assign it to object of list same type  
            }       
            else     //is null
            {
                peopleList = People.people;
            }
            peopleList.Add(new People() { Name = Name, PhoneNumbers = PhoneNumbers, City = City});
            Session["Names"] = peopleList;
            return RedirectToAction("Index");

        }

        // GET: PeopleReviews/Edit/5
        public ActionResult Edit(int id)
        {
            
            var review = People.people.Single(r => r.Id == id);
            return View(review);
        }

        // POST: PeopleReviews/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            var review = People.people.Single(r => r.Id == id);
            if(TryUpdateModel(review))
            {

                return RedirectToAction("Index");
            }
            return View(review);
        }

        // GET: PeopleReviews/Delete/5
        public ActionResult Delete(int id)
        {
            var review = People.people.Single(r => r.Id == id);
            if(review == null)
            {
                return HttpNotFound ();
            }
            return View(review);
        }

        // POST: PeopleReviews/Delete/5
        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int id)
        {
        
             var review = People.people.Find(r => r.Id == id);
            People.people.Remove(review);
            return RedirectToAction("Index");
        }


        

    }
}
