package com.assign.item.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.assign.item.Model.Employee;
import com.assign.item.Model.Item;
import com.assign.item.Service.ItemService;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/items")
@CrossOrigin("*")
public class ItemController {

    @Autowired
    private ItemService itemService;
    Employee employee;

    //Get All Items 
    @GetMapping
    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> items = itemService.getAllItems();
        return ResponseEntity.ok(items);
    }
     
    //Get item by id .
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable Long id) {
        Optional<Item> optionalItem = itemService.getItemById(id);
        if (optionalItem.isPresent()) {
            return ResponseEntity.ok(optionalItem.get());
        }
        return ResponseEntity.notFound().build();
    }
    
    //Create New Item
    @PostMapping
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        Item createdItem = itemService.createItem(item);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdItem);
    }
    
   //Updating Item By Id
   @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable Long id, @RequestBody Item updatedItem) {
        Optional<Item> optionalItem = itemService.updateItem(id, updatedItem);
        if (optionalItem.isPresent()) {
        	//itemStatus = True;
            return ResponseEntity.ok(optionalItem.get());
        }
        return ResponseEntity.notFound().build();
    }
   
    //Deleting Item By Id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        boolean deleted = itemService.deleteItem(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}