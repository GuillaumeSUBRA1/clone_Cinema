package com.cinema.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "session")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SessionEntity extends AbstractAuditingEntity<Long> {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sessionGenerator")
    @SequenceGenerator(name = "sessionGenerator", sequenceName = "session_generator", allocationSize = 1)
    Long id;

    @ManyToOne
    @JoinColumn(name = "movie", updatable = false, nullable = false)
    MovieEntity movie;

    @ManyToOne
    @JoinColumn(name = "room", updatable = false, nullable = false)
    RoomEntity room;

    @Column(nullable = false)
    Date startTime;

    @Column(nullable = false)
    Date endTime;
}
