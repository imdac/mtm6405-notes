import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Col from "../components/Col";
import Row from "../components/Row";

function Edit () {
  const params = useParams()
  const navigate = useNavigate()
  const [note, setNote] = useState({
    title: '',
    text: ''
  })

  function changeHandler (e) {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    })
  }

  function submitHandler (e) {
    e.preventDefault()

  }

  function clickHandler () {
    
  }

  return (
    <>
      <Row className="my-5 d-flex algin-items-center">
        <Col className="col-9">
          <h1 className="display-4">Edit Note</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <form className="form mb-3 d-flex flex-column bg-light p-5"
            onSubmit={submitHandler}>
            
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" 
              className="form-control mb-3" 
              name="title" 
              value={note.title}
              onChange={changeHandler} />

            <label htmlFor="text" className="form-label">Text</label>
            <textarea 
              className="form-control mb-3" 
              name="text"
              value={note.text}
              onChange={changeHandler}></textarea>

            <div className="align-self-end">
              <Link to={`/note/${note.id}`} className="btn btn-secondary me-3">Cancel</Link>
              <button className="btn btn-primary">Update Note</button>
            </div>
          </form>

          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-danger" onClick={clickHandler}>Delete Note</button>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Edit