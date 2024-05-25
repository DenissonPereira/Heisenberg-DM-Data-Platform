package api.backend.authentication.dtos;

public record UsuarioDTO(
    Integer id,
    String nome,
    String sobrenome,
    String login,
    String email,
    String senha,
    String telefone,
    String endereco,
    String cidade,
    String estado,
    String pais
) {}
