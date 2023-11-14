package hu.unideb.bootstrap_test.controller;

import hu.unideb.bootstrap_test.model.Person;
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
