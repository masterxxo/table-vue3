<script setup>
import { ref } from "vue";
import { useCustomerStore } from "../stores/customers";
import TableComponent from "../components/TableComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";

const customers = useCustomerStore();
customers.getAllCustomers();

let showModal = ref(false);
let modalId = ref(0);

function showFilteredCustomers(status) {
  customers.showAllCustomersByStatus(status);
}

function showSortedCustomers(type) {
  customers.sortAllCustomersByName(type);
}

function clearFilters() {
  customers.getAllCustomers();
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
      :tableData="customers.customers"
      @filter="showFilteredCustomers"
      @sort="showSortedCustomers"
      @delete="showDeleteModal"
    ></TableComponent>
    <!-- <button @click="getAllCustomers">Reset table content</button> -->
    <ModalComponent
      v-if="showModal"
      :id="modalId"
      @confirm="deleteCustomer"
      @decline="hideDeleteModal"
    ></ModalComponent>
  </div>
</template>
