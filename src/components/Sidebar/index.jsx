import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <div className="sidebar__item  flex--center">
          <span>
            <i className="ri-home-7-fill"></i>
          </span>
          <span className="sidebar__item__text">Home</span>
        </div>
      </Link>
      <Link to="/">
        <div className="sidebar__item flex--center">
          <span>
            <i className="ri-wallet-fill"></i>
          </span>
          <span className="sidebar__item__text">Explore</span>
        </div>
      </Link>
      <Link to="/">
        <div className="sidebar__item flex--center">
          <span>
            <i className="ri-play-circle-fill"></i>
          </span>
          <span className="sidebar__item__text">Playlist</span>
        </div>
      </Link>
      <Link to="/">
        <div className="sidebar__item flex--center">
          <span>
            <i className="ri-timer-flash-fill"></i>
          </span>
          <span className="sidebar__item__text">Watch Later</span>
        </div>
      </Link>
      <Link to="/">
        <div className="sidebar__item flex--center">
          <span>
            <i className="ri-thumb-up-fill"></i>
          </span>
          <span className="sidebar__item__text">Liked</span>
        </div>
      </Link>

      <Link to="/">
        <div className="sidebar__item flex--center">
          <span>
            <i className="ri-history-fill"></i>
          </span>
          <span className="sidebar__item__text">History</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
