import {BrowserRouter, Routes,Route} from 'react-router-dom'
import SuggestionsPage from "./pages/SuggestionsPage";
import FeedbackDetailsPage from './pages/FeedbackDetailsPage';
import NewFeedbackPage from './pages/NewFeedbackPage';
import EditFeedbackPage from './pages/EditFeedbackPage';
import { Provider } from 'react-redux';
import store from "../store/store"
import Roadmap from './pages/RoadmapPage';


function App() {
// const state = store.getState()
// console.log(state)
  return (
    <Provider store={store}>

    <BrowserRouter>
    <Routes>
      <Route index element={<SuggestionsPage/>}/>
      <Route path="/feedback/:id" element={<FeedbackDetailsPage/>}/>
        <Route path="/feedback/new" element={<NewFeedbackPage />} />
        <Route path="/feedback/:id/edit" element={<EditFeedbackPage />} />
        <Route path="/roadmap" element={<Roadmap />} />



    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
