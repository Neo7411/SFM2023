package hu.unideb.bootstrap_app.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "ordereditems")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderedItems {
    @Id
    @GeneratedValue
    private Integer id;
    private Integer oderId;
    private Integer itemId;
    private Integer quantity;
}
