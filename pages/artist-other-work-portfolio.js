// import React from "react";
// import Minimal from "layouts/BlackHeader";
// import WithLayout from "WithLayout";
// import Artist from "views/Portfolio";
// function Portfolio() {
//   return <WithLayout component={Artist} layout={Minimal} />;
// }

// export default Portfolio;

import React from "react";
import InnerHeader from "layouts/BlackHeader";
import WithLayout from "WithLayout";
import Artist from "views/ArtistOtherWork";

const ArtistOtherWorkViewForm = () => {
  return <WithLayout component={Artist} layout={InnerHeader} />;
};

export default ArtistOtherWorkViewForm;

