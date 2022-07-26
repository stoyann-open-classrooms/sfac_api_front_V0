// ==== dépendances
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// ==== contexts
import { ProductProvider } from './context/Product/ProductContext'
import { KanbanProvider } from './context/Kanban/KanbanContext'
import { RequestProvider } from './context/Request/RequestContext'
import { OrderProvider } from './context/Order/OrderContext'
import { SearchProvider } from './context/Search/searchContext'
import { AlertProvider } from './context/Alerte/AlerteContext'
import {UtilsProvider} from './context/Utils/UtilsContext'
// ==== composants
import Home from './pages/Home/Home'
import Kanbans from './pages/Kanbans/Kanbans'
import Requests from './pages/Requests/Requests'
import Orders from './pages/Orders/Orders.jsx'
import Kanban from './pages/Kanban/Kanban'
import NotFound from './pages/404/NotFound.jsx'
import Products from './pages/Products/Products'
import Header from './components/Header/Header.jsx'
import Order from './pages/Order/Order'
import Product from './pages/Product/Product'

function App() {
  return (
    <UtilsProvider>

    <AlertProvider>
      <OrderProvider>
        <SearchProvider>
          <RequestProvider>
            <ProductProvider>
              <KanbanProvider>
                <Router>
                  <Header />
                  <div className="container ">
                    <Routes>
                      <Route path="/" element={<Home />}></Route>
                      <Route path="/products" element={<Products />} />
                      <Route path="/kanbans" element={<Kanbans />} />
                      <Route path="/requests" element={<Requests />} />
                      <Route path="/orders" element={<Orders />} />
                      <Route path="/order/:id" element={<Order />} />
                      <Route path="/product/:id" element={<Product />} />
                      <Route path="/kanban/:id" element={<Kanban />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </div>
                </Router>
              </KanbanProvider>
            </ProductProvider>
          </RequestProvider>
        </SearchProvider>
      </OrderProvider>
    </AlertProvider>
    </UtilsProvider>
  )
}

export default App
