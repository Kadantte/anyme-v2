import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900">
      <div className="wrapper pt-8 md:pt-8">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-start gap-y-4 pb-8">
          <AboutSection />
          <QuickLinks />
          <TopAnimeLinks />
          <SocialLinks />
        </div>
        <FooterBottom currentYear={currentYear} />
      </div>
    </footer>
  );
}

function AboutSection() {
  return (
    <div className="w-full md:w-[300px] lg:w-[400px] bg-neutral-800 p-4 rounded-lg">
      <h1 className="text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold text-neutral-50">
        AnyMe.
      </h1>
      <span className="text-[0.8] md:text-[0.9rem] lg:text-[1rem] font-bold text-violet-500">
        アニメに関することなら何でも
      </span>
      <p className="text-[0.8rem] md:text-[0.7rem] lg:text-[0.8rem] text-neutral-200 mt-2 text-pretty">
        AnyMe is your go-to anime hub, where you can explore, discover, and
        track your favorite shows effortlessly. Find the best recommendations
        and explore new anime by genre, popularity, or trends.
      </p>
      <SocialIcons />
    </div>
  );
}

function SocialIcons() {
  return (
    <div className="flex items-center gap-x-4 text-neutral-100 mt-3">
      <Link href="https://github.com/rfkyalf" aria-label="GitHub">
        <FaGithub className="size-5 md:size-5 lg:size-6" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rifkyalfarez"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="size-5 md:size-5 lg:size-6" />
      </Link>
      <Link href="https://www.instagram.com/rfkyalf/" aria-label="Instagram">
        <FaInstagram className="size-5 md:size-5 lg:size-6" />
      </Link>
    </div>
  );
}

function QuickLinks() {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-[0.9rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-50 font-bold">
        Quick Links
      </h2>
      <FooterLink text="Home" href="/" />
      <FooterLink text="Sign In" href="/signin" />
    </div>
  );
}

function TopAnimeLinks() {
  const links = [
    { text: 'All Anime', href: '/top/anime' },
    { text: 'Top Airing', href: '/top/airing' },
    { text: 'Top Upcoming', href: '/top/upcoming' },
    { text: 'Top Movies', href: '/top/movie' },
    { text: 'Most Popular', href: '/top/bypopularity' },
    { text: 'Most Favorited', href: '/top/favorite' },
  ];

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-[0.9rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-50 font-bold">
        Top Anime
      </h2>
      {links.map((link) => (
        <FooterLink key={link.text} text={link.text} href={link.href} />
      ))}
    </div>
  );
}

function SocialLinks() {
  const links = [
    { text: 'Github', href: 'https://github.com/rfkyalf' },
    { text: 'Linkedin', href: 'https://www.linkedin.com/in/rifkyalfarez' },
    { text: 'Instagram', href: 'https://www.instagram.com/rfkyalf/' },
    {
      text: 'Facebook',
      href: 'https://www.facebook.com/rrfkyalf',
    },
  ];

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-[0.9rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-50 font-bold">
        Social
      </h2>
      {links.map((link) => (
        <FooterLink key={link.text} text={link.text} href={link.href} />
      ))}
    </div>
  );
}

function FooterLink({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="text-neutral-200 hover:underline text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]"
      target="_blank"
    >
      {text}
    </Link>
  );
}

function FooterBottom({ currentYear }: { currentYear: number }) {
  return (
    <div className="flex items-center justify-between border-t border-neutral-700 py-4">
      <span className="text-[0.9rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-200">
        2024 - {currentYear}{' '}
        <Link href={'/'} className="hover:underline">
          AnyMe.
        </Link>{' '}
      </span>
      <span className="text-[0.9rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-200 ">
        Powered by{' '}
        <Link
          href={'https://jikan.moe/'}
          target="_blank"
          className="hover:underline"
        >
          Jikan API
        </Link>
      </span>
    </div>
  );
}
