function Form({
  handleSubmit,
  firstnameRef,
  lastnameRef,
  birthDayRef,
  salaryRef,
  positionRef,
  femaleRef,
  maleRef,
}) {
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
          />
          <input
            className="form-control my-2"
            type="text"
            name="last_name"
            ref={lastnameRef}
            placeholder="Last name"
          />
          <input
            className="form-control "
            type="date"
            name="birth_day"
            ref={birthDayRef}
          />
          <input
            className="form-control my-2"
            type="number"
            name="salary"
            ref={salaryRef}
            placeholder="Enter your salary"
          />
          <select
            className="form-select mb-2"
            name="position"
            ref={positionRef}
          >
            <option>Your position</option>
            <option value="Frontend">Frontend Developer</option>
            <option value="Backend">Backend Developer</option>
            <option value="Fullstack">Fullstack Developer</option>
          </select>
          <input type="radio" id="male" name="gendre" value='Male' ref={maleRef}/>
          <label htmlFor="male">Male</label>
          <input type="radio" id="female" name="gendre" value='Female' ref={femaleRef}/>
          <label htmlFor="female">Female</label>
                    
        </div>
        <div className="card-footer">
          <button className="btn btn-primary d-block ms-auto">Add</button>
        </div>
      </form>
    </div>
  );
}
export default Form;
