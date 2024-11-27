package com.cinema.entity;

import com.cinema.enumeration.GenderEnum;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="movie")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MovieEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    Long id;

    @ManyToOne
    @JoinColumn(name = "admin", referencedColumnName = "id", nullable = false)
    AdminEntity admin;

    @Column(nullable = false)
    String title;

    String summary;

    @OneToMany(mappedBy = "movie", cascade = CascadeType.REMOVE, fetch = FetchType.EAGER)
    Set<PictureEntity> pictures = new HashSet<>();

    @Column(nullable = false)
    Integer duration;

    @Column(nullable = false)
    String actors;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    GenderEnum gender;

    @Column(nullable = false)
    String producer;

    @Column(nullable = false)
    String release;
}
