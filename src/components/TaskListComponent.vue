<template>
<div>
  <ul class="list-group">
    <li v-for="(task,index) of tasks" 
        class="list-group-item" :class="{finished: task.completed}" v-bind:key="index">
      {{task.text}}
      <span class="pull-right">
       <button 
               class="btn btn-success btn-xs glyphicon glyphicon-ok" @click="task.completed=!task.completed"></button>
        <button 
               class="btn btn-danger btn-xs glyphicon glyphicon-remove" @click="deleteTask(index)"></button>
        </span>
    </li>   
  </ul>
  </div>
</template>

<script>
import TaskListService from "../services/taskListService";

export default {
  name: "TaskList",
  props: {
    tasks: { required: true }
  },
  methods: {
    deleteTask(id) {
      TaskListService.deleteTasks(id).then(x => this.$emit("Reload"));
    }
  }
};
</script>
