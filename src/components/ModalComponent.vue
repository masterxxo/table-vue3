<script setup>
const props = defineProps({
  id: String,
});

const emits = defineEmits(["confirm", "decline"]);

function confirmAction() {
  emits("confirm", props.id);
}

function declineAction() {
  emits("decline");
}
</script>

<template>
  <div
    class="flex fixed w-screen h-screen bg-gray-600/75 top-0 left-0 justify-center items-center"
  >
    <div class="bg-gray-600 p-4">
      <h2 class="text-xl font-bold">
        Do you want to delete customer with id: {{ props.id }}
      </h2>
      <div class="flex justify-center items-center mt-3">
        <button
          class="px-2 mr-3 rounded bg-red-600 text-stone-900"
          @click="confirmAction"
        >
          Delete
        </button>
        <button class="px-2 rounded bg-zinc-800" @click="declineAction">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
