import Link from "next/link";
import { FC } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBookmark } from "react-icons/hi2";

interface DataItem {
  id: number;
  title: string;
  imageUrl: string;
}

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
  { id: 10, title: 'Relentless', imageUrl: 'https://picsum.photos/200/85' },
  { id: 11, title: 'Community of Ours', imageUrl: 'https://picsum.photos/200/86' },
  { id: 12, title: 'Van Life', imageUrl: 'https://picsum.photos/200/87' },
  { id: 13, title: 'The Heiress', imageUrl: 'https://picsum.photos/200/82' },
  { id: 14, title: 'Off the Track', imageUrl: 'https://picsum.photos/200/95' },
  { id: 15, title: 'Whispering Hill', imageUrl: 'https://picsum.photos/200/63' },
];

const  page:FC = () => {
  return (
    <section className="container py-[32px]">
      {/* <h1 className="text-white"></h1> */}
      <span style={{color: 'white' , fontSize: '18px'}}><CiSearch /></span>
      <input className="bg-transparent outline-none text-white w-96 relative top-[-30px] left-[-10px] px-8  py-2" type="search" placeholder="Search for movies or TV series" />
      <div>
        <h1 className="text-white text-[24px]">TV Series</h1>
        <div className="card_wrapper flex flex-wrap justify-between gap-8 my-4">
          {data.map((el) => (
            <div key={el.id}>
              <img className="rounded-lg h-60 w-60" src={el.imageUrl} alt={el.title} />
              <div className="w-12 h-12 relative top-[-230px] cursor-pointer left-[180px] rounded-full bg-[#10141e47] flex justify-center py-2">
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

export default page