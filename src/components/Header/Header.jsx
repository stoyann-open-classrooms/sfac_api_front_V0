import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import RequestContext from "../../context/Request/RequestContext";

export default function Header() {
  const [time, setTime] = useState();
  const { requests, loading, fetchRequests } = useContext(RequestContext);

  useEffect(() => {
    fetchRequests();
  }, []);

  useEffect(() => {
    setInterval(() => {
      const timer = new Date();
      setTime(timer.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <Sidebar />
      <header>
        <div className="stats">
          <div className="time">
            <h3>{time}</h3>
          </div>
          <div className="title">
            <Link to={"/"}>
              <h1>SFAC dashboard</h1>
            </Link>
          </div>
          <Link to={'/requests'}>
          <div className="notif">
            Demandes à traiter 
           
            {!loading ? (
              <>
                <p className="nb">{requests.length}</p>
              </>
            ) : (
              <>
                <p>O</p>
              </>
            )}
          </div>
            </Link>
        </div>
      </header>
    </>
  );
}
