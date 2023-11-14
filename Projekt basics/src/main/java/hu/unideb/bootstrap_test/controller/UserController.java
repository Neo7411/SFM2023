package hu.unideb.bootstrap_test.controller;

import hu.unideb.bootstrap_test.model.User;
import hu.unideb.bootstrap_test.model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Optional;

@Controller
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/users")
    public String listAllUsers(Model model){
        List<User> users = userRepository.findAll();
        model.addAttribute("usersList", users);
        return "users";
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
        return "redirect:/users";
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
}
