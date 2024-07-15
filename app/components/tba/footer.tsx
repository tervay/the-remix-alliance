import { Link } from "@remix-run/react";
import andymarkImg from "~/assets/images/andymark_logo.png";
import tbaImg from "~/assets/images/logo_square_512.png";

function FooterLink({
  href,
  children,
}: { href: string; children: React.ReactNode }) {
  return (
    <Link
      to={href}
      className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-center px-4 text-gray-800 bg-white dark:text-white dark:bg-gray-900">
      <div className="container px-4 py-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <Link to="/" className="flex">
            <img
              className="w-auto h-8 bg-blue-800 inline"
              src={tbaImg}
              alt=""
            />
            <span className="ml-2 text-xl font-bold self-center">
              The Blue Alliance
            </span>
          </Link>

          <div className="flex flex-col align-middle">
            <div>
              Thanks to our platinum sponsor{" "}
              <Link to={"https://www.andymark.com/"} title="AndyMark">
                <img src={andymarkImg} alt="AndyMark" className="h-5 inline" />
              </Link>
              .
            </div>

            <div>
              Data provided by the{" "}
              <Link to={"https://frc-events.firstinspires.org/services/API"}>
                <i>FIRST</i>
                <sup>®</sup> Events API
              </Link>
              .
            </div>
          </div>

          <div className="grid grid-cols-4">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="https://github.com/the-blue-alliance/the-blue-alliance/">
              Open Source
            </FooterLink>
            <FooterLink href="/add-data">Add Data</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
            <FooterLink href="/donate">Donate</FooterLink>
            <FooterLink href="/thanks">Thanks</FooterLink>
            <FooterLink href="/apidocs">API</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
