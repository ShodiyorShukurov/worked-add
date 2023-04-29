function Form({
  handleSubmit,
  firstnameRef,
  lastnameRef,
  birthDayRef,
  salaryRef,
  positionRef,
  femaleRef,
  maleRef,
  selectedIndex,
  worked,
})
{
  // console.log(selectedIndex)
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="text-center">Worked add</h3>
      </div>
      <form className="form" onSubmit={(evt) => handleSubmit(evt)}>
        <div className="card-body">
          <input
            className="form-control"
            type="text"
            name="first_name"
            ref={firstnameRef}
            placeholder="First name"
            defaultValue={worked[selectedIndex]?.first_name}
          />
          <input
            className="form-control my-2"
            type="text"
            name="last_name"
            ref={lastnameRef}
            placeholder="Last name"
            defaultValue={worked[selectedIndex]?.last_name}
          />
          <input
            className="form-control "
            type="date"
            name="birth_day"
            ref={birthDayRef}
            defaultValue={worked[selectedIndex]?.birth_day}
          />
          <input
            className="form-control my-2"
            type="number"
            name="salary"
            ref={salaryRef}
            placeholder="Enter your salary"
            defaultValue={worked[selectedIndex]?.salary}
          />
          <select
            className="form-select mb-2"
            name="position"
            ref={positionRef}
            defaultValue={worked[selectedIndex]?.position}
            value={worked[selectedIndex]?.position}
          >
            <option>Your position</option>
            <option value="Frontend">Frontend Developer</option>
            <option value="Backend">Backend Developer</option>
            <option value="Fullstack">Fullstack Developer</option>
          </select>
          <label className="me-5 ">
            <input
              className="form-check-input me-2"
              type="radio"
              name="gendre"
              value="Male"
              ref={maleRef}
              defaultChecked={
                selectedIndex !== null &&
                worked[selectedIndex]?.gendre === "Male" &&
                true
              }
            />
            Male
          </label>
          <label className="ms-5">
            <input
              className="form-check-input me-2"
              type="radio"
              name="gendre"
              value="Female"
              ref={femaleRef}
              defaultChecked={
                selectedIndex !== null &&
                worked[selectedIndex]?.gendre === "Female" &&
                true
              }
            />
            Female
          </label>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary d-block ms-auto" type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
export default Form;
