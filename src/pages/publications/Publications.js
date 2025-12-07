import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { publicationsHeader, publications } from "../../portfolio.js";
import PublicationsImg from "./PublicationsImg";
import "./Publications.css";

class Publications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="publications-main">
        <Header theme={theme} />

        <div className="basic-publications">
          <Fade bottom duration={2000} distance="40px">
            <div className="publications-heading-div">
              <PublicationsImg theme={theme} />
              <div className="publications-heading-text-div">
                <h1
                  className="publications-heading-text"
                  style={{ color: theme.text }}
                >
                  {publicationsHeader.title}
                </h1>
                <p
                  className="publications-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {publicationsHeader.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="publication-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard key={pub.id} pub={pub} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Publications;
