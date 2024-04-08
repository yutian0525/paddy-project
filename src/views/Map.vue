<!-- DigitalPaddy.vue -->
<template>
  <div style="height: 55px;"></div>
  <el-select v-model="value1" placeholder="Select" size="default" style="width: 240px">
    <el-option v-for="item in clientlist" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
  <div v-if="value1">
    <el-date-picker v-if="value1 == 'month'" v-model="monthdata" type="month" placeholder="Pick a month"/>
    <el-date-picker v-if="value1 == 'year'" v-model="yeardata" type="year" placeholder="Pick a year"/>
    <el-date-picker v-if="value1 == 'day'" v-model="daydata" type="date" placeholder="Pick a day"/>
  </div>
  <ElButton @click="test">查看</ElButton>
  <div class="echart" id="mychart" :style="myChartStyle"></div>
</template>

<script >
import * as echarts from "echarts";
import { ElInput } from "element-plus";

export default {
  data() {
    return {
      myChart: {},
      xData: null,
      yData: null,
      value1: null,
      monthdata: null,
      yeardata: null,
      daydata: null,
      clientlist: [
        {
          value: "manyyear",
          label: "年季"
        },
        {
          value: "year",
          label: "年"
        },
        {
          value: "month",
          label: "月"
        },
        {
          value: "day",
          label: "日"
        }],
      myChartStyle: { float: "left", width: "600px", height: "400px" } //图表样式
    };
  },
  /*
  mounted() {
    this.initEcharts();
  },*/
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    initEcharts() {
      const option = {
        xAxis: {
          data: this.xData
        },
        yAxis: {},
        series: [
          {
            data: this.yData,
            type: "line" // 类型设置为折线图
          }
        ]
      };
      this.myChart = echarts.init(document.getElementById("mychart"));
      this.myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
    test() {
      console.log(this.value1);
      console.log(this.yeardata);
      this.xData = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      this.yData = [150, 230, 224, 218, 135, 147, 260];
      this.initEcharts();
    },
    async gettemputerdata() {
      console.log(starttime.value);
      console.log(endtime.value);
      try {
        const response = await axios.post('http://localhost:5000/GetData/temperature', { location: "1", type: "year", start: { year: "2022", month: "1", day: "0" }, length: { year: "0", month: "12", day: "0" } });
        console.log(response.data);
        this.xData = response.data.xData;
        this.yData = response.data.yData;
        this.initEcharts();
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}
</script>
<style></style>