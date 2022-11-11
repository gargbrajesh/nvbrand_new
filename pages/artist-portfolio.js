
import React from "react";
import InnerHeader from "layouts/BlackHeader";
import WithLayout from "WithLayout";
import Artist from "views/Artist";

const ArtistPortFolioView = () => {
  return <WithLayout component={Artist} layout={InnerHeader} />;
};

export default ArtistPortFolioView;
