// ==============================
// SRP
// OK
const ehPar = (value: number): boolean => {
  return value % 2 === 0;
};
// NOT OK
const ehParEPrimo = (value: number): boolean => {
  if (value <= 1) {
    return false;
  }

  if (value <= 3) {
    return true;
  }

  if (value % 2 === 0 || value % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= value; i += 6) {
    if (value % i === 0 || value % (i + 2) === 0) {
      return false;
    }
  }
  return value % 2 === 0;
};

// ==============================
// OCP
//OK
const isValid1 = (value: number): boolean => {
  if ([1, 2, 3, 4, 5, 6].includes(value)) return true;
  return false;
};

// Not OK
const isValid2 = (value: number): boolean => {
  if (value === 1) return true;
  if (value === 2) return true;
  if (value === 3) return true;
  if (value === 4) return true;
  if (value === 5) return true;
  if (value === 6) return true;
  return false;
};

// ==============================
// DIP
//OK
const isValid3 = (value: number, array: number[]): boolean => {
  if (array.includes(value)) return true;
  return false;
};
isValid3(10, [1, 2, 3, 4, 5, 6]);

// ==============================
// ISP
//OK

interface ICelularBasico {
  ligar(): void;
}
interface ICelularResistente {
  voa(): void;
}
interface ICelularModerno {
  filmar(): void;
}
class Celular implements ICelularBasico {
  numero: string = '';

  ligar(): void {}
}

class CelularTijolao
  extends Celular
  implements ICelularBasico, ICelularResistente
{
  voa() {}
  ligar(): void {}
}

class CelularModerno
  extends Celular
  implements ICelularBasico, ICelularModerno
{
  filmar() {}
}

// ==============================
// LSP
//OK

class CelularL {
  numero: string = '';

  ligar(): void {}
}

class CelularTijolaoL extends CelularL {
  voa() {}
  ligar(): void {}
}

class CelularModernoL extends Celular {
  filmar() {}
}

const chamar = (cel: CelularL) => cel.ligar();
chamar(new CelularL());
chamar(new CelularTijolaoL());
chamar(new CelularModernoL());

// NOT OK

class CelularQuaseModernoL extends Celular {
  filmar() {return 'Gravando'}
}

const criarMemoriasVisuais = (cel: CelularQuaseModernoL) => cel.filmar().length;

criarMemoriasVisuais(new CelularQuaseModernoL());
// criarMemoriasVisuais(new CelularModernoL()); // não vai dar certo
