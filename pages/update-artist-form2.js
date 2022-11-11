
import React from "react";
import InnerHeader from "layouts/BlackHeader";
import WithLayout from "WithLayout";
import UpdateArtistForm2 from "views/UpdateArtistForm2";

const ArtistUpdateForm2PortFolio = () => {
  return <WithLayout component={UpdateArtistForm2} layout={InnerHeader} />;
};

export default ArtistUpdateForm2PortFolio;
