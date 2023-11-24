package hu.unideb.bootstrap_app.Repositories;

import hu.unideb.bootstrap_app.Entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item,Integer> {
}