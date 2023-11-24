package hu.unideb.BootstrapApplication;

import hu.unideb.BootstrapApplication.Entity.Courier;
import hu.unideb.BootstrapApplication.Entity.Item;
import hu.unideb.BootstrapApplication.Entity.User;
import hu.unideb.BootstrapApplication.Repository.*;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)
class BootstrapApplicationTests {
    @Autowired
    UserRepository UserRepository;


    @Test
    void testUserAdd() {
        User expected =  User.builder()
                .firstName("User")
                .lastName("Bela")
                .email("asd@gmail")
                .password("asdasd")
                .address("Vorosmarty ut mihaly 6")
                .build();
        User actual = UserRepository.save(
                expected
        );
        Assertions.assertNotNull(actual);
        Assertions.assertEquals(expected,actual);
    }

    @Autowired
    CourierRepository CourierRepository;

    @Test
    void testCourierAdd(){
        CourierRepository.save(
                Courier.builder()
                        .name("MC Isti")
                        .build()
        );
    }

    @Autowired
    ItemRepository ItemRepository;

    @Test
    void testItemRepository(){
        ItemRepository.save(
                Item.builder()
                        .name("Sajt")
                        .price(1000)
                        .build()
        );
    }
}
