package com.gm.app.repository;

import com.gm.app.model.Plant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface PlantRepository extends JpaRepository<Plant, Long> {
    List<Plant> findByGardenId(Long gardenId);
}
