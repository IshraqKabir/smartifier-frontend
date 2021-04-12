import { useRouter } from "next/router";
import Topbar from "../../../Components/Layout/Topbar/Topbar";

const Page = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Topbar />
      {id}
    </div>
  );
};

export default Page;
