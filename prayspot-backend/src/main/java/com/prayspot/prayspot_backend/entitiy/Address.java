package com.prayspot.prayspot_backend.entitiy;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "address")
public class Address {
    private String street;

    @Column(name = "house_number")
    private String houseNumber;

    private String city;

    @Column(name = "postal_code", length = 10)
    private String postalCode;
}
