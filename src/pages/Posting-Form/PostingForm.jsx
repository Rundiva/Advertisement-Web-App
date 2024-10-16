import { useNavigate } from "react-router-dom";
import axios from "axios";



const PostingForm = () => {
    const navigate = useNavigate();

    const saveTodo = async (event) => {
        event.preventDefault();
        //Colllect form input
        const formData = new FormData(event.target);

        //Post data to todo api
        await axios.post(`${import.meta.env.VITE_BASE_URL}/todos`,formData);
        
        //Goto the homepage
        navigate('/dashboard');
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Add A New Todo</h1>
      <form onSubmit={saveTodo} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Todo Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your Todo"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="icon" className="block text-sm font-medium text-gray-700 mb-1">
            Todo Icon
          </label>
          <input
            type="file"
            id="icon"
            name="icon"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
    );
}

export default PostingForm;