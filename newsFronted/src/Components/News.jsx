import React, { useState, useEffect } from "react";
import axios from "axios";


function news() {
  const [users, setusers] = useState([]);
  const [text, settext] = useState("");
  const [suggetions, setsuggetions] = useState([]);
  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("http://localhost:5000/news/");
      console.log(response.data)
      setusers(response.data);

    };
    loadUsers();
  }, []);

  const onChange = (text) => {
    let matches = [];
    console.log(text);
    if (text.length > 0) {
      matches = users.filter((user) => {
        const regrex = new RegExp(`${text}`, "gi");
        return user.title.match(regrex);
      });
    }

    console.log(matches);
    setsuggetions(matches);
    settext(text);
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => onChange(e.target.value)}
        value={text}
      />
      {suggetions &&
        suggetions.map((suggetion, i) => <div key={i}>{suggetion.title}</div>)}
    </div>
  );
}

export default news;
