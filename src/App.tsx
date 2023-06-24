import {BrowserRouter, Routes,Route} from 'react-router-dom'
import SuggestionsPage from "./pages/SuggestionsPage";
import FeedbackDetailsPage from './pages/FeedbackDetailsPage';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<SuggestionsPage/>}/>
      <Route path="/feedback" element={<FeedbackDetailsPage/>}/>
      {/* <Route path="" element={}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
