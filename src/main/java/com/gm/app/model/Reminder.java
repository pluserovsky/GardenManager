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
public class Reminder extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private @NonNull
    String name;
    String description;
    boolean isDone;
    Long cycle; // time in ms
    Date lastDone;
    @ManyToOne
    @JoinColumn(name = "plant_id", nullable = false, insertable = false, updatable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Plant plant;
    @Column(name = "plant_id")
    private Long plantId;
    @Column(name = "username")
    private String username;
}
