using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WepAppMVC1.Models
{
    public class Person
    {
        public static Person me { get; set; }
        static Person()
        {
            me = new Person(25, "Kinan abo karam", 0729026684,"kinan.karam92@gmail.com","karlskrona");
        }

        public int Age { get ; set; }
        public string Name { get; set; }
        public int Phone { get; set; }
        public string Email { get; set; }
        public string Adress { get;  set; }

        public Person(int age, string name ,int phone ,string email ,string adress)
        {
            Age = age;
            Name = name;
            Phone = phone;
            Email = email;
            Adress= adress;
        }

        
    }

    
}