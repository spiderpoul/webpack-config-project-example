export default class TasksState {
    tasks = [];
    listeners = [];

    constructor(todos) {
      this.tasks = todos;
    }


    addTask(taskTitle) {
      this.tasks = [
          {
            title: taskTitle,
            isDone: false,
            id: Date.now(),
          },  
          ...this.tasks, 
     ];

      this.notify(this.tasks);
    }

    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);

      this.notify(this.tasks);
    }

    markAsDone(taskId) {
      this.tasks = this.tasks.map(task => {
        if (taskId === task.id) {
            return {...task, isDone: true};
        }

        return task;
      })

      this.notify(this.tasks);
    }

    subscribe(cb) {
        this.listeners.push(cb);
    }

    notify() {
      this.listeners.forEach((cb) => {
          cb(this.tasks);
      })
    }
}