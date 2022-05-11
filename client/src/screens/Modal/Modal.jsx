import { useState } from 'react'
import modalcss from './Modal.module.css';

export default function Modal(props) {

  if (!props.show) {
    return null
  }

  return (
    <div>
      <div className={modalcss.modal}>
        <div className={modalcss.main_content}>
          <div className={modalcss.header}>
            <h4 className={modalcss.title}>Edit your Entry</h4>
          </div>
          <div className={modalcss.body}>Main body
          </div>
          <div className={modalcss.footer}>
            <button onClick={props.onClose} className={modalcss.button}>Close</button>
          </div>
        </div>
      </div>
    </div >
  )
}
