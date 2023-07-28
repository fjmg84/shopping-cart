export interface ProductState {
    id: number;
    image: undefined | string;
    name: string;
    price: number;
    inOrder: boolean
}

export interface ProductInOrder extends ProductState {
    pay?: number;
    count?: number;
}

interface ListProductState {
    productSelected: ProductInOrder;
    productList: ProductState[];
    productsInOrder: ProductInOrder[];
}