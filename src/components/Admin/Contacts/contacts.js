import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../Layout/Nav";
import Footer from "../Layout/footer";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    getDatas();
  }, []);


  function getDatas() {
    axios.get("http://localhost/react_api/crud/index_contact.php").then(function (response) {
      setContacts(response.data.data);
    });
  }

  const deleteContact = (id) => {
    // alert("hi")
    
    axios.delete(`http://localhost/react_api/crud/delete_contact.php?id=${id}`).then(function (response) {
      getDatas();
    });
  };


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost/react_api/crud/create_contact.php", inputs).then(function (response) {
      console.log(response);
      getDatas();
      if (response.data.status == 1)
        document.getElementById('modelbutton').click();
    });
  };


  const clearData = () => {
    setInputs(values => ({ ...values, "id": "", "name": "", "email": "", "subject": "", "message": "" }))
  }

  /* for update */

  function getSingleContact(tdata) {
    setInputs(tdata);

  }


  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>
              <small>Contact List</small>
            </h1>
            <div className="row">
              <div className="col-2 offset-sm-10">
                <button
                  onClick={clearData}
                  id="modelbutton"
                  type="button"
                  className="btn btn-primary btn-sm float-end"
                  data-toggle="modal" data-target="#myModal"
                >
                  Add Contact
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, key) => (
                  <tr key={key}>
                    <td>{contact.id}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.subject}</td>
                    <td>{contact.message}</td>
                    {/* <td><img src={teacher.image} width={50} /></td> */}
                    <td>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-secondary me-2" data-toggle="modal" data-target="#myModal"
                        onClick={() => getSingleContact(contact)}
                      >
                        Edit
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-info btn-xs"
                        onClick={() => deleteContact(contact.id)}
                      >
                        Delete
                      </a>
                    
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="modal" id="myModal">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Contact Data</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          value={inputs.name}
                          type="text"
                          className="form-control"
                          name="name"
                          onChange={handleChange}
                        />
                        <input
                          value={inputs.id}
                          type="hidden"
                          name="id"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          value={inputs.email}
                          type="text"
                          className="form-control"
                          name="email"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input
                          value={inputs.subject}
                          type="text"
                          className="form-control"
                          name="subject"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Message</label>
                        <input
                          value={inputs.message}
                          type="text"
                          className="form-control"
                          name="message"
                          onChange={handleChange}
                        />
                      </div>

                      {/* <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input type="file" className="form-control" name="image" onChange={onFileChange} />
                      </div> */}
                      <div className="row">
                        <div className="col-sm-3 offset-sm-3">
                          <button
                            type="submit"
                            className="btn btn-secondary"
                          >
                            Submit
                          </button>
                        </div>
                        <div className="col-sm-3">
                          <button
                            type="button"
                            className="btn btn-info"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
