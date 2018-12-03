package com.gm.app.controller;

import com.gm.app.model.Garden;
import com.gm.app.repository.GardenRepository;
import com.gm.app.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GardenController {
    @Autowired
    private GardenRepository gardenRepository;

    @Autowired
    private UserRepository userRepository;

    public GardenController(GardenRepository gardenRepository) {
        this.gardenRepository = gardenRepository;
    }

/*    @GetMapping("/serve-gardens")
    @CrossOrigin(origins = "http://localhost:4200")
    public Page<Garden> getAllGardens(Pageable pageable) {
        return gardenRepository.findAll(pageable);
    }*/
    @GetMapping("/{username}/gardens")
    public List<Garden> getAllGardensByUsername(@PathVariable (value = "username") String username, Pageable pageable) {
        if(checkActivation(username))
        return gardenRepository.findByUsername(username, pageable);
        else
        return null;
    }
    @GetMapping("/{username}/get-garden/{gardenId}")
    public Garden getGardenById(@PathVariable (value = "username") String username,@PathVariable Long gardenId) {
        return gardenRepository.findById(gardenId).map(garden -> {
            garden.setUsername(username);
            garden.getName();
            return gardenRepository.save(garden);
        }).orElseThrow(() -> new ResourceNotFoundException("GardenId " + gardenId + " not found"));
    }

    @PostMapping("/{username}/add-gardens")
    public Garden createGarden(@Valid @RequestBody Garden garden, @PathVariable (value = "username") String username) {
        if(checkActivation(username)){
        garden.setUsername(username);
        return gardenRepository.save(garden);
        } else
            return null;
    }

    @PutMapping("/{username}/update-garden/{gardenId}")
    public Garden updateGarden(@PathVariable (value = "username") String username,@PathVariable Long gardenId, @Valid @RequestBody Garden gardenRequest) {
        return gardenRepository.findById(gardenId).map(garden -> {
            garden.setUsername(username);
            garden.setName(gardenRequest.getName());
            garden.setDescription(gardenRequest.getDescription());
            return gardenRepository.save(garden);
        }).orElseThrow(() -> new ResourceNotFoundException("GardenId " + gardenId + " not found"));
    }

    @DeleteMapping("/{username}/delete-garden/{gardenId}")
    public ResponseEntity<?> deleteGarden(@PathVariable (value = "username") String username, @PathVariable Long gardenId) {
        return gardenRepository.findById(gardenId).map(garden -> {
            garden.setUsername(username);
            gardenRepository.delete(garden);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("GardenId " + gardenId + " not found"));
    }

    private boolean checkActivation(String username)
    {
        return userRepository.findByUsername(username).isActive();
    }

}
