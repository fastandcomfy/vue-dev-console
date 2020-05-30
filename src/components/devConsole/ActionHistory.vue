<template>
  <div>
    <h3>History</h3>
    <div>
      <VueJsonPretty :data="instances" />
    </div>
    <button @click="clearHistory">Clear history</button>
  </div>
</template>

<script>
import VueJsonPretty from "vue-json-pretty";
import EventBus, { events } from "../../event-bus";

export default {
  name: "ActionHistory",
  components: {
    VueJsonPretty,
  },
  data() {
    return {
      instances: [],
      localStorageKey: "history",
    };
  },
  methods: {
    clearHistory() {
      localStorage.removeItem(this.localStorageKey);
      this.instances = [];
    },
  },
  mounted() {
    const instanceHistory = localStorage.getItem(this.localStorageKey);
    if (instanceHistory) {
      this.instances = JSON.parse(instanceHistory);
    }
    EventBus.$on(events.instanceCreated, (instance) => {
      this.instances.push(instance);
      localStorage.setItem(
        this.localStorageKey,
        JSON.stringify(this.instances)
      );
    });
  },
};
</script>
