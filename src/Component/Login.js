import React from "react";
import Menu from "../Sheard/Menu";

const Login = () => {
  return (
    <div>
      <Menu></Menu>
      <div className="container">
        <div className=" row ">
          <h4 className="text-white text-start mt-3">
            {" "}
            Welcome to Investmental Report
          </h4>

          <div
            className="col-lg-8 col-md-8 col-sm-12 col-12 p-4"
            style={{
              backgroundColor: "#00ADEE",
            }}
          >
            <h5 className="text-white text-start">Please sign in</h5>
            <div>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    aria-describedby="username"
                    placeholder="User Name "
                  />
                </div>
                <div class="form-group mt-2">
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    aria-describedby="username"
                    placeholder="User Name "
                  />
                </div>

                <button type="button" class="btn btn-primary">
                  Primary
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
