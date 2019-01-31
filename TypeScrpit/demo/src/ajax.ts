interface ajaxParams {
  type: string
  url: string
  data?: any
  dataType?: string
  success: (res: any) => any
  fail?: (res?: any) => any
  complete?: (res?: any) => any
}

function getToString(obj: any): string {
  const toString = Object.prototype.toString
  const map: any = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }

  return map[toString.call(obj)]
}

function xhrFunc() {
  let xhr
  // Firefox, Opera 8.0+, Safari
  try {
    xhr = new XMLHttpRequest()
  } catch (e) {
    // Internet Explorer
    try {
      xhr = new ActiveXObject('Msxml2.XMLHTTP')
    } catch (e) {
      try {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
      } catch (e) {
        alert('您的浏览器不支持AJAX！')
        return false
      }
    }
  }
  return xhr
}

function stringify(obj: any): string {
  if (JSON.stringify(obj) == '{}' || getToString(obj) != 'object') {
    return ''
  }

  let str: string = ''

  for (let key in obj) {
    str += key + '=' + obj[key] + '&'
  }

  str = str.slice(0, str.length - 1)

  return str
}

function getType(method: string): boolean {
  if (method === 'GET' || method === 'DELETE') {
    return true
  }
  return false
}

function api(config: ajaxParams): object {
  const xhr = xhrFunc()
  const method = config.type.toUpperCase()
  const dataStr = stringify(config.data)
  const uriStr: string = getType(method) ? '?' + dataStr : ''

  xhr.open(config.type, config.url + uriStr, true)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
      const res =
        config.dataType == 'json'
          ? JSON.parse(xhr.responseText)
          : xhr.responseText
      config.success(res)
    } else {
      config.fail && config.fail()
    }

    config.complete && config.complete()
  }
  xhr.send(!getType(method) ? dataStr : null)
  return xhr
}

const asas = api({
  type: 'get',
  url: 'http://a.itying.com/api/productlist',
  data: {
    name: '张三'
  },
  dataType: 'json',
  success: function(res: any) {
    console.log(res)
  }
})
