package com.Foodora.Volt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class Order {

    private int OrderId;
    private int CustomerId;
    private int CourierId;
    private String FoodIdS;

    public Order(int orderId, int customerId, int courierId, String foodIdS) {
        OrderId = orderId;
        CustomerId = customerId;
        CourierId = courierId;
        FoodIdS = foodIdS;
    }
}
