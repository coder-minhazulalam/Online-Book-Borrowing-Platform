"use server"

import { Notebook } from "lucide-react";
import MarqueeText from "react-marquee-text";

const getData = async() =>
{
    const res = await fetch("https://online-book-borrowing-server.onrender.com/books")
    const data = await res.json()
    return data;
}


const BreakingNews = async() => {
  
    const data = await getData();
    console.log("breaking News data", data.books);

    return (
        <div>
                    <div className="h-[2px] border border-solid border-yellow-700"></div>

        <MarqueeText pauseOnHover={true} speed={50} direction="right" className="bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded">
            {
                data.map((item) => (
                    <span key={item.id} className="flex flex-row">
                          <Notebook />New Arrival: {item.title}
                    </span>
                ))
            }
        </MarqueeText>

                    <div className="h-[2px] border border-solid border-yellow-700"></div>

            
        </div>
    );
};

export default BreakingNews;