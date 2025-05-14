import { type Advocate } from "@/types";
import { fetchData } from "@/utils/fetch";
import { ApiRoute } from "@/config/constants";
import AdvocatesList from "@/components/AdvocatesList";

export default async function Page() {
  const { data: advocates } = await fetchData<{ data: Advocate[] }>(ApiRoute.ADVOCATES);

  return (
    <AdvocatesList advocates={advocates} />
  );
}
