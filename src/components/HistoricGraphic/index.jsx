import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

import { Context } from "../../context/Context";
import { useContext, useEffect } from "react";

export default function HistoricGraphic() {
  const context = useContext(Context)
  const { data, setData } = context
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentData = await fetch(
          'https://economia.awesomeapi.com.br/json/daily/BTC-BRl/30');
        const currentJson = await currentData.json()
        const dataTographic = currentJson.map((item) => {
          return Number(item.ask) / 1000
        })
        setData(dataTographic)

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [])

  return (
    <View>
      {
        data && (
          <LineChart
            data={{
              datasets: [
                {
                  data: data
                }
              ]
            }}
            width={(Dimensions.get('window').width) * 0.95}
            height={220}
            yAxisLabel="R$"
            yAxisSuffix="k"
            withVerticalLines={false}
            withVerticalLabels={false}
            yLabelsOffset={1}
            chartConfig={{
              backgroundColor: '#000000',
              backgroundGradientFrom: '#232323',
              backgroundGradientTo: '#3F3F3F',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForDots: {
                r: '1',
                strokeWidth: '1',
                stroke: '#F50D41'
              }
            }}
            bezier
          />
        )
      }
      {/* <LineChart
        data={{
          datasets: [
            {
              data: data
            }
          ]
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisLabel="R$"
        yAxisSuffix="k"
        withVerticalLines={false}
        withVerticalLabels={false}
        yLabelsOffset={1}
        chartConfig={{
          backgroundColor: '#000000',
          backgroundGradientFrom: '#232323',
          backgroundGradientTo: '#3F3F3F',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: '1',
            strokeWidth: '1',
            stroke: '#F50D41'
          }
        }}
        bezier
      /> */}
    </View>
  )
}
