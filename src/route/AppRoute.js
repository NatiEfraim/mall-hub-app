// import React, { Component, Fragment } from "react";
// import { Router, Route, Switch } from "react-router";
// import HomePage from "../pages/HomePage";

// class AppRoute extends Component {
//   render() {
//     return (
//       <Fragment>
//         <Switch>
//           <Route exact to="/" component={HomePage} />
//         </Switch>
//       </Fragment>
//     );
//   }
// }

// export default AppRoute;
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserLoginPage from "../pages/UserLoginPage";
import ContactPage from "../pages/ContactPage";
import PrivacyPage from "../pages/PrivacyPage";
import PurchasePage from "../pages/PurchasePage";
import RefundPage from "../pages/RefundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";
import ProductCategoryPage from "../pages/ProductCategoryPage";
import ProductSubCategoryPage from "../pages/ProductSubCategoryPage";
class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={UserLoginPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/purchase" component={PurchasePage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/refund" component={RefundPage} />
          <Route exact path="/about" component={AboutPage} />

          <Route exact path="/productdetails" component={ProductDetailsPage} />

          <Route exact path="/notification" component={NotificationPage} />
          <Route exact path="/favourite" component={FavouritePage} />
          <Route exact path="/cart" component={CartPage} />

          <Route
            exact
            path="/productcategory/:category"
            component={ProductCategoryPage}
          />
          <Route
            exact
            path="/productsubcategory/:category/:subcategory"
            component={ProductSubCategoryPage}
          />
        </Router>
      </Fragment>
    );
  }
}

export default AppRoute;
