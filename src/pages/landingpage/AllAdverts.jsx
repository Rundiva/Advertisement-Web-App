import { useState, useEffect } from "react";
import axios from "axios";  
import { Link } from "react-router-dom";


const AllAdverts = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    fetchAdverts(); 
  }, []);

  const fetchAdverts = async () => {
    try {
      const response = await axios.get("https://advertisement-api.onrender.com/adverts");
      console.log('yy', response.data)
      setAdverts(response.data); // Set fetched data into state
    } catch (error) {
      console.error("Error fetching adverts:", error);
    }
  };

  return (
    <div className="flex flex-wrap mt-10 mx-auto ">
      {adverts.length > 0 ? (
        adverts.map((advert) => (
          <div key={advert.id} className="shadow-md w-[20vw]  m-8 ml-13 items-center mb-4">
           <Link to={`/adverts/${advert.id}`}>
                <img
                  src={`https://savefiles.org/${advert.image}?shareable_link=450`} 
                  alt={advert.title}
                  className="w-full h-40 object-cover"
                />
              </Link>



           <div className="mt-6 p-4">
           <div className=''>
           <h1 className="font-bold ">{advert.title}</h1> 
            <p>{advert.description}</p> 
            {/* <p>{advert.category?.brand}</p>   */}
           </div> 
           <div className="flex gap-10 pt-3">
            <p className="font-bold">GHC {advert.price}</p>
            <Link to={`/adverts/${advert.id}`}><button className="bg-[#1A1F71] text-white px-3 py-1 rounded-md">Preview</button></Link>
           </div>
           </div>
          </div>
        ))
      ) : (
        <p>Loading adverts...</p>
      )}
    </div>
  );
};

export default AllAdverts;
