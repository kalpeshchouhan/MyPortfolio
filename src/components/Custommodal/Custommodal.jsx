import React, { memo } from "react";
import mod from "./custiommodal.module.css";

const Custommodal = ({ children, isOpen, onClose, childrentwo }) => {
  // in z-index visibility
  const modalStyles = {
    zIndex: isOpen ? 1000 : -1,
  };
  return (
    <>
      {isOpen && (
        <div className={mod.modaloverlay} style={modalStyles}>
          <div className={mod.modal}>
            <div className={mod.modalcontent}>
              <button className={mod.modalclose} onClick={onClose}>
                &times;
              </button>
              {children}
            </div>
          </div>
          <br />
          <div className={mod.modaltwo}>
            <div>{childrentwo}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Custommodal);
