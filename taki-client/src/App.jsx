import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";
import AuthenticationContextProvider from "./hooks/contexts/Authentication.context";

import './styles/index.scss';

function App() {

  return (
    <div className="App">
      <AuthenticationContextProvider>
        <RouterProvider router={AppRouter}/>
      </AuthenticationContextProvider>
    </div>
  )
}

export default App
