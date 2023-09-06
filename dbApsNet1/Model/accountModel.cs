using Model.Frameword;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    class accountModel
    {
        private dbcontext context = null;
        public accountModel()
        {
            context = new dbcontext();
        }
        public bool Login(string userName, string password)
        {
            object[] sqlParams = { new SqlParameter("@username",userName), new SqlParameter("@password",password) };
            var res = context.Database.SqlQuery<bool>("Sp_Acount_Login @username,@password",
            sqlParams).SingleOrDefault();
            return res;
        }
    }
}
