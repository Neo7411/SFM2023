package hu.unideb.inf.model;

import java.time.LocalDate;

public class CustomerModel {
    private Customer customer;

    public CustomerModel() {
        this.customer = new Customer("John Doe",
                100,
                LocalDate.of(1990, 5, 15),
                "johndoe@example.com",
                "+1234567890");
    }

    public Customer getCustomer() {
        return customer;
    }
}

