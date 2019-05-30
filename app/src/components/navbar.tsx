import React from 'react';

import {
  Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Alignment, AnchorButton,
  Button, Classes
} from '@blueprintjs/core';

import logo from '../logo.svg';

export class AppNavbar extends React.Component {
  render() {
    return (
      <Navbar fixedToTop>
        <NavbarGroup align={Alignment.LEFT}>
          <img className={`${Classes.ICON} logo`} src={logo} alt="Logo" />
          <NavbarHeading>PyMedPhys &mdash; ALPHA</NavbarHeading>
          <NavbarDivider />
          <Button
            className="bp3-minimal" icon="home" text="Home" />
          <AnchorButton
            className="bp3-minimal" icon="function" text="Python Engine"
            href="/python-engine/" target="_blank" />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <AnchorButton
            className="bp3-minimal" icon="book" text="Documentation"
            href="https://docs.pymedphys.com" />
          <AnchorButton
            className="bp3-minimal" icon="git-repo" text="GitHub"
            href="https://github.com/pymedphys/pymedphys" />
        </NavbarGroup>
      </Navbar>
    )
  }
}