import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage, AllcategoryPage, AllVendorsPages, ShopProductsPage, ProductDetailsPage, CartPage, ChoosePaymentMethodPage, NotFound, AdminPage, AdminManageProductsPage, AdminManageOrdersPage, AdminAddVendorPage, AdminAddSubCategoryPage, AdminAddProductPage, AdminAddCategoryPage, AdminOrderDetailsPage, UserPage, UserManageOrdersPage, UserFavoriteProductsPage, UserAllAddressPage } from "./pages";
import { Header, NavbarLogin, Footer, AdminEditProduct } from './components'

function App() {
  return (
    <div>
      <Header />
      <NavbarLogin />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/allcategories' element={<AllcategoryPage />} />
        <Route path='/allbrands' element={<AllVendorsPages />} />
        <Route path='/products' element={<ShopProductsPage />} />
        <Route path='/products/:id' element={<ProductDetailsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/order/paymethod' element={<ChoosePaymentMethodPage />} />
        
        <Route path='/admin' element={<AdminPage />}>
        <Route path='allproducts' element={<AdminManageProductsPage title='Manage All products'/>} />
        <Route path='allorders' element={<AdminManageOrdersPage title='Manage All Orders' />} />
        <Route path='addvendor' element={<AdminAddVendorPage title='Add Vendor' />} />
        <Route path='addcategory' element={<AdminAddCategoryPage title='Add Category' />} />
        <Route path='addproduct' element={<AdminAddProductPage title='Add Product' />} />
        <Route path='editproduct/:id' element={<AdminEditProduct title='Edit Product' />} />
        <Route path='addsubcategory' element={<AdminAddSubCategoryPage title='Add SubCategory' />} />
        <Route path='allorders/order/:id' element={<AdminOrderDetailsPage title='Order # 1 Details' />} />
        </Route>

        <Route path='/user' element={<UserPage />}>
        <Route path='allorders' element={<UserManageOrdersPage title='Manage All Orders'/>} />
        <Route path='favoriteproducts' element={<UserFavoriteProductsPage title='Manage All Orders'/>} />
        <Route path='addresses' element={<UserAllAddressPage title='Manage All Orders'/>} />
        </Route>
        <Route path='*' element={<NotFound />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
