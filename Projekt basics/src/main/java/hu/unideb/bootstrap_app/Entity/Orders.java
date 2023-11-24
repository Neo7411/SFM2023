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
@Table(name = "orders")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Orders {
    @Id
    @GeneratedValue
    private Integer id; //Order ID
    private Integer userId;
    private Integer CourierId;
    private String orderStatus;
    private String deliveryAddress;
    private Integer orderTimeStamp;
    private Integer totalPrice;
}
