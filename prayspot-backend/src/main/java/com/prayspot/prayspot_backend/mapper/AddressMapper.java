package com.prayspot.prayspot_backend.mapper;

import com.prayspot.prayspot_backend.dto.AddressRequest;
import com.prayspot.prayspot_backend.dto.AddressResponse;
import com.prayspot.prayspot_backend.entitiy.Address;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

@Component
public class AddressMapper {

    public Address mapToAddressEntity(AddressRequest request) {
        if(request == null) {
            return null;
        }

        Address a = new Address();
        a.setStreet(request.getStreet());
        a.setHouseNumber(request.getHouseNumber());
        a.setCity(request.getCity());
        a.setPostalCode(request.getPostalCode());

        return a;
    }

    public AddressResponse mapToAddressResponse(Address address) {
        if(address == null) { return null; }

        return AddressResponse.builder()
                .street(address.getStreet())
                .houseNumber(address.getHouseNumber())
                .city(address.getCity())
                .postalCode(address.getPostalCode())
                .build();
    }
}
