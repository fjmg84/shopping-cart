export interface ProductState {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface ProductCart extends ProductState {
    count?: number;
}

export interface ListProductState {
    cart: ProductCart[];
}