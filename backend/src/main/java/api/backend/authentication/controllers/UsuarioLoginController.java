package api.backend.authentication.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import api.backend.authentication.dtos.UsuarioDTO;
import api.backend.authentication.dtos.UsuarioDadosLoginDTO;
import api.backend.authentication.dtos.UsuarioRetornoLoginDTO;
import api.backend.authentication.services.UsuarioLoginService;
import api.backend.infra.JWTTokenService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/login")
public class UsuarioLoginController {
    
    @Autowired
    private UsuarioLoginService usuarioLoginService;

    @Autowired
    private JWTTokenService jwtTokenService;

    @PostMapping
    public ResponseEntity<UsuarioRetornoLoginDTO> efetuarLogin(@RequestBody @Valid UsuarioDadosLoginDTO dados) throws Exception {
        UsuarioDTO usuario = usuarioLoginService.getUserLogin(dados);
        String token = jwtTokenService.gerarToken(usuario);
        UsuarioRetornoLoginDTO usuarioRetorno = new UsuarioRetornoLoginDTO(usuario, token);
        return ResponseEntity.ok().body(usuarioRetorno);
    }
}
