package com.gm.app.User;

import lombok.*;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Entity;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
@Data
public class User {
    @Id @GeneratedValue
    private Long id;
    private @NonNull String name;
    private String email;
}
