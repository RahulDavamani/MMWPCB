import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://biaffqikfbvyjuxncuiq.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpYWZmcWlrZmJ2eWp1eG5jdWlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjMzODUyNDIsImV4cCI6MjAzODk2MTI0Mn0.BziBhIFaj01lGEIIs1ATWcSEICgZxtS9Qf4CeAe5si4';

export const supabase = createClient(supabaseUrl, supabaseKey);
