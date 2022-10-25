type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

const customer = getCustomer(1);

customer?.birthday.getFullYear();

// optional chaining
// optional access element
// optional call
