export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
    description: string;
    category?: {
        image: string
        name: string
    }
    creationAt?: string
}