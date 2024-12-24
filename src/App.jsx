
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Header from "./components/Header";
import Detail from "./pages/detail";
import Feed from "./pages/feed";
import Result from "./pages/results";

const App = () => {
  return (


   <BrowserRouter>

   <Header/>
    
    <Routes>
      <Route path="/" element={<Feed/>}  />
      <Route path="/watch" element={<Detail/>}  />
      <Route path="/result" element={<Result/>}  />
    </Routes>


   </BrowserRouter>


  );
};


export default App