import Link from "next/link";
// import { FC } from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBookmark } from "react-icons/hi2";
import { MdLocalMovies } from "react-icons/md";
import { getMovies } from "../queries";

export default async function page() {
  const request = await getMovies();
  console.log(request);

  return (
    <section className="container py-[32px]">
      {/* <h1 className="text-white"></h1> */}
      <span style={{ color: 'white', fontSize: '18px' }}><CiSearch /></span>
      <input className="bg-transparent outline-none text-white w-96 relative top-[-30px] left-[-10px] px-8  py-2" type="search" placeholder="Search for movies or TV series" />
      <div>
        <h1 className="text-white text-[24px]">Movies</h1>
        <div className="flex flex-wrap justify-between">
          {
            request?.docs.map(({ id, name, year, backdrop, poster, description, type }) => {
              return (
                <Link href='#' key={id}>
                  <div className="text-white flex flex-col flex-wrap  mb-4">
                    {
                      backdrop ? (
                        <>
                          <img className="w-[280px] h-[174px] rounded-lg" src={backdrop.url} alt={name} />
                          <div className="w-12 h-12 relative top-[-165px] cursor-pointer left-[220px] rounded-full bg-[#10141e47] flex justify-center py-2">
                            <span className="text-[28px] text-white">
                              {<HiOutlineBookmark />}
                            </span>
                          </div>
                        </>

                      ) : (
                        <>
                          <img className="w-[280px] h-[174px] rounded-lg" src='https://picsum.photos/199' alt="" />
                          <div className="w-12 h-12 relative top-[-165px] cursor-pointer left-[220px] rounded-full bg-[#10141e47] flex justify-center pt-2">
                            <span className="text-[28px] text-white">
                              {<HiOutlineBookmark />}
                            </span>
                          </div>
                        </>
                      )
                    }
                    <p className=" relative top-[-30px] flex items-center gap-2">{year} ° {<MdLocalMovies />}Movie ° PG</p>
                    {/* <p>{description}</p> */}
                    <p className="w-60 relative top-[-30px]">{name}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}



