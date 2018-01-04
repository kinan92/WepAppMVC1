using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WepAppMVC1.Models
{
    public class FeverCheck
    {
        public double FeverCelsius { get; set; }
        public string Text { get; set; }
        public FeverCheck(double feverCelsius)
        {
            FeverCelsius = feverCelsius;
            Check();
        }



        void Check()
        {
            if (FeverCelsius > 40)
            {
                Text = "You must go to the doctor";
            }
            else if (FeverCelsius < 30)
            {
                Text = "You have Hypothermia";
            }
            else
            {
                Text = "Your temperature is normal have a nice day";
            }
        }
    }
}