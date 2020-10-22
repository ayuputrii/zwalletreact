import React from "react";
import { Provider } from "react-redux";
import { Switch, BrowserRouter as Router} from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./Components";

import configureStore from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";

import {
  AdminUser,
  AdminUserEdit,
  Register,
  Login,
  Dashboard,
  Transaction,
  Profile,
  PersonalInformation,
  ChangePassword,
  ChangePin,
  AddNumber,
  ManageNumber,
  Topup,
  SearchReceiver,
  Amount,
  Confirmation,
  Status
} from "./Page";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/Admin" component={AdminUser} />
        <PrivateRoute path="/Admin/edit" component={AdminUserEdit} />
        <PublicRoute restricted={true} component={Register} exact path="/Register" render={(props) => <Register {...props} />} />
        <PublicRoute restricted={true} component={Login} path='/Login' />
        <PrivateRoute exact path="/Dashboard" component={Dashboard} />
        <PrivateRoute exact path="/Transaction" component={Transaction} />
        <PrivateRoute exact path="/Profile" component={Profile} />
        <PrivateRoute exact path="/PersonalInformation" component={PersonalInformation} />
        <PrivateRoute exact path="/ChangePassword" component={ChangePassword} />
        <PrivateRoute exact path="/ChangePin" component={ChangePin} />
        <PrivateRoute exact path="/AddNumber" component={AddNumber} />
        <PrivateRoute exact path="/Manage" component={ManageNumber} />
        <PrivateRoute exact path="/Topup" component={Topup} />
        <PrivateRoute exact path="/SearchReceiver" component={SearchReceiver} />
        <PrivateRoute exact path="/Amount" component={Amount} />
        <PrivateRoute exact path="/Confirmation" component={Confirmation} />
        <PrivateRoute exact path="/Status" component={Status} />
      </Switch>
    </Router>
  );
}

const App = () => {
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
