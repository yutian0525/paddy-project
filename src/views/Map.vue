<!-- DigitalPaddy.vue -->
<template>
  <div style="height: 55px;"></div>
  <div>
  <el-select v-model="value1" placeholder="Select" size="default" style="width: 240px">
    <el-option v-for="item in clientlist" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
  <div v-if="value1">
    <el-date-picker v-if="value1 == 'month'" v-model="monthdata" type="month" style="width: 240px" placeholder="Pick a month"/>
    <el-date-picker v-if="value1 == 'year'" v-model="yeardata" type="year" style="width: 240px" placeholder="Pick a year"/>
    <el-date-picker v-if="value1 == 'day'" v-model="daydata" type="date" style="width: 240px" placeholder="Pick a day"/>
    <div v-if="value1 == 'manyyear'">
      <el-date-picker v-model="startyear" type="year" placeholder="Pick start year" style="width: 240px"/>
      <el-date-picker v-model="endyear" type="year" placeholder="Pick end year" style="width: 240px"/>
    </div>
  </div>
  </div>
  <ElButton @click="gettemputerdata">查看</ElButton>
  <div class="echart" id="mychart" :style="myChartStyle"></div>
</template>

<script >
import * as echarts from "echarts";
import { ElMessage } from 'element-plus'
import axios from 'axios';
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
      startyear: null,
      endyear: null,
      clientlist: [
        {
          value: "manyyear",
          label: "年际"
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
      this.xData = [1, 2, 3, 4, 5, 6, 7];
      this.yData = [150, 230, 224, 218, 135, 147, 260];
      this.initEcharts();
    },
    async gettemputerdata() {

      try {
        console.log(this.value1);
        const formData = {
          location: "1",
        };
        if (this.value1 == "year") {
          formData.type = "year";
          formData.start = this.yeardata;
          this.xData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        }
        if (this.value1 == "month") {
          formData.type = "month";
          formData.start = this.monthdata;
          this.xData = [1,5,10,15,20,25,30];
        }
        if (this.value1 == "day") {
          formData.type = "day";
          formData.start = this.daydata;
          this.xData = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
        }
        console.log(formData);
        const response = await axios.post('http://localhost:5000/GetData/temperature', formData);
        console.log(response.data);
        if(response.status === 200) {
          this.yData = response.data.yData;
          this.initEcharts();
        }
        else{
          ElMessage.error("请选择1981-2022年的时间");
        }


      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
}
</script>
<style></style>