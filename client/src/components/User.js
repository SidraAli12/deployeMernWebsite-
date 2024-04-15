import React, { useState } from "react";
import "../styles/User.css";
import MenuIcon from "@mui/icons-material/Menu";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import Person2Icon from "@mui/icons-material/Person2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
function User() {
  const [ShowMenuDiv, setShowMenuDiv] = useState(false);
  const showmenu = () => {
    setShowMenuDiv(!ShowMenuDiv);
  };
  return (
    <>
      <div className="topdashbar">
        <div className="left-menu">
          <MenuIcon style={{ color: "white" }} />
          <p>Pakistan's Virtual Intership Plateform</p>
        </div>
        <div className="menu">
          <WallpaperIcon style={{ color: "white" }} />
          <Person2Icon style={{ color: "white" }} />
          <h6 style={{ color: "white" }}>Sidra Ali</h6>
          <KeyboardArrowDownIcon
            className="dropIcon"
            style={{ color: "white" }}
            onClick={showmenu}
          />
          {ShowMenuDiv && <div className="menubox">
            <h4 style={{fontSize:'15px'}}><SettingsIcon style={{marginRight:'5px'}} fontSize="17px"/>Manage Account</h4>
            <h4 style={{fontSize:'15px', marginLeft:'5px'}}><PowerSettingsNewIcon style={{marginRight:'5px'}} fontSize="17px"/>Logout</h4>
          </div>}
        </div>
      </div>
      <div style={{ padding: "20px" }}>
        <div className="dashboard-title">
          <h1 style={{ fontSize: "25px" }}>HOME</h1>
        </div>
        <div className="line2"></div>
        <div className="notification-bar">
          <h1>Welocome from Internee.pk, Sidra Ali!</h1>
        </div>
        <div className="line"></div>
        <div className="dashboard-table">
          <h1 style={{ fontWeight: "600", fontSize: "17px" }}>
            Your Running Tasks
          </h1>
          <table
            style={{
              width: "100%",
              borderTop: "2px solid green",
              borderLeft: "1px solid lightgray",
              borderBottom: "1px solid lightgray",
              borderRight: "1px solid lightgray",
              
            }}
          >
            <thead style={{ borderTop: "1px solid lightgray" }}>
              <tr>
                <th style={{padding:'5px 0px',paddingLeft:"10px"}}>TASK ID</th>
                <th style={{padding:'5px 0px'}}>CATEGORY</th>
                <th style={{padding:'5px 0px'}}>TASKS</th>
                <th style={{padding:'5px 0px'}}>STATUS</th>
                <th style={{padding:'5px 0px'}}>ACTIONS</th>
              </tr>
            </thead>
            <tbody style={{ width: "100%", border: "1px solid gray" }}>
              <tr style={{ border: "1px solid lightgray" }}>
                <td style={{padding:'5px 0px',paddingLeft:"10px"}}>TSK-000-20</td>
                <td style={{padding:'5px 0px'}}>Photoshop Intership</td>
                <td style={{padding:'5px 0px'}}>Creating Digital App</td>
                <td style={{padding:'5px 0px'}}>Unlocked</td>
                <td style={{padding:'5px 0px'}}>
                  <button className="btn">View</button>
                </td>
              </tr>
              <tr style={{ border: "1px solid lightgray" }}>
                <td style={{padding:'5px 0px',paddingLeft:"10px"}}>TSK-000-21</td>
                <td style={{padding:'5px 0px'}}>Photoshop Intership</td>
                <td style={{padding:'5px 0px'}}>Interducing your self task</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
              </tr>
              <tr style={{ border: "1px solid lightgray" }}>
                <td style={{padding:'5px 0px',paddingLeft:"10px"}}>TSK-000-22</td>
                <td style={{padding:'5px 0px'}}>Photoshop Intership</td>
                <td style={{padding:'5px 0px'}}>Creating Digital App</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
              </tr>
              <tr style={{ border: "1px solid lightgray" }}>
                <td style={{padding:'5px 0px',paddingLeft:"10px"}}>TSK-000-23</td>
                <td style={{padding:'5px 0px'}}>Photoshop Intership</td>
                <td style={{padding:'5px 0px'}}>Photo Editing for e-commerce</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
              </tr>
              <tr style={{ border: "1px solid lightgray" }}>
                <td style={{padding:'5px 0px',paddingLeft:"10px"}}>TSK-000-23</td>
                <td style={{padding:'5px 0px'}}>Photoshop Intership</td>
                <td style={{padding:'5px 0px'}}>Interducing your self task</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
              </tr>
              <tr style={{ border: "1px solid lightgray" }}>
              <td style={{padding:'5px 0px',paddingLeft:"10px"}}>TSK-000-24</td>
                <td style={{padding:'5px 0px'}}>Photoshop Intership</td>
                <td style={{padding:'5px 0px'}}>Photo Editing for e-commerce</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
              </tr>
              <tr style={{ border: "1px solid lightgray" }}>
                <td style={{padding:'5px 0px',paddingLeft:"10px"}}>TSK-000-25</td>
                <td style={{padding:'5px 0px'}}>Photoshop Intership</td>
                <td style={{padding:'5px 0px'}}>Interducing your self task</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
              </tr>
              <tr style={{ border: "1px sollightgray" }}>
                <td style={{padding:'5px 0px',paddingLeft:"10px"}}>TSK-000-26</td>
                <td style={{padding:'5px 0px'}}>Photoshop Intership</td>
                <td style={{padding:'5px 0px'}}>Photo Editing for e-commerce</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
              </tr>
              <tr style={{ border: "1px solid lightgray" }}>
              <td style={{padding:'5px 0px',paddingLeft:"10px"}}>TSK-000-27</td>
                <td style={{padding:'5px 0px'}}>Photoshop Intership</td>
                <td style={{padding:'5px 0px'}}>API Integration</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
              </tr>
            </tbody>
            <tbody style={{ width: "100%" }}>
              <tr>
                <td style={{padding:'5px 0px',paddingLeft:"10px"}}>TSK-000-28</td>
                <td style={{padding:'5px 0px'}}>Photoshop Intership</td>
                <td style={{padding:'5px 0px'}}>Interducing your self task</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
                <td style={{padding:'5px 0px'}}>Locked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default User;
