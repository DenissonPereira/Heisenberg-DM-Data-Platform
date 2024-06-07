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
public class MagnetizationsService {
    
    @Autowired
    private DataBaseConnection dataBaseConnection;

    public List<MagnetizationsDTO> getAll() {
        String sql = "SELECT * FROM magnetizacao";
        return dataBaseConnection.getConnectionUsuario().query(sql, new MagnetizationsRowMapper());
    }

    @SuppressWarnings("deprecation")
    public MagnetizationsDTO getById(int id) {
        String sql = "SELECT * FROM magnetizacao WHERE id = ?";
        return dataBaseConnection.getConnectionUsuario().queryForObject(sql, new Object[]{id}, new MagnetizationsRowMapper());
    }

    public void add(MagnetizationsDTO dto) {
        String sql = "INSERT INTO magnetizacao (temperatura, magnetizacao) VALUES (?, ?)";
        dataBaseConnection.getConnectionUsuario().update(sql, dto.temperatura(), dto.magnetizacao());
    }

    public void update(int id, MagnetizationsDTO dto) {
        String sql = "UPDATE magnetizacao SET temperatura = ?, magnetizacao = ? WHERE id = ?";
        dataBaseConnection.getConnectionUsuario().update(sql, dto.temperatura(), dto.magnetizacao(), id);
    }

    public void delete(int id) {
        String sql = "DELETE FROM magnetizacao WHERE id = ?";
        dataBaseConnection.getConnectionUsuario().update(sql, id);
    }

    private static class MagnetizationsRowMapper implements RowMapper<MagnetizationsDTO> {
        @Override
        public MagnetizationsDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
            return new MagnetizationsDTO(
                rs.getInt("id"),
                rs.getDouble("temperatura"),
                rs.getDouble("magnetizacao")
            );
        }
    }
}
