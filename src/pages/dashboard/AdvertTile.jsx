import { Link } from "react-router-dom";

const AdvertTile = ({ id, title, description, image, category, price}) => {
    return(
        <div className="flex flex-col">
            <Link to={`/adverts/${id}`} className=" border-[10px]">
            {/* <input type="checkbox" /> */}
            <p>{title}</p>
            <p>{description}</p>
            <p>{category}</p>
            <p>{price}</p>
            <img src={`https://savefiles.org/${image}?shareable_link=450`} alt={title}/>
        </Link>
        </div>
    )
}

export default AdvertTile;