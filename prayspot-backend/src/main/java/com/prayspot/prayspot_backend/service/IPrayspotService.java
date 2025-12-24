package com.prayspot.prayspot_backend.service;

import com.prayspot.prayspot_backend.dto.PrayspotResponse;

import java.util.List;

public interface IPrayspotService {
    public List<PrayspotResponse> getAllPrayspots();
}
