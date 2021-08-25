import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Hours() {
  const hoursList = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '17:00', '18:00',
  ];
  return (
    <>
      <Form>
        {hoursList.map((iten, index) => (
          <Form.Check type="checkbox" label={iten} id={iten} key={iten} />
        ))}
        <Button className="w-100">Save</Button>
      </Form>
    </>
  );
}
