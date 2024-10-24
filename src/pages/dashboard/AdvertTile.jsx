import { Link } from "react-router-dom";


const AdvertTile = ({ id, title, description, image, category, price}) => {
    return(
        <div className="flex flex-col">
            <Link to={`/vendor-adverts/${id}`} className=" border-[3px] w-[18vw] p-4 ">
            {/* <input type="checkbox" /> */}
            
            <img src={`https://savefiles.org/${image}?shareable_link=450`} alt={title}/>
            <h1 className="pt-1 pb-1 font-bold">{title}</h1>
            <p className="pb-1">{description}</p>
            <p className="pb-1">{category}</p>
            <p className="pb-1">{price}</p>
        </Link>
        </div>
    )
}

export default AdvertTile;