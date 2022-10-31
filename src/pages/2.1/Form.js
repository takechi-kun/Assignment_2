import React, { useState, useEffect } from "react";
import Loading from './Loading'

function FormData() {
  const [isLoading, setIsLoading] = useState(true);
  const [textValue, setTextValue] = useState("");

  function changeTextValue(e) {
    const text = e.target.value;
    setTextValue(text);
  }

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <input className="border mr-2" type="text" value={textValue} onChange={changeTextValue} />
          <input type="button" value="Submit" />
        </div>
      )}
    </div>
  );
}

export default FormData;
