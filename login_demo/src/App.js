import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './page/SignUp/Signup';
import Login from './page/Login/Login';
import Forgotpassword from './page/Forgotpassword/Forgotpassword';
import TodoList from './page/TodoList/TodoList';
import TodoListSaga from './page/TodoListSaga/TodoListSaga';
import DemoHOC from './page/DemoHOCModal/DemoHOC';
import LoginForm from './components/HOC/LoginForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Login />
            <LoginForm />
          </div>
        }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/todolistsaga" element={<TodoListSaga />} />
        <Route path="/demoHOCmodal" element={<DemoHOC />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
