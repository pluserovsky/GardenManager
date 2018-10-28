package com.gm.app.Plant;

import com.gm.app.Garden.GardenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;

@RestController
public class PlantController {
    @Autowired
    private PlantRepository plantRepository;

    @Autowired
    private GardenRepository gardenRepository;

    public PlantController(PlantRepository plantRepository) {
        this.plantRepository = plantRepository;
    }

    @GetMapping("/gardens/{gardenId}/serve-plants")
    @CrossOrigin(origins = "http://localhost:4200")
    public Collection<Plant> getAllPlantsByGardenId(@PathVariable (value = "gardenId") Long gardenId, Pageable pageable) {
        return plantRepository.findByGardenId(gardenId, pageable);
    }
    @PostMapping("/gardens/{gardenId}/add-plant")
    public Plant createPlant(@PathVariable (value = "gardenId") Long gardenId,
                                 @Valid @RequestBody Plant plant) {
        return gardenRepository.findById(gardenId).map(garden -> {
            plant.setGarden(garden);
            return plantRepository.save(plant);
        }).orElseThrow(() -> new ResourceNotFoundException("GardenId " + gardenId + " not found"));
    }

    @PutMapping("/gardens/{gardenId}/plants/{plantId}")
    public Plant updatePlant(@PathVariable (value = "gardenId") Long gardenId,
                                 @PathVariable (value = "plantId") Long plantId,
                                 @Valid @RequestBody Plant plantRequest) {
        if(!gardenRepository.existsById(gardenId)) {
            throw new ResourceNotFoundException("GardenId " + gardenId + " not found");
        }

        return plantRepository.findById(plantId).map(plant -> {
            plant.setName(plantRequest.getName());
            return plantRepository.save(plant);
        }).orElseThrow(() -> new ResourceNotFoundException("PlantId " + plantId + "not found"));
    }

    @DeleteMapping("/gardens/{gardenId}/plants/{plantId}")
    public ResponseEntity<?> deletePlant(@PathVariable (value = "gardenId") Long gardenId,
                                         @PathVariable (value = "plantId") Long plantId) {
        if(!gardenRepository.existsById(gardenId)) {
            throw new ResourceNotFoundException("gardenId " + gardenId + " not found");
        }

        return plantRepository.findById(plantId).map(plant -> {
            plantRepository.delete(plant);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("PlantId " + plantId + " not found"));
    }
}
