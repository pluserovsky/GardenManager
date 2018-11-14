package com.gm.app.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@Data
public class Garden extends AuditModel {
    @Id
    @GeneratedValue
    private Long id;
    @Column(name = "username", nullable = false)
    private String username;
    private @NonNull
    String name;
    String description;
}
