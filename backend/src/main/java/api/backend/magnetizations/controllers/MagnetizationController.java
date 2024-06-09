package api.backend.magnetizations.controllers;

import api.backend.magnetizations.dtos.MagnetizationsDTO;
import api.backend.magnetizations.services.MagnetizationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/magnetizations")
public class MagnetizationController {

    @Autowired
    private MagnetizationsService magnetizationsService;

    @GetMapping("/anisotropia_0")
    public List<MagnetizationsDTO> getAllFromDadosAnisotropia0() {
        return magnetizationsService.getAll("dados_anisotropia_0");
    }

    @GetMapping("/anisotropia_0/{id}")
    public MagnetizationsDTO getByIdFromDadosAnisotropia0(@PathVariable int id) {
        return magnetizationsService.getById("dados_anisotropia_0", id);
    }

    @GetMapping("anisotropia_0_8")
    public List<MagnetizationsDTO> getAllFromDadosAnisotropia08() {
        return magnetizationsService.getAll("dados_anisotropia_0_8");
    }

    @GetMapping("/anisotropia_0_8/{id}")
    public MagnetizationsDTO getByIdFromDadosAnisotropia08(@PathVariable int id) {
        return magnetizationsService.getById("dados_anisotropia_0_8", id);
    }

    @GetMapping("anisotropia_1")
    public List<MagnetizationsDTO> getAllFromDadosAnisotropia1() {
        return magnetizationsService.getAll("dados_anisotropia_1");
    }

    @GetMapping("/anisotropia_1/{id}")
    public MagnetizationsDTO getByIdFromDadosAnisotropia1(@PathVariable int id) {
        return magnetizationsService.getById("dados_anisotropia_1", id);
    }

    @GetMapping("anisotropia_2")
    public List<MagnetizationsDTO> getAllFromDadosAnisotropia2() {
        return magnetizationsService.getAll("dados_anisotropia_2");
    }

    @GetMapping("/anisotropia_2/{id}")
    public MagnetizationsDTO getByIdFromDadosAnisotropia2(@PathVariable int id) {
        return magnetizationsService.getById("dados_anisotropia_2", id);
    }

    @GetMapping("anisotropia_3")
    public List<MagnetizationsDTO> getAllFromDadosAnisotropia3() {
        return magnetizationsService.getAll("dados_anisotropia_3");
    }

    @GetMapping("/anisotropia_3/{id}")
    public MagnetizationsDTO getByIdFromDadosAnisotropia3(@PathVariable int id) {
        return magnetizationsService.getById("dados_anisotropia_3", id);
    }

    @GetMapping("anisotropia_3_38")
    public List<MagnetizationsDTO> getAllFromDadosAnisotropia3_38() {
        return magnetizationsService.getAll("dados_anisotropia_3_38");
    }

    @GetMapping("/anisotropia_3_38/{id}")
    public MagnetizationsDTO getByIdFromDadosAnisotropia3_38(@PathVariable int id) {
        return magnetizationsService.getById("dados_anisotropia_3_38", id);
    }
}
