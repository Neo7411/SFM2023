package hu.unideb.BootstrapApplication.Repository;

import hu.unideb.BootstrapApplication.Entity.OrderedItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderedItemsRepository extends JpaRepository<OrderedItems,Integer> {
}
