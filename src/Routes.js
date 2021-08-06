import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListProduct from "./pages/admin/product/list";
import ListCategory from "./pages/admin/category/list";
import AddProductForm from "./pages/admin/product/add";
import AddCategoryForm from "./pages/admin/category/add";
import EditCategoryForm from "./pages/admin/category/edit";
import EditProductForm from "./pages/admin/product/edit";
import AdminLayout from "./layouts/AdminLayout";
import AdminRoute from "../src/auth/adminRoute";
import WebsiteLayout from "./layouts/WebsiteLayout";
import Signup from "./pages/website/signup";
import Signin from "./pages/website/signin";
import ListProductHomepage from "./pages/website/listproducthomepage";
import ListProductFromCate from "./pages/website/productfromcate";
const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <AdminRoute path="/admin">
          <AdminLayout>
            <Switch>
              <Route exact path="/admin/category">
                <ListCategory {...props} />
              </Route>
              <Route exact path="/admin/category/add">
                <AddCategoryForm {...props} />
              </Route>
              <Route exact path="/admin/category/:id/edit">
                <EditCategoryForm {...props} />
              </Route>
              <Route exact path="/admin/product">
                <ListProduct {...props} />
              </Route>
              <Route exact path="/admin/product/add">
                <AddProductForm {...props} />
              </Route>
              <Route exact path="/admin/product/:id/edit">
                <EditProductForm {...props} />
              </Route>
            </Switch>
          </AdminLayout>
        </AdminRoute>
        <Route>
          <WebsiteLayout exact path="/">
            <Switch>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/signin">
                <Signin />
              </Route>
              <Route exact path="/">
                <ListProductHomepage />
              </Route>
              <Route exact path="/:id">
                <ListProductFromCate  {...props} />
              </Route>
            </Switch>
          </WebsiteLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
