import React from "react";
import HomeStats from "../../components/Home/HomeStats";
import AccordionAbout from "../../components/Shared/AccordionAbout/AccordionAbout";

function Home() {
  return (
    <div className="main-container">
<h1 className="big-title">Accueil</h1>
<HomeStats/>
{/* <AccordionAbout title={'test accordion'}>
  <ul>
    <li>test</li>
    <li>test</li>
    <li>test</li>
    <li>test</li>
    <li>test</li>
  </ul>
</AccordionAbout> */}


    </div>
  );
}

export default Home;
