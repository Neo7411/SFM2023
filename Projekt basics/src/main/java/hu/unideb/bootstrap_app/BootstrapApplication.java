package hu.unideb.bootstrap_app;
import hu.unideb.bootstrap_app.Entity.Courier;
import hu.unideb.bootstrap_app.Repositories.CourierRepository;
import jakarta.persistence.Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import hu.unideb.bootstrap_app.DatabaseInit;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Component;

@SpringBootApplication
@EntityScan(basePackages = {"hu.unideb.bootstrap_app.Entity"})
@EnableJpaRepositories(basePackages = {"hu.unideb.bootstrap_app.Repositories"})
public class BootstrapApplication implements CommandLineRunner {

    public static void main(String[] args) {

        SpringApplication.run(BootstrapApplication.class, args);

    }
    @Autowired
    DatabaseInit databaseInit;
    @Override
    public void run(String... args) throws Exception {
        databaseInit.CourierDatabaseInit();
        databaseInit.ItemDatabaseInit();
    }
}








