package api.backend.authentication.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import api.backend.authentication.dtos.UsuarioDTO;
import api.backend.authentication.dtos.UsuarioDadosLoginDTO;
import api.backend.config.PasswordEnconderConfig;
import api.backend.infra.DataBaseConnection;


@Service
public class UsuarioLoginService {
    
    @Autowired
    private DataBaseConnection dataBaseConnection;

    @Autowired
    private PasswordEnconderConfig passwordEnconderConfig;

    public UsuarioDTO getUserLogin(UsuarioDadosLoginDTO usuario) throws HttpClientErrorException {
        String sql = "SELECT * FROM usuarios WHERE login = ?";
        List<Map<String, Object>> result = dataBaseConnection.getConnectionUsuario().queryForList(sql, usuario.login());

        if (result.isEmpty()) {
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND, "Usuário não encontrado!");
        }

        String senhaUsuarioNoBD = (String) result.get(0).get("senha");
        Boolean senhaValidada = passwordEnconderConfig.passwordEncoder().matches(usuario.senha(), senhaUsuarioNoBD);

        if (senhaValidada) {
            return new UsuarioDTO(
                (Integer) result.get(0).get("id"),
                (String) result.get(0).get("nome"),
                (String) result.get(0).get("sobrenome"),
                (String) result.get(0).get("login"),
                (String) result.get(0).get("email"),
                (String) result.get(0).get("senha"),
                (String) result.get(0).get("telefone"),
                (String) result.get(0).get("endereco"),
                (String) result.get(0).get("cidade"),
                (String) result.get(0).get("estado"),
                (String) result.get(0).get("pais")
            );
        } else {
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND, "Senha inválida!");
        }
    }
}
