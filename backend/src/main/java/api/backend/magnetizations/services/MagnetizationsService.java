package api.backend.magnetizations.services;

import api.backend.magnetizations.dtos.MagnetizationsDTO;
import java.util.List;

public interface MagnetizationsService {
    List<MagnetizationsDTO> getAll(String tableName);
    MagnetizationsDTO getById(String tableName, int id);
}
