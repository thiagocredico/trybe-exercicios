import ITravel from '../interface/ITravel';

class FareCalculatorService {
  calculateFare(travel: ITravel): number {
    const weekDay = new Date(travel.requestDate).getDay();
    const fareRate = weekDay === 0 || weekDay === 6 ? 0.75 : 0.5;
    const regularFare = (travel.locationEnd - travel.locationStart) * fareRate;

    const hour = new Date(travel.requestDate).getHours();
    const isNight = hour > 18 || hour < 6;
    const nightRate = isNight ? 0.25 : 0;
    const nightFare = (travel.locationEnd - travel.locationStart) * nightRate;
    
    return regularFare + nightFare;
  }
}

export default FareCalculatorService;
