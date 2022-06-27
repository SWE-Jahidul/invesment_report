import React from "react";
import Footer from "../Sheard/Footer";
import Menu from "../Sheard/Menu";
import TopHeader from "../Sheard/TopHeader";

const Details = () => {
  return (
    <div>
      <TopHeader></TopHeader>

      <Menu> </Menu>

      {/*  Breadcrumb start  */}

      <div className="container mt-5 mb-5">
        <nav aria-label="breadcrumb">
          <ol
            class="breadcrumb"
            style={{
              color: "white",
              fontSize: 25,
            }}
          >
            <li class="breadcrumb-item">Home</li>
            <li class="breadcrumb-item">Library</li>
            <li class="breadcrumb-item" aria-current="page">
              Data
            </li>
          </ol>
        </nav>

        {/* Details Section Start  */}

        <div style={{ backgroundColor: "white", padding: 30 }}>
          <p>
            Reports Added to the Download Center will be stored for batch
            download. Reports Added to a Deal Portfolio will be automatically
            delivered via email according to the individual Portfolio setup.
          </p>

          <div>
            <h5>Reports</h5>
            <div
              style={{
                overflowX: "auto",
              }}
            >
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Available Reports</th>
                    <th scope="col">Format Type</th>
                    <th scope="col">Download</th>
                    <th scope="col">Historical Reports</th>
                    <th scope="col">Report Date</th>
                    <th scope="col">Category</th>
                    <th scope="col">Status</th>
                    <th scope="col">Deal Status</th>
                    <th scope="col"> Portfolio </th>
                    <th scope="col">Publish Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Investor Report - Summary</th>
                    <td>PDF</td>
                    <td>Download</td>
                    <td>View</td>
                    <td> 15-Aug-2008</td>
                    <td>Payment Date</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>15-Aug-2008</td>
                  </tr>
                  <tr>
                    <th scope="row">Monthly Servicer Certificate</th>
                    <td>PDF</td>
                    <td>Download</td>
                    <td>View</td>
                    <td> 15-Aug-2008</td>
                    <td> Payment Date</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>15-Aug-2008</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Details Section End  */}

      {/*  Breadcrumb End   */}

      <Footer> </Footer>
    </div>
  );
};

export default Details;
