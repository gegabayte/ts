import Link from "next/link";
import { FC } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBookmark } from "react-icons/hi2";
import { IoBookmark } from "react-icons/io5";

interface DataItem {
  id: number;
  title: string;
  imageUrl: string;
}

const dataOne: DataItem[] = [
  { id: 1, title: 'Beyond Earth', imageUrl: 'https://picsum.photos/199' },
  { id: 2, title: 'Beyond Earth', imageUrl: 'https://picsum.photos/188' },
  { id: 3, title: 'Beyond Earth', imageUrl: 'https://picsum.photos/100' },
  { id: 4, title: 'Beyond Earth', imageUrl: 'https://picsum.photos/200' },
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
  { id: 10, title: 'Relentless', imageUrl: 'https://picsum.photos/200/85' },
  { id: 11, title: 'Community of Ours', imageUrl: 'https://picsum.photos/200/86' },
  { id: 12, title: 'Van Life', imageUrl: 'https://picsum.photos/200/87' },
  { id: 13, title: 'The Heiress', imageUrl: 'https://picsum.photos/200/82' },
  { id: 14, title: 'Off the Track', imageUrl: 'https://picsum.photos/200/95' },
  { id: 15, title: 'Whispering Hill', imageUrl: 'https://picsum.photos/200/63' },
  { id: 16, title: '112', imageUrl: 'https://picsum.photos/200/71' },
  { id: 17, title: 'Lone Heart', imageUrl: 'https://picsum.photos/200/69' },
  { id: 18, title: 'Production Line', imageUrl: 'https://picsum.photos/200/56' },
  { id: 19, title: 'Dogs', imageUrl: 'https://picsum.photos/200/20' },
  { id: 20, title: 'Asia in 24 Days', imageUrl: 'https://picsum.photos/200/111' },
  { id: 21, title: 'The Tasty Tour', imageUrl: 'https://picsum.photos/200/112' },
  { id: 22, title: 'Darker', imageUrl: 'https://picsum.photos/200/113' },
  { id: 23, title: 'Unresolved Cases', imageUrl: 'https://picsum.photos/200/124' },
  { id: 24, title: 'Mission: Saturn', imageUrl: 'https://picsum.photos/200/12' },
];

const Home: FC = () => {
  // const [click, setClick] = useState<boolean>(false);

  // const handleClick = () => {
  //   setClick(!click);
  // };

  return (
    <section className="container py-[32px]">
      {/* <h1 className="text-white"></h1> */}
      <span style={{ color: 'white', fontSize: '18px' }}>
        <CiSearch />
      </span>
      <input
        className="bg-transparent outline-none text-white w-96 relative top-[-30px] left-[-10px] px-8 py-2"
        type="search"
        placeholder="Search for movies or TV series"
      />
      <div>
        <h1 className="text-white text-[24px]">Trending</h1>
        {/* <Image src={image} alt="iadfa" /> */}
        <div className="card_wrapper flex flex-wrap justify-between gap-8 my-4">
          {dataOne.map((el) => (
            <div key={el.id}>
              <img className="rounded-lg h-40 w-[500px]" src={el.imageUrl} alt={el.title} />
              <h1 className="text-white relative top-[-30px] left-[20px]">{el.title}</h1>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-white text-[24px]">Recommended for you</h1>
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
    </section>
  );
};

export default Home;
