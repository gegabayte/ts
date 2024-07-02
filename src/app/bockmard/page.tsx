import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function page() {
  return (
    <section className="container py-[32px]">
      {/* <h1 className="text-white"></h1> */}
      <span style={{color: 'white' , fontSize: '18px'}}><CiSearch /></span>
      <input className="bg-transparent outline-none text-white w-96 relative top-[-30px] left-[-10px] px-8  py-2" type="search" placeholder="Search for movies or TV series" />
      <div>
        <h1 className="text-white text-[24px]">Bookmarked Movies</h1>
      </div>
      <div>
        <h1 className="text-white text-[24px]">Bookmarked TV Series</h1>
      </div>
    </section>
  );
}
