ALTER TABLE prayspots
    ADD COLUMN street VARCHAR(255),
    ADD COLUMN house_number VARCHAR(10),
    ADD COLUMN city VARCHAR(100),
    ADD COLUMN postal_code VARCHAR(10);

ALTER TABLE prayspots DROP COLUMN address;