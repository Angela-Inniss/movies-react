import React from "react";

import "../../css/modal.scss";

const Modal = ({ handleClose, show, children, title }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {title}
        {children}

        <div className="box-btns">
          <button className="btn-watch" type="button" onClick={handleClose}>
            Watch Online
          </button>
          <button className="btn-close" type="button" onClick={handleClose}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
};
export default Modal;
