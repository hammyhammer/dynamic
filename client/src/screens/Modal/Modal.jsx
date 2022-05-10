import React from 'react'
import modalcss from './Modal.module.css';

export default function Modal() {
  return (
    <div className={modalcss.modal}>
      <div className={modalcss.main_content}>
        <div className={modalcss.header}>
          <h4 className={modalcss.title}>Edit your Entry</h4>
        </div>
        <div className={modalcss.body}>Main edit Body</div>
        <div classname={modalcss.footer}>
          <button classname={modalcss.button}>Close</button>
        </div>
      </div>
    </div>
  )
}
