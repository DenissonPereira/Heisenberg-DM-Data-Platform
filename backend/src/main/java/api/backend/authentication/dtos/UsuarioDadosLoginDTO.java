package api.backend.authentication.dtos;

import jakarta.validation.constraints.NotBlank;

public record UsuarioDadosLoginDTO(
    @NotBlank(message = "Campo login é obrigatório!")
    String login,
    @NotBlank(message = "Campo senha é obrigatório!")
    String senha
) {}
