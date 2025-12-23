package com.prayspot.prayspot_backend.service;

import com.prayspot.prayspot_backend.dto.CreatePrayspotResponse;

import java.util.List;

public interface IPrayspotService {
    public List<CreatePrayspotResponse> getAllPrayspots();
}
