package com.Foodora.Volt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

public class Courier {
    private int CourierId;
    private boolean Availability;
    private String UserName;
    private int CurrentOrderId;
    private String PhoneNumber;
    private String Vehicle;
    private double Rate;

    public Courier(int courierId, boolean availability, String userName, int currentOrderId, String phoneNumber, String vehicle, double rate) {
        CourierId = courierId;
        Availability = availability;
        UserName = userName;
        CurrentOrderId = currentOrderId;
        PhoneNumber = phoneNumber;
        Vehicle = vehicle;
        Rate = rate;
    }
}
