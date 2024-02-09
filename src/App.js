import Sidebar from "./components/Sidebar";
import AboutMePage from "./pages/AboutMePage";
import CareerGoalsPage from "./pages/CareerGoalsPage";
import ExtraInfoPage from "./pages/ExtraInfoPage";
import ResumePage from "./pages/ResumePage";
import Route from "./components/Route";


function App() {
    return <div>
        <Sidebar />
        <div className="col-span-5">
            <Route path="/">   
                <AboutMePage />
            </Route>
            <Route path="/resume">
                <ResumePage />
            </Route>
            <Route path="/career"><CareerGoalsPage />
            </Route>
            <Route path="/extra-info">
                <ExtraInfoPage />
            </Route>
        </div>
    </div>
}

export default App;