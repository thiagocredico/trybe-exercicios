import { OrderModel } from "./respeita-principio/OrderModel";
import { UserModel } from "./respeita-principio/UserModel";

console.log("############# USER ####################");
const user = new UserModel();
console.log(user.create());
console.log(user.read());
console.log(user.update());
console.log(user.remove());

console.log("\n############# ORDER ####################");
const order = new OrderModel();
console.log(order.create());
console.log(order.read());
console.log(order.update());
// console.log(order.remove()); // não quer esse