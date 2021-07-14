using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
//models mirror tag table in the database

namespace Tabloid.Models
{
    public class Tag
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

    }
}
