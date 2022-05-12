import DomElement from '../DomElement/DomElement';
import * as css from './TasksList.module.css'


export default class TasksList extends DomElement {
      constructor(tasksState) {
        super('div', {
          className: 'tasks-list',
        });

        this.renderTasks(tasksState.tasks);
        this.tasksState = tasksState;
      }


      renderTasks(tasks) {
        this.element.innerHTML = tasks.reduce(
            (acc, task) => {
              acc += `
               <div data-taskId="${task.id}" class="task">
                  <input type="checkbox" />
                  <span class=${css.title}>${task.title}</span>
                  <span class="delete">&times;</span>
               </div>
              `

              return acc;
            },
            ''
        )
      }

      applyEventListeners() {
        const allTasks = document.querySelectorAll('.task');

        allTasks.forEach(el => {
          el.addEventListener('click', (event) => {
              if (event.target.className = '.delete') {
                console.log(el.getAttribute('data-taskId'));
                this.tasksState.removeTask(+el.getAttribute('data-taskId'))
              }
          })
        })
      }
};