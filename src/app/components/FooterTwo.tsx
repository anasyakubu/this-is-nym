import React from "react";
import Image from "next/image";

interface LinkGroupProps {
  children: React.ReactNode;
  header: string;
}

interface NavLinkProps {
  link: string;
  label: string;
}

const LinkGroup: React.FC<LinkGroupProps> = ({ children, header }) => {
  return (
    <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
      <div className="mb-10 w-full">
        <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
          {header}
        </h4>
        <ul className="space-y-3">{children}</ul>
      </div>
    </div>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ link, label }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
      >
        {label}
      </a>
    </li>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <a href="/#" className="mb-6 inline-block max-w-[160px]">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                  alt="logo"
                  className="max-w-full dark:hidden"
                />
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="max-w-full hidden dark:block"
                />
              </a>
              <p className="mb-7 text-base text-body-color dark:text-dark-6">
                Sed ut perspiciatis undmnis is iste natus error sit amet
                voluptatem totam rem aperiam.
              </p>
              <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                <span className="mr-3 text-primary">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* ... (icon path) */}
                  </svg>
                </span>
                <span>+012 (345) 678 99</span>
              </p>
            </div>
          </div>

          <LinkGroup header="Resources">
            <NavLink link="/#" label="SaaS Development" />
            <NavLink link="/#" label="Our Products" />
            <NavLink link="/#" label="User Flow" />
            <NavLink link="/#" label="User Strategy" />
          </LinkGroup>
          <LinkGroup header="Company">
            <NavLink link="/#" label="About TailGrids" />
            <NavLink link="/#" label="Contact & Support" />
            <NavLink link="/#" label="Success History" />
            <NavLink link="/#" label="Setting & Privacy" />
          </LinkGroup>
          <LinkGroup header="Quick Links">
            <NavLink link="/#" label="Premium Support" />
            <NavLink link="/#" label="Our Services" />
            <NavLink link="/#" label="Know Our Team" />
            <NavLink link="/#" label="Download App" />
          </LinkGroup>

          <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                Follow Us On
              </h4>
              <div className="mb-6 flex items-center">
                <a
                  href="javascript:void(0)"
                  className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-dark hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-white dark:hover:border-primary sm:mr-4 lg:mr-3 xl:mr-4"
                >
                  {/* ... (social media icon) */}
                </a>
                {/* Add other social media icons here */}
              </div>
              <p className="text-base text-body-color dark:text-dark-6">
                &copy; 2025 TailGrids
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="absolute bottom-0 left-0 z-[-1]">
          {/* ... (background shape/svg) */}
        </span>
        <span className="absolute right-10 top-10 z-[-1]">
          {/* ... (background shape/svg) */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
