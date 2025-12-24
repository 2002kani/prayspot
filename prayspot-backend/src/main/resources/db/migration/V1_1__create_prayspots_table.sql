CREATE TABLE prayspots (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(40),
    description TEXT,
    latitude DECIMAL(10,7) NOT NULL,
    longitude DECIMAL(10,7) NOT NULL,
    address TEXT,
    type VARCHAR(50),
    is_verified BOOLEAN NOT NULL DEFAULT false,
    is_deleted BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP NOT NULL
);