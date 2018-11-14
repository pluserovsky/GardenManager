package com.gm.app.controller;

import com.gm.app.model.Reminder;
import com.gm.app.repository.PlantRepository;
import com.gm.app.repository.ReminderRepository;
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
public class ReminderController {
    @Autowired
    private ReminderRepository reminderRepository;

    @Autowired
    private PlantRepository plantRepository;

    public ReminderController(ReminderRepository reminderRepository) {
        this.reminderRepository = reminderRepository;
    }

    /*    @GetMapping("/serve-reminders")
        @CrossOrigin(origins = "http://localhost:4200")
        public Page<Reminder> getAllReminders(Pageable pageable) {
            return reminderRepository.findAll(pageable);
        }*/
    @GetMapping("/{username}/reminders")
    public List<Reminder> getAllRemindersByUsername(@PathVariable(value = "username") String username, Pageable pageable) {
        return reminderRepository.findByUsername(username, pageable);
    }

    @GetMapping("/{username}/plants/{plantId}/get-reminder/{reminderId}")
    public Reminder getReminderById(@PathVariable(value = "username") String username,
                                    @PathVariable Long plantId,
                                    @PathVariable Long reminderId) {
        if (!plantRepository.existsById(plantId)) {
            throw new ResourceNotFoundException("GardenId " + plantId + " not found?");
        }
        return reminderRepository.findById(reminderId).map(reminder -> {
            reminder.setUsername(username);
            reminder.getName();
            return reminderRepository.save(reminder);
        }).orElseThrow(() -> new ResourceNotFoundException("ReminderId " + reminderId + " not found"));
    }

    @PostMapping("/{username}/plants/{plantId}/add-reminders")
    public Reminder createReminder(@Valid @RequestBody Reminder reminder,
                                   @PathVariable Long plantId,
                                   @PathVariable(value = "username") String username) {
        reminder.setUsername(username);
        reminder.setPlantId(plantId);
        return reminderRepository.save(reminder);
    }

    @PutMapping("/{username}/plants/{plantId}/update-reminder/{reminderId}")
    public Reminder updateReminder(@PathVariable(value = "username") String username,
                                   @PathVariable Long plantId,
                                   @PathVariable Long reminderId,
                                   @Valid @RequestBody Reminder reminderRequest) {
        return reminderRepository.findById(reminderId).map(reminder -> {
            reminder.setUsername(username);
            reminder.setPlantId(plantId);
            reminder.setName(reminderRequest.getName());
            reminder.setDescription(reminderRequest.getDescription());
            reminder.setDone(reminderRequest.isDone());
            reminder.setCycle(reminderRequest.getCycle());
            reminder.setLastDone(reminderRequest.getLastDone());
            reminder.setDone(reminderRequest.isDone());
            return reminderRepository.save(reminder);
        }).orElseThrow(() -> new ResourceNotFoundException("ReminderId " + reminderId + " not found"));
    }

    @DeleteMapping("/{username}/plants/{plantId}/delete-reminder/{reminderId}")
    public ResponseEntity<?> deleteReminder(@PathVariable(value = "username") String username,
                                            @PathVariable Long plantId,
                                            @PathVariable Long reminderId) {
        return reminderRepository.findById(reminderId).map(reminder -> {
            reminder.setUsername(username);
            reminderRepository.delete(reminder);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("ReminderId " + reminderId + " not found"));
    }


}
