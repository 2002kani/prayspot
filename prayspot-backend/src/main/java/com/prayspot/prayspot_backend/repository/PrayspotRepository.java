package com.prayspot.prayspot_backend.repository;

import com.prayspot.prayspot_backend.entitiy.Prayspot;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PrayspotRepository extends JpaRepository<Prayspot, Long> {
    List<Prayspot> findByIsDeletedFalseOrderByCreatedAtDesc();
}
