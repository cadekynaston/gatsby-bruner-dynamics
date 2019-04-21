import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import PackageCards from '../components/PackageCards';
import SideBySide from '../components/SideBySide';
import Cta from '../components/Cta';
import { theme } from "../styles";
import devices from '../images/devices.png'
import satellite from '../images/satellite.png'

const IndexPage = () => (
  <Layout>

    <Header />

    <PackageCards />

    <SideBySide
      bgColor={theme.colors.lightGray}
      image={devices} >
      <h3>We’re Here to Brand Everything, Everywhere, Anytime</h3>
      <p>Flat screen tv? Wireless divice? Tablet? Laptop? We can put our brand image on all of them. We can do it whenever we want, but mostly you’ll see our logo on your screen when you’re experiencing technical difficulties. This way, you will associate  our brand with some of your most emotional moments.</p>
    </SideBySide>

    <Cta bgColor={theme.colors.blue} />

    <SideBySide
      image={satellite} >
      <h3>What is a Brüner?</h3>
      <p>You might as well ask what salt tastes like or how water feels. Until you’ve interacted with a Brüner first hand, you can only imagine how great you’ll feel. A warm handshake, a compliment, a rubix cube coaching session, or just a chat about your weekend will leave you feeling better about your self and the world in general. </p>
      <p>Brüner Dynamics is on course to change the world:</p>
      <ul>
        <li>98% of Americans have never hung out with Jimmy. That’s about to change. With satellite technology, you can hang with him all day, every day. </li>
        <li>You’ve probably seen our ambiguous guerilla marketing stickers plasterd at various locations from laptops to street lamps.</li>
      </ul>
    </SideBySide>

  </Layout>
)

export default IndexPage
