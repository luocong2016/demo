const express = require('express');
const router = express.Router();

const echartsQuery = {
  'line-stack': {
    title: {
      text: '折线图堆叠'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  },
  'area-stack': option = {
    title: {
      text: '堆叠区域图'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        areaStyle: {},
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  },
  'line-graphic': {
    color: ['#8EC9EB'],
    legend: {
      data: ['高度(km)与气温(°C)变化关系']
    },
    tooltip: {
      trigger: 'axis',
      formatter: "Temperature : <br/>{b}km : {c}°C"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      splitLine: {
        show: false
      },
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    yAxis: {
      type: 'category',
      axisLine: { onZero: false },
      axisLabel: {
        formatter: '{value} km'
      },
      boundaryGap: true,
      data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
    },
    graphic: [
      {
        type: 'image',
        id: 'logo',
        right: 20,
        top: 20,
        z: -10,
        bounding: 'raw',
        origin: [75, 75],
        style: {
          image: 'http://echarts.baidu.com/images/favicon.png',
          width: 150,
          height: 150,
          opacity: 0.4
        }
      },
      {
        type: 'group',
        rotation: Math.PI / 4,
        bounding: 'raw',
        right: 110,
        bottom: 110,
        z: 100,
        children: [
          {
            type: 'rect',
            left: 'center',
            top: 'center',
            z: 100,
            shape: {
              width: 400,
              height: 50
            },
            style: {
              fill: 'rgba(0,0,0,0.3)'
            }
          },
          {
            type: 'text',
            left: 'center',
            top: 'center',
            z: 100,
            style: {
              fill: '#fff',
              text: 'ECHARTS BAR CHART',
              font: 'bold 26px Microsoft YaHei'
            }
          }
        ]
      },
      {
        type: 'group',
        left: '10%',
        top: 'center',
        children: [
          {
            type: 'rect',
            z: 100,
            left: 'center',
            top: 'middle',
            shape: {
              width: 190,
              height: 90
            },
            style: {
              fill: '#fff',
              stroke: '#555',
              lineWidth: 2,
              shadowBlur: 8,
              shadowOffsetX: 3,
              shadowOffsetY: 3,
              shadowColor: 'rgba(0,0,0,0.3)'
            }
          },
          {
            type: 'text',
            z: 100,
            left: 'center',
            top: 'middle',
            style: {
              fill: '#333',
              text: [
                '横轴表示温度，单位是°C',
                '纵轴表示高度，单位是km',
                '右上角有一个图片做的水印',
                '这个文本块可以放在图中各',
                '种位置'
              ].join('\n'),
              font: '14px Microsoft YaHei'
            }
          }
        ]
      }
    ],
    series: [
      {
        name: '高度(km)与气温(°C)变化关系',
        type: 'bar',
        smooth: true,
        barCategoryGap: 25,
        lineStyle: {
          normal: {
            width: 3,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 10
          }
        },
        data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
      }
    ]
  },
  'pie-simple': {
    title: {
      text: '某站点用户访问来源',
      subtext: '纯属虚构',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

};

class Test {
  constructor() { }

  async echarts(req, res, next) {
    const { c } = req.query;

    if (c) {
      res.send({ status: 1, data: echartsQuery[c] || {} });
    } else {
      res.send({ status: 1, data: Object.keys(echartsQuery) });
    }
  }

}

const test = new Test();

router.get('/echarts', test.echarts);

module.exports = router;