package com.gm.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.extern.slf4j.Slf4j;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Builder
@AllArgsConstructor
@Slf4j
@Entity
public class Garden extends AuditModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "username", nullable = false)
    private String username;
    private @NonNull
    String name;
    String description;
    @OneToMany(mappedBy = "garden",
            fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Plant> plantsList;
}
