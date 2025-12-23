package com.prayspot.prayspot_backend.dto;

import com.prayspot.prayspot_backend.enums.SpotType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreatePrayspotResponse {
    private String name;
    private String description;
    private BigDecimal latitude;
    private BigDecimal longitude;
    private String address;
    private SpotType type;
}
