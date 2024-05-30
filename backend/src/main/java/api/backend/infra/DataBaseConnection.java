package api.backend.infra;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.stereotype.Component;

@Component
public class DataBaseConnection {
    
    private final  JdbcTemplate connectionUsuario;
    
    public DataBaseConnection() {

        DriverManagerDataSource dataSourceUsuarios = new DriverManagerDataSource();
        dataSourceUsuarios.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSourceUsuarios.setUrl("jdbc:mysql://localhost:3306/heisenberg_dm_data_platform");
        dataSourceUsuarios.setUsername("root");
        dataSourceUsuarios.setPassword("123456Ok!");

        this.connectionUsuario = new JdbcTemplate(dataSourceUsuarios);
    }

    public JdbcTemplate getConnectionUsuario() {
        return this.connectionUsuario;
    }
}
