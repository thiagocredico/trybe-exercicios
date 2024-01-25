class LibPagSeguro {
  async checkout(value: number): Promise<{ confirmed: boolean, price: number }> {
    return { confirmed: true, price: value };
  }
}

export default LibPagSeguro;
