-- Run this to insert missing profiles
INSERT INTO public.profiles (id, email, full_name)
SELECT 
  id, 
  email, 
  raw_user_meta_data->>'full_name' as full_name
FROM 
  auth.users
WHERE 
  id NOT IN (SELECT id FROM public.profiles);
