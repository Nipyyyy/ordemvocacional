/*
  # Create characters table for RPG character creation

  1. New Tables
    - `characters`
      - `id` (uuid, primary key)
      - `name` (text, character name)
      - `age` (integer, character age)
      - `profession` (text, selected profession)
      - `characteristics` (text, character traits/description)
      - `token_url` (text, selected token image URL)
      - `created_at` (timestamptz, creation timestamp)
      - `user_email` (text, optional email for tracking)
  
  2. Security
    - Enable RLS on `characters` table
    - Add policy to allow anyone to create characters
    - Add policy to allow users to read their own characters by email
    - Add policy to allow reading all characters (for public viewing)
*/

CREATE TABLE IF NOT EXISTS characters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  age integer NOT NULL,
  profession text NOT NULL,
  characteristics text NOT NULL,
  token_url text,
  user_email text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE characters ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create characters"
  ON characters
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can read all characters"
  ON characters
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Users can update own characters by email"
  ON characters
  FOR UPDATE
  TO anon, authenticated
  USING (user_email = current_setting('request.headers')::json->>'user-email')
  WITH CHECK (user_email = current_setting('request.headers')::json->>'user-email');

CREATE POLICY "Users can delete own characters by email"
  ON characters
  FOR DELETE
  TO anon, authenticated
  USING (user_email = current_setting('request.headers')::json->>'user-email');