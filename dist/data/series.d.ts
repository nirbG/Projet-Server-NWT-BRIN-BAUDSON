export declare const SERIES: ({
    id: string;
    name: string;
    comics: {
        isbn: string;
        photo: string;
        title: string;
        mainHeros: string;
        otherHeros: string;
        price: number;
        wish: boolean;
        inBD: boolean;
    }[];
    size: number;
} | {
    id: string;
    name: string;
    comics: {};
    size: number;
})[];
