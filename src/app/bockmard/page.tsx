import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBookmark } from "react-icons/hi2";

interface DataItem {
  id: number;
  title: string;
  imageUrl: string;
}

const dataTwo: DataItem[] = [
  { id: 1, title: 'The Great Lands', imageUrl: 'https://picsum.photos/200/10' },
  { id: 2, title: 'The Diary', imageUrl: 'https://picsum.photos/200/20' },
  { id: 3, title: 'Earth’s Untouched', imageUrl: 'https://picsum.photos/200/30' },

];
const data: DataItem[] = [
  { id: 1, title: 'The Great Lands', imageUrl: 'https://picsum.photos/200/120' },
  { id: 2, title: 'The Diary', imageUrl: 'https://picsum.photos/200/155' },
  { id: 3, title: 'Earth’s Untouched', imageUrl: 'https://picsum.photos/200/180' },
  { id: 4, title: 'No Land Beyond', imageUrl: 'https://picsum.photos/200/154' },
  { id: 5, title: 'During The Hunt', imageUrl: 'https://picsum.photos/200/36' },
  { id: 6, title: 'Autosport The Series', imageUrl: 'https://picsum.photos/200/50' },
  { id: 7, title: 'Same Answer II', imageUrl: 'https://picsum.photos/200/60' },
  { id: 8, title: 'Below Echo', imageUrl: 'https://picsum.photos/200/70' },
  { id: 9, title: 'The Rockies', imageUrl: 'https://picsum.photos/200/80' },
];

export default function page() {
  return (
    <section className="container py-[32px]">
      {/* <h1 className="text-white"></h1> */}
      <span style={{color: 'white' , fontSize: '18px'}}><CiSearch /></span>
      <input className="bg-transparent outline-none text-white w-96 relative top-[-30px] left-[-10px] px-8  py-2" type="search" placeholder="Search for movies or TV series" />
      <div>
        <h1 className="text-white text-[24px]">Bookmarked Movies</h1>
        <div className="card_wrapper flex flex-wrap justify-between gap-8 my-4">
          {data.map((el) => (
            <div key={el.id}>
              <img className="rounded-lg h-[174px] w-[280px]" src={el.imageUrl} alt={el.title} />
              <div className="w-12 h-12 relative top-[-165px] cursor-pointer left-[220px] rounded-full bg-[#10141e47] flex justify-center py-2">
                <span  className="text-[28px] text-white">
                  {<HiOutlineBookmark />}
                </span>
              </div>
              <h1 className="text-white">{el.title}</h1>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-white text-[24px]">Bookmarked TV Series</h1>
        <div className="card_wrapper flex flex-wrap justify-between gap-8 my-4">
          {dataTwo.map((el) => (
            <div key={el.id}>
              <img className="rounded-lg h-[174px] w-[280px]" src={el.imageUrl} alt={el.title} />
              <div className="w-12 h-12 relative top-[-165px] cursor-pointer left-[220px] rounded-full bg-[#10141e47] flex justify-center py-2">
                <span  className="text-[28px] text-white">
                  {<HiOutlineBookmark />}
                </span>
              </div>
              <h1 className="text-white">{el.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
