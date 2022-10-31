import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopic } from "../../SliceAndReducer/Slice/listSlice";
function PantipReview() {
  const list = useSelector((state) => state.list.lists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopic());
  }, [dispatch]);

  return (
    <div className="bg-sky-800 min-h-screen">
      <div className="flex flex-row">
        {list.map((l) => {
          return (
            <div className="text-white bg-indigo-900 hover:bg-gray-800 mx-2 w-64 shadow-md" key={l.id}>
              <img className="w-64 h-40" src={l.image_url} alt="fireSpot" />
              <p className="m-2">{l.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PantipReview;
