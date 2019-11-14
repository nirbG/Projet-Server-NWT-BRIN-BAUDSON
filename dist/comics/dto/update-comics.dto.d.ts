export interface UpdateComicsDto {
    isbn?: string;
    photo?: string;
    title?: string;
    mainHeros?: [];
    otherHeros?: [];
    price?: number;
    wish?: boolean;
    inBD?: boolean;
}
