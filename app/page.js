import Image from "next/image";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import StudentInformation from "../components/StudentInformation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <StudentForm />
      <StudentList />
      <StudentInformation />
      <Footer />
    </div>
  );
}
