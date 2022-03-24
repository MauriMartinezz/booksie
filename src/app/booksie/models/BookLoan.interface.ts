import { VolumeInfo } from './Book.interface';
export interface BookLoan {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface ConfirmBookReturn {
  bid: string;
  status: boolean;
}
