import { Request, Response } from 'express';
import FareCalculatorService from '../service/FareCalculatorService';
import TravelPaymentService from '../service/TravelPaymentService';
import LibMercadoPago from '../dependencies/LibMercadoPago';
import MercadoPagoAPI from '../service/MercadoPagoAPI';
import IPaymentAPI from '../interface/IPaymentAPI';

export class TravelController {
  fareCalculatorService: FareCalculatorService;

  travelPaymentService: TravelPaymentService;

  constructor(paymentApi: IPaymentAPI) {
    this.fareCalculatorService = new FareCalculatorService();
    this.travelPaymentService = new TravelPaymentService(paymentApi);
  }

  calculateFare(req: Request, res: Response): void {
    const travel = req.body;
    const fare = this.fareCalculatorService.calculateFare(travel);
    res.send({ fare });
  }

  async chargePayment(req: Request, res: Response): Promise<void> {
    const { value } = req.body;
    const confirmed = await this.travelPaymentService.chargePayment(value);
    res.send({ confirmed });
  }
}
