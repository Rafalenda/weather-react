import React from "react";
import axios from "axios";
import Search from "./Search";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Weather(props) {
  return (
    <div className="container-md">
      {/* <Search /> */}
      <Card style={{ width: "60rem" }}>
        <Card.Body>
          <Card.Title>Weather Forecast</Card.Title>

          <form class="form-inline">
            <input
              type="text"
              class="form-control mb-2 mr-sm-2"
              id="inlineFormInputName2"
              placeholder="Type a city"
            />

            <button type="submit" class="btn btn-secondary mb-2">
              Search city
            </button>
          </form>

          <Card.Text>
            <div className="row">
              <div className="col-6">
                <span>New York </span> <br />
                <span> Last updated at Tuesday 20:28 </span>
                Icon Clear sky
              </div>
              <div className="col-6">
                <span>Humidity: 47% </span> <br />
                Wind: 4 km/h
              </div>
            </div>
          </Card.Text>
        </Card.Body>

        <div className="row">
          <div className="col-3">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Monday</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Rainy</Card.Subtitle>
                <Card.Text>Temp: 17°C</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Tuesday</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Cloudy
                </Card.Subtitle>
                <Card.Text>Temp: 15°C</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Wednesday</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Sunny</Card.Subtitle>
                <Card.Text>Temp: 24°C</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-3">
            {" "}
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Thursday</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Rainy</Card.Subtitle>
                <Card.Text>Temp: 9°C</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
