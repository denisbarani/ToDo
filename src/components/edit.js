import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import array from './array'
import { Link, useNavigate } from 'react-router-dom'

function Edit() {
  const [item, setitem] = useState('')
  const [name, setname] = useState('')
  const [description, setdescription] = useState('')
  const [startdata, setstartdata] = useState('')
  const [enddata, setenddata] = useState('')

  let history = useNavigate()

  var index = array
    .map(function (e) {
      return e.Name
    })
    .indexOf(name)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (array[index]) {
      const a = array[index]
      a.Item = item
      a.Name = name
      a.Description = description
      a.StartData = startdata
      a.EndData = enddata
    }
    alert('Item has been updated successfully!')
    console.log(name)
    history('/')
  }

  useEffect(() => {
    setitem(localStorage.getItem('Item'))
    setname(localStorage.getItem('Name'))
    setdescription(localStorage.getItem('Description'))
    // setstartdata(localStorage.getItem('StartData'))
    // setenddata(localStorage.getItem('EndData'))
  }, [])

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
        <Form.Group className="mb-3">
          <Form.Control
            value={item}
            onChange={(e) => setitem(e.target.value)}
            type="text"
            placeholder="Enter Item"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            type="text"
            placeholder="Enter Description"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            // value={startdata}
            onChange={(e) => setstartdata(e.target.value)}
            type="date"
            placeholder="Enter Start-Data"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            // value={enddata}
            onChange={(e) => setenddata(e.target.value)}
            type="date"
            placeholder="Enter End-Data"
          />
        </Form.Group>
        <Button
          className="gap-2"
          onClick={(e) => handleSubmit(e)}
          variant="primary"
          type="submit"
          size="lg">
          Update
        </Button>
        <Link className="d-grid gap-2" to="/">
          <Button variant="warning" size="lg">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  )
}
export default Edit
