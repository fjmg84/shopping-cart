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
        if (price) total = price * count + total;
    });

    return total;
};