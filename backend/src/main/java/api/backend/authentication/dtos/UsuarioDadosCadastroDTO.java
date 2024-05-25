package api.backend.authentication.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Email;

public record UsuarioDadosCadastroDTO(

    @NotBlank(message = "Campo Nome não pode ser nulo!")
    @Size(max = 50, message = "Nome não pode ter mais de 50 caracteres")
    String nome,

    @NotBlank(message = "Sobrenome não pode ser nulo!")
    @Size(max = 50, message = "Sobrenome não pode ter mais de 50 caracteres")
    String sobrenome,

    @NotBlank(message = "Campo login não pode ser nulo!")
    @Size(max = 50, message = "Login não pode ter mais de 50 caracteres")
    String login,

    @NotBlank(message = "Campo email não pode ser nulo!")
    @Email(message = "Email deve ser válido")
    @Size(max = 100, message = "Email não pode ter mais de 100 caracteres")
    String email,

    @NotBlank(message = "Senha não pode ser nula!")
    @Size(max = 255, message = "Senha não pode ter mais de 255 caracteres")
    String senha,

    @Size(max = 30, message = "Telefone não pode ter mais de 30 caracteres")
    String telefone,

    @Size(max = 255, message = "Endereço não pode ter mais de 255 caracteres")
    String endereco,

    @Size(max = 100, message = "Cidade não pode ter mais de 100 caracteres")
    String cidade,

    @Size(max = 100, message = "Estado não pode ter mais de 100 caracteres")
    String estado,

    @Size(max = 100, message = "País não pode ter mais de 100 caracteres")
    String pais

) {
    public UsuarioDadosCadastroDTO(UsuarioDadosCadastroDTO dados) {
        this(
            dados.nome, dados.sobrenome, dados.login,
            dados.email, dados.senha, dados.telefone,
            dados.endereco, dados.cidade, dados.estado, dados.pais
        );
    }
}
