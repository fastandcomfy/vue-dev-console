<template>
  <div class="dev-console">
    <h2>Dev console</h2>
    <Action />
    <ActionHistory />
  </div>
</template>

<script>
export default {
  name: "DevConsole",
  components: {
    Action: () => import("./Action"),
    ActionHistory: () => import("./ActionHistory"),
  },
};
</script>

<style>
.dev-console {
  background-color: #212121;
  text-align: left;
  margin-top: 10px;
  padding: 10px;
  color: white;
}
</style>
