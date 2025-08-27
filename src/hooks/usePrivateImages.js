import { useQuery } from '@tanstack/react-query';
import { supabase } from '../supabase-client';


const fetchPrivateImages = async () => {
  const { data: files, error } = await supabase.storage
    .from('images')
    .list('', { limit: 10 });

  if (error) throw error;
  if (!files || files.length === 0) return [];

  const signedUrls = await Promise.all(
    files.map(async (file) => {
      const { data, error: urlError } = await supabase.storage
        .from('images')
        .createSignedUrl(file.name, 60 * 60);

      if (urlError) throw urlError;
      return data.signedUrl;
    })
  );
  return signedUrls;
};

export const usePrivateImages = () => {
  return useQuery({
    queryKey: ['private-images'],
    queryFn: fetchPrivateImages,
  });
};
