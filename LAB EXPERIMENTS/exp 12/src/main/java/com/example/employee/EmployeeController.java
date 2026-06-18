package com.example.employee;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final EmployeeRepository repository;

    public EmployeeController(EmployeeRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return repository.save(employee);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable int id) {
        repository.deleteById(id);
    }
}
