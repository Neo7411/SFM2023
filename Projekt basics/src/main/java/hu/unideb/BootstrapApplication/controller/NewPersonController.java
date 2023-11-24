package hu.unideb.BootstrapApplication.controller;

import hu.unideb.BootstrapApplication.Entity.Person;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NewPersonController {
    @GetMapping("/persons/new")
    String newPerson(Model model){
        model.addAttribute("newPerson", new Person());
        return "newPersonForm";
    }
}
