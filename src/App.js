import { BrowserRouter, Routes, Route } from "react-router-dom";
import {publicRouter} from './routes'
function App() {
  return (
      <BrowserRouter>
      <div>
        <Routes>
          {
            publicRouter.map((route, index) => {
              const Page = route.component
              return (
                <Route 
                  key={index}
                  path={route.path}
                  element={<Page />}
                />
              )
            })
          }
        </Routes>
      </div>
        
      </BrowserRouter>
  );
}

export default App;
