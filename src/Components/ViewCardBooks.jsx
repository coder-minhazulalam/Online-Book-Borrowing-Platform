import { ChevronRight } from 'lucide-react';
import { NavLink } from './Navlink';
import Image from 'next/image';
import Link from 'next/link';
import { getData } from '@/Data/Data';
import {
  FaStar,
  FaBook,
  FaUserEdit,
  FaCalendarAlt,
} from "react-icons/fa";

const ViewCardBooks = async() => {
    const data = await getData() ;   
    return (
        <>

        <div className=' bg-[#ececf1]'>
                     <section className="flex items-start justify-between px-8 py-6 bg-[#ececf1]">
            {/* Left Content */}
            <div>
                <p className="text-[14px] md:text-[20px] font-bold text-[#6C63FF] mb-1">
                Featured Books
                </p>
                <h2 className="text-[10px] md:text-[16px] text-gray-600">
                Handpicked favorites for our community this month.
                </h2>
            </div>

            {/* Right Link */}

            <NavLink href="/all-books">
              <button className="flex items-center gap-1 text-[12px] md:text-[18px] font-medium text-[#4F46E5] hover:text-[#4338CA] transition">
                    View all
                    <ChevronRight size={16} />
                </button>
            </NavLink>
        </section>

  



       <div className='w-11/13 pt-5 pb-5 h-full  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>

      
    {data.slice(0, 3).map((item) => (
      <div
  key={item.id}
  className="group bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
>
  <div className="bg-gray-50 p-4">
    <Image
      src={item.image_url}
      alt={item.title}
      width={400}
      height={600}
      className="w-full h-[260px] object-contain transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  <div className="p-5 space-y-3">
    {/* Category */}
    <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full">
      {item.category}
    </span>

    {/* Title */}
    <h3 className="text-xl font-bold text-gray-800 line-clamp-1">
      {item.title}
    </h3>

    {/* Author */}
    <div className="flex items-center gap-2 text-gray-600 text-sm">
      <FaUserEdit />
      <span>{item.author}</span>
    </div>

    {/* Rating & Year */}
    <div className="flex justify-between items-center text-sm">
      <div className="flex items-center gap-1 text-amber-500">
        <FaStar />
        <span>{item.rating}</span>
      </div>

      <div className="flex items-center gap-1 text-gray-500">
        <FaCalendarAlt />
        <span>{item.published_year}</span>
      </div>
    </div>

    {/* Quantity */}
    <div className="flex items-center gap-2 text-sm text-green-600">
      <FaBook />
      <span>{item.available_quantity} Copies Available</span>
    </div>

    {/* Button */}
    <Link href={`/books/${item.id}`}>
      <button className="w-full mt-3 bg-[#063970] text-white py-3 rounded-xl font-semibold hover:bg-[#052f5f] transition">
        View Details
      </button>
    </Link>
  </div>
</div>
    ))}
    </div>

    </div>

        </>
       

        

    );
};

export default ViewCardBooks;