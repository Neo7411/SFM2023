package hu.unideb.bootstrap_test.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderedItemsRepository extends JpaRepository<OrderedItems,Integer> {
}
