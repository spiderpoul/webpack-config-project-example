export class Task extends HTMLElement {
  connectedCallback() {
      const shadow = this.attachShadow({mode: 'open'});
      
      shadow.innerHTML = `
        <style>
          .task {
            padding: 15px;
            border-bottom: 1px solid gray;
          }

          .container {
            background: red;
          }
        </style>

        <div class="task">${this.getAttribute("title")}</div>
      `;
  }
}

// customElements.define("kanban-task", Task);
