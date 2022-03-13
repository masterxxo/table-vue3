<script setup>
import { ref } from "vue";
const props = defineProps({
  tableData: Array,
});

let sortType = ref(1);

const emits = defineEmits(["filter", "sort", "delete"]);

function setFilter(status) {
  emits("filter", status);
}

function setSort() {
  let sortName = "";

  switch (sortType.value) {
    case 1:
      sortName = "desc";
      sortType.value++;
      break;
    case 2:
      sortName = "asc";
      sortType.value++;
      break;
    case 3:
      sortName = "none";
      sortType.value = 1;
      break;
    default:
      sortName = "none";
      break;
  }

  emits("sort", sortName);
}

function deleteAction(id) {
  emits("delete", id);
}
</script>

<template>
  <table class="table=auto border-collapse border border-slate-500">
    <thead class="bg-slate-50 dark:bg-slate-700">
      <th class="border border-slate-600 px-2">Id</th>
      <th class="border border-slate-600 px-2 cursor-pointer" @click="setSort">
        Name
      </th>
      <th class="border border-slate-600 px-2">Status</th>
      <th class="border border-slate-600 px-2">Company</th>
      <th class="border border-slate-600 px-2">Pricing</th>
      <th class="border border-slate-600 px-2">Actions</th>
    </thead>
    <tbody>
      <tr v-for="row in props.tableData" :key="row.id">
        <td class="border border-slate-700 px-2 text-center">{{ row.id }}</td>
        <td class="border border-slate-700 px-2 text-center">{{ row.name }}</td>
        <td class="border border-slate-700 p-2 text-center">
          <button
            @click="setFilter(row.status)"
            class="rounded-lg px-2 text-stone-900"
            :class="row.status === 'active' ? 'bg-lime-300' : 'bg-rose-300'"
          >
            {{ row.status }}
          </button>
        </td>
        <td class="border border-slate-700 px-2 text-center">
          {{ row.company }}
        </td>
        <td class="border border-slate-700 px-2 text-center">
          {{ row.pricing }}
        </td>
        <td class="border border-slate-700 px-2 text-center">
          <button
            class="px-2 rounded bg-red-600 text-stone-900"
            @click="deleteAction(row.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
