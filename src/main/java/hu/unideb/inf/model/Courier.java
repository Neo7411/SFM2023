package hu.unideb.inf.model;

import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;
import java.time.LocalDate;

public class Courier {
    private StringProperty name = new SimpleStringProperty();
    private StringProperty address = new SimpleStringProperty();
    private StringProperty phoneNumber = new SimpleStringProperty();
    private LocalDate dateOfBirth;

    public Courier(String name, String address, String phoneNumber, LocalDate dateOfBirth) {
        this.name.setValue(name);
        this.address.setValue(address);
        this.phoneNumber.setValue(phoneNumber);
        this.dateOfBirth = dateOfBirth;
    }

    @Override
    public String toString() {
        return "Courier{" +
                "name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                '}';
    }

    public String getName() {
        return name.getValue();
    }

    public void setName(String name) {
        this.name.setValue(name);
    }

    public StringProperty nameProperty(){
        return name;
    }

    public String getAddress() {
        return address.getValue();
    }

    public void setAddress(String address) {
        this.address.setValue(address);
    }

    public StringProperty addressProperty(){
        return address;
    }

    public String getPhoneNumber() {
        return phoneNumber.getValue();
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber.setValue(phoneNumber);
    }

    public StringProperty phoneNumberProperty(){
        return phoneNumber;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
}