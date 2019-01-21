define({ "api": [
  {
    "type": "GET",
    "url": "http://10.1.1.99:8998/getDiscList?referer=https%253A%252F%252Fy.qq.com%252Fportal%252Fplaylist.html&origin=https%253A%252F%252Fy.qq.com&g_tk=5381&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&targetDomain=https:%2F%2Fc.y.qq.com%2Fsplcloud%2Ffcgi-bin&routeName=fcg_get_diss_by_tag.fcg&picmid=1&rnd=0.1967613718866701&loginUin=0&hostUin=0&platform=yqq.json&needNewCode=0&categoryId=10000000&sortId=5&sin=0&ein=29",
    "title": "热门歌单",
    "version": "0.0.1",
    "group": "recommend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetDomain",
            "description": "<p>实际接口域名+对应的子目录</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "routeName",
            "description": "<p>实际接口名</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "other",
            "description": "<p>实际接口所需的其他参数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": 0,\n     \"data\": {}\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/modules/recommend.js",
    "groupTitle": "recommend",
    "name": "GetHttp1011998998GetdisclistRefererHttps253a252f252fyQqCom252fportal252fplaylistHtmlOriginHttps253a252f252fyQqComG_tk5381IncharsetUtf8OutcharsetUtf8Notice0FormatJsonTargetdomainHttps2f2fcYQqCom2fsplcloud2ffcgiBinRoutenameFcg_get_diss_by_tagFcgPicmid1Rnd01967613718866701Loginuin0Hostuin0PlatformYqqJsonNeednewcode0Categoryid10000000Sortid5Sin0Ein29"
  },
  {
    "type": "GET",
    "url": "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=741188905&uin=2509344578&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1548064602551",
    "title": "首页轮播",
    "version": "0.0.1",
    "group": "recommend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetDomain",
            "description": "<p>实际接口域名+对应的子目录</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "routeName",
            "description": "<p>实际接口名</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "other",
            "description": "<p>实际接口所需的其他参数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>返回码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"code\": 0,\n     \"data\": {}\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/modules/recommend.js",
    "groupTitle": "recommend",
    "name": "GetHttpsCYQqComMusichallFcgiBinFcg_yqqhomepagerecommendFcgG_tk741188905Uin2509344578FormatJsonIncharsetUtf8OutcharsetUtf8Notice0PlatformH5Neednewcode1_1548064602551"
  }
] });
