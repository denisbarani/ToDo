import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import array from './array'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
  const [item, setitem] = useState('')
  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [startdata, setstartdata] = useState('')
  const [enddata, setenddata] = useState('')

  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newItem = {
      Item: item,
      Name: name,
      Description: description,
      StartData: startdata,
      EndData: enddata,
    }

    array.push(newItem)
    localStorage.setItem('userArray', JSON.stringify(array))

    history('/')
  }

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
        <Form.Group className="mb-3" controllId="fromBasicName">
          <Form.Control
            onChange={(e) => setitem(e.target.value)}
            type="text"
            placeholder="Enter Item"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controllId="fromBasicName">
          <Form.Control
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controllId="fromBasicDescription">
          <Form.Control
            onChange={(e) => setdescription(e.target.value)}
            type="text"
            placeholder="Enter Description"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controllId="fromBasicStart-Data">
          <Form.Control
            onChange={(e) => setstartdata(e.target.value)}
            type="date"
            placeholder="Enter Start-Data"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controllId="fromBasicStart-Data">
          <Form.Control
            onChange={(e) => setenddata(e.target.value)}
            type="date"
            placeholder="Enter End-Data"
            required
          />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>
        <Link className="d-grid gap-2" to="/">
          <Button variant="info" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  )
}

export default Create
