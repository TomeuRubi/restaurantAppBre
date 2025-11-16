export declare class OrderItemDto {
    menuItemId: string;
    quantity: number;
}
export declare class CreateOrderDto {
    tableId: string;
    items: OrderItemDto[];
}
