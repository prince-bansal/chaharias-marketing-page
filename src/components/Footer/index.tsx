import React from "react";

const socials = [
  {
    name: "Facebook",
    link: "#",
  },
  {
    name: "Instagram",
    link: "#",
  },
  {
    name: "LinkedIn",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="bg-stone-900 text-gray-300 min-h-[400px]">
      <div className="w-[80%] lg:flex  justify-between m-auto py-20">
        <div className="py-3 lg:w-2/6">
          <p className="text-white text-3xl mb-3">Chaharias</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vero
            voluptatum vel expedita at molestias, mollitia consequatur ratione
            velit excepturi recusandae fugiat, assumenda rem, voluptatem
            quisquam asperiores. Aspernatur, at sequi!
          </p>
        </div>
        <div className="p-3 grid gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-4/6">
          <div>
            <p className="text-3xl mb-3 text-white">Men</p>
            {socials.map((social) => (
              <a className="block" key={social.name} href={social.link}>
                {social.name}
              </a>
            ))}
          </div>
          <div>
            <p className="text-3xl mb-3 text-white">Women</p>
            {socials.map((social) => (
              <a className="block" key={social.name} href={social.link}>
                {social.name}
              </a>
            ))}
          </div>
          <div>
            <p className="text-3xl mb-3 text-white">Contact</p>
            {socials.map((social) => (
              <a className="block" key={social.name} href={social.link}>
                {social.name}
              </a>
            ))}
          </div>

          <div>
            <p className="text-3xl mb-3 text-white">About</p>
            {socials.map((social) => (
              <a className="block" key={social.name} href={social.link}>
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
