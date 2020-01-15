import React from 'react';
import {
    View,
    Text,
    Dimensions
} from 'react-native';
import { PieChart } from "react-native-chart-kit";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: 10,
            data2: 20,
            data3: 30,
            data4: 40
        };
    }

    render() {
        const screenWidth = Dimensions.get("window").width;
        const pieData = [
            {
                name: "Data 1",
                value: this.state.data1,
                color: "skyblue",
                legendFontColor: "#181818",
                legendFontSize: 15
            },
            {
                name: "Data 2",
                value: this.state.data2,
                color: "blue",
                legendFontColor: "#181818",
                legendFontSize: 15
            },
            {
                name: "Data 3",
                value: this.state.data3,
                color: "red",
                legendFontColor: "#181818",
                legendFontSize: 15
            },
            {
                name: "Data 4",
                value: this.state.data4,
                color: "green",
                legendFontColor: "#181818",
                legendFontSize: 15
            }
        ];
        const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5
        };
        return (
            <View style={{ flex:1, justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Text style={{ fontSize: 30 }}>Pie Chart Data</Text>
                <PieChart
                    data={pieData}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="value"
                    backgroundColor="transparent"
                    paddingLeft="20"
                    absolute
                />
            </View>
        );
    }
}

export default App;
