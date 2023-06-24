package com.assign.item.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.assign.item.Model.Employee;
import com.assign.item.Repository.EmployeeRepository;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    //Get All Employee Details
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    
    //Get Employee By Id
    public Optional<Employee> getEmployeeById(Long id) {
        return employeeRepository.findById(id);
    }
    
    //Create New Employee
    public Employee createEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
    
    //Updating Employee By Id
    public Optional<Employee> updateEmployee(Long id, Employee updatedEmployee) {
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isPresent()) {
            Employee employee = optionalEmployee.get();
            //employee.setEmp_id(updatedEmployee.getEmp_id());
            employee.setName(updatedEmployee.getName());
            employee.setItemId(updatedEmployee.getItemId());
            // Update other attributes as needed
            return Optional.of(employeeRepository.save(employee));
        }
        return Optional.empty();
    }
    
    
    //Delete Employee By Id 
    public boolean deleteEmployee(Long id) {
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isPresent()) {
            employeeRepository.delete(optionalEmployee.get());
            return true;
        }
        return false;
    }
}