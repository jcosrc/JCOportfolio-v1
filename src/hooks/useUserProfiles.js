import { useQuery } from "@tanstack/react-query"; 
import { supabase } from "../supabase-client";

const fetchUserProfiles = async () => {
    const { data, error } = await supabase
    .from('user_profile')
    .select('*')
    
    if(error) throw error
    return data
}

export const useUserProfiles = () => {
    return useQuery({
        queryKey: ['user_profile'],
        queryFn: fetchUserProfiles,
    })
}