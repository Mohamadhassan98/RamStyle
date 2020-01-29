import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import RTL from "./tools/RTL";
import {BrowserRouter, Route} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import {useCookies} from 'react-cookie';
import axios from 'axios';

function Index() {

    const [cookies, setCookies, removeCookies] = useCookies(['csrftoken']);
    const csrf = cookies['csrftoken'];
    if (csrf) {
        axios.defaults.headers['X-CSRFToken'] = csrf;
    }

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
            MuiFormHelperText: {
                root: {
                    color: '#000000'
                }
            },
            MuiTabs: {
                indicator: {
                    background: "#34a8a2"
                }
            },
            MuiLink: {
                underlineNone: {
                    cursor: "pointer"
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
                            <Route path='/' component={App}/>
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
