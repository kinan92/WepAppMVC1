using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WepAppMVC1.Models
{
    public class GuessingGameHistory
    {
        public int Number { get; set; }

        public bool Display { get; set; }

        public int Tried { get; set; }
    }
}