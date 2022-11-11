import React from 'react';

const NoRecordFound = props => {
  return (
    <>
      <div className="no_record_found">
        <img
          src="https://2.bp.blogspot.com/-SXNnmaKWILg/XoNVoMTrxgI/AAAAAAAAxnM/7TFptA1OMC8uk67JsG5PcwO_8fAuQTzkQCLcBGAsYHQ/s1600/giphy.gif"
          alt="%"
        />
        <div className="oops_no_record_found">
          <h6>
            <em>Ooops!</em>
          </h6>
          <p>No record found.</p>
        </div>
      </div>
    </>
  );
};

export default NoRecordFound;
