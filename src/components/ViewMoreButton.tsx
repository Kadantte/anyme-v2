import { ChevronsRight } from 'lucide-react';
import Link from 'next/link';

export default function ViewMoreButton({
  href,
  display,
  text = 'View More',
}: {
  href: string;
  display?: string;
  text?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className={`text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-violet-500 hover:text-violet-600 ${display} items-center justify-center gap-x-1 mt-2 md:mt-3 lg:mt-4`}
    >
      <span>{text}</span>
      <ChevronsRight />
    </Link>
  );
}
