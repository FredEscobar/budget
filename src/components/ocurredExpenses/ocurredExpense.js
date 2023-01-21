import React from "react";

const OcurredExpense = ({ isActive, ocurredExpense, setOcurredExpense }) => {
  function handleChange({ target }) {
    setOcurredExpense({
      ...ocurredExpense,
      [target.name]: target.value,
    });
  }

  return (
    <div className={"modal" + (isActive ? " is-active" : "")}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Gasto incurrido</p>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label has-text-left">Descripcion</label>
            <div className="control">
              <input
                id="description"
                name="description"
                className="input"
                type="text"
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OcurredExpense;
