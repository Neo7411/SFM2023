package hu.unideb.bootstrap_app.controller;

import com.fasterxml.jackson.core.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import hu.unideb.bootstrap_app.Entity.User;
import hu.unideb.bootstrap_app.Repositories.UserRepository;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.json.JSONObject;
import org.json.JSONObject;
import org.json.JSONArray;


@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UserRepository userRepository;


    @PostMapping("/sign_up")
    public User signUpUser(@RequestBody User user){
        return userRepository.save(user);
    }

    @PostMapping("/login")
    public User loginUser(@RequestBody String user ){
        System.out.println(user);
        JsonObject convertedObject = new Gson().fromJson(user, JsonObject.class);
        String email = String.valueOf(convertedObject.get("email"));
        String password = String.valueOf(convertedObject.get("password"));
        List <User> users = new ArrayList<User>(userRepository.findAll());
        for(User u : users){
            String loginEmail = u.getEmail();
            String loginPassword = u.getPassword();
            loginEmail = "\""+loginEmail+"\"";
            loginPassword = "\""+loginPassword+"\"";
            if(loginEmail.equals(email) && loginPassword.equals(password)){
                return u;
            }
        }


        return new User(-1,"","","","","");
    }



    @GetMapping("/users")
    public List<User> listAllUsers(){
        return userRepository.findAll();
    }

    private String redirectMessage= null;

    @GetMapping("/users/new")
    String newUser(Model model){
        model.addAttribute("User", new User());
        model.addAttribute("pageTitle", "Register");
        redirectMessage = "Add successful";
        return "newUserForm";
    }
    @PostMapping("/users/save")
    public String saveUser(User user, RedirectAttributes rd){
        userRepository.save(user);
        rd.addFlashAttribute("message", redirectMessage);
        return "redirect:/items";
    }
    @GetMapping("/users/delete/{id}")
    public String deleteUser(@PathVariable Integer id, RedirectAttributes rd){
        if(userRepository.findById(id).isPresent()){
            userRepository.deleteById(id);
            rd.addFlashAttribute("message", "Delete successful!");
        }
        return "redirect:/users";
    }
    @GetMapping("/users/edit/{id}")
    public String editUser(@PathVariable Integer id,Model model,RedirectAttributes rd){
        Optional<User> userToEdit = userRepository.findById(id);
        if(userToEdit.isPresent()) {
            model.addAttribute("User", userToEdit.get());
            model.addAttribute("pageTitle", "Edit User with id: " + id);
            rd.addFlashAttribute("message", "Edit successful!");
            return "newUserForm";
        }
        return "redirect:/users";
    }

    @GetMapping("/users/login")
    public String showLoginPage() {
        return "login"; // Assuming "login.html" is your login page in the templates folder
    }

    @PostMapping("/users/login")
    public String loginUser(@RequestParam String email, @RequestParam String password, Model model, RedirectAttributes rd){
        // Retrieve the user by email from the UserRepository
        User user = userRepository.findByEmail(email);

        if (user != null && user.getPassword().equals(password)) {
            // Valid user credentials
            return "redirect:/items"; // Redirect to the dashboard or items page
        } else {
            // Invalid credentials or user not found
            model.addAttribute("error", "Invalid email or password");
            return "redirect:/index"; // Redirect back to the login page with an error message
        }
    }

}