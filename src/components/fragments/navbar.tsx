"use client";
import { Navbar, Button } from "flowbite-react";

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded className="font-poppins">
      <Navbar.Brand href="#home">
        <img
          src="/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="NovaTech Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          NovaTech
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button href="#home" className="bg-blue-500">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#home" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#about">About</Navbar.Link>
        <Navbar.Link href="#pricing">Pricing</Navbar.Link>
        <Navbar.Link href="#review">Review</Navbar.Link>
        <Navbar.Link href="#contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
