package com.prayspot.prayspot_backend.repository;

import com.prayspot.prayspot_backend.entitiy.Prayspot;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrayspotRepository extends JpaRepository<Prayspot, Long> {
    // TODO: Some logic to only retrieve non deleted Spots
}
