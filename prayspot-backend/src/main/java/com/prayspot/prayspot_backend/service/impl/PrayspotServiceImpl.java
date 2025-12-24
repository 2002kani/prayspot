package com.prayspot.prayspot_backend.service.impl;

import com.prayspot.prayspot_backend.dto.PrayspotRequest;
import com.prayspot.prayspot_backend.dto.PrayspotResponse;
import com.prayspot.prayspot_backend.entitiy.Prayspot;
import com.prayspot.prayspot_backend.mapper.PrayspotMapper;
import com.prayspot.prayspot_backend.repository.PrayspotRepository;
import com.prayspot.prayspot_backend.service.IPrayspotService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PrayspotServiceImpl implements IPrayspotService {

    private final PrayspotRepository prayspotRepository;
    private final PrayspotMapper prayspotMapper;

    @Override
    public List<PrayspotResponse> getAllPrayspots() {
        List<Prayspot> spots = prayspotRepository.findByIsDeletedFalse();
        return prayspotMapper.mapToPrayspotResponseList(spots);
    }

    @Override
    public PrayspotResponse createPrayspot(PrayspotRequest request) {
        Prayspot prayspot = prayspotMapper.mapToEntity(request);
        Prayspot savedSpot = prayspotRepository.save(prayspot);
        return prayspotMapper.mapToPrayspotResponse(savedSpot);
    }
}
