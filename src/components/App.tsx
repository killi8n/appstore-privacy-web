import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import {
    IndexPage,
    RulesPage,
    NotFoundPage,
    LandingPage,
    PrivacyPage,
} from '../routes';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #f1f3f5;
        a {
            text-decoration: none;
            color: inherit;
        }
        button {
            font-family: 'Montserrat', sans-serif;
        }
        margin: 0px;
        padding: 0px;
        ::-webkit-scrollbar {
            width: 0px;
        }
    }
`;

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route exact path="/rules" component={RulesPage} />
                    <Route
                        exact
                        path="/landing/:appName"
                        component={LandingPage}
                    />
                    <Route
                        exact
                        path="/privacy/:appName"
                        component={PrivacyPage}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
            </BrowserRouter>
            <GlobalStyle />
        </>
    );
}

export default App;
