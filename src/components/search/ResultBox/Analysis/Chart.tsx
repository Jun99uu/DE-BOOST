import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useRecoilValue } from "recoil";
import { userNameState } from "@/store/usernameAtom";
import { useEffect, useState } from "react";
import { ManufactureInfo } from "../../interface";
import { AVERAGE } from "@/assets/AVERAGE";
import styled from "@emotion/styled";

interface Props {
  data: ManufactureInfo;
}

const Chart = ({ data }: Props) => {
  const user = useRecoilValue(userNameState);
  const defaultSeries = [
    {
      name: user.name,
      data: [
        data.avgvwpm * 10000,
        data.avgwcpm * 5000,
        data.avgwpm * 3000,
        data.csm * 100,
        data.dbgpm * 10,
        data.dpm,
        data.dtm,
        data.gpm * 2,
        data.kap * 100,
        data.vs * 30,
        data.vspm * 1000,
      ],
    },
    {
      name: `${user.tier} avg`,
      data: [],
    },
  ];

  const defaultOptions: ApexOptions = {
    chart: {
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: 1,
    },
    fill: {
      opacity: 0.3,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: [
        "AVGVWPM",
        "AVGWCPM",
        "AVGWPM",
        "CSM",
        "DBGPM",
        "DPM",
        "DTM",
        "GPM",
        "KA%",
        "VS",
        "VSPM",
      ],
    },
    yaxis: {
      show: false,
      labels: {
        show: false, // This will hide the y-axis labels
      },
    },
  };

  const [series, setSeries] = useState(defaultSeries);
  const [options, setOptions] = useState<ApexOptions>(defaultOptions);

  useEffect(() => {
    const myTierAverage = AVERAGE[user.tier][user.rank]["all"];
    const myAverage = [
      myTierAverage.avgvwpm * 10000,
      myTierAverage.avgwcpm * 5000,
      myTierAverage.avgwpm * 3000,
      myTierAverage.csm * 100,
      myTierAverage.dbgpm * 10,
      myTierAverage.dpm,
      myTierAverage.dtm,
      myTierAverage.gpm * 2,
      myTierAverage.kap * 100,
      myTierAverage.vs * 30,
      myTierAverage.vspm * 1000,
    ];
    const newSeries = [
      {
        name: user.name,
        data: [
          data.avgvwpm * 10000,
          data.avgwcpm * 5000,
          data.avgwpm * 3000,
          data.csm * 100,
          data.dbgpm * 10,
          data.dpm,
          data.dtm,
          data.gpm * 2,
          data.kap * 100,
          data.vs * 30,
          data.vspm * 1000,
        ],
      },
      {
        name: `${user.tier} avg`,
        data: myAverage,
      },
    ];
    setSeries(newSeries);
  }, [user.tier]);

  return (
    <Container>
      <ReactApexChart
        options={options}
        series={series}
        type="radar"
        height={300}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

export default Chart;
