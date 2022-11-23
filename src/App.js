//sve komponente koje koristimo moramo da iportujemo u ovoj glavnoj
//ona ekstenzija na hromu za react ofc da ne radi
//importujemo i css da bi on znao da moze da ga koristi
//ako glavna komponenta ima pristup cssu onda i sporedne imaju pristup svemu
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import Cart from './components/Cart';

import{useState} from "react";

import {BrowserRouter,Routes,Route} from "react-router-dom";




function App() {

  const [cartNum,setCartNum]=useState(0);
  const[cartProduct,setCartProduct]=useState([]);
  const [products, setProducts] = useState([ 
    {
      id: 1,
      title: "RAČUNAR",
      description:
        "89000,00 din",
      amount: 0,
      imageLink: "https://img.ep-cdn.com/images/500/500/qy/qyjkgiaclmxsdbzfhpre.jpg"
      
    },
    {
      id: 2,
      title: "TASTATURA",
      description:
        "5900,00 din",
      amount: 0,
      imageLink:"https://viphouse.rs/products/images/37422/51166.jpg"
    },
    {
      id: 3,
      title: "MIŠ",
      description:
        "3490,00 din",
      amount: 0,
      imageLink:"https://skycom.rs/fajlovi/product/p503-rog-pugio-optical-usb-gaming-mis-mis01170_5bb124a102c22.jpg"
    },
    {
      id: 4,
      title: "SLUŠALICE",
      description:
        "3990,00 din",
      amount: 0,
      imageLink:"https://www.gamecentar.rs/media/catalog/product/cache/3f726396bb6a19726231308fc4c8c5aa/3/0/30145-asus-rog-delta-s-slusalice-cena-prodaja.jpg"
    }]);


  function refreshCart(){
    console.log(products)
    let newProducts=products.filter((prod)=>prod.amount>0);
    {console.log("cart products")}
    console.log(newProducts)
    setCartProduct(newProducts);
  }



  function addProduct(id){
    setCartNum(cartNum+1);
    products.forEach((prod)=>{
      if(prod.id===id){
        prod.amount=prod.amount+1;
        //setProducts(prod.amount+1);
      }
    });
    setProducts(products);
   refreshCart();
  }

  function removeProd(id){
    setCartNum(cartNum-1);
    products.forEach((prod)=>{
      if(prod.id===id){
        prod.amount=prod.amount-1;
      }
    });
    setProducts(products);
   refreshCart();
   
  }
  return (
    <BrowserRouter className="App">

  <NavBar cartNum={cartNum}></NavBar>
  

  <Routes>
    <Route path='/' element={<Products products={products} onAdd={addProduct} onMinus={removeProd}></Products>}></Route>
    <Route path='/cart' element={<Cart Cartproducts={cartProduct}></Cart>}></Route>
  </Routes>
  
 
    </BrowserRouter>
  );
}

export default App;
