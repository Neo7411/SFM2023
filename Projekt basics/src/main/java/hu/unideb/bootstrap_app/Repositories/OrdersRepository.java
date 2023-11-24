package hu.unideb.bootstrap_app.Repositories;

import hu.unideb.bootstrap_app.Entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrdersRepository extends JpaRepository<Orders,Integer> {
}
