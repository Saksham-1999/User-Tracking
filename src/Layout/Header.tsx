import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


const productsItems = [
  { name: "Phishing Plugin Tool", link: "/phishing-prevention-tool" },
  {
    name: "Underwater Instruction Detection",
    link: "/underwaterinstructiondetection",
  },
  { name: "Decission Support System", link: "/decission-support-system" },
];

const offeringItems = [
  { name: "Cyber Security Solutions", link: "/cyber-security-solutions" },
  { name: "Ai/Ml Applications", link: "/ai-ml-applications" },
  { name: "Digital Transformations", link: "/digital-transformations" },
  { name: "Defense Innovations", link: "/defense-innovations" },
];

function Header() {
  const location = useLocation();

  return (
    <header className="w-full px-3 lg:px-20">
      <Sheet>
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex flex-col">
            <div className="flex items-center space-x-2">
              <img src={logo} className="h-8 rounded-sm" alt="Ekjal logo" />
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-primary">
                  Ekvayu
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  EMBRACE CHALLENGES, EXPLORE NEW FRONTIERS
                </span>
              </div>
            </div>
          </Link>
          <nav className="hidden md:flex space-x-10">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`hover:text-primary font-normal bg-transparent text-base uppercase ${
                      offeringItems.some(
                        (item) => location.pathname === item.link
                      )
                        ? "text-primary underline"
                        : "text-foreground"
                    }`}
                  >
                    Offerings
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[400px]">
                      {offeringItems.map((item, index) => (
                        <NavigationMenuLink
                          key={index}
                          className={`block px-3 py-2 rounded-md ${
                            location.pathname === item.link
                              ? "bg-primary text-white"
                              : "hover:bg-primary hover:text-white"
                          }`}
                          asChild
                        >
                          <Link to={item.link}>{item.name}</Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`hover:text-primary font-normal bg-transparent text-base uppercase ${
                      productsItems.some(
                        (item) => location.pathname === item.link
                      )
                        ? "text-primary underline"
                        : "text-foreground"
                    }`}
                  >
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[400px]">
                      {productsItems.map((item, index) => (
                        <NavigationMenuLink
                          key={index}
                          className={`block px-3 py-2 rounded-md ${
                            location.pathname === item.link
                              ? "bg-primary text-white"
                              : "hover:bg-primary hover:text-white"
                          }`}
                          asChild
                        >
                          <Link to={item.link}>{item.name}</Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={`px-3 py-2 hover:underline hover:text-primary rounded-md bg-transparent font-normal tracking-wider uppercase ${
                      location.pathname === "/jobs"
                        ? "text-primary underline"
                        : "text-foreground"
                    }`}
                    asChild
                  >
                    <Link to={"/jobs"}>Jobs</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className={`px-3 py-2 hover:underline hover:text-primary rounded-md bg-transparent font-normal tracking-wider uppercase ${
                      location.pathname === "/about-us"
                        ? "text-primary underline"
                        : "text-foreground"
                    }`}
                    asChild
                  >
                    <Link to={"/about-us"}>About Us</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="default" asChild className="hidden md:flex">
              <Link to="/contact-us">
                <Phone className="h-4 w-4 mr-2" />
                <span>Contact Us</span>
              </Link>
            </Button>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
          </div>

          <SheetContent className="flex flex-col bg-background">
            <SheetHeader className="border-b pb-4 mb-4">
              <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex-grow">
              {/* Products Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full text-left p-2 text-lg font-medium hover:bg-primary hover:text-secondary transition-colors flex items-center justify-between">
                  Products <ChevronDown className="w-5 h-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {productsItems.map((item, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="py-2 hover:bg-primary hover:text-secondary"
                    >
                      <SheetClose asChild>
                        <Link to={item.link} className="w-full block">
                          {item.name}
                        </Link>
                      </SheetClose>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Offerings Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full text-left p-2 text-lg font-medium hover:bg-primary hover:text-secondary transition-colors flex items-center justify-between">
                  Offerings <ChevronDown className="w-5 h-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full">
                  {offeringItems.map((item, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="py-2 hover:bg-primary hover:text-secondary"
                    >
                      <SheetClose asChild>
                        <Link to={item.link} className="w-full block">
                          {item.name}
                        </Link>
                      </SheetClose>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Regular Nav Items */}
              <SheetClose asChild>
                <Link
                  to="/jobs"
                  className={`block p-2 rounded-md text-lg font-medium hover:bg-primary hover:text-secondary transition-colors ${
                    location.pathname === "/jobs"
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  Jobs
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/about-us"
                  className={`block p-2 rounded-md text-lg font-medium hover:bg-primary hover:text-secondary transition-colors ${
                    location.pathname === "/about-us"
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  About Us
                </Link>
              </SheetClose>
            </nav>

            <SheetClose asChild>
              <Button variant="default" className="mt-6" asChild>
                <Link to="/contact-us" className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Contact Us</span>
                </Link>
              </Button>
            </SheetClose>
          </SheetContent>
        </div>
      </Sheet>
    </header>
  );
}

export default Header;
