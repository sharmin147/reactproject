import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../Layout/Nav";
import Footer from "../Layout/footer";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    getDatas();
  }, []);


  function getDatas() {
    axios.get("http://localhost/react_api/crud/index_blog.php").then(function (response) {
      setBlogs(response.data.data);
    });
  }

  const deleteBlog = (id) => {

    axios.delete(`http://localhost/react_api/crud/delete_blog.php?id=${id}`).then(function (response) {
      getDatas();
    });
  };


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }
  const onFileChange = (e) => {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = (event) => {
      const name = "image";
      const value = event.target.result
      setInputs(values => ({ ...values, [name]: value }));
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost/react_api/crud/create_blog.php", inputs).then(function (response) {
      console.log(response.data);
      getDatas();
      if (response.data.status == 1)
        document.getElementById('modelbutton').click();
    });
  };


  const clearData = () => {
    setInputs(values => ({ ...values, "id": "", "title": "", "short_description": "", "description": "", "image": "", "author": "" }))
  }

  /* for update */

  function getSingleBlog(tdata) {
    document.getElementById('modelbutton').click();
    setInputs(tdata);
    setInputs(values => ({ ...values, "image": "" }))

  }


  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>
              <small>Blog List</small>
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
                  Add Blog
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
                  <th>Title</th>
                  <th>Short description</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, key) => (
                  <tr key={key}>
                    <td>{blog.id}</td>
                    <td>{blog.title}</td>
                    <td>{blog.short_description}</td>
                    <td>{blog.description}</td>
                    
                    <td><img src={blog.image} width={50} /></td>
                    <td>{blog.author}</td>
                    <td>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-secondary me-2"
                        onClick={() => getSingleBlog(blog)}
                      >
                        Edit
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-info btn-xs"
                        onClick={() => deleteBlog(blog.id)}
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
                    <h4 className="modal-title">Blog Data</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                          value={inputs.title}
                          type="text"
                          className="form-control"
                          name="title"
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
                        <label className="form-label">Short Description</label>
                        <input
                          value={inputs.short_description}
                          type="text"
                          className="form-control"
                          name="short_description"
                          onChange={handleChange}
                        />
                      </div>
                    
                      <div className="col-sm-12">
                        <div className="mb-3">
                          <label className="form-label">Description</label>
                          <textarea className="form-control" name="description" onChange={handleChange} value={inputs.description} ></textarea>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input type="file" className="form-control" name="image" onChange={onFileChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Author</label>
                        <input
                          value={inputs.author}
                          type="text"
                          className="form-control"
                          name="author"
                          onChange={handleChange}
                        />
                      </div>
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
