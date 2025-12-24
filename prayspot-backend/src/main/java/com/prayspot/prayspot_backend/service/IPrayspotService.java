package com.prayspot.prayspot_backend.service;

import com.prayspot.prayspot_backend.dto.PrayspotRequest;
import com.prayspot.prayspot_backend.dto.PrayspotResponse;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface IPrayspotService {
    public List<PrayspotResponse> getAllPrayspots();
    public PrayspotResponse createPrayspot(@RequestBody PrayspotRequest request);
}
