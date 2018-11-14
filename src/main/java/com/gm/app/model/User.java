package com.gm.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

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
    private String username;
    //@JsonIgnore
    private String password;
}
