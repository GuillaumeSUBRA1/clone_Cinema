package com.subra.bean;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
public class FilmBean {
    public long id;
    public String titre;
    public String resume;
    public String genre;
    public String realisateur;
    public int sortie;
    public boolean actif;
    public int salle;
}
