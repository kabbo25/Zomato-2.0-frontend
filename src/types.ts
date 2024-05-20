export type User= {
    _id: string;
    email: string;
    name: string;
    AddressLine1: string;
    City: string;
    Country: string;
};
export type MenuItem = {
    _id: string;
    Name: string;
    Price: number;
};
export type Restaurant = {
    _id: string;
    User: string;
    RestaurantName: string;
    City: string;
    Country: string;
    DeliveryPrice: number;
    DeliveryTime: number;
    Cuisine: string[];
    MenuItems: MenuItem[];
    ImageUrl: string;
    LastUpdated: string;
}