import '../../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocketContext, socket } from '../contexts/socket';


const App = ({ Component, pageProps }) => {
  return (
    <SocketContext.Provider value={socket}>
      <Component {...pageProps} />
    </SocketContext.Provider>
  )
}

export default App;
