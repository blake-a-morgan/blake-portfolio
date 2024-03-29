import Sidebar from "./components/Sidebar";
import AboutMePage from "./pages/AboutMePage";
import OtherProjects from "./pages/OtherProjects";
import ExtraInfoPage from "./pages/ExtraInfoPage";
import ResumePage from "./pages/ResumePage";
import Route from "./components/Route";
import PageHeader from "./components/PageHeader";



function App() {
    return <div className="text-center">
        <PageHeader />
        <div className="float-start ">
            <div className="float-left  grid-cols-4 gap-4 mt-4    ">
                <Sidebar />
            </div>
            <div className="container pt-3 float-right col-span-4 text-center items-center w-auto pl-5 ">
                <Route path="/">   
                    <AboutMePage />
                </Route>
                <Route path="/resume">
                    <ResumePage />
                </Route>
                <Route path="/other-proj"><OtherProjects />
                </Route>
                <Route path="/extra-info">
                    <ExtraInfoPage />
                </Route>
            </div>
        </div>
    
    </div>
}

export default App;