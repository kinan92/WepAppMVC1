using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WepAppMVC1.Models
{
    public class People
    {
        static int idCount = 0;
        public int Id { get; set; }
        public string Name { get; set; }
        [Display(Name = "Phone Numbers")]
        public int PhoneNumbers { get; set; }
        public string City { get; set; }

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
                City="Damas",
            },
            new People
            {
                Name="b",
                PhoneNumbers=22,
                City="B",
            },
            new People
            {
                Name="c",
                PhoneNumbers=33,
                City="C",
            },
            new People
            {
                Name="d",
                PhoneNumbers=44,
                City="D",
            },
            new People
            {
                Name="e",
                PhoneNumbers=55,
                City="E",
            }

           
        };

    }
}