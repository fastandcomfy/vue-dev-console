<template>
  <div>
    <div>
      <button @click="deleteInstance" :disabled="!instance">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
import EventBus, { events } from "../../event-bus";

export default {
  name: "Action",
  data() {
    return {
      instance: null,
      doing: false,
    };
  },
  computed: {
    buttonText() {
      if (!this.instance) {
        return "Nothing to do";
      }
      return this.doing ? "Doing ..." : `Do some action "${this.instance.id}"`;
    },
  },
  methods: {
    async deleteInstance() {
      this.doing = true;
      setTimeout(() => {
        console.log("doing some action");
        this.doing = false;
        this.instance = null;
      }, 1000);
    },
  },
  mounted() {
    EventBus.$on(events.instanceCreated, (instance) => {
      this.instance = instance;
    });
  },
};
</script>
