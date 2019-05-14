import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout"
import Header from "../components/header"
import PackageCards from '../components/PackageCards'
import SideBySide from '../components/SideBySide'
import BasicContent from '../components/BasicContent'
import Columns from '../components/Columns'
import Cta from '../components/Cta'
import Faq from '../components/Faq'
import BorderBox from '../components/BorderBox'
import ContentBox from '../components/ContentBox'
import Footer from '../components/Footer'
import { theme } from "../styles"

const IndexPage = ({ data }) =>  (
  <Layout>

    <Header bgImage='stars-bg.png' />

    <PackageCards packageData={data.packages.edges[0].node.standard} />

    <SideBySide
      bgColor={theme.colors.lightGray}
      image='devices.png' >
      <h3>We’re Here to Brand Everything, Everywhere, Anytime</h3>
      <p>Flat screen tv? Wireless divice? Tablet? Laptop? We can put our brand image on all of them. We can do it whenever we want, but mostly you’ll see our logo on your screen when you’re experiencing technical difficulties. This way, you will associate  our brand with some of your most emotional moments.</p>
    </SideBySide>

    <BasicContent>
      <h2 className="margin-bottom-45">It Is Possible to Pay Us More Money</h2>
      <Columns>
        <BorderBox
            title='Easy Care'
            content='For only $5.99/mo, you can get priority customer support with annual dish relocation, free service calls, and a priority hotline which connects straight to Jimmy’s Pager – faster than a Led Zeppelin guitar solo.  Plus, you can add or cancel Easy Care at anytime.' />
        <BorderBox
          title='Voice'
          content='The industry term for digital phone service is VoIP. We want to mention VoIP here a few times so that we sound legit and you will forefit your dollars to us. Voice is the only VoIP connection that doesn’t subtract from your internet data allowing more time for Strongbad emails and Battlestar Galactica chat rooms.' />
        <BorderBox
          title='DIRECTV'
          content='If you can get Brüner at your home, you can get DIRECTV and vice versa. If you can get water in your home, you can quench your thirst and take baths. There is a hypothetical situation where you can take a bath, stream patriotic tunes, watch DIRECTV, and quench your thirst all at the same time.' />
      </Columns>
    </BasicContent>

    <Cta bgColor={theme.colors.blue} />

    <SideBySide
      image='satellite.png' >
      <h3>What is a Brüner?</h3>
      <p className='margin-bottom-25'>You might as well ask what salt tastes like or how water feels. Until you’ve interacted with a Brüner first hand, you can only imagine how great you’ll feel. A warm handshake, a compliment, a rubix cube coaching session, or just a chat about your weekend will leave you feeling better about your self and the world in general. </p>
      <p className='margin-bottom-25'>Brüner Dynamics is on course to change the world:</p>
      <ul>
        <li>98% of Americans have never hung out with Jimmy. That’s about to change. With satellite technology, you can hang with him all day, every day. </li>
        <li>You’ve probably seen our ambiguous guerilla marketing stickers plasterd at various locations from laptops to street lamps.</li>
      </ul>
    </SideBySide>

    <BasicContent bgColor={theme.colors.lightGray}>
      <h2 className="margin-bottom-25">Equipment</h2>
      <p className="max-width-500 margin-bottom-25">When you sign up for Brüner Dynamics, we make it easy to get connected. We’ll send a professional technician named Ralph to install your new dish in an optimal location and set up your wifi router inside your home. </p>
      <Columns>
        <ContentBox data={data.contentCard.edges[0].node} />
        <ContentBox data={data.contentCard.edges[1].node} />
      </Columns>
    </BasicContent>

    <BasicContent>
      <h2 className="margin-bottom-45">Brüner Dynamics FAQs</h2>
      <Faq data={data.faq.edges[0].node.question1}/>
      <Faq data={data.faq.edges[0].node.question2}/>
      <Faq data={data.faq.edges[0].node.question3}/>
      <Faq data={data.faq.edges[0].node.question4}/>
    </BasicContent>

    <Footer />

  </Layout>
)

export default IndexPage

export const query = graphql`

query IndexQuery {

  packages: allPackagesJson {
    edges {
      node {
        standard {
         pamantha {
           name
           packageDetails {
             img
             title
             subtitle
           }
           priceDollars
           priceCents
           priceTerms
           buttonText
         }
         elTenEleven {
           name
           priceDollars
           priceCents
           packageDetails {
             img
             title
             subtitle
           }
           priceTerms
           buttonText
         }
         jimmySpecial {
           name
           priceDollars
           priceCents
           packageDetails {
             img
             title
             subtitle
           }
           priceTerms
           buttonText
         }
         cultHeroClassic {
           name
           priceDollars
           packageDetails {
             img
             title
             subtitle
           }
           priceCents
           priceTerms
           buttonText
         }
        }
      }
    }
  }

  faq: allFaqJson {
    edges {
      node {
        question1 {
          question
          answer
        }
        question2 {
          question
          answer
        }
        question3 {
          question
          answer
        }
        question4 {
          question
          answer
        }
      }
    }
  }

  contentCard: allContentCardsJson {
    edges {
      node {
        title
        content
      }
    }
  }
}
`
