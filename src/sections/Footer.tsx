import Logo from '@/assets/logosaas.png';
import Image from 'next/image';
import SocialX from '@/assets/social-x.svg';
import LinkedIn from '@/assets/social-linkedin.svg';
import Insta from '@/assets/social-insta.svg';
import Youtube from '@/assets/social-youtube.svg';
import SocialPin from '@/assets/social-pin.svg';

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-12">

        {/* Left Side - Logo, Description, Social Icons */}
        <div className="flex flex-col gap-6 max-w-sm">
          {/* Logo */}
          <div className="inline-flex relative before:content-[''] before:top-2 before:blur before:bottom-0 before:h-full before:w-fit before:bg-[linear-gradient(to_right,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
            <Image src={Logo} height={40} alt="logo" className="relative" />
          </div>

          {/* Description */}
          <p className="text-sm text-[#bcbcbc]">
            Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-4">
            <SocialX className="w-6 h-6 hover:scale-110 transition" />
            <Insta className="w-6 h-6 hover:scale-110 transition" />
            <SocialPin className="w-6 h-6 hover:scale-110 transition" />
            <LinkedIn className="w-6 h-6 hover:scale-110 transition" />
            <Youtube className="w-6 h-6 hover:scale-110 transition" />
          </div>
        </div>

        {/* Right Side - Links in 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">

          {/* Product */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold mb-2">Product</h3>
            <a href="" className="hover:text-white">Features</a>
            <a href="" className="hover:text-white">Integrations</a>
            <a href="" className="hover:text-white">Updates</a>
            <a href="" className="hover:text-white">FAQ</a>
            <a href="" className="hover:text-white">Pricing</a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <a href="" className="hover:text-white">About</a>
            <a href="" className="hover:text-white">Blog</a>
            <a href="" className="hover:text-white">Careers</a>
            <a href="" className="hover:text-white">Manifesto</a>
            <a href="" className="hover:text-white">Press</a>
            <a href="" className="hover:text-white">Contact</a>
          </div>

          {/* Resources */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold mb-2">Resources</h3>
            <a href="" className="hover:text-white">Examples</a>
            <a href="" className="hover:text-white">Community</a>
            <a href="" className="hover:text-white">Guides</a>
            <a href="" className="hover:text-white">Docs</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white font-semibold mb-2">Legal</h3>
            <a href="" className="hover:text-white">Privacy</a>
            <a href="" className="hover:text-white">Terms</a>
            <a href="" className="hover:text-white">Security</a>
          </div>

        </div>

      </div>
    </footer>
  );
};
