'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCategory } from "@/Data/Data";

const LeftSideCategorisBook = () => {

  const [data , setData ] = useState([]);
  const params = useParams();
  const activeCategory = params?.categories_id;
  console.log("active category id in left side", activeCategory) 

  useEffect(() => {
    const fetchCategory = async () => {
      const result = await getCategory();
      setData(result);
    };

    fetchCategory();
  }, []);

  console.log(data);

  return (
    <div className="w-[250px] bg-white rounded-2xl p-5 shadow-md">
      <h2 className="text-[#5E35B1] font-semibold text-lg mb-5">
        ☰ Filters
      </h2>

      
      <Link  href={`/all-books`}>
      <button className="w-full bg-[#6C4ED9] text-white rounded-xl py-3 px-4 flex justify-between mb-5 hover:bg-[#3c099c]">
        All Categories
        <span>›</span>
      </button>
      </Link>


      <ul className="space-y-4">
        {data.map((item) => {
          const isActive = activeCategory === item.category_id;
          return (
            <li key={item.id}>
              <Link href={`/categories/${item.category_id}`}>
               <button className={`w-full text-left py-2 px-4 ${isActive ? "bg-[#D1C4E9] rounded-lg" : "hover:bg-[#D1C4E9] rounded-lg"}`}>
                 {item.category}
               </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSideCategorisBook;