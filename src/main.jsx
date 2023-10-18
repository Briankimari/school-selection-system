import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'; 
import { HashRouter } from 'react-router-dom';
import { ContextProvider } from './contexts/ContextProvider.jsx'
 


const store= createStore( compose(applyMiddleware(thunk)))


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}> 
  <HashRouter>
     <ContextProvider>
     <App/>
  </ContextProvider>
  </HashRouter>
 
      
  

</Provider>
)
