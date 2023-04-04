import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectRole from './components/SelectRole';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import Chat from './pages/Chat';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<SelectRole />} />
                    <Route path="/teacher" element={<Teacher />} />
                    <Route path="/student" element={<Student />} />
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
