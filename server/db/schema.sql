CREATE TABLE bins (
  slug varchar(255) PRIMARY KEY, 
  requests JSONB DEFAULT '[]'::jsonb,
  created_at timestamp DEFAULT NOW()
);

