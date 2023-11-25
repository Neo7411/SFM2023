package hu.unideb.bootstrap_app_test;
import hu.unideb.bootstrap_app.Entity.Courier;
import hu.unideb.bootstrap_app.Entity.Item;
import hu.unideb.bootstrap_app.TestClasses.CourierDataReader;
import hu.unideb.bootstrap_app.TestClasses.ItemDataReader;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import java.time.Duration;

import org.junit.jupiter.api.Assertions;
import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.mockito.BDDMockito.given;

import static org.mockito.Mockito.mock;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(value = false)



public class BootstrapApplicationTest {
    @Mock
    private ItemDataReader testItem;
    private Item Itest1, Itest2;
    private CourierDataReader testCourier;
    private Courier Ctest1, Ctest2;
    @BeforeAll
    public static void setUpClass() {
    }

    @AfterAll
    public static void tearDownClass() {}


    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        ItemDataReader testItem = mock(ItemDataReader.class);
        given(testItem.getName()).willReturn("Kenyer", "Kenyer");
        given(testItem.getPrice()).willReturn(200, 200);
        given(testItem.getName()).willReturn("Tojas", "Tojas");
        given(testItem.getPrice()).willReturn(50, 50);
        given(testItem.getName()).willReturn("Kobanyai", "Kobanyai");
        given(testItem.getPrice()).willReturn(1, 1);
        given(testCourier.getName()).willReturn("Feri", "Feri");
        given(testCourier.getIsAvailable()).willReturn(true, true);
        given(testCourier.getName()).willReturn("Jozsi", "Jozsi");
        given(testCourier.getIsAvailable()).willReturn(true, true);
        given(testCourier.getName()).willReturn("Pista", "Pista");
        given(testCourier.getIsAvailable()).willReturn(true, true);

    }


    public void testItem() {
        ItemDataReader testItem = mock(ItemDataReader.class);
        Item Itest1 = new Item(1,"Kenyer", 1000);
        assertEquals(Itest1, Itest1);
        Item Itest2 = new Item(2,"Tej", 300);
        assertEquals(Itest2, Itest2);
        Item Itest3 = new Item(14,"Kőbányai", 1);
        assertEquals(Itest3, Itest3);
    }

    public void testCourier() {
        CourierDataReader testCourier = mock(CourierDataReader.class);
        Courier Ctest1 = new Courier(1,"Béla", true);
        assertEquals(Ctest1, Ctest1);
        Courier Ctest2 = new Courier(2,"Józsi", true);
        assertEquals(Ctest2, Ctest2);
        Courier Ctest3 = new Courier(3,"Pista", true);
        assertEquals(Ctest3, Ctest3);
    }

    void test_this() throws InterruptedException {
        Assertions.assertTimeout(Duration.ofMillis(5000), () -> Thread.sleep(1000));
    }


}









































