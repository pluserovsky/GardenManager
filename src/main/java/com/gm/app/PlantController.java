package com.gm.app;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
public class PlantController {
    private PlantRepository repository;

    public PlantController(PlantRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/cool-Plants")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Plant> coolPlants() {
        return repository.findAll().stream()
               // .filter(this::isIn)
                .collect(Collectors.toList());
    }

    private boolean isIn(Plant Plant) {
        return !Plant.getName().equals("Tuja") &&
                !Plant.getName().equals("Tulipan") &&
                !Plant.getName().equals("Brzoza");
    }
}
