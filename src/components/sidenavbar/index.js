import React from "react";
import styled, { css } from "styled-components";
import { NavLink as Link } from "react-router-dom";
import "../../css/sidenavbar.scss";

import * as colors from "../../colors";
import Arrow from "../../images/arrow-icon.png";
import SearchWhite from "../../images/search-icon-white.png";
import Burger from "../../images/menu.png";

export default class SideNavBar extends React.Component {
  /* Write the necessary functions to show/hide the side bar on mobile devices */
  constructor(props) {
    super(props);
    this.state = {
      activeSideBar: false,
      isMobile: false,
      isDesktop: false
    };
  }


  handleResize = () =>
    this.setState({
      isMobile: window.innerWidth < 500,
      isDesktop: window.innerWidth > 500
      // activeSideBar: true,
    });

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  openMobileNavigation = () =>
      this.setState({
        activeSideBar: !this.state.activeSideBar
      });
  // when we click the hamburger we want the side bar to be true nad show i.e add the class "visible" "visible should have css to show it.


  render() {
    const { activeSideBar } = this.state;
    const isMobile = this.state.isMobile;
    const isDesktop = this.state.isDesktop;
    return (
      <>
        {isMobile && (
          <button onClick={this.openMobileNavigation}>
            <img height="30px" src={Burger} />
          </button>
        )}


          <SideNavBarCont className={isDesktop || activeSideBar ? "visible": "not-visible"}>
            {/* Implement a hamburger icon slide in effect for mobile devices, */}
            hello


            <SideNavMainLink
              className="menu_nav_link main_nav_link"
              to="/"
              activeClassName="active"
              exact
            >
              Wesley
              <NavIcon arrow>
                <img src={Arrow} alt="Arrow" />
              </NavIcon>
            </SideNavMainLink>
            <SideNavMainLink
              className="menu_nav_link"
              to="/discover"
              activeClassName="active"
            >
              Discover
              <NavIcon search>
                <img src={SearchWhite} alt="Search" />
              </NavIcon>
            </SideNavMainLink>

            <SideNavHeader>
              <HeaderText>Watched</HeaderText>
            </SideNavHeader>

            <NavLink
              className="menu_nav_link"
              to="/watched/movies"
              activeClassName="active"
            >
              Movies
            </NavLink>
            <NavLink
              className="menu_nav_link"
              to="/watched/tv-shows"
              activeClassName="active"
            >
              Tv Shows
            </NavLink>

            <SideNavHeader>
              <HeaderText>Saved</HeaderText>
            </SideNavHeader>
            <NavLink
              className="menu_nav_link"
              to="/saved/movies"
              activeClassName="active"
            >
              Movies
            </NavLink>
            <NavLink
              className="menu_nav_link"
              to="/saved/tv-shows"
              activeClassName="active"
            >
              Tv Shows
            </NavLink>
          </SideNavBarCont>

      </>
    );
  }
}

const SideNavBarCont = styled.div`
  position: fixed;
  z-index: 9;
  width: 280px;
  height: 100%;
  background-color: ${colors.sideNavBar};
  border: 2px solid red;
`;

const SideNavMainLink = styled(Link)`
  position: relative;
  display: block;
  padding: 25px 35px;
  font-size: 1.6em;
  font-weight: 700;
  color: white;
`;

const NavIcon = styled.div`
  position: absolute;
  right: 35px;
  top: 50%;
`;

const SideNavHeader = styled.div`
  margin: 30px;
  transition: all 0.3s ease-in-out;
`;

const HeaderText = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: white;
  border-bottom: 1px solid grey;
  padding-bottom: 20px;
`;

const NavLink = styled(Link)`
  display: block;
  color: grey;
  font-size: 20px;
  margin: 30px;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;
