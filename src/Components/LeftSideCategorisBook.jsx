'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCategory } from "@/Data/Data";

const LeftSideCategorisBook = () => {

  const [data , setData ] = useState([])

  useEffect(() => {
    const fetchCategory = async () => {
      const result = await getCategory();
      setData(result);
    };

    fetchCategory();
  }, []);

  console.log(data)

  return (
    <div className="w-[250px] bg-[#EEF0F7] rounded-2xl p-5 shadow-md">
      <h2 className="text-[#5E35B1] font-semibold text-lg mb-5">
        ☰ Filters
      </h2>

      <button className="w-full bg-[#6C4ED9] text-white rounded-xl py-3 px-4 flex justify-between mb-5">
        All Categories
        <span>›</span>
      </button>

      <ul className="space-y-4">
        {data.map((item) => (
          <li key={item.id}>
            <Link href={`/category/${item.category}`}>
              {item.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideCategorisBook;