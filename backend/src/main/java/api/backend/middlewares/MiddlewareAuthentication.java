package api.backend.middlewares;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.filter.OncePerRequestFilter;

import api.backend.infra.JWTTokenService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class MiddlewareAuthentication extends OncePerRequestFilter {
    
    @Autowired
    private JWTTokenService tokenService;

    @SuppressWarnings("null")
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) 
        throws ServletException, IOException {
            String reqUrl = request.getRequestURI();

            if("/login".equals(reqUrl)) {
                filterChain.doFilter(request, response);
                return;
            }

            String token = recuperarToken(request);
            if(token == null) throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Token não informado");

            String tokenValidado = tokenService.validarToken(token);
            if(tokenValidado != null){
                filterChain.doFilter(request, response);
            }
        }

    private String recuperarToken(HttpServletRequest request) {
        var token = request.getHeader("Authorization");
        if(token != null) {
            return token.replace("Bearer", "");
        }
        return null;
    }
}
