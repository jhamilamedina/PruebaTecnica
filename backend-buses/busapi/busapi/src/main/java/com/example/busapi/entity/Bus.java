package com.example.busapi.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "numero_bus", nullable = false)
    private String numeroBus;

    @Column(nullable = false, unique = true)
    private String placa;

    @Column(name = "fecha_creacion", updatable = false)
    private LocalDateTime fechaCreacion = LocalDateTime.now();

    private String caracteristicas;

    @Enumerated(EnumType.STRING)
    private Estado estado = Estado.Activo;

    @ManyToOne
    @JoinColumn(name = "marca_id")
    private MarcaBus marca;

    public enum Estado {
        Activo,
        Inactivo
    }
}
