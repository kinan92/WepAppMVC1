﻿using System;
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

    }

}
