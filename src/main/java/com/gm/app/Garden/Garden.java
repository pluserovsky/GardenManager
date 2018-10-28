package com.gm.app.Garden;

import com.gm.app.AuditModel;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Data
public class Garden extends AuditModel {
    @Id
    @GeneratedValue
    private Long id;
    private @NonNull
    String name;
}
