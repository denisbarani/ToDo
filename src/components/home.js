import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import array from './array'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
  let history = useNavigate()

  const [isNewUserAdded, setIsNewUserAdded] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = [
    'All',
    'Web Developer',
    'Backend Developer',
    'Full-stack Developer',
  ]

  const markAsDone = (name) => {
    if (!isNewUserAdded) {
      const index = array.findIndex((item) => item.Name === name)
      if (index !== index.Name) {
        array[index].isDone = true
      }
    }
  }
  const filteredArray = array.filter((item) => {
    if (selectedCategory === 'All') return true
    return item.Description === selectedCategory
  })

  const handleNewUserAdded = () => {
    setIsNewUserAdded(true)
  }
  function setID(item, name, description, startdata, enddata) {
    localStorage.setItem('Item', item)
    localStorage.setItem('Name', name)
    localStorage.setItem('Description', description)
    localStorage.setItem('StartData', startdata)
    localStorage.setItem('EndData', enddata)
  }
  function deleted(name) {
    var index = array
      .map(function (e) {
        return e.Name
      })
      .indexOf(name)
    array.splice(index, 1)
    history('/')
  }

  return (
    <div style={{ margin: '10rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="category-select">Select Category:</label>
        <select
          id="category-select"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <Table striped bordered hover="sm">
        <thead>
          <tr>
            <th>Item</th>
            <th>Name</th>
            <th>Description</th>
            <th>Start-data</th>
            <th>End-data</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredArray.map((item) => {
            return (
              <tr key={item.Name}>
                <td>{item.Item}</td>
                <td>{item.Name}</td>
                <td>{item.Description}</td>
                <td>{item.StartData}</td>
                <td>{item.EndData}</td>
                <td>
                  <Link to={`/edit`}>
                    <Button
                      onClick={(e) =>
                        setID(
                          item.Item,
                          item.Name,
                          item.Description,
                          item.StartData,
                          item.EndData
                        )
                      }
                      variant="info">
                      Update
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button onClick={(e) => deleted(item.Name)} variant="danger">
                    Delete
                  </Button>
                </td>
                <td>
                  {item.isDone ? (
                    <Button variant="success" disabled>
                      Done
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={() => {
                        markAsDone(item.Name)
                        handleNewUserAdded()
                      }}>
                      Mark as Done
                    </Button>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <Link className="gap-2" to="/create">
        <Button size="lg">Create</Button>
      </Link>
    </div>
  )
}

export default Home
