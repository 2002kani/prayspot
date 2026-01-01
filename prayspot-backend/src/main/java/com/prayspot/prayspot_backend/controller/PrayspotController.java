package com.prayspot.prayspot_backend.controller;

import com.prayspot.prayspot_backend.dto.PrayspotResponse;
import com.prayspot.prayspot_backend.repository.PrayspotRepository;
import com.prayspot.prayspot_backend.service.IPrayspotService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("api/prayspots")
public class PrayspotController {
    private final IPrayspotService prayspotService;

    @GetMapping
    public ResponseEntity<List<PrayspotResponse>> getAllPrayspots() {
        List<PrayspotResponse> spots = prayspotService.getAllPrayspots();
        return ResponseEntity.ok(spots);
    }
}
