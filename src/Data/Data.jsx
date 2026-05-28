export const getData = async() =>
{
    const res = await fetch("http://localhost:5000/books")
    const data = await res.json()
    return data;
}



export const getCategory = async() =>
{
    const res = await fetch("http://localhost:5000/category")
    const data = await res.json()
    return data;
}