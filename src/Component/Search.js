import React from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";
import "./search.css";

const Search = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <Menu></Menu>
      {/* Basic Search Section Start */}
      <section className="container">
        <div
          className="py-5 mt-4"
          style={{
            backgroundColor: "#232323 !important",
            padding: 20,
          }}
        >
          <h5 className="text-start py-1" style={{ color: "#00ADEE" }}>
            {" "}
            Search{" "}
          </h5>

          <div className="d-flex justify-content-between align-items-center">
            <div class="input-group ">
              <input
                type="text"
                class="form-control "
                placeholder="Search..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #00ADEE",
                }}
              />
              <div class="input-group-append ">
                <button
                  style={{
                    backgroundColor: "#00ADEE",
                    height: 53,
                    color: "black ",
                  }}
                  class="btn btn-outline-secondary text-dark"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
            <div>
              <div class="accordion-item">
                
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#advanceSearch"
                    
                    style={{
                      fontSize: 20,
                      height: 53,
                      backgroundColor: '#00adee'
                    }}
                  >
                    
                  </button>
                {/* </h2> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basic Search Section End */}

      {/* Advance Search Section Start */}
      <section
        className="mt-3 container"
        style={{
          backgroundColor: "#333333",
        }}
      >
        <div class="mt-3">
          <div class="collapse " id="advanceSearch">
            <div
              class="card card-body border-0"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <h6 className="text-white"> Advanced Search Options</h6>

              <div class="row">
                <div class="col-md-4">
                  <h6 className="font-weight-bold text-white">
                    {" "}
                    Product Type{" "}
                  </h6>
                  <select
                    name="productType"
                    id="productType"
                    style={{
                      width: "90%",
                      height: 40,
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="volvo"
                    >
                      Select One{" "}
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="saab"
                    >
                      First Choice{" "}
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="opel"
                      default
                    >
                      Secound Choice
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="audi"
                    >
                      Third Choice{" "}
                    </option>
                  </select>
                </div>

                <div class="col-md-4">
                  {" "}
                  <h6 className="font-weight-bold text-white"> Search By</h6>
                  <select
                    name="productType"
                    id="productType"
                    style={{
                      width: "90%",
                      height: 40,
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="volvo"
                    >
                      Select One{" "}
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="saab"
                    >
                      First Choice{" "}
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="opel"
                      default
                    >
                      Secound Choice
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="audi"
                    >
                      Third Choice{" "}
                    </option>
                  </select>
                </div>

                <div class="col-md-4">
                  <h6 className="font-weight-bold text-white">
                    {" "}
                    Quick Issuer Lookup
                  </h6>
                  <select
                    name="productType"
                    id="productType"
                    style={{
                      width: "90%",
                      height: 40,
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  >
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="volvo"
                    >
                      Select One{" "}
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="saab"
                    >
                      First Choice{" "}
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="opel"
                      default
                    >
                      Secound Choice
                    </option>
                    <option
                      style={{
                        width: "90%",
                        height: 40,
                        backgroundColor: "transparent",
                        color: "black",
                      }}
                      value="audi"
                    >
                      Third Choice{" "}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Advance Search Section End  */}
    </div>
  );
};

export default Search;
