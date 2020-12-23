import './style.css';

function CreateTodoModal() {
  return (
    <div className="modal">
      <div className="modal__body">
        <h2 className="modal__title">
          Create Todo
        </h2>

        <form className="modal__form">
          <label className="input">
            <input
              placeholder="Todo description..."
              className="input__control"
            />
          </label>
        </form>
      </div>
    </div>
  )
}

export {
  CreateTodoModal
}