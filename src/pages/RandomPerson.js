import React from "react";
import "../index.css";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import { useState, useEffect } from "react";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
const RandomPerson = () => {
  const [loading, setLoading] = useState(true);
  const [tittle, setTittle] = useState("name");
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState(" Random person");
  const handleChange = (e) => {
    if (e.target.classList.contains("icon")) {
      const item = e.target.dataset.label;
      setTittle(item);
      setValue(person[item]);
    }
  };
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const Person = data.results[0];
    const { email, phone } = Person;
    const { first, last } = Person.name;
    const { age } = Person.dob;
    const {
      street: { number, name },
    } = Person.location;
    const { password } = Person.login;
    const { large } = Person.picture;
    const newPerson = {
      image: large,
      email,
      phone,
      age,
      password,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
    setPerson(newPerson);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main>
      <div className="bcg-blk"></div>
      <div className="block">
        <div className="image-container">
          <img
            src={person ? person.image : defaultImage}
            alt="random person"
            className="picture"
          />
        </div>
        <h4 className="text">my {tittle} is</h4>
        <p className="text">{value}</p>
        <div className="buttons">
          <button
            className="btn icon"
            data-label="name"
            onMouseOver={handleChange}
          >
            <FaUser className="icons" />
          </button>
          <button
            className="btn icon"
            data-label="email"
            onMouseOver={handleChange}
          >
            <FaEnvelopeOpen className="icons" />
          </button>
          <button
            className="btn icon"
            data-label="age"
            onMouseOver={handleChange}
          >
            <FaCalendarTimes className="icons" />
          </button>
          <button
            className="btn icon"
            data-label="street"
            onMouseOver={handleChange}
          >
            <FaMap className="icons" />
          </button>
          <button
            className="btn icon"
            data-label="phone"
            onMouseOver={handleChange}
          >
            <FaPhone className="icons" />
          </button>
          <button
            className="btn icon"
            data-label="password"
            onMouseOver={handleChange}
          >
            <FaLock className="icons" />
          </button>
        </div>
        <button className="btn-primary btn" onClick={getData}>
          {loading ? "Loading.." : "Random user"}
        </button>
      </div>
    </main>
  );
};

export default RandomPerson;
