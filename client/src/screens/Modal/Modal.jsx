import React from 'react'
import modalcss from './Modal.module.css';

export default function Modal() {
  return (
    <div className={modalcss.modal}>
      <div>
        <div>
          <h4>Edit your Entry</h4>
        </div>
        <div>Main edit Body</div>
        <div>
          <button>Close</button>
        </div>
      </div>
    </div>
  )
}
