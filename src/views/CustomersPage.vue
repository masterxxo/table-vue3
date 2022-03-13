<script setup>
import { ref, onMounted } from "vue";
import { useCustomerStore } from "../stores/customers";
import TableComponent from "../components/TableComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";

const customers = useCustomerStore();
customers.getAllCustomers();

let showModal = ref(false);
let modalId = ref(0);
let allCustomers = ref([]);

onMounted(() => {
  allCustomers.value = customers.customers;
});

function showFilteredCustomers(status) {
  allCustomers.value = customers.getFilteredCustomersByStatus(status);
}

function showSortedCustomers(type) {
  if (type === "none") {
    resetSort();
  } else {
    sortValues(type);
  }
}

function sortValues(type) {
  allCustomers.value = allCustomers.value.sort((a, b) => {
    const lowerCaseA = a.name.toLowerCase();
    const lowerCaseB = b.name.toLowerCase();
    if (lowerCaseA < lowerCaseB) {
      return type === "asc" ? 1 : -1;
    }

    if (lowerCaseA > lowerCaseB) {
      return type === "asc" ? -1 : 1;
    }

    return 0;
  });
}

function resetSort() {
  allCustomers.value = allCustomers.value.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }

    if (a.id > b.id) {
      return 1;
    }

    return 0;
  });
}

function clearFilters() {
  allCustomers.value = customers.customers;
}

function showDeleteModal(id) {
  showModal.value = true;
  modalId.value = id;
}

function hideDeleteModal() {
  showModal.value = false;
  modalId.value = 0;
}

function deleteCustomer(id) {
  customers.removeCustomer(id);
  allCustomers.value = customers.customers;
  showModal.value = false;
  modalId.value = 0;
}
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold text-slate-50 mb-3">All customers</h1>
    <button
      class="p-2 rounded bg-sky-300 text-stone-900 mb-4"
      @click="clearFilters"
    >
      Clear Filters
    </button>
    <TableComponent
      :tableData="allCustomers"
      @filter="showFilteredCustomers"
      @sort="showSortedCustomers"
      @delete="showDeleteModal"
    ></TableComponent>
    <ModalComponent
      v-if="showModal"
      :id="modalId"
      @confirm="deleteCustomer"
      @decline="hideDeleteModal"
    ></ModalComponent>
  </div>
</template>
