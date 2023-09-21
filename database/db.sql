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
    BatV DECIMAL(1, 3),
    Temp_Black DECIMAL(2, 1),
    Temp_Red DECIMAL(2, 1),
    Temp_White DECIMAL(2, 1),
    received_at DATETIME,
    FOREIGN KEY (device_id) REFERENCES Device(device_id)
) ENGINE=InnoDB;

CREATE INDEX idx_device_id ON DataRecord(device_id);
