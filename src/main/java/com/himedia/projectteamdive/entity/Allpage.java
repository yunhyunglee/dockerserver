package com.himedia.projectteamdive.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Allpage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "allpage_id")
    private int allpageId;

    @Column(name = "entity_id")
    private int entityId;

    @Enumerated(EnumType.STRING)
    Pagetype pagetype;
}
