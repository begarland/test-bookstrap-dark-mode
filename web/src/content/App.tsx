import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const reactLogo = './assets/images/reactReduxTS.png'

interface IApp {}

const App = (props: IApp) => {
    const dispatch = useDispatch()
    const appState = useSelector(state => state.appState)

    console.log('appState', appState)
    return (
        <div className='App'>
            <div className='App-splash-logo'>
                <img
                    src={reactLogo}
                    className={`header-logo`}
                />
                <h2 className='header-text'>here goes nothing....</h2>
           
            </div>
        </div>
    )
}

export default App
