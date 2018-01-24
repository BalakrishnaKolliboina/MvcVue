using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MvcVue.Startup))]
namespace MvcVue
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
