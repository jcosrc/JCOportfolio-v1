import { useQuery } from '@tanstack/react-query';
import { supabase } from '../supabase-client';

const fetchPublicImages = async () => {
  const { data: files, error } = await supabase.storage
    .from('public-images')
    .list('');

  if (error) throw error;
  if (!files || files.length === 0) return [];

  return files.map((file) => {
    const result = supabase.storage
      .from('public-images')
      .getPublicUrl(file.name);

    return {
      name: file.name,
      url: result.data.publicUrl,
    };
  });
};


export const usePublicImages = () => {
  return useQuery({
    queryKey: ['public-images'],
    queryFn: fetchPublicImages,
  });
};
