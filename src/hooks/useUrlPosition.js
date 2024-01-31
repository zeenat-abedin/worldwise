import { useSearchParams } from "react-router-dom";

export default function useUrlPosition() {
  const [searchParamas] = useSearchParams();
  const lat = searchParamas.get("lat");
  const lng = searchParamas.get("lng");

  return { lat, lng };
}
