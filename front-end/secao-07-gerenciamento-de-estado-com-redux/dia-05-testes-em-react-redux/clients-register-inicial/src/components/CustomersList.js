import React from 'react';
import Customer from './Customer';

function CustomersList({ customers, deleteCustomer }) {
  return (
    customers.map((customer, i) => (
      <Customer
        key={ customer.email }
        customer={ customer }
        deleteCustomer={ deleteCustomer }
        index={ i }
      />
    ))
  );
}

export default CustomersList;
