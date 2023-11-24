package hu.unideb.bootstrap_app.Repositories;

import hu.unideb.bootstrap_app.Entity.Courier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourierRepository extends JpaRepository<Courier,Integer> {
}
