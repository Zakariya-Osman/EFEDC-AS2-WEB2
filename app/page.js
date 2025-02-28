import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import StudentInformation from "../components/StudentInformation";
import Footer from "../components/Footer";
import { StudentProvider } from "@/context/StudentProvider";

export default function Home() {
  return (
    <div>
      <StudentProvider>
        <Navbar />
        <StudentForm />
        <StudentInformation />
        <Footer />
      </StudentProvider>
    </div>
  );
}
