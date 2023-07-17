import {BrowserRouter, Routes,Route} from 'react-router-dom'
import SuggestionsPage from "./pages/SuggestionsPage";
import SuggestionDetailsPage from './pages/SuggestionDetailsPage';
import NewSuggestionPage from './pages/NewSuggestionPage';
import EditSuggestionPage from './pages/EditSuggestionPage';
import { Provider } from 'react-redux';
import store from "./store/store"
import Roadmap from './pages/RoadmapPage';
import { Cover } from './pages/page_styles';


function App() {
  return (
    <Cover>

      
    <Provider store={store}>

    <BrowserRouter>
    <Routes>
      <Route index element={<SuggestionsPage/>}/>
      <Route path="/suggestion/:id" element={<SuggestionDetailsPage/>}/>
        <Route path="/suggestion/new" element={<NewSuggestionPage />} />
        <Route path="/suggestion/:id/edit" element={<EditSuggestionPage />} />
        <Route path="/roadmap" element={<Roadmap />} />



    </Routes>
    </BrowserRouter>
    </Provider>
  </Cover>
  );
}

export default App;
