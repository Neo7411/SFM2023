package hu.unideb.bootstrap_app.Repositories;

import hu.unideb.bootstrap_app.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByEmail(String email);
}

