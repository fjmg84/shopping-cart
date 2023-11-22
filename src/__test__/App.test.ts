import { createListCategories, createListOutDuplicate, totalImportToPay } from "../services/funtion";
import { ProductCart, ProductState } from "../type/products";
import dataMock from '../data/data.json'

const arrProducts1: ProductState[] = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    description: "Description 1",
    category: "Category 1",
    image: "image1.jpg",
    rating: {
      rate: 4.5,
      count: 10,
    },
  },
];
const arrProducts2: ProductCart[] = [
  {
    id: 1,
    title: "Product 1",
    price: 10,
    description: "Description 1",
    category: "Category 1",
    image: "image1.jpg",
    rating: {
      rate: 4.5,
      count: 10,
    },
    count: 1,
  },
];

describe("test functions", () => {
  test("should return an array of ProductCart objects with count property added when given two arrays of ProductState and ProductCart objects with some common ids", () => {
    const result = createListOutDuplicate({
      array1: arrProducts1,
      array2: arrProducts2,
    });

    expect(result).toEqual([
      {
        id: 1,
        title: "Product 1",
        price: 10,
        description: "Description 1",
        category: "Category 1",
        image: "image1.jpg",
        rating: {
          rate: 4.5,
          count: 10,
        },
        count: 1,
      },
    ]);
  });

  test("should return import to pay", () => {
    const newListProducts = [...arrProducts2, {...arrProducts2[0], id: 4, count: 20, price: 2}]
    //console.log(newListProducts)

    const result = totalImportToPay(newListProducts)
    //console.log(result)
    expect(result).toBe(50)
  })

  test("should return list categories", () => {
    const result = createListCategories(dataMock)

    expect(result).toEqual([ "men's clothing", 'jewelery', 'electronics', "women's clothing"])
  })
});
