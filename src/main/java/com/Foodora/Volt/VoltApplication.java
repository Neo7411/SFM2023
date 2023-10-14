package com.Foodora.Volt;

import com.Foodora.Volt.model.Courier;
import com.Foodora.Volt.model.Customer;
import com.Foodora.Volt.model.Food;
import com.Foodora.Volt.model.Order;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VoltApplication {






	public static void main(String[] args) {

		SpringApplication.run(VoltApplication.class, args);
		Food d1= new Food(1,"Roman Kenyer",750.0,4.5,false,false);
		Food d2= new Food(2,"Mirelit Pizza",150.0,1.0,true,true);
		Courier cr7= new Courier(1,true,"KicsiKacsa",321,"0683424423","foot",1.0);
		Customer c1= new Customer(3,"chiwawaankle",5,"06423435324", "Virag utca 2",200,true );
		Order od1= new Order(1,2,3,"312413231");
		System.out.println(d1);
		System.out.println(d2);
	}
}
