import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store, { history } from './redux/store/store'
import { ConnectedRouter } from 'connected-react-router'
import { Route } from 'react-router'
import 'date-input-polyfill'
import App from './content/App'

ReactDOM.render(
    (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Route path='/' component={App}/>
            </ConnectedRouter>
        </Provider>
    ),
    document.getElementById('root'))
