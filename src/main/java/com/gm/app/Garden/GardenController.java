package com.gm.app.Garden;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GardenController {
    @Autowired
    private GardenRepository gardenRepository;

    public GardenController(GardenRepository gardenRepository) {
        this.gardenRepository = gardenRepository;
    }

/*    @GetMapping("/serve-gardens")
    @CrossOrigin(origins = "http://localhost:4200")
    public Page<Garden> getAllGardens(Pageable pageable) {
        return gardenRepository.findAll(pageable);
    }*/
    @GetMapping("/serve-gardens")
    public Collection<Garden> getAllGardens() {
        return new ArrayList<>(gardenRepository.findAll());
    }
    @GetMapping("/serve-gardens/{gardenId}")
    public Garden getGardenById(@PathVariable Long gardenId) {
        return gardenRepository.findById(gardenId).map(garden -> {
            garden.getName();
            return gardenRepository.save(garden);
        }).orElseThrow(() -> new ResourceNotFoundException("GardenId " + gardenId + " not found"));
    }

    @PostMapping("/add-garden")
    public Garden createGarden(@Valid @RequestBody Garden garden) {
        return gardenRepository.save(garden);
    }

    @PutMapping("/update-garden/{gardenId}")
    public Garden updateGarden(@PathVariable Long gardenId, @Valid @RequestBody Garden gardenRequest) {
        return gardenRepository.findById(gardenId).map(garden -> {
            garden.setName(gardenRequest.getName());
            return gardenRepository.save(garden);
        }).orElseThrow(() -> new ResourceNotFoundException("GardenId " + gardenId + " not found"));
    }


    @DeleteMapping("/delete-garden/{gardenId}")
    public ResponseEntity<?> deleteGarden(@PathVariable Long gardenId) {
        return gardenRepository.findById(gardenId).map(garden -> {
            gardenRepository.delete(garden);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("GardenId " + gardenId + " not found"));
    }


}
