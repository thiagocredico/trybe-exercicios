import LibPagSeguro from '../dependencies/LibPagSeguro';
import IPaymentAPI from '../interface/IPaymentAPI';

class PagSeguroAPI implements IPaymentAPI {
  async processPayment(value: number): Promise<boolean> {
    const api = new LibPagSeguro();
    const { confirmed } = await api.checkout(value);
    return confirmed;
  }
}

export default PagSeguroAPI;
