import React, { useState, useEffect } from "react";
import { getTopic } from "../../api/getTopic";
import {
  BsEmojiSmile,
  BsFillPlusSquareFill,
  BsChatLeftTextFill,
} from "react-icons/bs";
import PantipLogo from "../../Pantip_Logo.png";
function HighLight() {
  let result = "";
  const [allList, setAllList] = useState("");
  const [listTopic, setListTopic] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getTopic(setListTopic);
  }, []);

  function HandleHighLight() {
    result = "";
    const listTag = listTopic.map((list) => list.tag);
    for (let i = 0; i < listTag.length; i++) {
      for (let j = 0; j < listTag[i].length; j++) {
        if (listTag[i][j] === searchText) {
          result += i;
        }
      }
    }
    setAllList(result);
  }

  const AllIndexToHightLisht = allList.split("").map((list) => Number(list));
  console.log(AllIndexToHightLisht);
  return (
    <div className="bg-sky-800 min-h-screen">
      <div className="flex justify-center p-6">
        <img src={PantipLogo} alt="fireSpot" width={400} height={320} />
      </div>
      {listTopic.length === 0 ? (
        <span className="text-white text-2xl font-bold flex justify-center ">
          No Topic
        </span>
      ) : (
        <>
          <div className="text-white mx-16 bg-indigo-800 h-36 mb-4  border border-gray-400 flex flex-col justify-center px-5">
            <span className="mb-1">HighLight Tag</span>
            <div className="flex flex-row h-12 mt-1 border border-gray-400 p-1">
              <input
                className="bg-indigo-900 w-full outline-0 rounded-md p-1.5"
                type="text"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <button
                onClick={HandleHighLight}
                className="bg-blue-500 w-32 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
          {listTopic.map((list, index) => {
            const search = AllIndexToHightLisht.some((some) => some === index);
            console.log(search)
            return (
              <div className="mx-16 last:pb-6" key={list.topic_id}>
                <div className={`${search === true ? "bg-cyan-600" : "bg-blue-900"}  p-1.5 flex flex-row`}>
                <div className={`${search === true ? "bg-yellow-400" : "bg-blue-900"} w-3 max-h-screen mr-2`} />
                  <div>
                    <div className="flex flex-row items-center my-1">
                      <span className="text-yellow-400 mr-2 text-2xl">
                        <BsEmojiSmile />
                      </span>
                      <span className="text-white text-xl">{list.title}</span>
                    </div>
                    <span className="text-gray-400">{list.tag.join(" ")}</span>
                    <div className="flex flex-row justify-between">
                      <div className="my-1 text-blue-200">
                        <span>{list.name}</span>
                      </div>
                      <div className="flex flex-row text-gray-400">
                        <div className="flex flex-row items-center ml-2">
                          <span className="mr-1">
                            <BsChatLeftTextFill />
                          </span>
                          <span>{list.comment}</span>
                        </div>
                        <div className="flex flex-row items-center mx-2">
                          <span className="mr-1">
                            <BsFillPlusSquareFill />
                          </span>
                          <span>{list.vote}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default HighLight;
