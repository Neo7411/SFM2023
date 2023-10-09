package hu.unideb.inf.model;

import java.time.LocalDate;

public class CourierModel {
    private Courier courier;

    public CourierModel() {
        this.courier = new Courier("Courier Name",
                "123 Main Street",
                "+9876543210",
                LocalDate.of(1985, 7, 20));
    }

    public Courier getCourier() {
        return courier;
    }
}
