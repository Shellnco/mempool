export interface OptimizedMempoolStats {
  id: number;
  added: string;
  unconfirmed_transactions: number;
  tx_per_second: number;
  vbytes_per_second: number;
  total_fee: number;
  mempool_byte_weight: number;
  vsizes: number[];
}

interface Ancestor {
  txid: string;
  weight: number;
  fee: number;
}

interface BestDescendant {
  txid: string;
  weight: number;
  fee: number;
}

export interface CpfpInfo {
  ancestors: Ancestor[];
  bestDescendant: BestDescendant | null;
}

export interface DifficultyAdjustment {
  difficultyChange: number;
  estimatedRetargetDate: number;
  previousRetarget: number;
  progressPercent: number;
  remainingBlocks: number;
  remainingTime: number;
}

export interface AddressInformation {
  isvalid: boolean;                //  (boolean) If the address is valid or not. If not, this is the only property returned.
  isvalid_parent?: boolean;        //  (boolean) Elements only
  address: string;                 //  (string) The bitcoin address validated
  scriptPubKey: string;            //  (string) The hex-encoded scriptPubKey generated by the address
  isscript: boolean;               //  (boolean) If the key is a script
  iswitness: boolean;              //  (boolean) If the address is a witness
  witness_version?: boolean;       //  (numeric, optional) The version number of the witness program
  witness_program: string;         //  (string, optional) The hex value of the witness program
  confidential_key?: string;       //  (string) Elements only
  unconfidential?: string;         //  (string) Elements only
}
