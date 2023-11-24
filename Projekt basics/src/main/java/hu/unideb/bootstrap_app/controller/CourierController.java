package hu.unideb.bootstrap_app.controller;

import hu.unideb.bootstrap_app.Entity.Courier;
import hu.unideb.bootstrap_app.Repositories.CourierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class CourierController {
    @Autowired
    private CourierRepository courierRepository;

    @GetMapping("/couriers")
    public String listAllCouriers(Model model){
        List<Courier> couriers = courierRepository.findAll();
        model.addAttribute("couriersList", couriers);
        return "couriers";
    }
}
