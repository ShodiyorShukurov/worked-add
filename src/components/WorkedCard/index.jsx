import { Fragment } from "react";

function WorkedCard({ work, handleDelete, maleRef, femaleRef, index, handleEdit }) {
  return (
    <Fragment>
      <div className="col-4 mb-3">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">{"Ism: " + work.first_name}</h3>
            <h3 className="card-title">{"Familiyasi: " + work.last_name}</h3>
          </div>
          <div className="card-body">
            <p className="card-text">{"Tug'ilgan kuni: " + work.birth_day}</p>
            <p className="card-text">{"Maoshi: " + work.salary + " $"}</p>
            <p className="card-text">{"Position: " + work.position}</p>
            <p className="card-text">{"Gengre: " + maleRef?.value || femaleRef?.value}</p>
          </div>

          <div className="card-footer d-flex justify-content-between">
            <button className="btn btn-success" onClick={()=>handleEdit(index)}>
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(work.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default WorkedCard;
