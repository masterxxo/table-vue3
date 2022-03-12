<script setup>
import { useCustomerStore } from "../stores/customers";

const customers = useCustomerStore();
</script>

<template>
  <h1>All customers</h1>
  {{ customers.getCustomersByNameDescending }}
</template>
