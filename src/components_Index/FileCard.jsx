import React from 'react';

const FileCard = ({ fileName, fileSize, iconClassName }) => {
  return (
    <div className="card mb-2 border p-2">
      <div className="d-flex align-items-center">
        <div className="avatar-sm me-3 ms-0">
          <i className={`avatar-title bg-primary-subtle font-size-20 rounded text-primary ${iconClassName} p-3`}></i>
        </div>
        <div className="flex-grow-1 overflow-hidden">
          <div className="text-left">
            <h5 className="font-size-14 mb-1 fw-bolder text-sm">{fileName}</h5>
            <p className="text-muted font-size-13 mb-0">{fileSize}</p>
          </div>
        </div>
        <div className="ms-4">
          <ul className="list-inline font-size-18 mb-0">
            <li className="list-inline-item">
              <a className="text-muted px-1" href="/dashboard">
                <i className="bi bi-download"></i>
              </a>
            </li>
            <div className="list-inline-item dropdown">
              <a
                aria-haspopup="true"
                className="font-size-18 text-muted"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-three-dots"></i>
              </a>
              <div
                tabIndex="-1"
                role="menu"
                aria-hidden="true"
                className="dropdown-menu dropdown-menu-end"
              >
                <button
                  tabIndex="0"
                  role="menuitem"
                  className="dropdown-item"
                >
                  Action
                </button>
                <button
                  tabIndex="0"
                  role="menuitem"
                  className="dropdown-item"
                >
                  Another Action
                </button>
                <div
                  tabIndex="-1"
                  className="dropdown-divider"
                ></div>
                <button
                  tabIndex="0"
                  role="menuitem"
                  className="dropdown-item"
                >
                  Delete
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FileCard;
