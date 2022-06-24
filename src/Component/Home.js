import React from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";

export default function Home() {
  return (
    <div>
      <TopHeader></TopHeader>
      <Menu></Menu>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            {/* Search Section Start */}
            <section>
              <div
                className="py-5 mt-4"
                style={{
                  backgroundColor: "#232323",
                  padding: 20,
                }}
              >
                <h5 className="text-start py-1" style={{ color: "#00ADEE" }}>
                  {" "}
                  Search{" "}
                </h5>

                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control  border-0"
                    placeholder="Search..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div class="input-group-append ">
                    <button
                      style={{
                        backgroundColor: "#00ADEE",
                      }}
                      class="btn btn-outline-secondary"
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </section>
            {/* Search Section End  */}

            {/* File Section Start  */}
            <section>{/* TODO */}</section>

            {/* File Section End  */}
          </div>

          {/* For Your Information Start  */}
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <section
              className="mt-4 text-white text-start"
              style={{
                backgroundColor: "#232323",
                padding: 20,
                minHeight: 919,
              }}
            >
              <h3
                style={{
                  color: "#00ADEE",
                }}
              >
                For your Information
              </h3>
              <ul class="list-group mt-3">
                <li
                  class="list-group"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  <div>
                    An Article 77 proceeding was recently filed relating to
                    certain GSR RMBS trusts. A Notice entitled "Notice of
                    proceeding re payment waterfalls on GSR RMBS Trusts" has
                    been posted in the Available Documents section of each
                    affected trust's website.
                    <hr />
                  </div>
                </li>
                <li
                  class="list-group"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  <div>
                    An Article 77 proceeding was recently filed relating to
                    certain GSR RMBS trusts. A Notice entitled "Notice of
                    proceeding re payment waterfalls on GSR RMBS Trusts" has
                    been posted in the Available Documents section of each
                    affected trust's website.
                    <hr />
                  </div>
                </li>

                <li
                  class="list-group"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  <div>
                    An Article 77 proceeding was recently filed relating to
                    certain GSR RMBS trusts. A Notice entitled "Notice of
                    proceeding re payment waterfalls on GSR RMBS Trusts" has
                    been posted in the Available Documents section of each
                    affected trust's website.
                    <hr />
                  </div>
                </li>

                <li
                  class="list-group"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                  }}
                >
                  <div>
                    An Article 77 proceeding was recently filed relating to
                    certain GSR RMBS trusts. A Notice entitled "Notice of
                    proceeding re payment waterfalls on GSR RMBS Trusts" has
                    been posted in the Available Documents section of each
                    affected trust's website.
                    <hr />
                  </div>
                </li>
              </ul>
            </section>
          </div>

          {/*  For Your Information End  */}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
