package hu.unideb.BootstrapApplication.Repository;

import hu.unideb.BootstrapApplication.Entity.Courier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourierRepository extends JpaRepository<Courier,Integer> {
}
