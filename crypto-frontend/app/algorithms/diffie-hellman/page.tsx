import { TheoryPage } from "../../../components/ui/TheoryPage";
import { theoryData } from "../../../data/theory";

export default function DiffieHellmanPage() {
  return <TheoryPage {...theoryData.diffieHellman} />;
}