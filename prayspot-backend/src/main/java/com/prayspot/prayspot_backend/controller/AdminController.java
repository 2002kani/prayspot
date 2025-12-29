package com.prayspot.prayspot_backend.controller;

import com.prayspot.prayspot_backend.dto.PrayspotMinResponse;
import com.prayspot.prayspot_backend.dto.PrayspotRequest;
import com.prayspot.prayspot_backend.dto.PrayspotResponse;
import com.prayspot.prayspot_backend.entitiy.Prayspot;
import com.prayspot.prayspot_backend.service.IPrayspotService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/admin")
public class AdminController {

    // TODO: For future use would be better to create seperate Service for Admin
    private final IPrayspotService prayspotService;

    @GetMapping
    public ResponseEntity<List<PrayspotResponse>> getAllPrayspots() {
        List<PrayspotResponse> prayspots = prayspotService.getAllPrayspots();
        return ResponseEntity.ok(prayspots);
    }

    @PostMapping
    public ResponseEntity<PrayspotResponse> createPrayspot(@RequestBody PrayspotRequest request) {
        PrayspotResponse savedSpot = prayspotService.createPrayspot(request);
        return new ResponseEntity<>(savedSpot, HttpStatus.CREATED);
    }

    @DeleteMapping("/spot/{id}")
    public ResponseEntity<Void> deletePrayspot(@PathVariable Long id) {
        prayspotService.deletePrayspotById(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/spot/{id}/status")
    public ResponseEntity<PrayspotResponse> updatePrayspotStatus(@PathVariable Long id, @RequestBody PrayspotRequest request) {
        PrayspotResponse updatedSpot = prayspotService.updatePrayspotStatus(id, request.getIsVerified());
        return ResponseEntity.ok(updatedSpot);
    }

    @GetMapping("/dashboard")
    public ResponseEntity<List<PrayspotMinResponse>> getAllDashboardPrayspots() {
        List<PrayspotMinResponse> prayspots = prayspotService.getAllDashboardPrayspots();
        return ResponseEntity.ok(prayspots);
    }
}
