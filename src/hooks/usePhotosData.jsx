import { useNavigate, useParams } from "react-router-dom";
import data from "../constants/photos";
import { useEffect, useState } from "react";

export default function usePhotoData() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(data[id]);

  useEffect(() => {
    setSelected(data[id]);
  }, [id]);

  const next = () => {
    const nextId = (parseInt(id) + 1) % data.length;

    navigate(`/${nextId}`);
  };

  const previous = () => {
    const prevId = (parseInt(id) - 1 + data.length) % data.length;

    navigate(`/${prevId}`);
  };

  function goHome() {
    document.body.style.overflow = "";
    setSelected(null);
    navigate("/");
  }

  return { data, selected, next, previous, goHome };
}
