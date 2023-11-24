package hu.unideb.BootstrapApplication.Repository;

import hu.unideb.BootstrapApplication.Entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person,Integer> {
}