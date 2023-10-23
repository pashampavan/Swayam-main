import React from 'react'
import Footer from './../Components/HomePage/Footer'
import './../Style/contact/ContactUsPage.css'

function ContactUsPage() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <form action="">
              <div className="card yourForm">
                {/* <div className="card-header"> */}
                  <h1>Have a query ?</h1>
                {/* </div> */}
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <label for="designation" className="form-label">
                        Designation
                      </label>
                      <select
                        className="form-select mt-2"
                        id="designation"
                        aria-label="Default select example"
                      >
                        <option selected>VceStudent</option>
                        <option value="1">Alumini</option>
                        <option value="2">NonVceStudent</option>
                        <option value="3">StartUp</option>
                      </select>
                      <div className="mb-3 mt-3">
                        <label for="myname" className="form-label">
                          Name
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="myname"
                          placeholder=""
                        />
                      </div>
                      <div className="mb-3 mt-2">
                        <label for="mymail" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="mymail"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="mb-3 mt-3">
                        <label
                          for="mynum"
                          className="form-label"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="mynum"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 mt-2">
                        <label
                          for="myquery"
                          className="form-label"
                        >
                          Enter your query or your idea{" "}
                        </label>
                        <textarea
                          className="form-control"
                          id="myquery"
                          rows="11"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              
                  <button
                    className="btn"
                    type="submit"
                  >
                    Submit
                  </button>

              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-4"></div>
      <Footer/>
    </div>
  )
}

export default ContactUsPage