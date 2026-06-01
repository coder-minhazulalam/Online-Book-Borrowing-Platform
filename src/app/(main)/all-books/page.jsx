"use client";
import Footer from "@/Components/Footer";
import LeftSideCategorisBook from "@/Components/LeftSideCategorisBook";
import { getData } from "@/Data/Data";
import { Button, Form, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaStar, FaBook, FaUserEdit, FaCalendarAlt } from "react-icons/fa";

const AllBooksPage = ({ category_id }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  console.log("In All Book Page we get category_id", category_id);

  // Search Books by Title or Author  ------------------

  const handleSearch = (e) => {
    e.preventDefault();

    const search = e.target["name"].value;
    setSearch(search);
    console.log(search);

    const filterBooks = data.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.author.toLowerCase().includes(search.toLowerCase()),
    );
    setData(filterBooks);

    e.target.reset();
  };

  // Fetch Books Data --------------------------------------

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      if (category_id) {
        const filtered = result.filter(
          (item) => item.category.toLowerCase() === category_id.toLowerCase(),
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
      <div className="w-full h-[230px] md:h-[350px] bg-[#063970] rounded-b-[25%] flex flex-col  items-center justify-start text-center ">
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
            className="bg-yellow-400 absolute hidden md:block md:left-110 top-1/2 -translate-y-1/2 text-gray-500 text-xl"
          >
            Submit
          </Button>
        </Form>
      </div>

      <div className="mt-20  w-12/13 mx-auto grid grid-cols-1 md:grid-cols-8 gap-5 mt-4">
        <div className="md:w-o mx-auto col-span-1 md:mx-0 md:col-span-2">
          <LeftSideCategorisBook />
        </div>

        <div className="col-span-1 md:col-span-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item) => (
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
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default AllBooksPage;
