import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className='w-full h-full bg-slate-900 flex flex-col'>
        <h1 className='text-center p-2 text-4xl text-gray-100 font-bold '>
          Pagination - Reactjs
        </h1>

        {currentProducts.length > 0 ? (
          <div className='p-5 w-full h-full grid grid-cols-3 gap-4'>
            {currentProducts.map((product) => (
              <div key={product.id} className='w-64 h-64 rounded'>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  loading='lazy'
                  className='w-[90%] h-[90%] object-cover rounded'
                />
                <h1 className='text-xl text-white text-center'>
                  {product.title}
                </h1>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-center text-white'>Loading...</p>
        )}
      </div>
      <div className='p-4 bg-slate-900 flex gap-2 justify-center items-center'>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`${
              currentPage === number ? "bg-green-400" : "bg-yellow-400"
            } w-10 h-10 text-black p-2 rounded`}
          >
            {number}
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
