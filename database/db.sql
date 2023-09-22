DROP DATABASE IF EXISTS ttn_webhook;

CREATE DATABASE ttn_webhook;

USE ttn_webhook;

CREATE TABLE Device (
    device_id VARCHAR(255) PRIMARY KEY,
    application_id VARCHAR(255) NOT NULL,
    device_name VARCHAR(255) NOT NULL,
    latitude DECIMAL(10, 6),
    longitude DECIMAL(10, 6),
    altitude DECIMAL(10, 2)
) ENGINE=InnoDB;

CREATE TABLE DataRecord (
    data_record_id INT AUTO_INCREMENT PRIMARY KEY,
    device_id VARCHAR(255) NOT NULL,
    BatV DOUBLE,
    Temp_Black DOUBLE,
    Temp_Red DOUBLE,
    Temp_White DOUBLE,
    received_at DATETIME,
    FOREIGN KEY (device_id) REFERENCES Device(device_id)
) ENGINE=InnoDB;

CREATE INDEX idx_device_id ON DataRecord(device_id);
