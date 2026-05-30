import Image from "next/image";

const BooksDetailsPage = async({params}) => {

    const { id } = await params;

    const res = await fetch(`http://localhost:5000/books/${id}`);
    const bookDetails = await res.json();

    if (!bookDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#ececf1]">
                <div className="text-center p-8 bg-white rounded-2xl shadow-sm max-w-sm border border-gray-100">
                    <h1 className="text-2xl font-bold text-gray-800">Book Not Found</h1>
                    <p className="text-gray-500 mt-2">The requested book could not be found or does not exist.</p>
                </div>
            </div>
        );
    }

    const primaryBadge = bookDetails.tags?.[0] || bookDetails.category;
    const secondaryBadge = bookDetails.award || bookDetails.tags?.[1] ;

    const demandWidth = 
        bookDetails.demand_level === "Very High" ? "95%" :
        bookDetails.demand_level === "High" ? "75%" :
        bookDetails.demand_level === "Medium" ? "50%" : "25%";

    return (
        <div className="min-h-screen bg-[#ececf1]  pb-16">
            <div className="relative w-full bg-[#063970] text-white pt-10 pb-20 md:pb-28 rounded-b-[40px] md:rounded-b-[50px] shadow-md">
                <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-10">
                    
                    {/* Book Cover Image */}
                    <div className="relative w-[210px] h-[300px] md:w-[250px] md:h-[350px] shrink-0 transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-2xl rounded-xl overflow-hidden border-4 border-white/10 z-10 mb-20 md:-mb-36 bg-gray-900">
                        <Image
                            src={bookDetails.image_url}
                            alt={bookDetails.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Header Metadata */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-3">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                            <span className="bg-[#FAD02C] text-[#1F2937] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                {primaryBadge}
                            </span>
                            {secondaryBadge && (
                                <span className="bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                                    {secondaryBadge}
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-1 mb-1 leading-tight text-white">
                            {bookDetails.title}
                        </h1>

                        {/* Author and Edition */}
                        <p className="text-sm md:text-base text-gray-200 font-medium">
                            By <span className="text-white font-semibold">{bookDetails.author}</span> • {bookDetails.edition || `${bookDetails.published_year} Edition`}
                        </p>

                        {/* Availability and Rating Row */}
                        <div className="flex items-center gap-6 mt-3 pt-3 border-t border-white/10 w-full justify-center md:justify-start">
                            {/* Availability */}
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-gray-300 font-semibold mb-0.5">Availability</p>
                                <p className="text-sm font-bold text-[#FAD02C]">
                                    {bookDetails.available_quantity > 0 ? `${bookDetails.available_quantity} copies left` : "Out of stock"}
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="w-px h-8 bg-white/20 self-end mb-1"></div>

                            {/* Rating */}
                            <div>
                                <p className="text-[10px] uppercase tracking-wider text-gray-300 font-semibold mb-0.5">Rating</p>
                                <p className="text-sm font-bold text-[#FAD02C] flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FAD02C] fill-current" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    {bookDetails.rating}/5.0
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Body Layout */}
            <div className="max-w-6xl mx-auto px-6 md:px-8 mt-36 md:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-6">
                        {/* Publisher */}
                        <div>
                            <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block">Publisher</span>
                            <span className="text-sm font-semibold text-gray-700 mt-1 block">{bookDetails.publisher || "N/A"}</span>
                        </div>

                        {/* ISBN */}
                        <div>
                            <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block">ISBN-13</span>
                            <span className="text-sm font-semibold text-gray-700 mt-1 block">{bookDetails.isbn || "N/A"}</span>
                        </div>

                        {/* Language */}
                        <div>
                            <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block">Language</span>
                            <span className="text-sm font-semibold text-gray-700 mt-1 block">{bookDetails.language || "English (US)"}</span>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-100 my-1"></div>

                        {/* Share Button */}
                        <button className="flex items-center text-sm font-bold text-[#5829A7] hover:text-[#441f83] transition-colors gap-2 self-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                            Share with friends
                        </button>
                    </div>
                </div>

                {/* Right Main Content */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col gap-6 justify-between min-h-[350px]">
                        <div>
                            <h2 className="text-2xl font-extrabold text-[#5829A7] mb-4">The Story</h2>
                            <div className="text-gray-600 leading-relaxed text-sm md:text-base space-y-4 whitespace-pre-line">
                                {bookDetails.story || bookDetails.description || "No story available for this book."}
                            </div>
                        </div>

                        {/* Action Area */}
                        <div className="pt-6 border-t border-gray-100 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            {/* Demand Level */}
                            <div className="flex-1">
                                <div className="flex justify-between items-center max-w-[240px] mb-2">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Demand Level</span>
                                    <span className="text-xs font-bold text-gray-700">{bookDetails.demand_level || "Medium"} Demand</span>
                                </div>
                                
                                {/* Progress Bar */}
                                <div className="w-full max-w-[240px] h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-[#FAD02C] rounded-full transition-all duration-500"
                                        style={{ width: demandWidth }}
                                    />
                                </div>
                            </div>

                            {/* Borrow Button */}
                            <div className="flex flex-col gap-2 shrink-0">
                                <button className="bg-[#FAD02C] hover:bg-[#E2B80D] active:scale-95 text-[#1F2937] font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                    </svg>
                                    Borrow This Book
                                </button>

                                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3.5 h-3.5 text-gray-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.028M12 9h.008v.008H12V9Zm9 3a9 9 0 11-18 0 9 9 0 0118 0Z" />
                                    </svg>
                                    Sign in to your account to manage your loans
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetailsPage;



