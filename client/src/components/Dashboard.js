import React, { useState } from "react";
import User from "./User";
import '../styles/Sidebar.css'
const Dashboard = () => {
  const menuItems = [
    { title: "Dashboard" },
  ];
  const [selectedItem, setSelectedItem] = useState(0);
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <div className="main-container-dashboard">
      <aside
        id="default-sidebar"
        className="sidebar"
        aria-label="Sidebar"
      >
        <div className="py-4 px-3">
          <h1 className=" title text-center mb-5">Internee.pk</h1>
          <nav>
            <ul className="nav flex-column">
              {menuItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <button
                    onClick={() => handleItemClick(index)}
                    className={`btn btn-block ${
                      selectedItem === index
                        ? "btn-primary text-white"
                        : "btn-light text-dark"
                    }`}
                  >                   
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
      <div className="container">
        {selectedItem === 0 && <User/>}
      </div>
    </div>
  );
};

export default Dashboard;
