import React from 'react';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import './header.less';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="wordart blues">
        <span className="text">Mapify</span>
      </div>
      <ul className="navbar-nav">
        <a
          className="nav-item nav-link"
          data-toggle="modal"
          data-target="#Modal"
        >
          Why does this app suck?
        </a>
      </ul>
      <div
        className="modal fade"
        id="Modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalLabel">
                Why does this app suck?
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="list-group">
                <li className="list-group-item">The "Design"</li>
                <li className="list-group-item">The images aren't clickable</li>
                <li className="list-group-item">
                  Non responsive table. Altough it could be solved with a
                  accordion like table for smaller devices
                </li>
                <li className="list-group-item">
                  No posibility to export data to a new CSV file.
                </li>
                <li className="list-group-item">
                  Users can import data with ID!
                </li>
                <li className="list-group-item">
                  Only the provided format of CSV will work
                </li>
                <li className="list-group-item">
                  Prettify did a shitty job formating, and I chose Prettify
                </li>
                <li className="list-group-item">No TypeScript 😢</li>
                <li className="list-group-item list-group-item-danger">
                  No battle royale
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  alertify.success(sadReactzGenerator());
                }}
              >
                Give sad reactz
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const sadReactzGenerator = () => {
  var reactz = ['😢', '😭', '😞', '😓'];
  return reactz[Math.floor(Math.random() * reactz.length)];
};
