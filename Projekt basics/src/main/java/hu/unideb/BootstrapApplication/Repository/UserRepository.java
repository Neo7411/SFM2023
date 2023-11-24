package hu.unideb.BootstrapApplication.Repository;

import hu.unideb.BootstrapApplication.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}

