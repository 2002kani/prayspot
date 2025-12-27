package com.prayspot.prayspot_backend.mapper;

import com.prayspot.prayspot_backend.dto.PrayspotRequest;
import com.prayspot.prayspot_backend.dto.PrayspotResponse;
import com.prayspot.prayspot_backend.entitiy.Prayspot;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class PrayspotMapper {

    private final AddressMapper  addressMapper;

    public Prayspot mapToEntity(PrayspotRequest request) {
        if (request == null) return null;

        Prayspot p = new Prayspot();
        p.setName(request.getName());
        p.setDescription(request.getDescription());
        p.setLatitude(request.getLatitude());
        p.setLongitude(request.getLongitude());
        p.setAddress(addressMapper.mapToAddressEntity(request.getAddress()));
        p.setType(request.getType());

        p.setIsVerified(false);
        p.setIsDeleted(false);

        return p;
    }

    public PrayspotResponse mapToPrayspotResponse(Prayspot spot) {
        if (spot == null) return null;

        return PrayspotResponse.builder()
                .id(spot.getId())
                .name(spot.getName())
                .description(spot.getDescription())
                .latitude(spot.getLatitude())
                .longitude(spot.getLongitude())
                .address(addressMapper.mapToAddressResponse(spot.getAddress()))
                .type(spot.getType())
                .isVerified(spot.getIsVerified())
                .build();
    }

    public List<PrayspotResponse> mapToPrayspotResponseList(List<Prayspot> spot) {
        if (spot == null) return null;

        return spot.stream().map(s -> PrayspotResponse.builder()
                .id(s.getId())
                .name(s.getName())
                .description(s.getDescription())
                .latitude(s.getLatitude())
                .longitude(s.getLongitude())
                .address(addressMapper.mapToAddressResponse(s.getAddress()))
                .type(s.getType())
                .isVerified(s.getIsVerified())
                .build()).collect(Collectors.toList());
    }
}
