package com.gm.app.Plant;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Collection;
import java.util.List;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
interface PlantRepository extends JpaRepository<Plant, Long>{
    List<Plant> findByGardenId(Long gardenId, Pageable pageable);
}
