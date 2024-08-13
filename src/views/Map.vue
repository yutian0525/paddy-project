<!-- DigitalPaddy.vue -->
<template>
  <div style="height: 55px;"></div>
  <div class="dialog-container" v-show="dialogVisible">
    <el-dialog class="custom-dialog" v-model=dialogVisible width="60%" :before-close="handleClose">
      <el-select v-model="value1" placeholder="Select" size="default" style="width: 240px">
        <el-option v-for="item in clientlist" :key="item.value" :label="item.label" :value="item.value"/>
      </el-select>
      <div v-if="value1">
        <el-date-picker v-if="value1 == 'month'" v-model="monthdata" placeholder="Pick a month" style="width: 240px"
                        type="month"/>
        <el-date-picker v-if="value1 == 'year'" v-model="yeardata" placeholder="Pick a year" style="width: 240px"
                        type="year"/>
        <el-date-picker v-if="value1 == 'day'" v-model="daydata" placeholder="Pick a day" style="width: 240px"
                        type="date"/>
        <div v-if="value1 == 'manyyear'">
          <el-date-picker v-model="startyear" placeholder="Pick start year" style="width: 240px" type="year"/>
          <el-date-picker v-model="endyear" placeholder="Pick end year" style="width: 240px" type="year"/>
        </div>
      </div>
      <el-button @click="gettemputerdata">查看</el-button>
      <div class="echart" id="mychart" :style="myChartStyle"></div>
    </el-dialog>
  </div>
<!--  <div>
    <el-select v-model="value1" placeholder="Select" size="default" style="width: 240px">
      <el-option v-for="item in clientlist" :key="item.value" :label="item.label" :value="item.value"/>
    </el-select>
    <div v-if="value1">
      <el-date-picker v-if="value1 == 'month'" v-model="monthdata" placeholder="Pick a month" style="width: 240px"
                      type="month"/>
      <el-date-picker v-if="value1 == 'year'" v-model="yeardata" placeholder="Pick a year" style="width: 240px"
                      type="year"/>
      <el-date-picker v-if="value1 == 'day'" v-model="daydata" placeholder="Pick a day" style="width: 240px"
                      type="date"/>
      <div v-if="value1 == 'manyyear'">
        <el-date-picker v-model="startyear" placeholder="Pick start year" style="width: 240px" type="year"/>
        <el-date-picker v-model="endyear" placeholder="Pick end year" style="width: 240px" type="year"/>
      </div>
    </div>
  </div>-->
  <!--  <ElButton @click="gettemputerdata">查看</ElButton>
    <div class="echart" id="mychart" :style="myChartStyle"></div>-->
  <div id="map" :style="mapStyle" class="map"></div>
</template>

<script>
import * as echarts from "echarts";
import {ElButton, ElMessage} from 'element-plus'
import axios from 'axios';

export default {
  data() {
    return {
      regionName:null,
      dialogVisible: false,
      location: null,
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
      myChartStyle: {float: "left", width: "100%", height: "400px"},
      map: null,
      mapData: null,
      mapStyle: {width: "800px", height: "800px", margin: "auto"},
      //图表样式
      option: {
        title: {
          text: '上海市地图',
          x: 'center'
        },
        series: [
          {
            type: 'map',
            map: '上海',
            mapLocation: {
              y: 60
            },
            itemSytle: {
              emphasis: {label: {show: false}}
            },
          }
        ],
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.getMapData();
    });
  },
  methods: {
    ElButton,
    goToHome() {
      this.$router.push('/')
    },
    initEcharts() {
      const
          option = {
            backgroundColor: "#ffffff",
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
        switch (this.regionName) {
          case"浦东新区":
            this.location = "1";
            break;
        }
        console.log(this.value1);
        const formData = {
          location: this.location,
        };
        if (this.value1 == "year") {
          formData.type = "year";
          formData.start = this.yeardata;
          this.xData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        }
        if (this.value1 == "month") {
          formData.type = "month";
          formData.start = this.monthdata;
          this.xData = [1, 5, 10, 15, 20, 25, 30];
        }
        if (this.value1 == "day") {
          formData.type = "day";
          formData.start = this.daydata;
          this.xData = ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
        }
        if (this.value1 == "manyyear") {
          formData.type = "manyyear";
          formData.start = this.startyear;
          formData.end = this.endyear;
          // 创建一个从 startyear 到 endyear 的数组
          const startYearNumber = this.startyear.getFullYear();
          const endYearNumber = this.endyear.getFullYear();
          this.xData = Array.from({length: endYearNumber - startYearNumber + 1}, (_, i) => i + startYearNumber);
        }
        console.log("formData");
        console.log(formData);
        const response = await axios.post('http://localhost:5000/GetData/temperature', formData);
        console.log("response.data");
        console.log(response.data);
        if (response.status === 200) {
          this.yData = response.data.yData;
          this.initEcharts();
        } else {
          ElMessage.error("请选择1981-2022年的时间");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    showTooltip() {
      this.dialogVisible = true;
      console.log("tooltip调用完成")
    },
    // ...

    async handleMouseclick(params) {
      // 获取鼠标指针当前所在的区域的名称
      this.regionName = params.name;
      console.log(this.regionName);
      // 设置 location
      // 查询温度数据
      this.showTooltip();
      console.log("调用 tooltip")
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    async getMapData() {
      try {
        const response = await axios.get('https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=310000_full');
        this.mapData = response.data;
        this.initmap();
      } catch (error) {
        console.error('Error getting map data:', error);
      }
    },
    initmap() {
      this.map = echarts.init(document.getElementById('map'));
      echarts.registerMap('上海', this.mapData);
      this.map.setOption(this.option);
      this.map.on('click', this.handleMouseclick);
    },
  }
  ,
}
</script>
<style>
.el-dialog__wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.dialog-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 1000;
}
</style>