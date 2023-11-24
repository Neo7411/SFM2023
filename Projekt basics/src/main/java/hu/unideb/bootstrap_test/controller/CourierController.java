package hu.unideb.bootstrap_test.controller;

import hu.unideb.bootstrap_test.model.Courier;
import hu.unideb.bootstrap_test.model.CourierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Optional;

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
