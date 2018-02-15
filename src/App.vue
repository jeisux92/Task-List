<template>
  <div id="app" class="container">
      <div class="jumbotron">
        <title-component title="Task List"></title-component>
        <hr>
        <new-task :tasks="tasks" @Reload="loadTasks"></new-task>
        <task-list :tasks="tasks" @Reload="loadTasks"></task-list>  
      </div>
  </div>
</template>

<script>
import TaskList from "./components/TaskListComponent.vue";
import TitleComponent from "./components/TitleComponent.vue";
import NewTask from "./components/NewTaskComponent.vue";

import TaskListService from "./services/taskListService";

export default {
  name: "app",
  components: {
    TaskList,
    TitleComponent,
    NewTask
  },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    loadTasks() {
      TaskListService.getTasks().then(x => (this.tasks = x.data));
    },
    log(){
      console.log('Created');
    }
  },
  created() {
    this.loadTasks();
  }
};
</script>
 
<style>
.finished {
  color: gray;
  text-decoration: line-through;
}
</style>
