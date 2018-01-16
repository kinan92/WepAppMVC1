using System;
using System.Collections.Generic;

using System.Linq;
using System.Web;

namespace WepAppMVC1.Models
{
    public class People
    {
        static int idCount = 0;
        public int Id { get; set; }
        public string Name { get; set; }
        public int PhoneNumbers { get; set; }
        public string Cities { get; set; }

        public People()
        {
            Id = idCount++;
        }
            


        public static List<People> people = new List<People>
        {
            new People
            {
                Name="Kinan",
                PhoneNumbers=11,
                Cities="Damas",
            },
            new People
            {
                Name="b",
                PhoneNumbers=22,
                Cities="B",
            },
            new People
            {
                Name="c",
                PhoneNumbers=33,
                Cities="C",
            },
            new People
            {
                Name="d",
                PhoneNumbers=44,
                Cities="D",
            },
            new People
            {
                Name="e",
                PhoneNumbers=55,
                Cities="E",
            }

           
        };

    }
}