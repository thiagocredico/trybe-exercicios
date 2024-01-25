const fs = require('fs');
const faker = require('faker');
const ProductModel = require('../models/productModel');

jest.mock('fs');

describe('Product Model', function () {
  let mockData;
  const data = () => {
    const dataArray = [
      {
        id: 1,
        name: faker.commerce.productName(),
        brand: faker.commerce.productMaterial(),
      },
      {
        id: 2,
        name: faker.commerce.productName(),
        brand: faker.commerce.productMaterial(),
      },
      {
        id: 3,
        name: faker.commerce.productName(),
        brand: faker.commerce.productMaterial(),
      },
    ];
    return dataArray;
  };

  describe('Get all products', function () {
    beforeEach(function () {
      mockData = JSON.stringify(data());
    });

    test('When getting all products, should return an array with all the available products', function () {
      fs.readFileSync = jest.fn().mockReturnValueOnce(mockData);
      const res = ProductModel.getAll();
      expect(res).toStrictEqual(JSON.parse(mockData));
      fs.readFileSync.mockRestore();
    });
  });

  describe('Get product by ID', function () {
    beforeEach(function () {
      mockData = JSON.stringify(data());
    });

    test('When sending ID 1 as parameter, should only the product with id 1 be returned', function () {
      fs.readFileSync = jest.fn().mockReturnValueOnce(mockData);
      const res = ProductModel.getById(1);
      expect(res).toStrictEqual(JSON.parse(mockData)[0]);
    });

    test('When sending ID 4 as parameter, should return undefined, since theres no product with id 4', function () {
      fs.readFileSync = jest.fn().mockReturnValue(mockData);
      const res = ProductModel.getById(4);
      expect(res).toStrictEqual(undefined);
    });

    test('When sending no ID as parameter, should return undefined', function () {
      fs.readFileSync = jest.fn().mockReturnValue(mockData);
      const res = ProductModel.getById();
      expect(res).toStrictEqual(undefined);
    });
  });

  describe('Add product', function () {
    beforeEach(function () {
      mockData = data();
    });

    test('When adding a new Product, should write in the file and return the created product', function () {
      fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockData));
      fs.writeFile = jest.fn();

      const newProduct = {
        id: 4,
        name: faker.commerce.productName(),
        brand: faker.commerce.productMaterial(),
      };
      const res = ProductModel.add(newProduct.name, newProduct.brand);
      mockData.push(newProduct);

      expect(fs.writeFile).toHaveBeenCalledWith(
        './data/products.json',
        JSON.stringify(mockData),
        'utf8',
        expect.any(Function),
      );
      expect(res.id).toStrictEqual(4);
    });

    test('When something went wrong while writing the file, should throw an error', function () {
      fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockData));
      let callback;
      jest.spyOn(fs, 'writeFile').mockImplementation((path, data, type, cb) => {
        callback = cb;
      });
      const err = 'something went wrong';

      const newProduct = {
        id: 1,
        name: faker.commerce.productName(),
        brand: faker.commerce.productMaterial(),
      };
      ProductModel.add(newProduct.name, newProduct.brand);

      expect(fs.writeFile).toHaveBeenCalled();
      expect(() => callback(err)).toThrowError(err);
    });

    test('When write file occurs successfully, sends a log message through console', function () {
      fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockData));
      let callback;
      jest.spyOn(fs, 'writeFile').mockImplementation((path, data, type, cb) => {
        callback = cb;
      });

      const newProduct = {
        id: 1,
        name: faker.commerce.productName(),
        brand: faker.commerce.productMaterial(),
      };
      ProductModel.add(newProduct.name, newProduct.brand);

      const logSpy = jest.spyOn(global.console, 'log');
      callback();

      expect(logSpy).toHaveBeenCalledWith('write file ok');

      logSpy.mockRestore();
    });
  });

  describe('Delete product by id', function () {
    beforeEach(function () {
      mockData = data();
    });

    test('When deleting a product with ID 1, should write in the file the products without the one with ID 1 and the file content after deletion', function () {
      fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockData));
      fs.writeFile = jest.fn();

      const deleteResponse = ProductModel.remove(1);
      const expectedProductsAfterDeletion = [mockData[1], mockData[2]];

      expect(fs.writeFile).toHaveBeenCalledWith(
        './data/products.json',
        JSON.stringify(expectedProductsAfterDeletion),
        'utf8',
        expect.any(Function),
      );
      expect(deleteResponse.length).toBe(2);
      expect(deleteResponse[0].id).toBe(2);
      expect(deleteResponse[1].id).toBe(3);
    });

    test('When something went wrong while writing the file, should throw an error', function () {
      fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockData));
      let callback;
      jest.spyOn(fs, 'writeFile').mockImplementation((path, data, type, cb) => {
        callback = cb;
      });
      const err = 'something went wrong';

      ProductModel.remove(1);

      expect(fs.writeFile).toHaveBeenCalled();
      expect(() => callback(err)).toThrowError(err);
    });

    test('When write file occurs successfully, sends a log message through console', function () {
      fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockData));
      let callback;
      jest.spyOn(fs, 'writeFile').mockImplementation((path, data, type, cb) => {
        callback = cb;
      });

      ProductModel.remove(1);

      const logSpy = jest.spyOn(global.console, 'log');
      callback();

      expect(logSpy).toHaveBeenCalledWith('write file ok');

      logSpy.mockRestore();
    });
  });

  describe('Add Or Update Product by id', function () {
    test('When editing a product that exists, should write in the file and return all products after edition', function () {
      fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockData));
      fs.writeFile = jest.fn();
      const mockUpdate = { id: 1, name: 'Novo Nome', brand: 'Nova marca' };
      const newProduct = ProductModel.addOrUpdate(1, 'Novo Nome', 'Nova marca');

      const expectedProductsAfterEdition = [
        mockUpdate,
        mockData[1],
        mockData[2],
      ];

      expect(fs.writeFile).toHaveBeenCalledWith(
        './data/products.json',
        JSON.stringify(expectedProductsAfterEdition),
        'utf8',
        expect.any(Function),
      );
      expect(newProduct[0].id).toStrictEqual(1);
      expect(newProduct[0].name).toStrictEqual(mockUpdate.name);
      expect(newProduct[0].brand).toStrictEqual(mockUpdate.brand);
    });

    test('When the product is not an edition, should add that product and save in the file and return all the products after insertion', function () {
      fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockData));
      fs.writeFile = jest.fn();

      const mockProduct = {
        id: 4,
        name: faker.commerce.productName(),
        brand: faker.commerce.productMaterial(),
      };
      const res = ProductModel.addOrUpdate(
        8,
        mockProduct.name,
        mockProduct.brand,
      );
      mockData.push(mockProduct);

      expect(fs.writeFile).toHaveBeenCalledWith(
        './data/products.json',
        JSON.stringify(mockData),
        'utf8',
        expect.any(Function),
      );
      expect(res.length).toBe(4);
      expect(res[3].id).toStrictEqual(4);
      expect(res[3].name).toStrictEqual(mockProduct.name);
      expect(res[3].brand).toStrictEqual(mockProduct.brand);
    });

    test('When something went wrong while writing the file, should throw an error', function () {
      fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockData));
      let callback;
      jest.spyOn(fs, 'writeFile').mockImplementation((path, data, type, cb) => {
        callback = cb;
      });
      const err = 'something went wrong';

      ProductModel.addOrUpdate(null);

      expect(fs.writeFile).toHaveBeenCalled();
      expect(() => callback(err)).toThrowError(err);
    });

    test('When write file occurs successfully, sends a log message through console', function () {
      fs.readFileSync = jest.fn().mockReturnValue(JSON.stringify(mockData));
      let callback;
      jest.spyOn(fs, 'writeFile').mockImplementation((path, data, type, cb) => {
        callback = cb;
      });

      ProductModel.addOrUpdate(1, 'Novo Nome', 'Nova marca');

      const logSpy = jest.spyOn(global.console, 'log');
      callback();

      expect(logSpy).toHaveBeenCalledWith('write file ok');

      logSpy.mockRestore();
    });
  });
});
