import React, { Fragment, useRef, useState } from "react";
import Form from "../Form";
import WorkedCard from "../WorkedCard";

function Worked() {
  const [worked, setWorked] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const birthDayRef = useRef(null);
  const salaryRef = useRef(null);
  const positionRef = useRef(null);
  const maleRef = useRef(null);
  const femaleRef = useRef(null);
  // console.log("ksajdnasknc")

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newWorked = {
      id: worked[worked.length - 1]?.id + 1 || 1,
      first_name: firstnameRef.current.value.trim(),
      last_name: lastnameRef.current.value.trim(),
      birth_day: birthDayRef.current.value.trim(),
      salary: salaryRef.current.value.trim(),
      position: positionRef.current.value.trim(),
      gendre: maleRef.current.checked
        ? maleRef.current.value
        : femaleRef.current.checked && femaleRef.current.value,
    };

    if (selectedIndex !== null) {
      worked[selectedIndex] = newWorked;
      setSelectedIndex(null);
    } else {
      setWorked([...worked, newWorked]);
    }

    firstnameRef.current.value = "";
    lastnameRef.current.value = "";
    birthDayRef.current.value = "";
    salaryRef.current.value = "";
    positionRef.current.value = "";
    maleRef.current.value = false;
    femaleRef.current.value = false;

    firstnameRef.current.focus();
  };

  const handleDelete = (id) => {
    const filteredWorked = worked.filter((work) => work.id !== id);

    setWorked([...filteredWorked]);
  };

  const handleEdit = (index) => {
    setSelectedIndex(index);
  };
  return (

    <Fragment>
      <div className="container">
        <div className="row my-4">
          <div className="col-3">
            <Form
              selectedIndex={selectedIndex}
              handleSubmit={handleSubmit}
              firstnameRef={firstnameRef}
              lastnameRef={lastnameRef}
              birthDayRef={birthDayRef}
              salaryRef={salaryRef}
              positionRef={positionRef}
              maleRef={maleRef}
              femaleRef={femaleRef}
              worked={worked}
            />
          </div>
          <div className="col-9">
            <div className="row">
              {worked.length > 0 &&
                worked.map((work, index) => (
                  <WorkedCard
                    key={index}
                    work={work}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    index={index}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Worked;
