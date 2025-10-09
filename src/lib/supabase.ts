import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Character {
  id: string;
  name: string;
  age: number;
  profession: string;
  characteristics: string;
  token_url?: string;
  token_name?: string;
  user_email?: string;
  created_at: string;
}
