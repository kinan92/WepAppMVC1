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
        public ActionResult Index()
        {
            var model =
               from r in people
               orderby r.Cities
               select r;
            return View(model);
        }

        // GET: PeopleReviews/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: PeopleReviews/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: PeopleReviews/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: PeopleReviews/Edit/5
        public ActionResult Edit(int id)
        {
            
             var review = _review.Single(r => r.Id == id);
            return View(review);
        }

        // POST: PeopleReviews/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: PeopleReviews/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: PeopleReviews/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }


        static List<People> people = new List<People>
        {
            new People
            {
                Id=1,
                Name="Kinan",
                PhoneNumbers=11,
                Cities="Damas",
            },
            new People
            {
                Id=2,
                Name="b",
                PhoneNumbers=22,
                Cities="B",
            },
            new People
            {
                Id=3,
                Name="c",
                PhoneNumbers=33,
                Cities="C",
            },
            new People
            {
                Id=4,
                Name="d",
                PhoneNumbers=44,
                Cities="D",
            },
            new People
            {
                Id=5,
                Name="e",
                PhoneNumbers=55,
                Cities="E",
            }
        };


    }
}
