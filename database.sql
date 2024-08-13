-- Edited by Kexin Dai on July 7, 2024
CREATE DATABASE your_database_name;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Modified by Xueting on July 26, 2024
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    avatar TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Modified by Junyu on July 31, 2024
-- Modified by Kexin on Aug 05, 2024

CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  -- new added: property_name
  property_name VARCHAR(225),
  street_address VARCHAR(255) NOT NULL,
  city VARCHAR(255),
  state VARCHAR(255),
  zipcode VARCHAR(255),
  picture TEXT,
  property_description TEXT,
  purchase_price INTEGER NOT NULL,
  purchasing_closing_price INTEGER NOT NULL,
  after_repair_value INTEGER NOT NULL,
  repair_costs INTEGER NOT NULL,
  cash_purchase BOOLEAN,
  loan_amount INTEGER,
  interest_rate FLOAT,
  points_charged INTEGER,
  loan_term INTEGER,
  property_tax INTEGER,
  property_tax_period VARCHAR(10),
  insurance INTEGER,
  insurance_period VARCHAR(10),
  -- new added:   rental_income 
  rental_income INTEGER,
  -- new added:   rental_income_other 
  rental_income_other INTEGER,
    
  repairs_maintenance INTEGER,
  vacancy INTEGER,
  capital_expenditures INTEGER,
  management_fees INTEGER,
  electricity INTEGER,
  gas INTEGER,
  water_and_sewer INTEGER,
  hoa_fees INTEGER,
  garbage INTEGER,
  other INTEGER,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Edited by Kexin Dai on July 19, 2024

CREATE TABLE reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  monthly_cash_flow FLOAT NOT NULL,
  income_per_month FLOAT NOT NULL,
  expenses_per_month FLOAT NOT NULL,
  coc_roi FLOAT NOT NULL,
  five_year_annualized_return FLOAT NOT NULL,
  mortgage_payment FLOAT NOT NULL,
  noi FLOAT NOT NULL,
  pro_forma_cap_rate FLOAT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
