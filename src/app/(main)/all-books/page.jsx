"use client";
import Footer from "@/Components/Footer";
import LeftSideCategorisBook from "@/Components/LeftSideCategorisBook";
import { getData } from "@/Data/Data";
import { Button, Form, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const AllBooksPage = ({category_id}) => {

  const [data, setData] = useState([]);
   const [ search , setSearch ] = useState([])

   console.log("In All Book Page we get category_id" , category_id)



    // Search Books by Title or Author  ------------------

  const handleSearch = (e) => {
    e.preventDefault();

    const search = e.target["name"].value;
    setSearch(search);
    console.log(search)


    const filterBooks = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()) || item.author.toLowerCase().includes(search.toLowerCase()))
    setData(filterBooks);

    e.target.reset();
  };

  // Fetch Books Data --------------------------------------

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      if (category_id) {
        const filtered = result.filter(
          (item) => item.category.toLowerCase() === category_id.toLowerCase()
        );
        setData(filtered);
      } else {
        setData(result);
      }
    };

    fetchData();
  }, [category_id]);

  return (
    <div className=" min-h-screen  bg-[#ececf1]">
      <div className="w-full h-[200px] md:h-[350px] bg-[#063970] rounded-b-[25%] flex flex-col  items-center justify-start text-center ">
        <div className="mt-20">
          <h1 className="font-bold text-[20px] md:text-[35px] text-white text-center">
            Discover Your Next Adventure
          </h1>
        </div>

        <Form className="mt-4 relative" onSubmit={handleSearch}>
          <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />

          <Input
            aria-label="Name"
            name="name"
            className="w-[300px] md:w-[550px] h-10 md:h-13 rounded-[50px] border-2 border-solid border-yellow-600 pl-12"
            placeholder="Search..."
          />

          <Button
            type="submit"
            className="bg-yellow-400 absolute left-110 top-1/2 -translate-y-1/2 text-gray-500 text-xl"
          >
            Submit
          </Button>
        </Form>
      </div>

      <div className="mt-20 w-full  md:w-12/13 mx-auto grid grid-cols-1 md:grid-cols-8 gap-5 mt-4">
        <div className="col-span-1 md:col-span-2">
          <LeftSideCategorisBook />
        </div>

        <div className="col-span-1 md:col-span-6 ">
          <div className="w-full pt-5 pb-5 h-full  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border-2 border-solid border-yellow-500 shadow-md overflow-hidden transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
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
                <p className="text-gray-600">by {item.author}</p>
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
      </div>

    <div className="mt-20">
          <Footer />
    </div>
    </div>
  );
};

export default AllBooksPage;
