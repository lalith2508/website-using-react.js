import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import "./mobile.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import CartState from "./context/cart/cartState";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart";
import { Toast } from "react-bootstrap";
import Auth from "./components/auth";
import AuthState from "./context/auth/authState";
import Sidebar from "./components/sideBar";
import AuthContext from "./context/auth/authContext";
import AuthContext from "./context/auth/authContext";
import PrivateRoutes from "./components/privateRoutes";
import LoadingContext from "./context/loading/loadingContext";
import DeleteItems from "./components/deleteItems";
import setAuthToken from "./context/auth/setAuthToken";
import CartContext from "./context/cart/cartContext";
import AddProduct from "./components/addProduct";
import Fail from "./components/fail";
import Forget from "./components/Forget";
import ResetPassword from "./components/resetPassword";
import Checkout from "./components/checkout";
import Success from "./components/success";
import NotFound from "./components/404";
import Contact from "./components/contact";
import Order from "./components/order";
import Verify from "./components/verify";
export default function App() {
  const { userLoaded, isAuthenticated } = useContext(AuthContext);
  const [display, setDisplay] = useState(0);
  const { loadCart, state } = useContext(CartContext);
  const { Loader, loading, setLoading } = useContext(LoadingContext);
  const changeDisplay = () => {
    setDisplay(display ^ 1);
<Route
                    exact
                      path="/forget/:code"
                      component={ResetPassword}
                    />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/verify" component={Verify} />
                    <PrivateRoutes exact path="/order" component={Order} />
                    <Route path="/" component={NotFound} />
                  </Switch>
                </>
              )}
            </Router>
          </CartState>
        </AuthState>
      </div> </>); }
