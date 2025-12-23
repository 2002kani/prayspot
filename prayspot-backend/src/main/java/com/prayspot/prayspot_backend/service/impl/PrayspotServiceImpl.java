package com.prayspot.prayspot_backend.service.impl;

import com.prayspot.prayspot_backend.dto.CreatePrayspotResponse;
import com.prayspot.prayspot_backend.entitiy.Prayspot;
import com.prayspot.prayspot_backend.repository.PrayspotRepository;
import com.prayspot.prayspot_backend.service.IPrayspotService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Service
public class PrayspotServiceImpl implements IPrayspotService {

    private final PrayspotRepository prayspotRepository;

    @Override
    public List<CreatePrayspotResponse> getAllPrayspots() {
        List<Prayspot> prayspots = prayspotRepository.findAll();
        // TODO: Baue es zu ein dto um und schick es an controller
    }
}
