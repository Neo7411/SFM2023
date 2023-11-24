package hu.unideb.bootstrap_app.Repositories;

import hu.unideb.bootstrap_app.Entity.OrderedItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderedItemsRepository extends JpaRepository<OrderedItems,Integer> {
}
