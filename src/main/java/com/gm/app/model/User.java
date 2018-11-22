package com.gm.app.model;

import lombok.*;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
@Data
public class User {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    @Size(min=3, max = 50)
    private  String name;
    @NaturalId
    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    @NotBlank
    @Size(min=3, max = 50)
    private String username;
    @NotBlank
    @Size(min=6, max = 100)
    private String password;
    private String role;
    private boolean enabled;
    private String confirmationToken;
}
