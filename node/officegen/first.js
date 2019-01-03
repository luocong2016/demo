const fs = require('fs')
const path = require('path')
const async = require('async')
const officegen = require('officegen')
const docx = officegen({
  type: 'docx',
  onend: function(writeen) {
    console.log(`onend: ${writeen}`)
  },
  onerr: function(err) {
    console.log(`onerr: ${err}`)
  }
})

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

const out = fs.createWriteStream(resolve('tmp/example.docx'))

let pObj, table, tableStyle

pObj = docx.createP()
pObj.addText('Simple')
pObj.addText(' with color', { color: '000088' })
pObj.addText(' and back color.', { color: '00ffff', back: '000088' })

pObj = docx.createP()

pObj.addText('Since ')
pObj.addText('officegen 0.2.12', {
  back: '00ffff',
  shdType: 'pct12',
  shdColor: 'ff0000'
}) // Use pattern in the background.
pObj.addText(' you can do ')
pObj.addText('more cool ', { highlight: true }) // Highlight!
pObj.addText('stuff!', { highlight: 'darkGreen' }) // Different highlight color.

pObj = docx.createP()

pObj.addText('Even add ')
pObj.addText('external link', { link: 'https://github.com' })
pObj.addText('!')

pObj = docx.createP()

pObj.addText('Bold + underline', { bold: true, underline: true })

pObj = docx.createP({ align: 'center' })

pObj.addText('Center this text', {
  border: 'dotted',
  borderSize: 12,
  borderColor: '88CCFF'
})

pObj = docx.createP()
pObj.options.align = 'right'

pObj.addText('Align this text to the right.')

pObj = docx.createP()

pObj.addText('Those two lines are in the same paragraph,')
pObj.addLineBreak()
pObj.addText('but they are separated by a line break.')

docx.putPageBreak()

pObj = docx.createP()

pObj.addText('Fonts face only.', { font_face: 'Arial' })
pObj.addText(' Fonts face and size.', { font_face: 'Arial', font_size: 40 })

docx.putPageBreak()

pObj = docx.createP()

pObj.addImage(resolve('img/stime.jpg'))

docx.putPageBreak()

pObj = docx.createP()

pObj.addImage(resolve('img/stime.jpg'))

pObj = docx.createP()

pObj.addImage(resolve('img/timg.jpg'))
pObj.addImage(resolve('img/stime.jpg'))
pObj.addImage(resolve('img/sv.jpg'))
pObj.addText('... some text here ...', { font_face: 'Arial' })
pObj.addImage(resolve('img/stime.jpg'))

pObj = docx.createP()

pObj.addImage(resolve('img/sv.jpg'))

docx.putPageBreak()

pObj = docx.createListOfNumbers()

pObj.addText('Option 1')

pObj = docx.createListOfNumbers()

pObj.addText('Option 2')

pObj.addHorizontalLine()

pObj = docx.createP({ backline: 'E0E0E0' })

pObj.addText('Backline text1')

pObj.addText(' text2')

pObj = docx.createP()

pObj.addText('Strikethrough text', { strikethrough: true })

table = [
  [
    {
      val: 'No.',
      opts: {
        b: true,
        sz: '48',
        shd: {
          fill: '7F7F7F',
          themeFill: 'text1',
          themeFillTint: '80'
        },
        fontFamily: 'Avenir Book'
      }
    },
    {
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
    },
    {
      val: 'Title2',
      opts: {
        align: 'center',
        b: true,
        sz: '48',
        shd: {
          fill: '92CDDC',
          themeFill: 'text1',
          themeFillTint: '80'
        }
      }
    }
  ],
  [1, 'All grown-ups were once children', ''],
  [2, 'there is no harm in putting off a piece of work until another day.', ''],
  [
    3,
    'But when it is a matter of baobabs, that always means a catastrophe.',
    ''
  ],
  [4, 'watch out for the baobabs!', 'END']
]

tableStyle = {
  tableColWidth: 4261,
  tableSize: 24,
  tableColor: 'ada',
  tableAlign: 'left',
  tableFontFamily: 'Comic Sans MS'
}

pObj = docx.createTable(table, tableStyle)

out.on('error', function(err) {
  console.log(err)
})

async.parallel(
  [
    function(done) {
      out.on('close', function() {
        console.log('Finish to create a DOCX file.')
        done(null)
      })
      docx.generate(out)
    }
  ],
  function(err) {
    if (err) {
      console.log('error: ' + err)
    } // Endif.
  }
)
