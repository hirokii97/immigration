import { CityType } from "@/app/types/city";
import { createClient } from "@/app/utils/supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";

export const getDataFromCityId = async (cityId: string) => {
  const supabase = await createClient();
  const { data: city, error }: PostgrestSingleResponse<CityType[]> =
    await supabase.from("city_data").select("*");
  if (error) {
    console.error("Error fetching data:", error);
  }
  if (city) {
    const filteredData = city.filter((city) => {
      console.log("city.id", typeof city.id);
      console.log("cityId", typeof cityId);

      return city.id === cityId;
    });
    console.log("filteredData", filteredData);
    return filteredData;
  } else {
    console.error("No city_data found");
    return [];
  }
};
