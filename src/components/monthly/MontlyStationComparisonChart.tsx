import LineChartContainer from "./LineChartContainer";
import { GoDotFill } from "react-icons/go";
import MontlyUsageBarChart from "../charts/MontlyUsageBarChart";
import Loader from "../Loader";

type Props = {
  topFiveList: any,
  isLoading: boolean
}


const MontlyStationComparisonChart = ({ isLoading, topFiveList }: Props) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center mt-8">
      {/* line chart container */}
      <LineChartContainer topFiveList={topFiveList} isLoading={isLoading} />

      {/* bar chart container */}
      <div className="flex flex-col gap-8 p-2 w-[380px]">
        {/* standards - 이용 시간, 이용 거리  */}
        <div className="flex justify-end gap-4">
          <p className="flex items-center text-gray-600">
            <GoDotFill />
            <span>이용 거리</span>
          </p>
          <p className="flex items-center text-primary-500">
            <GoDotFill />
            <span>이용 시간</span>
          </p>
        </div>

        {/* bar chart container */}
        <div className="w-[400px] h-[360px]">
          {isLoading || !topFiveList ? (
            <div className="flex gap-4 min-h-60 items-center justify-center font-semibold text-lg">
              <Loader />
            <p className="animate-pulse">차트를 그리는 중입니다. . .</p>
          </div>
          ): (
            <MontlyUsageBarChart topFiveData={topFiveList}  />
          )}
        </div>
      </div>
    </div>
  );
};

export default MontlyStationComparisonChart;
