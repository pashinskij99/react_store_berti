import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from "redux";
import { Provider } from "react-redux";
import {reducer} from "./redux/reducer/reducer";
import { BrowserRouter } from 'react-router-dom'
import App from "./components/App/App"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
)
