package api.backend.magnetizations.dtos;

public record MagnetizationsDTO(
    Integer id,
    double temperatura,
    double magnetizacao,
    double energia,
    double suscetibilidade,
    double inverso
) {}
