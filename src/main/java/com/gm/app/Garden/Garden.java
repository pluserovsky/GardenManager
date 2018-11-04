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
    @Column(name = "owner_id", nullable = false)
    private Long ownerID;
    private @NonNull
    String name;
}
