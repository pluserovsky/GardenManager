package com.gm.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@ToString
@Builder
@AllArgsConstructor
@Slf4j
@Entity
public class Plant extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "garden_id", nullable = false, insertable = false, updatable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Garden garden;
    @JsonIgnore
    @Column(name = "garden_id")
    private Long gardenId;

}
