package hu.unideb.bootstrap_app.controller;

import hu.unideb.bootstrap_app.Entity.User;
import hu.unideb.bootstrap_app.Entity.Orders;
import hu.unideb.bootstrap_app.Repositories.OrderedItemsRepository;
import hu.unideb.bootstrap_app.Repositories.OrdersRepository;
import hu.unideb.bootstrap_app.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class OrderController {

    @Autowired
    private OrdersRepository OrdersRepository;

    @PostMapping("/orders/send")
    public Orders receiveOrder(@RequestBody Orders order){
        System.out.println(order);
        System.out.println(order.getClass().getName());
        return OrdersRepository.save(order);
    }

}
