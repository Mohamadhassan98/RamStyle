import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import RTL from "./tools/RTL";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";

function Index() {
    const theme = createMuiTheme({
        direction: "rtl",
        typography: {
            fontFamily: "Shabnam"
        },
        palette: {
            primary: {
                main: '#272343'
            },
            secondary: {
                light: '#E3F6F5',
                main: '#BAE8E8',
                dark: '#34a8a2'
            },
            text: {
                primary: "#000000",
                secondary: "#FFFFFF"
            },
            background: {
                default: '#f5f5f5',
            }
        },
        overrides: {
            MuiInputLabel: {
                root: {
                    color: '#000000',
                },
            },
            MuiTabs: {
                indicator: {
                    background: "#34a8a2"
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <RTL>
                    <div className="App">
                        <BrowserRouter>
                            <Switch>
                                <Route path='/' component={App}/>
                            </Switch>
                        </BrowserRouter>
                    </div>
                </RTL>
            </CssBaseline>
        </ThemeProvider>
    );
}

export default Index;


ReactDOM.render(<Index/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
