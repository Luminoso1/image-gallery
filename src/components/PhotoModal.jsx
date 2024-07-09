import Photo from "./Photo";
import { useEffect } from "react";
import { Arrow, CloseIcon } from "./Icons";
import usePhotoData from "../hooks/usePhotosData";

function PhotoModal() {
  const { selected, next, previous, goHome } = usePhotoData();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        next();
      } else if (event.key === "ArrowLeft") {
        previous();
      } else if (event.key === "Escape") {
        goHome("/");
      }
    };
    if (selected) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [next, previous, selected, goHome]);

  if (!selected) {
    return <h1>Image not found</h1>;
  }

  return (
    <article className={`${selected ? "overlay" : ""}`}>
      <CloseIcon handle={goHome} />
      <div className="content">
        <Arrow className="left" handle={previous} />
        <div className="content__img">
          <Photo src={selected.src} alt={selected.alt} />
        </div>
        <Arrow className="right" handle={next} />
      </div>
    </article>
  );
}

export default PhotoModal;
