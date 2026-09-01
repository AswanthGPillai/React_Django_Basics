import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import Work from './Work.jsx'
import Object from './Object.jsx'
import Props from './Props.jsx'
import Student from './Student.jsx'
import HomePage from './LandingPage/HomePage.jsx'
import State from './State/State.jsx'
import StateWork from './State/StateWork.jsx'
import Counter from './Counter/Counter.jsx'
import InputFocus from './useRef/InputFocus.jsx'
import MainRoute from './RouteSetup/MainRoute/MainRoute.jsx';
import Parent from './useContext/Parent.jsx';
import Try from './Try.jsx';

import UseCallBackHook from './SyamaExample/UseCallbackExample.jsx';
import UseMemoExample from './SyamaExample/UseMemoExample.jsx';
import District from './CRUD/District.jsx';
import Category from './SyamaExample/CrudInReact/Category.jsx';
import Place from './CRUD/Place.jsx';
import SubCategory from './SyamaExample/CrudInReact/SubCategory.jsx';
import Todo from './FetchApi/Todo.jsx';
import FetchPost from './FetchApi/FetchPost.jsx';
import Comments from './Axios/Comments.jsx';
import FetchRecipe from './FetchApi/FetchRecipe.jsx';
import Filter from './SearchPAGEfilter/Filter.jsx';
import Search from './SearchPAGEfilter/Search.jsx';
import Pagination from './SearchPAGEfilter/Pagination.jsx';
import Products from './Axios/Products.jsx';
import SetUp from './LazyLoading/SetUp.jsx';
import LazyImages from './LazyLoading/LazyImages.jsx';
import QuizMainRoute from './Project/QuizApp/QuizMainRoute.jsx';
// import HomePage from './HomePage.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
      {/* <App /> */}
      {/* <Work/> */}
      {/* <Object/> */}
      {/* <Props /> */}
      {/* <Student/> */}
      {/* <HomePage/> */}
      {/* <HomePage/> */}
      {/* <State/> */}
      {/* <StateWork/> */}
      {/* <Counter/> */}
      {/* <InputFocus/> */}
      {/* <MainRoute/> */}
      {/* <Parent /> */}
      {/* <Try/> */}
      {/* <UseMemoExample/> */}
      {/* <UseCallBackHook/> */}
      {/* <District/> */}
      {/* <Category/> */}
      {/* <Place/> */}
      {/* <SubCategory/> */}
      {/* <Todo/> */}
      {/* <FetchPost/> */}
      {/* <FetchRecipe/> */}
      {/* <Comments/> */}
      {/* <Products/> */}
      {/* <Search/> */}
      {/* <Filter/> */}
      {/* <Pagination/> */}
      {/* <SetUp/> */}
      {/* <LazyImages/> */}
      <QuizMainRoute/>

    </BrowserRouter>
)
