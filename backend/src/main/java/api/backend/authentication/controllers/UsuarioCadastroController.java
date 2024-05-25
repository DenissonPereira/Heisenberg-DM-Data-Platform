package api.backend.authentication.controllers;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.backend.authentication.dtos.UsuarioDadosCadastroDTO;
import api.backend.authentication.services.UsuarioCadastroService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/usuario")
public class UsuarioCadastroController {
    
    @Autowired
    private UsuarioCadastroService usuarioCadastroService;

    @PostMapping("/cadastro")
    @Transactional
    public ResponseEntity<Object> cadastrarNovoUsuario(@RequestBody @Valid UsuarioDadosCadastroDTO dados) throws SQLException {
        UsuarioDadosCadastroDTO cadastroDTO = new UsuarioDadosCadastroDTO(dados);
        usuarioCadastroService.cadastrarUsuario(cadastroDTO);

        return ResponseEntity.noContent().build();
    }
    
}
