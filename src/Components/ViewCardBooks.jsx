import { ChevronRight } from 'lucide-react';
import { NavLink } from './Navlink';
import Image from 'next/image';
import Link from 'next/link';
import { getData } from '@/Data/Data';
import LeftSideCategorisBook from './LeftSideCategorisBook';

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
        key={item.id}  className="bg-white rounded-lg shadow-md overflow-hidden transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <Image
          src={item.image_url}
          alt={item.title}
          width={400}
          height={600}
          className="w-full h-[300px] object-contain p-4 rounded-t-lg"
        />

        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">
            {item.title}
          </h3>
          <p className="text-gray-600">
            by {item.author}
          </p>
                  <div>
            <Link href={`/books/${item.id}`}>
              <button className="bg-yellow-400 text-black px-5 py-3 rounded-full font-medium text-sm hover:scale-105 transition">
              View Details
            </button>
            </Link>

        </div>
        </div>


      </div>
    ))}
    </div>

    </div>

        </>
       

        

    );
};

export default ViewCardBooks;