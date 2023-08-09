import axios from "axios";
import React, { useEffect, useState } from "react";
export default function Partner() {
  const [partnerList, setPartnerList] = useState({ done: false, data: [] });
  useEffect(() => {
    async function getPartner() {
      const result = await axios.get(
        "https://ui.taxcentre.id/backend/api/organization/list.html?type=partner"
      );
      setPartnerList({
        ...partnerList,
        done: true,
        data: result.data.results.slice(0, 8),
      });
    }
    getPartner();
  }, []);
  return (
    <>
      <div className="partner-container">
        <h1 className="partner-title">Our Partner & Client</h1>
        {partnerList.done === true ? (
          <div className="partner-inner-container">
            <div className="partner-wrapper">
              {partnerList.done
                ? partnerList.data.slice(0, 4).map((data) => {
                    return (
                      <img
                        loading="lazy"
                        alt={data.Name}
                        src={data.Logo ? data.Logo : ""}
                      />
                    );
                  })
                : ""}
            </div>
            <div className="partner-wrapper">
              {partnerList.done
                ? partnerList.data.slice(4, 8).map((data) => {
                    return (
                      <img
                        loading="lazy"
                        alt={data.Name}
                        src={data.Logo ? data.Logo : ""}
                      />
                    );
                  })
                : ""}
            </div>
          </div>
        ) : (
          <h1 id="Loading">Loading</h1>
        )}
      </div>
    </>
  );
}
