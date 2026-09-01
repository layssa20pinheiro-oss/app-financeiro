import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

// URL base do seu projeto Supabase
const supabaseUrl = 'https://cbhdlewbvegrsdbrdszw.supabase.co';

// Sua Publishable Key copiada do painel
const supabaseAnonKey = 'sb_publishable_1cRh5f00jopLbhnapQNaSw_RZMxO'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
