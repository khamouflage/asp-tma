import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import FooterDetails from "./FooterDetails";

export default function Footer() {
  return (
    <footer className="bg-orange-200 min-h-[50vh] py-10 px-8">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:gap-6 py-8">
        <section className="flex flex-col gap-y-4">
          <h2 className="font-bold">Coding Task</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="text-3xl flex space-x-2 items-start">
            <Link href="#" title="GitHub Account" className="cursor-pointer">
              <FaGithub />
            </Link>

            <Link href="#" title="LinkedIn Profile" className="cursor-pointer">
              <FaLinkedinIn />
            </Link>

            <Link href="#" title="Instagram handle" className="cursor-pointer">
              <FaInstagram />
            </Link>
          </div>
        </section>

        <section className="flex flex-col gap-y-4">
          <h2 className="font-bold">About</h2>
          <ul className="flex flex-col gap-y-4">
            <FooterDetails title="About" />
            <FooterDetails title="Features" />
            <FooterDetails title="News & Articles" />
          </ul>
        </section>
        <section className="flex flex-col gap-y-4">
          <h2 className="font-bold">Support</h2>
          <ul className="flex flex-col gap-y-4">
            <FooterDetails title="FAQs" />
            <FooterDetails title="Contact Us" />
            <FooterDetails title="Support Center" />
            <FooterDetails title="Security" />
          </ul>
        </section>
        <section className="flex flex-col gap-y-4">
          <h2 className="font-bold">Partner</h2>
          <ul className="flex flex-col gap-y-4">
            <FooterDetails title="Our Partners" />
            <FooterDetails title="Subscribe" />
          </ul>
        </section>
      </div>
      <p className="text-center py-4 border-t-4 border-t-slate-600">
        Copyright &copy; NDIC {new Date().getFullYear()}{" "}
      </p>
    </footer>
  );
}
