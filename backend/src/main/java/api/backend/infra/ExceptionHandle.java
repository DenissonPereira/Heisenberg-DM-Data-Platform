package api.backend.infra;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.client.HttpClientErrorException;

@RestControllerAdvice
public class ExceptionHandle {
    
    @ExceptionHandler(HttpClientErrorException.class)
    public ResponseEntity<ExceptionDTO> tratadorExceptionHtt(HttpClientErrorException e) {
        ExceptionDTO exceptionDTO = new ExceptionDTO(e.getStatusText());
        return ResponseEntity.status(e.getStatusCode()).body(exceptionDTO);
    }

    @ExceptionHandler(Exception.class)
        public ResponseEntity<ExceptionDTO>
        tratadorDeException500(Exception e) {
            ExceptionDTO exceptionDTO = new ExceptionDTO("Erro interno no servidor");
            return ResponseEntity.status(500).body(exceptionDTO);
        }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ExceptionDTO>
    tratadorDeExceptionCampoInvalido(MethodArgumentNotValidException e) {
        @SuppressWarnings("null")
        ExceptionDTO erExceptionDTO = new ExceptionDTO(e.getBindingResult().getFieldError().getDefaultMessage());
        return ResponseEntity.status(400).body(erExceptionDTO);
    }
}
