package hu.unideb.bootstrap_test.controller;

import hu.unideb.bootstrap_test.model.Person;
import hu.unideb.bootstrap_test.model.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;
@Controller
public class PersonController {

    @Autowired
    PersonRepository personRepository;
    @GetMapping("/persons")    String listAllPersons(Model model){
        List<Person> People = personRepository.findAll();
        model.addAttribute("personsList", People);
        return "persons";
    }
}
