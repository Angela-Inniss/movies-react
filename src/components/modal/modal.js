import React from "react";

import "../../css/modal.scss";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
          <h2>Selected movie</h2>

          ------------------------------
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default Modal;
