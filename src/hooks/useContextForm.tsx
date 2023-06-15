import { Context } from '@/context/context';
import { useContext } from 'react';

export function useContextForm() {
  return useContext(Context);
}
