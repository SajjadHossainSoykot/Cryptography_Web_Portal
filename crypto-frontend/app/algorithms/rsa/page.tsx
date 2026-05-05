import { TheoryPage } from "../../../components/ui/TheoryPage";
import { theoryData } from "../../../data/theory";

export default function RSAPage() {
  return <TheoryPage {...theoryData.rsa} />;
}