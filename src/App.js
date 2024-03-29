import React, { Component } from "react";
import CssBaseline from "material-ui/CssBaseline";
import Grid from "material-ui/Grid";
import { createMuiTheme, MuiThemeProvider } from "material-ui/styles";

import Welcome from "./containers/welcome.jsx";

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        '&:before': { //underline color when textfield is inactive
          backgroundColor: 'black',
          height: '2px'
        },
        '&:hover:not($disabled):before': { //underline color when hovered 
          backgroundColor: 'black',
          height: '2px'
        },
      }
    },
  },
  typography: {
    // Use the system font over Roboto.
    fontFamily: 'Abel, sans-serif',
  },
  palette: {
    primary: {
      light: "#5c5c5c",
      main: "#333333",
      dark: "#0c0c0c",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#000000",
      //main: "#2ad4dc",
      main: "#000000",
      dark: "#00a2aa",
      contrastText: "#ffffff",
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style ={{backgroundColor: "#000", maxHeight:225, borderBottom: "1px solid #000"}}>
          <Grid container  alignItems="flex-start" direction="row" spacing={0}>
            <Grid item xs={11} sm={8} md={6} lg={4} align="flex-start" style={{marginTop: "20px"}}>
              <img src="./cryptocurve-logo-white2.png" alt="CryptoCurve.io" heigth="64px" width="245px" style={{padding:"0 3%", marginLeft:"30px",marginTop:"30px"}} />
            </Grid>
          </Grid>
          <CssBaseline />
          <Grid container justify="space-around" alignItems="flex-start" direction="row" spacing={0}>
            <Grid item xs={11} sm={8} md={6} lg={4} style={{marginTop: "20px", marginBottom: '20px'}}>
              {this.renderScreen()}
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    )
  };

  renderScreen() {
    switch (this.state.currentScreen) {
      case "welcome":
        return (<Welcome setUser={this.setUser} />);
        break;
      default:
        return (<Welcome setUser={this.setUser} />);
    }
  }
}

export default App;
