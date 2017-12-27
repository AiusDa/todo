import React from 'react';

import Filters from './Filters';
import AddTodo from './../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
// import Loader from './Loader';

const App = () => (
  <div>
    <AddTodo/>
    <Filters />
    <VisibleTodoList />
    {/* <Loader /> */}
  </div>
);

export default App;
