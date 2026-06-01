export const getData = async() =>
{
    const res = await fetch("https://online-book-borrowing-server.onrender.com/books")
    const data = await res.json()
    return data;
}



export const getCategory = async() =>
{
    const res = await fetch("https://online-book-borrowing-server.onrender.com/categories")
    const data = await res.json()
    return data;
}