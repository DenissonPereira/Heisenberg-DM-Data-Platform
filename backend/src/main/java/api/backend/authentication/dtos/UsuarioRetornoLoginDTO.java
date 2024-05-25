package api.backend.authentication.dtos;

public record UsuarioRetornoLoginDTO(
    UsuarioDTO usuario,
    String token
) {}
