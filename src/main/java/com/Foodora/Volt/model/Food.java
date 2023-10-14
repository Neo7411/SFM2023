package com.Foodora.Volt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor


public class Food {

    private int FoodId;
    private String name;
    private double Price;
    private double Weight;
    private boolean IsFregile;
    private boolean RequiresFreezer;

    public Food(int foodId, String name, double price, double weight, boolean isFregile, boolean requiresFreezer) {
        FoodId = foodId;
        this.name = name;
        Price = price;
        Weight = weight;
        IsFregile = isFregile;
        RequiresFreezer = requiresFreezer;
    }
}
