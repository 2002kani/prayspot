package com.prayspot.prayspot_backend.dto;

import com.prayspot.prayspot_backend.entitiy.Address;
import lombok.*;

import java.time.Instant;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PrayspotMinResponse {
    private Long id;
    private String name;
    private String city;
    private Boolean isVerified;
    private Instant createdAt;
}
