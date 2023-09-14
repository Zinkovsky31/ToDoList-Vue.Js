const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      todoList: [],
      completedList: [],
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addTask() {
      if (this.inputValue !== "") {
        this.todoList.push({
          title: this.inputValue,
        });
        this.inputValue = "";
      }
    },
    toggleTask(index, type) {
      if (type === "todo") {
        const task = this.todoList.splice(index, 1)[0];
        task.completed = true;
        this.completedList.push(task);
      } else {
        const task = this.completedList.splice(index, 1)[0];
        task.completed = false;
        this.todoList.push(task);
      }
    },
    removeTask(index, type) {
      const list = type === "todo" ? this.todoList : this.completedList;
      list.splice(index, 1);
    },
  },
});

app.mount("#app");
