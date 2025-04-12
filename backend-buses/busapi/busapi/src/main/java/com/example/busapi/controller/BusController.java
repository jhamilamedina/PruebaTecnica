package com.example.busapi.controller;

import com.example.busapi.entity.Bus;
import com.example.busapi.repository.BusRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bus")
public class BusController {

    private final BusRepository busRepository;

    public BusController(BusRepository busRepository) {
        this.busRepository = busRepository;
    }

    @GetMapping
    public List<Bus> getAllBuses() {
        return busRepository.findAll();
    }

    @GetMapping("/{id}")
    public Bus getBusById(@PathVariable Long id) {
        return busRepository.findById(id).orElse(null);
    }
}
