using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace Model.Frameword
{
    public partial class dbcontext : DbContext
    {
        public dbcontext()
            : base("name=dbcontext")
        {
        }

        public virtual DbSet<tbl_account> tbl_account { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
