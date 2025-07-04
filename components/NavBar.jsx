import { useEffect } from "react";
import { cn } from "../src/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {window.removeEventListener("scroll", handleScroll)}

    }, [])
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transitional-all duration-300", 
        isScrolled ? "py-5 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary flex item-center">
          <span className="relative z-10">
            <span className="text-glow text-foreground">John</span> Luc
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(
            (item, key) =>(<a key = {key} href = {item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 font-light">{item.name}</a>)
          )}
        </div>

        {/* Mobile Nav */}
        <button onClick={() =>setIsMenuOpen(prev => !prev)} className="md:hidden p-2 text-foreground z-50">{isMenuOpen ? <X size={24}/>:<Menu size={24}/>}</button>
        <div className={cn("fixed inset-0 bg-background/95 backdrop-blue-md flex flex-col item-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto": "opacity-0 point-events-none"
        )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map(
              (item, key) =>(
                <a onClick = {() => setIsMenuOpen(false)}key = {key} href = {item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 font-light">{item.name} </a>)
              
            )}
          </div>
        </div>
       

      </div>
    </nav>
  );
};
