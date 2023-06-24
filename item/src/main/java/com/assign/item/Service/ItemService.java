package com.assign.item.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.assign.item.Model.Item;
import com.assign.item.Repository.ItemRepository;
import java.util.List;
import java.util.Optional;

@Service
public class ItemService {	

    @Autowired
    private ItemRepository itemRepository;
  
    //Get Details Of All Items
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }
           
    //Get Item By Id.
    public Optional<Item> getItemById(Long id) {
        return itemRepository.findById(id); 
    }

    //Creating New Item
    public Item createItem(Item item) {
        return itemRepository.save(item);
    }

    //Updating Item By Id
    public Optional<Item> updateItem(Long id, Item updatedItem) {
        Optional<Item> optionalItem = itemRepository.findById(id);
        if (optionalItem.isPresent()) {
            Item item = optionalItem.get();
            item.setName(updatedItem.getName());
            item.setStatus(updatedItem.getStatus());
            // Update other attributes as needed
            return Optional.of(itemRepository.save(item));
        }
        return Optional.empty();
    }
    
    //Delete Item By Id
    public boolean deleteItem(Long id) {
        Optional<Item> optionalItem = itemRepository.findById(id);
        if (optionalItem.isPresent()) {
            itemRepository.delete(optionalItem.get());
            return true;
        }
        return false;
    }
}