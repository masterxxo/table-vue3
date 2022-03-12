<script setup>
import { useCustomerStore } from "../stores/customers";
import TableComponent from "../components/TableComponent.vue";

const customers = useCustomerStore();
customers.getAllCustomers();

function getAllCustomers() {
  customers.getAllCustomers();
}

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
  console.log(id);
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
  </div>
</template>
