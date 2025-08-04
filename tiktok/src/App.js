import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {

            const PageComponent = route.component;

            let Layout = DefaultLayout; // Default layout

            if (route.layout) {
              Layout = route.layout; // Sử dụng layout được chỉ định
            } else if (route.layout === null) {
              Layout = Fragment; // Không sử dụng layout

            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <PageComponent />
                  </Layout>}
              />)
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
