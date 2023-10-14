package com.Foodora.Volt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor


public class Customer {
    private int CustomerId;
    private String UserName;
    private int CurrentOrderId;
    private String PhoneNumber;
    private String Address;
    private double token;
    private boolean VoltooraUltra;

    public Customer(int customerId, String userName, int currentOrderId, String phoneNumber, String address, float token, boolean voltooraUltra) {
        CustomerId = customerId;
        UserName = userName;
        CurrentOrderId = currentOrderId;
        PhoneNumber = phoneNumber;
        Address = address;
        this.token = token;
        VoltooraUltra = voltooraUltra;
    }
}
