import { ProductCart, ProductState } from "../type/products";

type Props = {
    array1: ProductState[],
    array2: ProductCart[]
}

export const createListOutDuplicate = ({
    array1,
    array2,
}: Props) => {
    let temp: ProductCart[] = [];
    array1.forEach((value1) => {
        let isExist = false;
        array2.forEach((value2) => {
            if (value1.id === value2.id) {
                temp.push(value2);
                isExist = true;
            }
        });
        if (!isExist) {

            temp.push({ ...value1, count: 0 });
        }
    });
    return temp;
};

export const totalImportToPay = (arr: ProductCart[] = []) => {
    let total = 0;
    arr.forEach((product) => {
        const { price, count } = product;
        if (price && count) total = price * count + total;
    });

    return total;
};


export const createListCategories = (arrProducts: ProductState[]) => {
    let listCategories: Set<string> = new Set();

    if (arrProducts.length === 0) return [];

    for (let { category } of arrProducts) listCategories.add(category);

    let categories: string[] = [];
    for (const item of listCategories) {
        categories.push(item);
    }

    return categories;
};


export const orderArray = ({ arr = [], field = "", order = "<" }) => {
    if (order === ">")
        return arr.sort((a, b) =>
            field ? (a[field] > b[field] ? -1 : 1) : a > b ? -1 : 1
        );
    else
        return arr.sort((a, b) =>
            field ? (a[field] < b[field] ? -1 : 1) : a < b ? -1 : 1
        );
};