import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { BookSearchIcon, HomeIcon } from "lucide-react";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        User not found
      </div>
    );
  }

  const { image, name, email } = session.user;

  return (
    <div className="min-h-screen bg-[#ececf1]">
      {/* Hero Section */}
      <div className="w-full h-[250px] md:h-[350px] bg-[#063970] rounded-b-[40px] flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-3xl md:text-5xl text-white">
          Welcome to Your Profile
        </h1>

        <p className="text-gray-200 mt-3 text-sm md:text-base">
          Manage your account information here
        </p>
      </div>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="-mt-20 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="flex flex-col items-center">
            <img
              src={image || "/default-user.png"}
              alt={name}
              className="w-32 h-32 rounded-full object-cover border-4 border-yellow-500 shadow-lg"
            />

            <h2 className="mt-4 text-2xl font-bold text-gray-800">
              {name}
            </h2>

            <p className="text-gray-500">{email}</p>
          </div>

          {/* Info Section */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-gray-50 p-5 rounded-2xl">
              <h3 className="font-semibold text-gray-700 mb-2">
                Full Name
              </h3>
              <p className="text-gray-600">{name}</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl">
              <h3 className="font-semibold text-gray-700 mb-2">
                Email Address
              </h3>
              <p className="text-gray-600">{email}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link href="/all-books">
           <button className="flex justify-center space-x-4 px-6 py-3 bg-[#063970] text-white rounded-xl font-medium hover:opacity-90 transition">
              <BookSearchIcon size={20} /> Browse Books
            </button>
          </Link>

           <Link href="/">
              <button className="flex justify-center space-x-4 px-6 py-3 border border-[#063970] text-[#063970] rounded-xl font-medium hover:bg-[#063970] hover:text-white transition">
             <HomeIcon size={20} /> Home
            </button>
           </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;