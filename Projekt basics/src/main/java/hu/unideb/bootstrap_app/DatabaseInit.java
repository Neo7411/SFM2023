package hu.unideb.bootstrap_app;

import hu.unideb.bootstrap_app.Entity.Item;
import hu.unideb.bootstrap_app.Repositories.CourierRepository;
import hu.unideb.bootstrap_app.Repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import hu.unideb.bootstrap_app.Entity.Courier;

@Component
public class DatabaseInit {
    @Autowired
    ItemRepository itemRepository;
    @Autowired
    CourierRepository courierRepository;
    public void ItemDatabaseInit() {
        itemRepository.save(new Item(1,"gyros",  1000));
        itemRepository.save(new Item(2,"pizza",  3000));
        itemRepository.save(new Item(3,"lepcsanka",  400));
        itemRepository.save(new Item(4,"sushi",  500));
        itemRepository.save(new Item(5,"pancake",  500));
        itemRepository.save(new Item(6,"hamburger",  2500));
    }

    public void CourierDatabaseInit(){
        courierRepository.save(new Courier(1,"Béla", true));
        courierRepository.save(new Courier(2,"Józsi", true));
        courierRepository.save(new Courier(3,"Pista", true));
        courierRepository.save(new Courier(4,"Géza", true));
    }


}
