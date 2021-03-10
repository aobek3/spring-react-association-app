package com.example.odev_server.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.example.odev_server.exception.ResourceNotFoundException;
import com.example.odev_server.model.Info;
import com.example.odev_server.repository.InfoRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class InfoController {
	
	@Autowired
	private InfoRepository infoRepository;
	
	
	
	// get all Info
	@GetMapping("/Informations")
	public List<Info> getAllInformations(){
		return infoRepository.findAll();
	}
	
	// create Informations rest api
	@PostMapping("/Informations")
	public Info createEmployee(@RequestBody Info info) {
		return infoRepository.save(info);
	}
	
	// get information by id rest api
	@GetMapping("/Informations/{id}")
	public ResponseEntity<Info> getEmployeeById(@PathVariable Long id) {
		Info info = infoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Belirtilen haber bulunmamaktadır :" + id));
		return ResponseEntity.ok(info);
	}
	
	// update information rest api
	
	@PutMapping("/Informations/{id}")
	public ResponseEntity<Info> updateEmployee(@PathVariable Long id, @RequestBody Info infoDetails){
		Info info = infoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Belirtilen haber bulunmamaktadır :" + id));
		
		info.setInfoName(infoDetails.getInfoName());
		info.setInfoDescription(infoDetails.getInfoDescription());
		info.setInfoFilePath(infoDetails.getInfoFilePath());
		
		Info updatedEmployee = infoRepository.save(info);
		return ResponseEntity.ok(updatedEmployee);
	}
	
	// delete info rest api
	@DeleteMapping("/Informations/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteInformation(@PathVariable Long id){
		Info info = infoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Belirtilen haber bulunmamaktadır :" + id));
		
		infoRepository.delete(info);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	

}
