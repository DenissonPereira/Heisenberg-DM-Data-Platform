package api.backend.magnetizations.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import api.backend.magnetizations.dtos.MagnetizationsDTO;
import api.backend.magnetizations.services.MagnetizationsService;

@RestController
@RequestMapping("/magnetizations")
public class MagnetizationController {

    @Autowired
    private MagnetizationsService magnetizationsService;

    @GetMapping
    public ResponseEntity<List<MagnetizationsDTO>> getAll() {
        List<MagnetizationsDTO> magnetizations = magnetizationsService.getAll();
        return new ResponseEntity<>(magnetizations, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MagnetizationsDTO> getById(@PathVariable int id) {
        MagnetizationsDTO magnetization = magnetizationsService.getById(id);
        return new ResponseEntity<>(magnetization, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Void> add(@RequestBody MagnetizationsDTO dto) {
        magnetizationsService.add(dto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable int id, @RequestBody MagnetizationsDTO dto) {
        magnetizationsService.update(id, dto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        magnetizationsService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
