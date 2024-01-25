class LibMercadoPago {
  async processPayment(value: number): Promise<{ status: string, value: number }> {
    return { status: 'OK', value };
  }
}

export default LibMercadoPago;
