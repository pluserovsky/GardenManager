package com.gm.app.Plant;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gm.app.Garden.Garden;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Data
public class Plant {
    @Id
    @GeneratedValue
    private Long id;
    private @NonNull
    String name;
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "garden_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Garden garden;
}
