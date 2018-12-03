package com.gm.app.repository;

import com.gm.app.model.Garden;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface GardenRepository extends JpaRepository<Garden, String> {
    List<Garden> findByUsername(String username, Pageable pageable);

    Optional<Garden> findById(Long gardenId);

    boolean existsById(Long gardenId);

}

