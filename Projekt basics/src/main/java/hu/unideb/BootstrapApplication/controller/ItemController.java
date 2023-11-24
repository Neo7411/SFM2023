package hu.unideb.BootstrapApplication.controller;

import hu.unideb.BootstrapApplication.Entity.Item;
import hu.unideb.BootstrapApplication.Repository.ItemRepository;
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
public class ItemController {
    @Autowired
    ItemRepository itemRepository;

    @GetMapping("/items")
    public String listAllitem(Model model){
        List<Item> items = itemRepository.findAll();
        model.addAttribute("itemsList", items);
        return "items";
    }

    private String redirectMessage= null;

    @GetMapping("/items/new")
    String newitem(Model model){
        model.addAttribute("item", new Item());
        model.addAttribute("pageTitle", "Register");
        redirectMessage = "Add successful";
        return "newItemForm";
    }
    @PostMapping("/items/save")
    public String saveitem(Item item, RedirectAttributes rd){
        itemRepository.save(item);
        rd.addFlashAttribute("message", redirectMessage);
        return "redirect:/items";
    }

    @GetMapping("/items/delete/{id}")
    public String deleteitem(@PathVariable Integer id, RedirectAttributes rd){
        if(itemRepository.findById(id).isPresent()){
            itemRepository.deleteById(id);
            rd.addFlashAttribute("message", "Delete successful!");
        }
        return "redirect:/items";
    }
    @GetMapping("/items/edit/{id}")
    public String edititem(@PathVariable Integer id,Model model,RedirectAttributes rd){
        Optional<Item> itemToEdit = itemRepository.findById(id);
        if(itemToEdit.isPresent()) {
            model.addAttribute("item", itemToEdit.get());
            model.addAttribute("pageTitle", "Edit item with id: " + id);
            rd.addFlashAttribute("message", "Edit successful!");
            return "newItemForm";
        }
        return "redirect:/items";
    }
}