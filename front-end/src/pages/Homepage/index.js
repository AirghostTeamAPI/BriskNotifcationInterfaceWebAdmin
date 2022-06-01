import React from "react";
import "../../Styles/Homepage/style.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="Logo">
              <h3>Brisk.Administrator</h3>
            </div>
            <div>
              <a href="#">Menu</a>
            </div>
          </div>
        </div>
      </div>

      <div className="conteudo">
        <div className="center">
          <div className="conteudo-single">
            <img src="https://media.discordapp.net/attachments/829118904005558292/981378384816930816/1.png?width=473&height=473"></img>
            <h3>FOLs Reach</h3>
            <p>
              Search a FOL by its title and get the number of users who read it
            </p>
          </div>
          <div className="conteudo-single">
            <img src="https://media.discordapp.net/attachments/829118904005558292/981378384498159686/4.png?width=473&height=473"></img>
            <h3>Number of FOLs read by Users</h3>
            <p>
              Search for a user by their username and get the number of FOLs
              viewed by them.
            </p>
          </div>
          <div className="conteudo-single">
            <img src="https://media.discordapp.net/attachments/829118904005558292/981378384275836928/3.png?width=473&height=473"></img>
            <h3>Most Accessed Hours</h3>
            <p>Get the number of users access per hour on the app.</p>
          </div>

          <div className="conteudo-single">
            <Link to="/Location" className="Link">
              <img src="https://media.discordapp.net/attachments/829118904005558292/981378384053567588/2.png?width=473&height=473"></img>
            </Link>
            <h3>Number of access by location</h3>
            <p>Get a graph with the number of access on the app by country.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
