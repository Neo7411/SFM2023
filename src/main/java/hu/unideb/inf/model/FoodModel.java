package hu.unideb.inf.model;

import java.time.LocalDate;

public class FoodModel {
    private Food food;

    public FoodModel() {
        this.food = new Food("Sample Food",
                9.99,
                LocalDate.of(2023, 12, 31));
    }

    public Food getFood() {
        return food;
    }
}
