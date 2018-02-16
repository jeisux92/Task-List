<template>
  <div class="input-group">
      <input type="text" 
             @keyup.enter="addTask"
             v-model="newTask" 
             placeholder="Type new task" 
             class="form-control"/>
      <span class="input-group-btn">
        <button @click="addTask" 
                class="btn btn-primary">
          Add task
        </button>
       </span>
    </div>
</template>

<script>
import TaskListService from "../services/taskListService";

export default {
  name: "NewTask",
  props: {
    tasks: {
      required: true
    }
  },
  data() {
    return {
      newTask: ""
    };
  },
  methods: {
    addTask: function() {
      var text = this.newTask.trim();
      if (text) {
        TaskListService.saveTask(text).then(x => {
          if (x.data) {
            this.$emit("Reload");
          }
        });
      }
      this.newTask = "";
    }
  }
};
</script>

