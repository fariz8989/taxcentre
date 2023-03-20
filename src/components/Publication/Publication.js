import React from "react";
import Button from "../Button/Button";
export default function Publication() {
  return (
    <>
      <div id="publication">
        <h1>Publication</h1>
        <div className="publication-container">
          {/* CARD */}
          <div className="publication-card">
            <img
              className="publication-image"
              src={require("../../assets/brevetA.webp")}
            />
            <div className="publication-text">
              <h3>Persepsi Masyarakat Atas Pajak</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tincidunt tincidunt tempor. Nullam dictum, libero nec pretium
                lobortis, libero ligula condimentum quam, in imperdiet ante elit
                ac arcu.
              </p>
              <Button props={{ type: "primary", text: "Read More" }} />
            </div>
          </div>
          {/* END CARD */}
          <div className="publication-card">
            <img
              className="publication-image"
              src={require("../../assets/brevetA.webp")}
            />
            <div className="publication-text">
              <h3>Persepsi Masyarakat Atas Pajak</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tincidunt tincidunt tempor. Nullam dictum, libero nec pretium
                lobortis, libero ligula condimentum quam, in imperdiet ante elit
                ac arcu.
              </p>
              <Button props={{ type: "primary", text: "Read More" }} />
            </div>
          </div>
          <div className="publication-card">
            <img
              className="publication-image"
              src={require("../../assets/brevetA.webp")}
            />
            <div className="publication-text">
              <h3>Persepsi Masyarakat Atas Pajak</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tincidunt tincidunt tempor. Nullam dictum, libero nec pretium
                lobortis, libero ligula condimentum quam, in imperdiet ante elit
                ac arcu.
              </p>
              <Button props={{ type: "primary", text: "Read More" }} />
            </div>
          </div>
          <div className="publication-card">
            <img
              className="publication-image"
              src={require("../../assets/brevetA.webp")}
            />
            <div className="publication-text">
              <h3>Persepsi Masyarakat Atas Pajak</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tincidunt tincidunt tempor. Nullam dictum, libero nec pretium
                lobortis, libero ligula condimentum quam, in imperdiet ante elit
                ac arcu.
              </p>
              <Button props={{ type: "primary", text: "Read More" }} />
            </div>
          </div>
          <div className="publication-card">
            <img
              className="publication-image"
              src={require("../../assets/brevetA.webp")}
            />
            <div className="publication-text">
              <h3>Persepsi Masyarakat Atas Pajak</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tincidunt tincidunt tempor. Nullam dictum, libero nec pretium
                lobortis, libero ligula condimentum quam, in imperdiet ante elit
                ac arcu.
              </p>
              <Button props={{ type: "primary", text: "Read More" }} />
            </div>
          </div>
          <div className="publication-card">
            <img
              className="publication-image"
              src={require("../../assets/brevetA.webp")}
            />
            <div className="publication-text">
              <h3>Persepsi Masyarakat Atas Pajak</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tincidunt tincidunt tempor. Nullam dictum, libero nec pretium
                lobortis, libero ligula condimentum quam, in imperdiet ante elit
                ac arcu.
              </p>
              <Button props={{ type: "primary", text: "Read More" }} />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
