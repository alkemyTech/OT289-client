import "./ScreenProfile.css";
import React from "react";
import { useState } from "react";

const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXstoDmXI3ZQs0akG-W8gsy108JHocWn4C-g6ILL5R7oS-22j7CQ2NSMS40zMxe3bOGjA&usqp=CAU"

const ScreenProfile = ({name="Unknown", familyName="Unknown", email="Unknown", img=defaultImg }) => {
  const [userInfo, setUserInfo] = useState({
    name: name,
    familyName: familyName,
    email: email,
    img: img
  })
  
  return (
    <div className="container">
      <div className="body-container">
        <div className="main-body">

          <div className="card-profile">
            <div className="card">
              <img
                className="profile-img"
                src={img}
                alt="Not Found"
                width="150"
                height="150"
              />
              <div className="info-profile">
                <h4 className="name-profile">{`${name} ${familyName}`}</h4>
              </div>
            </div>
          </div>

          <div className="data-profile">
            <div className="body-data-profile">

              <div className="data-container">
                <div className="title-div">
                  <h6 className="title">FirstName </h6>
                </div>
                <div className="info-div">{userInfo.name}</div>
              </div>

              <div className="data-container">
                <div className="title-div">
                  <h6 className="title">FamilyName </h6>
                </div>
                <div className="info-div">{userInfo.familyName}</div>
              </div>

              <div className="data-container">
                <div className="title-div">
                  <h6 className="title">Email </h6>
                </div>
                <div className="info-div">{userInfo.email}</div>
              </div>

              <div className="buttons-div">
                <button className="button">Edit</button>
                <button className="button">Apply</button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ScreenProfile;
