import { TheoryPage } from "../../../components/ui/TheoryPage";
import { theoryData } from "../../../data/theory";

export default function VigenerePage() {
  return <TheoryPage {...theoryData.vigenere} />;
}