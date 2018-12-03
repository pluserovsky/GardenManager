package com.gm.app.controller;

import com.gm.app.model.Garden;
import com.gm.app.model.Plant;
import com.gm.app.repository.GardenRepository;
import com.gm.app.repository.PlantRepository;
import com.gm.app.service.EmailService;
import com.gm.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.*;
import java.util.concurrent.atomic.AtomicBoolean;

@Configuration
@EnableScheduling
public class ScheduleTasksController {
    @Autowired
    private GardenRepository gardenRepository;
    @Autowired
    private EmailService emailService;
    @Autowired
    private UserService userService;
    @Autowired
    private PlantRepository plantRepository;

    @Scheduled(fixedRate = 21600000) //6h
    public void scheduleFixedRateTask() {
        List<Garden> gardens = gardenRepository.findAll();
        List<String> jobGardens = new ArrayList<>();
        Set<String> owners = new HashSet<>();
        gardens.forEach(garden -> {
            if (pendingJobs(garden)) {
                jobGardens.add(garden.getName());
                owners.add(userService.findOne(garden.getUsername()).getEmail());
            }
        });
        owners.forEach(owner -> {
            SimpleMailMessage toDoListEmail = new SimpleMailMessage();
            toDoListEmail.setTo(owner);
            toDoListEmail.setSubject("Przypomnienie o pracy w ogrodzie");
            toDoListEmail.setText("Cześć!\nW następujących ogrodach masz oczekujące zadania do wykonania:\n"
                    + jobGardens.toString() +
                    "\nZadbaj o rośliny i nie zapomnij zaktualizować statusu w aplikacji!");
            toDoListEmail.setFrom("lukasz@broll.pl");

            emailService.sendEmail(toDoListEmail);
        });
    }

    public boolean pendingJobs(Garden garden) {
        AtomicBoolean isJob = new AtomicBoolean(false);
        List<Plant> plants = plantRepository.findByGardenId(garden.getId());
        plants.forEach(plant -> {
            if (!plant.isHydrated() && plant.getHydrationCycle() != 0) isJob.set(true);
            else if (!plant.isMedicine() && plant.getMedicineCycle() != 0) isJob.set(true);
            else if (!plant.isExaggerated() && plant.getExaggerationCycle() != 0) isJob.set(true);
            else if (!plant.isFertilized() && plant.getFertilizationCycle() != 0) isJob.set(true);

        });
        return isJob.get();
    }
}
