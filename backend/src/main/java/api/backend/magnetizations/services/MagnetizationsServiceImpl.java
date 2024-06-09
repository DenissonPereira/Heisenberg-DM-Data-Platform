package api.backend.magnetizations.services;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import api.backend.infra.DataBaseConnection;
import api.backend.magnetizations.dtos.MagnetizationsDTO;

@Service
public class MagnetizationsServiceImpl implements MagnetizationsService {
    
    @Autowired
    private DataBaseConnection dataBaseConnection;

    @Override
    public List<MagnetizationsDTO> getAll(String tableName) {
        String sql = String.format("SELECT * FROM %s", tableName);
        return dataBaseConnection.getConnectionUsuario().query(sql, new MagnetizationsRowMapper());
    }

    @SuppressWarnings("deprecation")
    @Override
    public MagnetizationsDTO getById(String tableName, int id) {
        String sql = String.format("SELECT * FROM %s WHERE id = ?", tableName);
        return dataBaseConnection.getConnectionUsuario().queryForObject(sql, new Object[]{id}, new MagnetizationsRowMapper());
    }

    private static class MagnetizationsRowMapper implements RowMapper<MagnetizationsDTO> {
        @Override
        public MagnetizationsDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
            return new MagnetizationsDTO(
                rs.getInt("id"),
                rs.getDouble("temperatura"),
                rs.getDouble("magnetizacao"),
                rs.getDouble("energia"),
                rs.getDouble("suscetibilidade"),
                rs.getDouble("inverso")
            );
        }
    }
}
