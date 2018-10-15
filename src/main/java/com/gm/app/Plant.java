package com.gm.app;

import lombok.*;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
@Data
public class Plant {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String name;
}
