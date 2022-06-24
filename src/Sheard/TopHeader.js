import React from "react";

export default function TopHeader() {
  return (
    <div className="container d-flex justify-content-between text-white py-2">
      <div>CORPORATE TRUST INVESTOR REPORTING</div>
      <div className="d-flex d-flex align-items-center">
        <div style={{ paddingRight : 20 }}>WELCOME, NAME NAME</div>
        <div class="form-group ">
          <button
            style={{ backgroundColor: '#00ADEE'}}
            type="button"
            className="btn btn-primary  border-0"
          >
            Logout{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
