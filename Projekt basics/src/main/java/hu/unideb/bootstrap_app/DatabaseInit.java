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
        itemRepository.save(new Item(1,"Kenyér",  1000));
        itemRepository.save(new Item(2,"Tej",  300));
        itemRepository.save(new Item(3,"Sajt",  2000));
        itemRepository.save(new Item(4,"Kifli",  100));
        itemRepository.save(new Item(5,"Zsemle",  100));
        itemRepository.save(new Item(6,"Tojás",  80));
        itemRepository.save(new Item(7,"Kakaó",  500));
        itemRepository.save(new Item(8,"Kávé",  1000));
        itemRepository.save(new Item(9,"Csoki",  200));
        itemRepository.save(new Item(10,"Pepsi",  300));
        itemRepository.save(new Item(11,"Coca-Cola",  300));
        itemRepository.save(new Item(12,"Sprite",  300));
        itemRepository.save(new Item(13,"Fanta",  300));
        itemRepository.save(new Item(14,"Kőbányai",  1));
        itemRepository.save(new Item(15,"Soproni",  0));
    }

    public void CourierDatabaseInit(){
        courierRepository.save(new Courier(1,"Béla", true));
        courierRepository.save(new Courier(2,"Józsi", true));
        courierRepository.save(new Courier(3,"Pista", true));
        courierRepository.save(new Courier(4,"Géza", true));
        courierRepository.save(new Courier(5,"Laci", true));
        courierRepository.save(new Courier(6,"Jani", true));
        courierRepository.save(new Courier(7,"Gábor", true));
        courierRepository.save(new Courier(8,"Bence", true));
        courierRepository.save(new Courier(9,"Ádám", true));
        courierRepository.save(new Courier(10,"Zsolt", true));
        courierRepository.save(new Courier(11,"Zoli", true));
        courierRepository.save(new Courier(12,"Tamás", true));
        courierRepository.save(new Courier(13,"Máté", true));
        courierRepository.save(new Courier(14,"Márk", true));
        courierRepository.save(new Courier(15,"Péter", true));
    }


}
