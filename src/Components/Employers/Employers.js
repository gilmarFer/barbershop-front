import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Employers() {
  const [emp, setEmp] = useState(['João', 'Maria', 'Jose']);
  const [newEmp, setNewEmp] = useState('');

  return (
    <>
      <div>
        {emp.map((item, index) => (
          <div className="d-flex align-items-center mb-2" key={`${item[index]}`}>
            <FaTimes
              style={{ color: 'red' }}
              onClick={() => {
                const newEmps = [...emp];
                newEmps.splice(index, 1);
                setEmp(newEmps);
              }}
            />
            <input className=" form-control hor-space-1" type="text" defaultValue={item} />
            <Button>Save</Button>
          </div>
        ))}
        <h6>Add a new emplyer</h6>
        <div className="d-flex mb-2">
          <input
            id="new-emp"
            className="form-control hor-space-1"
            type="text"
            placeholder="Fernanda"
            value={newEmp}
            onChange={(e) => { setNewEmp(e.target.value); }}
          />
          <Button
            variant="success"
            className="ml-5"
            onClick={() => { setEmp((prev) => [...prev, newEmp]); }}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
