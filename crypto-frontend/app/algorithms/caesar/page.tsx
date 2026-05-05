import { TheoryPage } from "../../../components/ui/TheoryPage";
import { theoryData } from "../../../data/theory";

export default function CaesarPage() {
  return <TheoryPage {...theoryData.caesar} />;
}