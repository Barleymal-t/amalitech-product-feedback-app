import {BrowserRouter, Routes,Route} from 'react-router-dom'
import SuggestionsPage from "./pages/SuggestionsPage";
import SuggestionDetailsPage from './pages/SuggestionDetailsPage';
import NewSuggestionPage from './pages/NewSuggestionPage';
import EditSuggestionPage from './pages/EditSuggestionPage';
import { Provider } from 'react-redux';
import store from "./store/store"
import Roadmap from './pages/RoadmapPage';


function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>
    <Routes>
      <Route index element={<SuggestionsPage/>}/>
      <Route path="/Suggestion/:id" element={<SuggestionDetailsPage/>}/>
        <Route path="/Suggestion/new" element={<NewSuggestionPage />} />
        <Route path="/Suggestion/:id/edit" element={<EditSuggestionPage />} />
        <Route path="/roadmap" element={<Roadmap />} />



    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
