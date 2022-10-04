import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

function Modal() {

    const [selected, setSelected] = useState();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex justify-center items-center">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                   <h2 className="text-center font-bold"> {footer}</h2>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal