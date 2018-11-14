package com.gm.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString

@Data
public class Plant extends AuditModel {
    @Id
    @GeneratedValue
    private Long id;
    private @NonNull
    String name;
    String description;
    String notes;
    boolean isHydrated; //nawodnienie
    Long hydrationCycle;
    Date lastHydration;
    boolean isFertilized; //nawożenie
    Long fertilizationCycle;
    Date lastFertilization;
    boolean isExaggerated; //przesadzenie
    Long exaggerationCycle;
    Date lastExaggeration;
    boolean isMedicine; //lekartstwa
    Long medicineCycle;
    Date lastMedicine;
    @ManyToOne
    @JoinColumn(name = "garden_id", nullable = false, insertable = false, updatable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Garden garden;
    @Column(name = "garden_id")
    private Long gardenId;
}
