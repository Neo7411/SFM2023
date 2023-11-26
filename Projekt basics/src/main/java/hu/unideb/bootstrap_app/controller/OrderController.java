package hu.unideb.bootstrap_app.controller;

import hu.unideb.bootstrap_app.Entity.User;
import hu.unideb.bootstrap_app.Repositories.OrderedItemsRepository;
import hu.unideb.bootstrap_app.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import hu.unideb.bootstrap_app.Entity.OrderedItems;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Optional;

@Controller
public class OrderController {

    @Autowired

    private OrderedItemsRepository orderedItemsRepository;

    @GetMapping("/orders")
    public String listAllOrders(Model model){
        List<OrderedItems> orders = orderedItemsRepository.findAll();
        model.addAttribute("ordersList", orders);
        return "orders";
    }

}
