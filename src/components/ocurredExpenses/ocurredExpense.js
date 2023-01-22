import React from "react";
import { saveBudget } from "../../api/budgetApi";
import { v4 as uuidv4 } from "uuid";

const OcurredExpense = ({
  isActive,
  setIsActive,
  budget,
  setBudget,
  ocurredExpense,
  setOcurredExpense,
  categories,
  creditCards,
}) => {
  function handleChange({ target }) {
    setOcurredExpense({
      ...ocurredExpense,
      [target.name]:
        target.name === "amountUSD" || target.name === "amountCS"
          ? +target.value
          : target.value,
    });
  }

  function handleCancel() {
    setIsActive(false);
  }

  function handleSave() {
    const updatedIncurredExpenses = ocurredExpense.id
      ? budget.incurredExpenses.items.map((ie) =>
          ie.id === ocurredExpense.id ? ocurredExpense : ie
        )
      : [...budget.incurredExpenses.items, { ...ocurredExpense, id: uuidv4() }];

    const updatedBudget = {
      ...budget,
      incurredExpenses: {
        ...budget.incurredExpenses,
        items: updatedIncurredExpenses,
      },
    };

    saveBudget(updatedBudget).then((b) => setBudget(b));

    setIsActive(false);
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
                value={ocurredExpense.description}
              ></input>
            </div>
          </div>
          <div className="field">
            <label className="label has-text-left">Categoria</label>
            <div className="control">
              <div className="select" style={{ width: "100%" }}>
                <select
                  name="category"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  value={ocurredExpense.category}
                >
                  <option className="has-text-grey-light" value="">
                    Seleccionar categoria
                  </option>
                  {categories.map((category) => {
                    return (
                      <option key={category.value} value={category.value}>
                        {category.text}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label has-text-left">Tarjeta</label>
            <div className="control">
              <div className="select" style={{ width: "100%" }}>
                <select
                  name="creditCard"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  value={ocurredExpense.creditCard}
                >
                  <option className="has-text-grey-light" value="">
                    Seleccionar tarjeta
                  </option>
                  {creditCards.map((card) => {
                    return (
                      <option key={card.id} value={card.id}>
                        {card.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label has-text-left">Monto CS</label>
            <div className="control">
              <input
                id="amountCS"
                name="amountCS"
                className="input"
                type="number"
                placeholder=""
                value={ocurredExpense.amountCS}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-left">Monto USD</label>
            <div className="control">
              <input
                id="amountUSD"
                name="amountUSD"
                className="input"
                type="number"
                placeholder=""
                value={ocurredExpense.amountUSD}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSave}>
            Guardar
          </button>
          <button className="button" onClick={handleCancel}>
            Cancelar
          </button>
        </footer>
      </div>
    </div>
  );
};

export default OcurredExpense;
