'use client'
import LeftSideCategorisBook from "@/Components/LeftSideCategorisBook";
import {Button, Form, Input} from "@heroui/react";
import { CiSearch } from "react-icons/ci";

const AllBooksPage = () => {

  const handleSearch = (e) => {
    e.preventDefault();

    const search = e.target["name"].value;
    console.log(search);
    
    e.target.reset();
  };
 
 

    return (

    <div className=" min-h-screen  bg-[#ececf1]">

          <div className="w-full h-[200px] md:h-[350px] bg-[#063970] rounded-b-[25%] flex flex-col  items-center justify-start text-center ">

        <div className="mt-20">
            <h1 className="font-bold text-[20px] md:text-[35px] text-white text-center">Discover Your Next Adventure</h1>
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
         >Submit</Button>
        </Form>

        </div>


        <div className="w-full md:w-12/13 mx-auto grid grid-cols-2 md:grid-cols-8 gap-5 mt-4">
 
             <div className="h-[20vh] col-span-1 md:col-span-3 border border-solid border-red-500">
             <LeftSideCategorisBook/>
             </div>


            <div className="col-span-1 md:col-span-5 border border-solid border-green-500">

             </div>
       


        </div>


    </div>


           
        
    );
};

export default AllBooksPage;