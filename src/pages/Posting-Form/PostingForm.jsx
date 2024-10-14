import { useEffect, useState } from "react"
import { Await } from "react-router-dom";


const PostingForm = () => {
    // fetching data
    const [titles, setTitles] = useState([]);
    const [description, setDescription] = useState('')

    const getTitles = async () => {
        const response = await axios.get(`BASE_URL/titles`)
        setTitles(response.data)
    }

    useEffect(()=>{
        getTitles();

    }, []);

    // Handle for submission
    const handleSubmit = async (event) => {
        event.preventDefault ();
        try {
            // collect the form data

            const formData = new FormData(event.target);

            // post data to Api
            const response = await axios.post(`${BASE_URL}`/adverts,{
                title: formData.get ('title'),
                description: formData.get ('description')
                // image: fornData.get ('image')
                // price: formData.get ('price') 
                // category: formData.get ('category')


            });
            setMessage ('Advert Added Succefully!');
        
        } catch (error) {
            console.log (error)
        }
    }

  return (
    // <div className=" flex  w-[620px]">
    <div className=" flex flex-col justify-center items-center "> 
        <h1 className="text-center text-2xl font-bold">Fill the Form Below to Post an Advert</h1>
        <form onSubmit={handleSubmit} className="bg-white flex flex-col gap-6 p-6 rounded-lg shadow-lg w-[620px]">
           <div className="flex flex-col">
           <label className="text-lg font-semibold mb-2">Book Title</label>
            <input
             name="title"
             type="text"
             placeholder="Enter Title of the Advert" 
             required
             className=" p-3 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 "/>

             <div>
             <label className="text-lg font-semibold mb-2">Description</label>
                <textarea
                  name="summary"
                  placeholder="Provide a short description"
                  rows="3"
                  required
                  className="p-3 border border-blue-500 rounded-lg w-full focus:outline-none focus:ring-2 "
                ></textarea>
             </div>
             <div className="flex flex-col">
                <label className="text-lg font-semibold mb-2"> Image Upload</label>
                <input 
                name="Imageupload"
                type="text"
                required
                 className="p-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2" />

             </div>
             <div>
             <label className="text-lg font-semibold mb-2"> Price</label>
             <input 
                   name="Price"
                   type="number" 
                   required
                   className="p-2 border border-blue-500 rounded-lg w-full focus:outline-none focus:ring-2" />
                   </div>
                   <div>
                   <label className="text-lg font-semibold mb-2">Category</label>

                   <select name="Category" placeholder = "Select Category" className="p-2 border rounded-lg border-blue-500 w-full focus:outline-none focus:ring-2" ></select>
                   </div>

                   <button
                  type="submit"
                  className="mt-4 w-[150px] py-3 bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow-md transition duration-300 ease-in-out "
                >
                  Upload Book
                </button>
    

           </div>
           
        </form>

    </div>
  )
}

export default PostingForm