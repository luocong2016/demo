<template>
  <div
    ref="home"
    class="home"
  ></div>
</template>

<script>
import G2 from "@antv/g2";

export default {
  name: "home",
  mounted: function() {
    const data = [
      { genre: "Sports", sold: 275 },
      { genre: "Strategy", sold: 115 },
      { genre: "Action", sold: 120 },
      { genre: "Shooter", sold: 350 },
      { genre: "Other", sold: 150 }
    ];
    const container = this.$refs["home"];
    const chart = new G2.Chart({
      container,
      width: 1000,
      height: 500,
      padding: [20, 20, 95, 80]
    });
    chart.source(data);
    chart
      .interval()
      .position("genre*sold")
      .color("genre");
    chart.render();
  }
};
</script>
