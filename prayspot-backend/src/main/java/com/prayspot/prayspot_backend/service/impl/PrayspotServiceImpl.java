package com.prayspot.prayspot_backend.service.impl;

import com.prayspot.prayspot_backend.dto.PrayspotMinResponse;
import com.prayspot.prayspot_backend.dto.PrayspotRequest;
import com.prayspot.prayspot_backend.dto.PrayspotResponse;
import com.prayspot.prayspot_backend.entitiy.Prayspot;
import com.prayspot.prayspot_backend.exception.SpotNotFoundException;
import com.prayspot.prayspot_backend.mapper.AddressMapper;
import com.prayspot.prayspot_backend.mapper.PrayspotMapper;
import com.prayspot.prayspot_backend.repository.PrayspotRepository;
import com.prayspot.prayspot_backend.service.IPrayspotService;
import lombok.AllArgsConstructor;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@AllArgsConstructor
@Service
public class PrayspotServiceImpl implements IPrayspotService {

    private final PrayspotRepository prayspotRepository;
    private final PrayspotMapper prayspotMapper;
    private final AddressMapper addressMapper;

    @Override
    public List<PrayspotResponse> getAllPrayspots() {
        List<Prayspot> spots = prayspotRepository.findByIsDeletedFalseOrderByCreatedAtDesc();
        return prayspotMapper.mapToPrayspotResponseList(spots);
    }

    @Override
    public PrayspotResponse createPrayspot(PrayspotRequest request) {
        Prayspot prayspot = prayspotMapper.mapToEntity(request);
        Prayspot savedSpot = prayspotRepository.save(prayspot);
        return prayspotMapper.mapToPrayspotResponse(savedSpot);
    }

    @Override
    public PrayspotResponse updatePrayspotStatus(Long id, boolean isVerified) {
        Prayspot spot = prayspotRepository.findById(id)
                .orElseThrow(() -> new SpotNotFoundException("Prayspot with id: " + id + " not found"));

        spot.setIsVerified(isVerified);
        prayspotRepository.save(spot);

        return prayspotMapper.mapToPrayspotResponse(spot);
    }

    @Override
    public void deletePrayspotById(Long id) {
        if(!prayspotRepository.existsById(id)){
            throw new SpotNotFoundException("Prayspot with id: " + id + " not found");
        }
        prayspotRepository.deleteById(id);
    }

    @Override
    public List<PrayspotMinResponse> getAllDashboardPrayspots() {
        List<Prayspot> spots = prayspotRepository.findByIsDeletedFalseOrderByCreatedAtDesc();
        return spots.stream().map(p -> PrayspotMinResponse.builder()
                .id(p.getId())
                .name(p.getName())
                .city(p.getAddress() != null ? p.getAddress().getCity() : null)
                .isVerified(p.getIsVerified())
                .createdAt(p.getCreatedAt())
                .build()).toList();
    }
}
