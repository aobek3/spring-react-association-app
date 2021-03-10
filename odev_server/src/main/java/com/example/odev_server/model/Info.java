package com.example.odev_server.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "info")
public class Info {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "info_type")
	private String infoType;
	
	@Column(name = "info_name")
	private String infoName;
	
	@Column(name = "info_description")
	private String infoDescription;
	
	@Column(name = "info_file_path")
	private String infoFilePath;
	
	public Info() {
		
	}
	
	
	
	
	public Info(String infoType, String infoName, String infoDescription, String infoFilePath) {
		super();
		this.infoType = infoType;
		this.infoName = infoName;
		this.infoDescription = infoDescription;
		this.infoFilePath = infoFilePath;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getInfoType() {
		return infoType;
	}
	public void setInfoType(String infoType) {
		this.infoType = infoType;
	}
	public String getInfoName() {
		return infoName;
	}
	public void setInfoName(String infoName) {
		this.infoName = infoName;
	}
	public String getInfoDescription() {
		return infoDescription;
	}
	public void setInfoDescription(String infoDescription) {
		this.infoDescription = infoDescription;
	}
	public String getInfoFilePath() {
		return infoFilePath;
	}
	public void setInfoFilePath(String infoFilePath) {
		this.infoFilePath = infoFilePath;
	}
	

}
