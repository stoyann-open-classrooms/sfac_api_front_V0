import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Kanbans from "./pages/Kanbans/Kanbans";
import Requests from "./pages/Requests/Requests";
import Orders from "./pages/Orders/Orders.jsx";
import Kanban from "./pages/Kanban/Kanban";
import NotFound from "./pages/NotFound";
import { ProductProvider } from "./context/Product/ProductContext";
import { RequestProvider } from "./context/Request/RequestContext";
import { KanbanProvider } from "./context/Kanban/KanbanContext";
import { SearchProvider } from "./context/Search/searchContext";
import Products from "./pages/Products/Products";
import Header from "./components/Header/Header.jsx";
import Order from "./pages/Order/Order";
import {AlertProvider} from "./context/Alerte/AlerteContext";

function App() {
  return (

    <SearchProvider>
      <RequestProvider>
        <ProductProvider>
          <KanbanProvider>
       
<AlertProvider>

            <Router>
              <Header />
              <div className="container ">
         
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/products" element={<Products />} />
                  <Route path="/kanbans" element={<Kanbans />} />
                  <Route path="/requests" element={<Requests />} />
                  <Route path="/orders" element={<Orders />} />

   
                  <Route path="/order/:id" element={<Order/>} />
                  <Route path="/kanban/:id" element={<Kanban />} />
            
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </Router>
          
      </AlertProvider>
          </KanbanProvider>
        </ProductProvider>
      </RequestProvider>
    </SearchProvider>
 
  );
}

export default App;
