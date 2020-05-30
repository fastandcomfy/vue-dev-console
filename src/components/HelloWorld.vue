<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="instanceName" />
    <button @click="addInstance">Add instance</button>
  </div>
</template>

<script>
import EventBus, { events } from "../event-bus";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      instanceName: "",
    };
  },
  methods: {
    addInstance() {
      console.log(`processing new instance ${this.instanceName}`);
      EventBus.$emit(events.instanceCreated, {
        id: new Date(),
        name: this.instanceName,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
