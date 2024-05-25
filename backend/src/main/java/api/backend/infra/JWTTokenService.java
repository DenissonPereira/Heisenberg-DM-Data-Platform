package api.backend.infra;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import org.springframework.stereotype.Component;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;

@Component
public class JWTTokenService {

    private String chaveSecreta = "123456";

    public String gerarToken(api.backend.authentication.dtos.UsuarioDTO usuario) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(chaveSecreta);
            return JWT.create()
                .withIssuer("api_jwtauthserver")
                .withSubject(usuario.login())
                .withClaim("id", usuario.id())
                .withClaim("email", usuario.email())
                .withExpiresAt(tempoDuracaoToken())
                .sign(algorithm);
        } catch (JWTCreationException exception) {
            throw new RuntimeException("Erro ao gerar token", exception);
        }
    }

    public String validarToken(String tokenJWT) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(chaveSecreta);
            return JWT.require(algorithm)
                .withIssuer("api_jwtauthserver")
                .build()
                .verify(tokenJWT)
                .getSubject();
        } catch (JWTVerificationException exception) {
            throw new RuntimeException("Token inválido ou expirado!");
        }
    }

    public Instant tempoDuracaoToken() {
        return LocalDateTime.now().plusHours(2).toInstant(ZoneOffset.of("-03:00"));
    }
}
