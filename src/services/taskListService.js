import Vue from 'vue';

export default {
    name: 'TaskListSerice',
    saveTask(text) {
        return Vue.http
            .post("tasks.json",{
                completed:false,
                text:text 
            });
    },
    getTasks() {
        return Vue.http
            .get("tasks.json");
    },
    deleteTasks(id){
        return Vue.http.delete(`tasks/${id}/.json`);
    }
}

