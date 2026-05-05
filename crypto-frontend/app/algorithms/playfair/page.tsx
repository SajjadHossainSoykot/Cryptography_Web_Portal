import { TheoryPage } from "../../../components/ui/TheoryPage";
import { theoryData } from "../../../data/theory";

export default function PlayfairPage() {
  return <TheoryPage {...theoryData.playfair} />;
}