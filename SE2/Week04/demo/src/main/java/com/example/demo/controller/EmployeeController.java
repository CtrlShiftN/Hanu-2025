package com.example.demo.controller;

import com.example.demo.model.Company;
import com.example.demo.model.Employee;
import com.example.demo.repository.CompanyRepository;
import com.example.demo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping(value = "/employee")
public class EmployeeController {
    @Autowired
    EmployeeRepository employeeRepository;
    @Autowired
    CompanyRepository companyRepository;

    @RequestMapping(value = "/list")
    public String getAllEmployee(@RequestParam(value = "company", required = false, defaultValue = "0") Long comId,
                                 @RequestParam(value = "sort", required = false, defaultValue = "0") int sortMode,
                                 Model model) {
        List<Employee> employees;
        List<Company> companies = companyRepository.findAll();

        Sort sort = Sort.unsorted(); // Default sorting (no sorting)

        // Determine sorting order
        if (sortMode == 0) {
            sort = Sort.by(Sort.Direction.ASC, "id"); // Default sort by ID
        } else if (sortMode == 1) {
            sort = Sort.by(Sort.Direction.DESC, "id");
        } else if (sortMode == 2) {
            sort = Sort.by(Sort.Direction.ASC, "name");
        } else if (sortMode == 3) {
            sort = Sort.by(Sort.Direction.DESC, "name");
        }

        // Filter by company if specified
        if (comId != 0) {
            Optional<Company> comp = companyRepository.findById(comId);
            if (comp.isPresent()) {
                employees = employeeRepository.findByCompany(comp.get(), sort);
            } else {
                employees = employeeRepository.findAll(sort);
            }
        } else {
            employees = employeeRepository.findAll(sort);
        }

        // Add attributes to the model for Thymeleaf
        model.addAttribute("employees", employees);
        model.addAttribute("companies", companies);
        model.addAttribute("comId", comId);
        model.addAttribute("sortMode", sortMode);

        return "employee/index";
    }

    @RequestMapping(value = "/detail/{id}")
    public String getEmployeeByID(Model model, @PathVariable Long id) {
        Employee employee = employeeRepository.getReferenceById(id);
        model.addAttribute("employee", employee);
        return "employee/detail";
    }

    @RequestMapping("/delete/{id}")
    public String deleteEmployee(@PathVariable("id") long id, Model model) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid employee Id:" + id));
        employeeRepository.delete(employee);
        return "redirect:/";
    }

    @RequestMapping("/update/{id}")
    public String updateEmployee(@PathVariable("id") long id, Model model) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid employee Id:" + id));
        model.addAttribute("employee", employee);
        return "employee/update";
    }

    @RequestMapping("/add")
    public String addEmployee(Model model) {
        Employee employee = new Employee();
        List<Company> companies = companyRepository.findAll();
        model.addAttribute("employee", employee);
        model.addAttribute("companies", companies);
        return "employee/add";
    }

    @PostMapping("/save")
    public String saveEmployee(Employee employee) {
        // TODO: Handle file upload
        employeeRepository.save(employee);
        return "redirect:/";
    }

}

