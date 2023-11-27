package hu.unideb.bootstrap_app.controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import hu.unideb.bootstrap_app.Entity.Courier;
import hu.unideb.bootstrap_app.Repositories.CourierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.swing.*;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class CourierController {
    @Autowired
    private CourierRepository courierRepository;

    @GetMapping("/couriers")
    public List<Courier> listAllCouriers() {
        return courierRepository.findAll();
    }
}
