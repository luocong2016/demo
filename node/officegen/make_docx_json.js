const officegen = require('officegen')
const fs = require('fs')
const path = require('path')
const docx = officegen({
  type: 'docx',
  onend: function(writeen) {
    console.log(`onend: ${writeen}`)
  },
  onerr: function(err) {
    console.log(`onerr: ${err}`)
  }
})
const out = fs.createWriteStream(resolve('tmp/example.docx'))

let tableStyle, data

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}



const table = [
  [{
    val: 'No.',
    opts: {
      cellColWidth: 4261,
      b: true,
      sz: '48',
      shd: {
        fill: '7F7F7F',
        themeFill: 'text1',
        themeFillTint: '80'
      },
      fontFamily: 'Avenir Book'
    }
  }, {
    val: 'Title1',
    opts: {
      b: true,
      color: 'A00000',
      align: 'right',
      shd: {
        fill: '92CDDC',
        themeFill: 'text1',
        themeFillTint: '80'
      }
    }
  }, {
    val: 'Title2',
    opts: {
      align: 'center',
      cellColWidth: 42,
      b: true,
      sz: '48',
      shd: {
        fill: '92CDDC',
        themeFill: 'text1',
        themeFillTint: '80'
      }
    }
  }],
  [1, 'All grown-ups were once children', ''],
  [2, 'there is no harm in putting off a piece of work until another day.', ''],
  [3, 'But when it is a matter of baobabs, that always means a catastrophe.', ''],
  [4, 'watch out for the baobabs!', 'END']
]

tableStyle = {
  tableColWidth: 4261,
  tableSize: 24,
  tableColor: 'ada',
  tableAlign: 'left',
  tableFontFamily: 'Comic Sans MS'
}

data = [
  [
    {
      align: 'right'
    },
    {
      type: 'text',
      val: 'Simple'
    },
    {
      type: 'text',
      val: ' with color',
      opt: {
        color: '000088'
      }
    },
    {
      type: 'text',
      val: '  and back color.',
      opt: {
        color: '00ffff',
        back: '000088'
      }
    },
    {
      type: 'linebreak'
    },
    {
      type: 'text',
      val: 'Bold + underline',
      opt: {
        bold: true,
        underline: true
      }
    }
  ],
  {
    type: 'horizontalline'
  },
  [
    {
      backline: 'EDEDED'
    },
    {
      type: 'text',
      val: '  backline text1.',
      opt: {
        bold: true
      }
    },
    {
      type: 'text',
      val: '  backline text2.',
      opt: { color: '000088' }
    }
  ],
  {
    type: 'text',
    val: 'Left this text.',
    lopt: {
      align: 'left'
    }
  },
  {
    type: 'text',
    val: 'Center this text.',
    lopt: {
      align: 'center'
    }
  },
  {
    type: 'text',
    val: 'Right this text.',
    lopt: {
      align: 'right'
    }
  },
  {
    type: 'text',
    val: 'Fonts face only.',
    opt: {
      font_face: 'Arial'
    }
  },
  {
    type: 'text',
    val: 'Fonts face and size.',
    opt: {
      font_face: 'Arial',
      font_size: 40
    }
  },
  {
    type: 'table',
    val: table,
    opt: tableStyle
  },
  [
    {},
    {
      type: 'image',
      path: resolve('img/sv.jpg')
    },
    {
      type: 'image',
      path: resolve('img/timg.jpg')
    }
  ],
  {
    type: 'pagebreak'
  },
  [
    {},
    {
      type: 'numlist'
    },
    {
      type: 'text',
      val: 'numList1.'
    },
    {
      type: 'numlist'
    },
    {
      type: 'text',
      val: 'numList2.'
    }
  ],
  [
    {},
    {
      type: 'dotlist'
    }, {
      type: 'text',
      val: 'dotlist1.'
    }, {
      type: 'dotlist'
    }, {
      type: 'text',
      val: 'dotlist2.'
    }
  ],
  {
    type: 'pagebreak'
  }
]

docx.createByJson(data)

out.on('error', function (err) {
  console.log(err)
})

docx.generate(out)
