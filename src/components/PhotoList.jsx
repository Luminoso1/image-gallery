import Photo from "./Photo";
import { Link, Outlet } from "react-router-dom";
import data from "../constants/photos";

function PhotoList() {
  return (
    <div>
      <ul>
        {data.map(({ id, src, alt }) => (
          <li key={id}>
            <Link to={`${id}`}>
              <Photo src={src} alt={alt} />
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

export default PhotoList;
