using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WepAppMVC1.Models
{
    public class GuessGame
    {
        public int Num { get; set; }
        public string Text { get; set; }
        public int Answer { get; set; }
        public int Id { get; set; }
        public string FinalScore { get; set; }

        public void Compare()
        {
            if (Num > Answer)
            {
                Text = "the number is to high";
            }
            else if ( Num < Answer)
            {
                Text = "the number is to low";
            }
            else if ( Num == Answer)
            {
             
                  Text = "you have won";
            }

        }
    }
 
}