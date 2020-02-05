import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Offline, Online } from 'react-detect-offline';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/fontawesome-free-solid';

import { imageUrlServer } from '../src/util/constant'


// const jsx = (

//     <AppRouter />

// );




// const render = () => {
//     ReactDOM.render(jsx, document.getElementById('app'));
// }

// const App = () => (
//     <div>
//         <Online>
//             <div onLoad={connnectionStatus({ status: true })}>
//                 <div className="fa-3x text-center content_loader ">
//                     <FontAwesomeIcon icon="spinner" pulse />
//                 </div>
//                 <h1 className="display-4 text-center content_loaders">Please wait a moment until we finished loading.</h1>
//             </div>
//         </Online>

//         <Offline>
//             <div onLoad={connnectionStatus({ status: false })}>
//                 <div className="fa-3x text-center content_loader ">
//                     <FontAwesomeIcon icon={faWifi} />
//                 </div>
//                 <h1 className="display-4 text-center content_loaders">Check your internet connection.</h1>
//             </div>
//         </Offline>
//     </div>
// );

ReactDOM.render(<AppRouter />, document.getElementById('app'));
// if (!!localStorage.getItem("token")) {

//     axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");

//     store.dispatch(startFetchuser()).then(
//         (response) => {

//             if (store.getState().user.id <= 0) {
//                 localStorage.removeItem("token");
//                 location.reload();
//             }
//             ReactDOM.render(<App />, document.getElementById('app'));
//         });

// } else {
//     ReactDOM.render(<App />, document.getElementById('app'));
// }