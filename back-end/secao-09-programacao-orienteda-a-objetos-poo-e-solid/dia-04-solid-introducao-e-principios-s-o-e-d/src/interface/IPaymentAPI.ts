export default interface IPaymentAPI {
  processPayment(value: number): Promise<boolean>;
}
