import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Footer from "../components/Footer";
import { StudentProvider } from "@/context/StudentProvider";

export default function Home() {
  return (
    <div>
      <StudentProvider>
        <Navbar />
        <StudentForm />
        <StudentList />
        <Footer />
      </StudentProvider>
    </div>
  );
}
