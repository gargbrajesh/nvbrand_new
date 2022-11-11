
import React from "react";
import InnerHeader from "layouts/BlackHeader";
import WithLayout from "WithLayout";
import UpdateArtist from "views/UpdateArtist";

const ArtistUpdatePortFolio = () => {
  return <WithLayout component={UpdateArtist} layout={InnerHeader} />;
};

export default ArtistUpdatePortFolio;
