import Layout from './components/Layout/Layout.js'
import TasksList from './components/TasksList/TasksList'
import TasksState from './state/tasks/TasksState'
import { tasksMocks } from './mocks/tasksMocks'

import './styles.css';

const root = document.getElementById('root');


const tasksState = new TasksState(tasksMocks);
const taskList = new TasksList(tasksState) 
const layout = new Layout()

layout.appendToElement(root);
taskList.appendToElement(document.querySelector('#main'));


taskList.applyEventListeners();

tasksState.subscribe((tasks) => {
  taskList.renderTasks(tasks);
  taskList.applyEventListeners();
});


window.tasksState = tasksState;