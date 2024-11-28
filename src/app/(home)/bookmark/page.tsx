import BookmarkContent from '@/components/bookmark';

export const metadata = {
  title: 'Bookmark',
  description: 'Bookmarked Animes',
};

export default function BookmarkPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <div className="wrapper py-20">
        <h1 className="text-neutral-50 font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">
          Bookmarked Animes
        </h1>
        <BookmarkContent />
      </div>
    </main>
  );
}
