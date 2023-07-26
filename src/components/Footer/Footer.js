import React from "react";
import { Link } from "react-router-dom";
import { icon } from "../../assets/Icon";

export default function Footer() {
  return (
    <>
      <div id="footer" className="">
        <div className="left-footer">
          <img src={require("../../assets/Logo.webp")} />
          <p>Official Site of Tax Centre FIA UI</p>
        </div>
        <div className="mid-footer">
          <span>CONTACT US</span>
          <div>
            <p>B Building 2nd Floor, FISIP UI</p>
            <p>Universitas Indonesia</p>
            <p>Jawa Barat, Indonesia 16424</p>
          </div>
          <div className="footer-contact">
            <div className="footer-icon">{icon.phone}</div>
            <p>{"(+62) 21-78849147"}</p>
          </div>
          <div className="footer-contact">
            <div className="footer-icon">{icon.whatsapp}</div>
            <Link to="https://wa.me/628111544404"><p>{"(+62) 811-1544-404"}</p></Link>
          </div>
          <div className="footer-contact">
            <div className="footer-icon">{icon.instagram}</div>
            <Link to="https://instagram.com/taxcentreui?igshid=YmMyMTA2M2Y="><p>{"taxcentreui"}</p></Link>
          </div>
        </div>
        <div className="right-footer">
          <div>
            <h4>Faculty of Administration Science, Universitas Indonesia</h4>
            <Link to="http://fia.ui.ac.id"><span>http://fia.ui.ac.id</span></Link>
            <h4>Ministry of Finance, Republic Indonesia</h4>
            <span>www.kemenkeu.go.id</span>
            <h4>Tax Directorate General</h4>
            <span>www.djp.go.id</span>
            <h4>Custome and Excise Directorate General</h4>
            <span>www.dbc.go.id</span>
          </div>
       
            
        </div>
      </div>
      <div className="px-12 py-4 bg-gray-300 flex justify-center items-center">
        <span className="font-semibold text-gray-800 md:text-base text-sm text-center">© Tax Centre FIA Universitas Indonesia 2023, All Rights Reserved</span>
      </div>
      
    </>
  );
}
