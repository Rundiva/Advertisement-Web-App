import { Link } from "react-router-dom";

const TodoTile = ({title, icon, id}) => {
    return(
        <Link to={`todos/${id}`} className="flex border-[10px]">
            <input type="checkbox" />
            <p>{title}</p>
            <img src={`https://savefiles.org/${icon}?shareable_link=391`} alt={title}/>
        </Link>
    )
}

export default TodoTile;