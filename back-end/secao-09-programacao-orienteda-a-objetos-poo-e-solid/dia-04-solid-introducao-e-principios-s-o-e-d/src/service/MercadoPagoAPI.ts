import LibMercadoPago from '../dependencies/LibMercadoPago';
import IPaymentAPI from '../interface/IPaymentAPI';

class MercadoPagoAPI implements IPaymentAPI {
  async processPayment(value: number): Promise<boolean> {
    const api = new LibMercadoPago();
    const { status } = await api.processPayment(value);
    return status === 'ok';
  }
}

export default MercadoPagoAPI;
