import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="main__container">
        <Sidebar />
        <div className="content__container">
          {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes> */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
