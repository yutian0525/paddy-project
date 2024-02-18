<!-- DigitalPaddy.vue -->
<template>
  <div style="height: 95px;"></div>
  <div style="display: flex;width: 100%;justify-content: center;">
    <div class="introductionframe">
      <h1 style="color:#00adb5;text-align: center;">项目介绍</h1>
      <div style="display: grid;margin-left: 40px;margin-right: 40px;">
        <h3 class="secondtitle">项目名称</h3>
        <p class="sentence">基于深度学习的水稻生长识别与监测系统</p>
        <h3 class="secondtitle">小组成员</h3>
        <p class="sentence">薛卜凡 上海海洋大学信息学院空间信息与数字技术 2021级</p>
        <p class="sentence">罗长浩 上海海洋大学信息学院空间信息与数字技术 2021级</p>
        <p class="sentence">倪镭 上海海洋大学信息学院计算机类 2023级</p>
        <h3 class="secondtitle">指导老师</h3>
        <p class="sentence">王振华 上海海洋大学信息学院空间信息与数字技术</p>
        <p class="sentence">易丛琴 上海海洋大学信息学院计算机科学与技术</p>
        <h3 class="secondtitle">项目背景</h3>
        <p class="sentence">
          我国是一个农业大国，农业是我国政治稳定和国民经济发展的基础。习总书记指出“保障粮食安全对中国来说是永恒的课题，任何时候都不能放松”。粮食安全对保障我国经济发展起着极其重要的基础作用[4]。中国是世界上水稻产量及消费量最高的国家，稻米是我国60%以上人口的主食。水稻种植业在我国农业生产中占有举足轻重的地位，水稻产量的稳定在我国从“温饱型”向“小康型”社会的迈进过程中起到不可替代的作用。虽然我国近年来水稻的产量保持稳定增长态势，但稻米消费量的增长更为迅速，并且伴随着我国耕地质量退化、环境恶化、土地细碎化分散化及农村劳动力不足等压力，粮食产量增速有明显放缓的趋势，人增地减的趋势在相当长的时期内还难以遏制，这些现象都严重威胁着水稻产量的安全[5]。虽然我国目前水稻产量排名世界首位，但水稻的种植效率、资源利用率等相比国际先进水平还有一定的差距，我国水稻种植行业还有巨大的提升空间可以挖掘。
        </p>
        <h3 class="secondtitle">项目意义</h3>
        <p class="sentence">
          本研究项目的核心在于通过人工智能技术推动传统农业向智能化升级，进而搭建起一个综合性的智慧农田大数据系统，旨在高效管理农业大数据资源、实现农产品全程可追溯体系建立，并广泛传播农业专业知识。通过人工智能技术与数字孪生相结合，为消费者提供多种服务和功能。通过分析和预测，消费者可以了解农产品的产量、质量等信息；数字孪生技术模拟和监测农田情况，提供准确的农业数据支持。借助智能手机应用程序或在线平台，消费者可获取个性化的农业知识和建议，包括种植技术、病虫害防治措施等指导。此外，结合人工智能和数字孪生技术，建立完善的农产品质量溯源系统，通过追踪关键数据增强信任度，同时利用系统已有数据进行扩展，以数字孪生的全新方式为广大民众展示农作物的生长过程的同时进行科普教育。这些服务和功能有助于提高消费者对农产品的认知、信任和参与度，推动农业产业可持续发展。深度学习是人工智能中的研究热点[6]，已成功应用于汽车智能驾驶、医学图像处理及广告投送等领域，具有较强的适用性[7]。水稻作为世界主要谷物之一，是全球约一半以上人口的主食[8]。本研究基于深度学习对水稻进行可视化生长预测，利用当前时间点的图像直接预测未来时间点的图像，通过在数字水稻上进行产量实验，研究不同水稻品种的长势，可以大幅减少水稻基因组学的试验周期，节约科研资源的消耗，有望提高水稻育种研究的效率。基于深度学习的水稻可视化生长预测，可为水稻生长提供一种更真实的可视化预测工具
        </p>
      </div>
      <div style="display: grid;justify-content: center;margin-top: 30px;margin-bottom: 20px;">
        <button class="thebutton" @click="goToHome">返回主页</button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>
<style>
.secondtitle {
  color: #00adb5;
  font-size: 25px;
  margin-top: 18px;
  margin-bottom: 10px;
}

.introductionframe {
  width: 1200px;
  background-color: #393e46;
  border-radius: 10px;
  animation-name: fadeIn;
  margin-bottom: 50px;
  /* 使用上面定义的fadeIn动画 */
  animation-duration: 0.5s;
  /* 动画持续时间为1秒 */
  animation-fill-mode: both;
  /* 动画结束后保持最后的关键帧状态（此处为完全不透明） */
  animation-timing-function: ease-in-out;
  /* 动画速度曲线，这里采用平滑过渡 */
}

.sentence {
  color: #ffffff;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-indent: 2em;
  line-height: 1.9;
}
</style>