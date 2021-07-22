import React from "react";

function AccessTest() {
  return (
    <main>
      <div className="row justify-content-center m-md-3 my-3">
        <div className="col-md-12 col-10 text-center">
          <h1 className="font-xl mt-3">
            Accessibility Test Page
          </h1>
          <div className="b-line w-75 mx-auto my-3"></div>
          <div className="row justify-content-around p-3 mb-3 shadow rounded bg-light">
            <div className="col-md-4 col-sm-6 col-12 my-2">
              <button type="button" className="btn font-xs w-100 btn-primary">
                Primary
              </button>
            </div>
            <div className="col-md-4 col-sm-6 col-12 my-2">
              <button type="button" className="btn font-xs w-100 btn-secondary">
                Secondary
              </button>
            </div>
            <div className="col-md-4 col-sm-6 col-12 my-2">
              <button type="button" className="btn font-xs w-100 btn-success">
                Success
              </button>
            </div>
            <div className="col-md-4 col-sm-6 col-12 my-2">
              <button type="button" className="btn font-xs w-100 btn-warning">
                Warning
              </button>
            </div>
            <div className="col-md-4 col-sm-6 col-12 my-2">
              <button type="button" className="btn font-xs w-100 btn-danger">
                Danger
              </button>
            </div>
            <div className="col-md-4 col-sm-6 col-12 my-2">
              <button type="button" className="btn font-xs w-100 btn-info">
                Info
              </button>
            </div>
          </div>
          <div className="row justify-content-around p-3 mb-3 shadow rounded bg-light">
            <div className="col-md-4 col-sm-6 col-12 my-2">
              <button type="button" className="btn font-xs w-100 btn-outline-primary">
                Primary
              </button>
            </div>
            <div className="col-md-4 col-sm-6 col-12 my-2">
              <button type="button" className="btn font-xs w-100 btn-outline-secondary" disabled>
                Secondary
              </button>
            </div>
            <div className="col-md-4 col-sm-6 col-12 my-2">
              <button type="button" className="btn font-xs w-100 btn-outline-success">
                Success
              </button>
            </div>
            <div className="col-md-4 col-sm-6 col-12 my-2">
              <button type="button" className="btn font-xs w-100 btn-outline-warning" disabled>
                Warning
              </button>
            </div>
            <div className="col-md-4 col-sm-6 col-12 my-2">
              <button type="button" className="btn font-xs w-100 btn-outline-danger">
                Danger
              </button>
            </div>
            <div className="col-md-4 col-sm-6 col-12 my-2">
              <button type="button" className="btn font-xs w-100 btn-outline-info">
                Info
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default AccessTest;
