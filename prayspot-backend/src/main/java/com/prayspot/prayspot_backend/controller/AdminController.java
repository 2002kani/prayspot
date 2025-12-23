package com.prayspot.prayspot_backend.controller;

import com.prayspot.prayspot_backend.dto.CreatePrayspotResponse;
import com.prayspot.prayspot_backend.service.IPrayspotService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/admin")
public class AdminController {

    private final IPrayspotService prayspotService;

    @GetMapping
    public ResponseEntity<List<CreatePrayspotResponse>> getAllPrayspots() {
        List<CreatePrayspotResponse> prayspots = prayspotService.getAllPrayspots();
        return ResponseEntity.ok(prayspots);
    }
}
