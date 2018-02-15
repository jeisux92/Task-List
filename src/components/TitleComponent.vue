<template>
  <h2>{{title}}</h2>
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    title: {
      require: true
    }
  }
};
</script>
