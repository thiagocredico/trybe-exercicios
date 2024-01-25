import IPaymentAPI from '../interface/IPaymentAPI';

class TravelPaymentService {
  constructor(private api: IPaymentAPI) {}

  async chargePayment(value: number): Promise<boolean> {
    const isSucesso = await this.api.processPayment(value);
    return isSucesso;
  }
}
export default TravelPaymentService;
