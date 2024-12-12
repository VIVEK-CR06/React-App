import React, { useEffect, useState } from "react";

function FetchData() {  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(data => {
        setData(data.quotes);  
      })
      .catch(error => console.error('Error in data fetching', error));
  }, []);  

  return (
    <div className="">
      <div className="bg-white text-center p-20 border rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Quotes from the API</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead className="border-b bg-gray-200">
            <tr>
              <th className="border border-black p-5">ID</th>
              <th className="border border-black p-5">Quote</th>
              <th className="border border-black p-5">Author</th>
            </tr>
          </thead>
          <tbody>
            {data.map((quote, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-black p-4 text-center">{quote.id}</td>
                <td className="border border-black p-4 text-center">{quote.quote}</td>
                <td className="border border-black p-4 text-center">{quote.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FetchData;
