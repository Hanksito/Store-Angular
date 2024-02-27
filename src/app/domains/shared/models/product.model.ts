export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    description: string;
    category?: Category
    creationAt?: string
}

export interface Category {
    id: number;
    image: string;
    name: string;

}