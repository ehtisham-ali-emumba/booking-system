import type { RandomUser } from "../../hooks/useRandomUsers";

export type UserDetailsModalProps = {
  user: RandomUser | null;
  onClose: () => void;
};
