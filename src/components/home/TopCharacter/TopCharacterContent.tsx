import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { formattedNumber } from '@/lib/utils';
import Link from 'next/link';
import { BsInfoCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

export default function TopCharacterContent({ topCharacterList }: any) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4 mt-3 md:mt-4 lg:mt-5">
      {topCharacterList?.data.map((chara: any, index: number) => (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          viewport={{ once: true }}
          key={chara.mal_id}
          style={{ backgroundImage: `url(${chara.images.webp.image_url})` }}
          className="relative w-full h-[250px] md:h-[320px] bg-cover bg-center rounded-xl overflow-hidden group"
        >
          <Dialog>
            <DialogTrigger className="absolute z-20 w-full h-full inset-0 flex flex-col justify-center items-center bg-neutral-950/40 bg-clip-padding backdrop-filter backdrop-blur-sm backdrop-saturate-100 backdrop-contrast-100 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
              <BsInfoCircleFill className="size-12 md:size-14 lg:size-16 text-neutral-50 mb-1" />
              <span className="text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] font-bold text-neutral-50">
                Show Details
              </span>
            </DialogTrigger>
            <DialogContent className="w-[80%] h-[80%] rounded-xl overflow-auto no-scrollbar bg-gradient-to-tl from-neutral-900 via-neutral-800 to-neutral-700 border-none px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
              <DialogHeader>
                <DialogTitle className="text-neutral-50 text-start font-semibold text-[1rem] md:text-[1.1rem] lg:text-[1.2rem]">
                  <Link href={chara.url} target="_blank">
                    {chara.name} ({chara.name_kanji})
                  </Link>
                </DialogTitle>
                <DialogDescription className="text-neutral-200 text-start font-normal text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] whitespace-pre-wrap text-pretty">
                  {chara.about}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <div className="absolute h-full w-full bg-gradient-to-t from-neutral-900 via-transparent top-0" />
          <div className="relative h-full flex flex-col justify-between p-2">
            <div className="w-full flex justify-between items-center">
              <span className="w-fit bg-gradient-to-r from-violet-500/75 to-fuchsia-500/75 px-2 py-1 rounded-lg text-neutral-200 text-[1rem]">
                #{index + 1}
              </span>
              <span className="w-fit bg-rose-500/75 px-2 py-1 rounded-lg text-neutral-200 text-[1rem]">
                &#x2764; {formattedNumber(chara.favorites)}
              </span>
            </div>
            <h2 className="text-neutral-200 text-[1rem]">{chara.name}</h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
