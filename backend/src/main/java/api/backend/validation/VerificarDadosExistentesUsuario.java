package api.backend.validation;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;

import api.backend.authentication.dtos.UsuarioDadosCadastroDTO;
import api.backend.infra.DataBaseConnection;

@Component
public class VerificarDadosExistentesUsuario {
    
    @Autowired
    private DataBaseConnection dataBaseConnection;

    public Boolean verificador(UsuarioDadosCadastroDTO usuario) throws HttpClientErrorException{
        String sqlEmail = "SELECT id from heisenberg_dm_data_platform.usuarios where email = ?";
        List<Map<String, Object>> usuarioPorEmail = dataBaseConnection.getConnectionUsuario().queryForList(sqlEmail, usuario.email());

        if(!usuarioPorEmail.isEmpty()) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "E-mail já cadastrado!");
        }

        String sqlLogin = "SELECT id from heisenberg_dm_data_platform.usuarios where login = ?";
        List<Map<String, Object>> usuarioPorLogin = dataBaseConnection.getConnectionUsuario().queryForList(sqlLogin, usuario.login());

        if(!usuarioPorLogin.isEmpty()) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Login já cadastrado!");
        }

        return true;
    }
}

