
const BooksDetailsPage = async({params}) => {

    const { id } = await params 
    console.log(id);

    return (
        <div>
            <h1>BooksDetailsPage</h1>
        </div>
    );
};

export default BooksDetailsPage;