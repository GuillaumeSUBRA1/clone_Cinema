package com.cinema.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Table(name = "picture")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PictureEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false, nullable = false)
    Long id;

    @ManyToOne
    @JoinColumn(name = "movie", referencedColumnName = "id", nullable = false)
    MovieEntity movie;

    String link;

    @Lob
    byte[] fileContent;

    String fileContentType;

    @Column(nullable = false)
    boolean isCover;

}
