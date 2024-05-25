package api.backend.authentication.services;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import api.backend.authentication.dtos.UsuarioDadosCadastroDTO;
import api.backend.config.PasswordEnconderConfig;
import api.backend.infra.DataBaseConnection;
import api.backend.validation.VerificarDadosExistentesUsuario;


@Service
public class UsuarioCadastroService {
    
    @Autowired
    private DataBaseConnection dataBaseConnection;

    @Autowired
    private PasswordEnconderConfig passwordEnconderConfig;

    @Autowired
    private VerificarDadosExistentesUsuario verificarDadosExistentesUsuario;

    public Integer cadastrarUsuario(UsuarioDadosCadastroDTO usuario) throws HttpClientErrorException, SQLException {
        
        Boolean verificarDados = verificarDadosExistentesUsuario.verificador(usuario);

        if (verificarDados) {
            
            String sqlUsuario = "INSERT INTO usuarios (nome, sobrenome, login, email, senha, telefone, endereco, cidade, estado, pais) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            String senhaBcrypt = passwordEnconderConfig.passwordEncoder().encode(usuario.senha());

            int novoUsuario = dataBaseConnection.getConnectionUsuario().update(sqlUsuario, 
                usuario.nome(), usuario.sobrenome(),
                usuario.login(), usuario.email(),
                senhaBcrypt, usuario.telefone(), usuario.endereco(), usuario.cidade(), usuario.estado(), usuario.pais());

            if (novoUsuario == 1) {
                return novoUsuario;
            }

            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Erro ao realizar cadastro!");
        }

        return 0;
    }
}
