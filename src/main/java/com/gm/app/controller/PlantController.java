package com.gm.app.controller;

import com.gm.app.repository.GardenRepository;
import com.gm.app.model.Plant;
import com.gm.app.repository.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.Date;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PlantController {
    @Autowired
    private PlantRepository plantRepository;

    @Autowired
    private GardenRepository gardenRepository;

    public PlantController(PlantRepository plantRepository) {
        this.plantRepository = plantRepository;
    }

    @GetMapping("/gardens/{gardenId}/plants")
    public Collection<Plant> getAllPlantsByGardenId(@PathVariable (value = "gardenId") Long gardenId, Pageable pageable) {
        Collection<Plant> plants = plantRepository.findByGardenId(gardenId, pageable);
        Date curr = new Date();
        plants.forEach((plant) -> {
            try {
                if (plant.getLastHydration().getTime() + plant.getHydrationCycle() - curr.getTime() <0 && plant.isHydrated()){
                    plant.setHydrated(false);
                    plant.setLastHydration(curr);
                    plantRepository.save(plant);
                }
                if (plant.getLastFertilization().getTime() + plant.getFertilizationCycle() - curr.getTime() <0 && plant.isFertilized()){
                    plant.setFertilized(false);
                    plant.setLastFertilization(curr);
                    plantRepository.save(plant);
                }
                if (plant.getLastExaggeration().getTime() + plant.getExaggerationCycle() - curr.getTime() <0 && plant.isExaggerated()){
                    plant.setExaggerated(false);
                    plant.setLastExaggeration(curr);
                    plantRepository.save(plant);
                }
                if (plant.getLastMedicine().getTime() + plant.getMedicineCycle() - curr.getTime() <0 && plant.isMedicine()){
                    plant.setMedicine(false);
                    plant.setLastMedicine(curr);
                    plantRepository.save(plant);
                }
            } catch(NullPointerException e){/*System.out.println(e);*/}
        });
        return plants;
    }

    @GetMapping("/gardens/{gardenId}/plant/{plantId}")
    public Plant getPlantById(@PathVariable Long gardenId,@PathVariable Long plantId) {
        if(!gardenRepository.existsById(gardenId)) {
            throw new ResourceNotFoundException("GardenId " + gardenId + " not found?");
        }
        return plantRepository.findById(plantId).map(plant->{
            plant.getName();
            return plantRepository.save(plant);
        }).orElseThrow(() -> new ResourceNotFoundException("PlantId " + plantId + " not found"));
    }
    @PostMapping("/gardens/{gardenId}/add-plant")
    public Plant createPlant(@PathVariable (value = "gardenId") Long gardenId,
                                 @Valid @RequestBody Plant plant) {
        if(!gardenRepository.existsById(gardenId)) {
            throw new ResourceNotFoundException("GardenId " + gardenId + " not found");
        }
        plant.setGardenId(gardenId);
        return plantRepository.save(plant);
    }

    @PutMapping("/gardens/{gardenId}/update-plant/{plantId}")
    public Plant updatePlant(@PathVariable (value = "gardenId") Long gardenId,
                                 @PathVariable (value = "plantId") Long plantId,
                                 @Valid @RequestBody Plant plantRequest) {
        if(!gardenRepository.existsById(gardenId)) {
            throw new ResourceNotFoundException("GardenId " + gardenId + " not found");
        }
        return plantRepository.findById(plantId).map(plant -> {
            plant.setGardenId(gardenId);
            plant.setName(plantRequest.getName());
            plant.setDescription(plantRequest.getDescription());
            plant.setNotes(plantRequest.getNotes());
            plant.setHydrationCycle(plantRequest.getHydrationCycle());
            plant.setLastHydration(plantRequest.getLastHydration());
            //plant.setFertilized(plantRequest.isFertilized());
            plant.setFertilizationCycle(plantRequest.getFertilizationCycle());
            plant.setLastFertilization(plantRequest.getLastFertilization());
            //plant.setExaggerated(plantRequest.isExaggerated());
            plant.setExaggerationCycle(plantRequest.getExaggerationCycle());
            plant.setLastExaggeration(plantRequest.getLastExaggeration());
            //plant.setMedicine(plantRequest.isMedicine());
            plant.setMedicineCycle(plantRequest.getMedicineCycle());
            plant.setLastMedicine(plantRequest.getLastMedicine());
            if(plant.isHydrated()!=plantRequest.isHydrated() && plantRequest.isHydrated()){
                plant.setHydrated(plantRequest.isHydrated());
                plant.setLastHydration(new Date());
            }
            if(plant.isFertilized()!=plantRequest.isFertilized() && plantRequest.isFertilized()){
                plant.setFertilized(plantRequest.isFertilized());
                plant.setLastFertilization(new Date());
            }
            if(plant.isExaggerated()!=plantRequest.isExaggerated() && plantRequest.isExaggerated()){
                plant.setExaggerated(plantRequest.isExaggerated());
                plant.setLastExaggeration(new Date());
            }
            if(plant.isMedicine()!=plantRequest.isMedicine() && plantRequest.isMedicine()){
                plant.setMedicine(plantRequest.isMedicine());
                plant.setLastMedicine(new Date());
            }
            return plantRepository.save(plant);
        }).orElseThrow(() -> new ResourceNotFoundException("PlantId " + plantId + "not found"));
    }

    @DeleteMapping("/gardens/{gardenId}/plant/{plantId}")
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
  /*  @PutMapping("/gardens/{gardenId}/update-work")
    public Collection<Plant> updateWorks(@PathVariable (value = "gardenId") Long gardenId, Pageable pageable) {
        Collection<Plant> plants = plantRepository.findByGardenId(gardenId, pageable);
        Date curr = new Date();
        final Long[] diff = new Long[1];
        plants.forEach((plant) -> {
            try {
                diff[0] = plant.getLastHydration().getTime() + 200000;
                //System.out.println(diff[0] );
                System.out.print(plant.getName() );
                System.out.println(diff[0]-curr.getTime() );
                if (plant.getLastHydration().getTime() + 200000 - curr.getTime() <0 && plant.isHydrated()){
                    plant.setHydrated(false);
                    plant.setLastHydration(curr);}
            } catch(NullPointerException e){*//*System.out.println(e);*//*}
        });
        return plants;
    }*/
}
