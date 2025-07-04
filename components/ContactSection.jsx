import {
  Mail,
  PhoneCall,
  MapPinIcon,
  LinkedinIcon,
  InstagramIcon,
  Linkedin,
  LucideLinkedin,
  Twitter,
  Send,
} from "lucide-react";
import { cn } from "../src/lib/utils";
import Toastify from "toastify-js";
import emailjs from "emailjs-com";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };
// Add this inside your component, before the return statement
console.log("Environment Variables Check:");
console.log("VITE_SERVICE_ID:", import.meta.env.VITE_SERVICE_ID);
console.log("VITE_TEMPLATE_ID:", import.meta.env.VITE_TEMPLATE_ID);
console.log("VITE_PUBLIC_KEY:", import.meta.env.VITE_PUBLIC_KEY);
console.log("All env vars:", import.meta.env);
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="text-primary">Contact</span> Me!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8">
            {/* Contact INFO */}
            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex items-start sm:items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <a
                    href="mailto:johnluc0718@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    {" "}
                    johnluc0718@gmail.com
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start sm:items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PhoneCall className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Phone</h4>
                  <a
                    href="tel:+14164524503"
                    className="hover:text-primary transition-colors"
                  >
                    {" "}
                    +1 416-452-4503
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start sm:items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPinIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Location</h4>
                  <a className="hover:text-primary transition-colors">
                    {" "}
                    Toronto, Canada
                  </a>
                </div>
              </div>
              {/* Social Media */}
              <div className="pt-5 w-[245px]">
                <div className="flex ml-2 space-x-3 justify-between text-primary/60">
                  <a
                    href="https://www.linkedin.com/in/john-luc-74ba092a4/"
                    className="hover:text-primary"
                    target="_blank"
                  >
                    <LucideLinkedin />
                  </a>
                  <a
                    href="https://x.com/Pokemon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    className="hover:text-primary"
                    target="_blank"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.instagram.com/johnlucc/?hl=af"
                    className="hover:text-primary"
                    target="_blank"
                  >
                    <InstagramIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-xl font-semibold text-gray-300 mb-6">
             Message Me! 
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className=" block text-sm font-medium mb-2 text-left text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-1 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className=" block text-sm font-medium mb-2 text-left text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-1 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className=" block text-sm font-medium mb-2 text-left text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Type your message here..."
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                <Send className="mx-auto my-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
