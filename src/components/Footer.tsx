import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-neutral-900">
      <div className="wrapper pt-8 md:pt-8">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-start gap-y-4 pb-8">
          <div className="w-full md:w-[300px] lg:w-[400px] bg-neutral-800 p-4 rounded-lg">
            <h1 className="text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-bold text-neutral-50">
              AnyMe.
            </h1>
            <span className="text-[0.8] md:text-[0.9rem] lg:text-[1rem] font-bold text-violet-500 ">
              アニメに関することなら何でも
            </span>
            <p className="text-[0.8rem] md:text-[0.7rem] lg:text-[0.8rem] text-neutral-200 mt-2">
              AnyMe is your go-to anime hub, where you can explore, discover,
              and track your favorite shows effortlessly. Find the best
              recommendations and explore new anime by genre, popularity, or
              trends.
            </p>
            <div className="flex items-center gap-x-4 text-neutral-100 mt-3">
              <FaGithub className="size-5 md:size-5 lg:size-6" />
              <FaLinkedin className="size-5 md:size-5 lg:size-6" />
              <FaInstagram className="size-5 md:size-5 lg:size-6" />
            </div>
          </div>
          <div className="flex flex-col gap-x-2">
            <span className="text-[0.9rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-50 font-bold">
              Quick Links
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              Home
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              Bookmark
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              Sign In
            </span>
          </div>
          <div className="flex flex-col gap-x-2">
            <span className="text-[0.9rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-50 font-bold">
              Top Anime
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              All Anime
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              Top Airing
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              Top Upcoming
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              Top Movies
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              Most Popular
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              Most Favorited
            </span>
          </div>
          <div className="flex flex-col gap-x-2">
            <span className="text-[0.9rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-50 font-bold">
              Social
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              Github
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              Linkedin
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              Instagram
            </span>
            <span className="text-neutral-200 text-[0.8rem] md:text-[0.8rem] lg:text-[0.9rem]">
              Facebook
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-neutral-700 py-4">
          <span className="text-[0.9rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-200">
            © 2024 - {new Date().getFullYear()} AnyMe. All Rights Reserved
          </span>
          <span className="text-[0.9rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-200">
            Powered by Jikan API
          </span>
        </div>
      </div>
    </footer>
  );
}
