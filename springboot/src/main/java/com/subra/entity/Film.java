package com.subra.entity;

import lombok.*;
import javax.persistence.*;

@Entity
@Table(name="film")
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Film {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private long id;

    @Column(name="titre", nullable = false)
    public String titre;

    @Column(name="resume")
    public String resume;

    @Column(name="genre", nullable = false)
    public String genre;

    @Column(name="realisateur", nullable = false)
    public String realisateur;

    @Column(name="sortie", nullable = false)
    public int sortie;

    @Column(name="actif", nullable = false)
    public boolean actif;

    @Column(name="salle")
    public int salle;
}
