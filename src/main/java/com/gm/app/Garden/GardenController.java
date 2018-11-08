package com.gm.app.Garden;

import com.gm.app.Plant.Plant;
import com.gm.app.User.UserRepository;
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
        return gardenRepository.findByUsername(username, pageable);
    }
    @GetMapping("/serve-gardens/{gardenId}")
    public Garden getGardenById(@PathVariable Long gardenId) {
        return gardenRepository.findById(String.valueOf(gardenId)).map(garden -> {
            garden.getName();
            return gardenRepository.save(garden);
        }).orElseThrow(() -> new ResourceNotFoundException("GardenId " + gardenId + " not found"));
    }

    @PostMapping("/{username}/add-gardens")
    public Garden createGarden(@Valid @RequestBody Garden garden, @PathVariable (value = "username") String username) {
        garden.setUsername(username);
        return gardenRepository.save(garden);
    }

    @PutMapping("/update-garden/{gardenId}")
    public Garden updateGarden(@PathVariable Long gardenId, @Valid @RequestBody Garden gardenRequest) {
        return gardenRepository.findById(String.valueOf(gardenId)).map(garden -> {
            garden.setName(gardenRequest.getName());
            return gardenRepository.save(garden);
        }).orElseThrow(() -> new ResourceNotFoundException("GardenId " + gardenId + " not found"));
    }


    @DeleteMapping("/delete-garden/{gardenId}")
    public ResponseEntity<?> deleteGarden(@PathVariable Long gardenId) {
        return gardenRepository.findById(String.valueOf(gardenId)).map(garden -> {
            gardenRepository.delete(garden);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("GardenId " + gardenId + " not found"));
    }


}
