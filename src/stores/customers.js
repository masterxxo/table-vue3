import { defineStore } from "pinia";

export const useCustomerStore = defineStore({
  id: "customers",
  state: () => ({
    customers: [
      {
        id: 1,
        name: "Joe Smith",
        status: "active",
        company: "Joe smith company",
        pricing: "1000",
      },
      {
        id: 2,
        name: "Martha Smith",
        status: "cancelled",
        company: "Joe smith company",
        pricing: "2000",
      },
      {
        id: 3,
        name: "John Evans",
        status: "active",
        company: "Cancelled Ltd",
        pricing: "1500",
      },
      {
        id: 4,
        name: "Sara Matters",
        status: "cancelled",
        company: "Alphabet Ltd",
        pricing: "2500",
      },
      {
        id: 5,
        name: "Michael Wilson",
        status: "active",
        company: "Stage Ltd",
        pricing: "2200",
      },
    ],
  }),
  getters: {
    getActiveCustomers: (state) =>
      state.customers.filter((customer) => customer.status === "active"),
    getCancelledCustomers: (state) =>
      state.customers.filter((customer) => customer.status === "cancelled"),
    getCustomersByNameDescending: (state) =>
      state.customers.sort((a, b) => {
        const lowerCaseA = a.name.toLowerCase();
        const lowerCaseB = b.name.toLowerCase();

        if (lowerCaseA < lowerCaseB) {
          return -1;
        }

        if (lowerCaseA > lowerCaseB) {
          return 1;
        }

        return 0;
      }),
    getCustomersByNameAscending: (state) =>
      state.customers.sort((a, b) => {
        const lowerCaseA = a.name.toLowerCase();
        const lowerCaseB = b.name.toLowerCase();

        if (lowerCaseA < lowerCaseB) {
          return 1;
        }

        if (lowerCaseA > lowerCaseB) {
          return -1;
        }

        return 0;
      }),
  },
  actions: {
    removeCustomer(id) {
      this.customers = this.customers.filter((customer) => customer.id !== id);
    },
  },
});