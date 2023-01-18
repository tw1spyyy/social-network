import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Dialogs } from "./Components/Dialogs/Dialogs";
import { Profile } from "./Components/Profile/Profile";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { MusicContainer } from "./Components/Music/MusicContainer";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar store={props.store} />
      <div className="content">
        <Routes>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dialogs" element={<Dialogs store={props.store} />} />
          <Route path="/Music" element={<MusicContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
