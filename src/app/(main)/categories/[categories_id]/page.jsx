import AllBooksPage from "@/app/(main)/all-books/page";

const CategoryPage = async ({ params }) => {
    const { categories_id } = await params;
    console.log("Category ID:", categories_id);

    return (
        <AllBooksPage category_id={categories_id} />
    );
};

export default CategoryPage;