import { Mail, PhoneCall, MapPinIcon, LinkedinIcon, InstagramIcon, Linkedin, LucideLinkedin, Twitter, Send } from "lucide-react";
import { cn } from "../src/lib/utils";
import Toastify from 'toastify-js'

export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-18 text-center">
          <span className="text-primary">Contact</span> Me!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            {/* Contact INFO */}
            <div className="flex flex-col space-y-6 justify-end">
              {/* Email */}
              <div className="flex items-start sm:items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <a href="mailto:johnluc0718@gmail.com" className="hover:text-primary transition-colors"> johnluc0718@gmail.com</a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start sm:items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Phone</h4>
                  <a href="tel:+14164524503" className="hover:text-primary transition-colors"> +1 416-452-4503</a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start sm:items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Location</h4>
                  <a className="hover:text-primary transition-colors"> Toronto, Canada</a>
                </div>
              </div>
              {/* Social Media */}
              <div className="pt-5 w-[245px]">
                <div className="flex ml-2 space-x-3 justify-between text-primary/60">
                  <a href="https://www.linkedin.com/in/john-luc-74ba092a4/" className="hover:text-primary" target="_blank"><LucideLinkedin/></a>
                  <a href="https://x.com/Pokemon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="hover:text-primary" target="_blank"><Twitter/></a>
                  <a href="https://www.instagram.com/johnlucc/?hl=af" className="hover:text-primary" target="_blank"><InstagramIcon/></a>
                </div>

              </div>


            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-xl font-semibold text-gray-300 mb-6">
              Message Me!
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className=" block text-sm font-medium mb-2 text-left text-gray-400">Name</label>
                <input type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-1 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
          
                 />
                
              </div>
              <div>
                <label htmlFor="email" className=" block text-sm font-medium mb-2 text-left text-gray-400">Email</label>
                <input type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-1 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                 />
                
              </div>
              <div>
                <label htmlFor="message" className=" block text-sm font-medium mb-2 text-left text-gray-400"></label>
                <input type="text"
                id="Message"
                name="Message"
                className="w-full px-4 pt-3 pb-28 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder="Type your message here..."

                 />
                
              </div>
              <button type="submit" className={cn("cosmic-button w-full felx items-center justify-center gap-2")} onClick={handleSubmit}> <Send className="mx-auto my-1"/> </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};
