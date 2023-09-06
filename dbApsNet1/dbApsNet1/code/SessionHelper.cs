using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace dbApsNet1.code
{
    public class SessionHelper
    {
        public static void SetSession(UserSession session)
        {
            System.Web.HttpContext.Current.Session["loginSession"] = session;
        }
        public static UserSession GetSession()
        {
            var session = System.Web.HttpContext.Current.Session["loginSession"];
            if (session == null)
                return null;
            else
            {
                return session as UserSession;
            }
        }
    }
}