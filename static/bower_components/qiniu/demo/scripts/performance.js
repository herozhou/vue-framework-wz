Vue.component('zone-list', {
  props: ['hostMap', 'currentZone', 'switchZone', 'selectedHost'],
  template: '<div class="uphosts-list"><ul><li v-for="item in hostMap" :class="{on: item.zone == currentZone}" @click="switchZone(item.zone)">{{item.zoneZh}}</li></ul><ul><li v-for="item in hostMap" :class="{on: item.zone == currentZone}"><label v-for="uphost in item.uphosts"><input type="radio" v-model="selectedHost.host" :value="uphost"/>{{uphost}}</label></li></ul></div>'
});
Vue.component('upload-performance', {
  props: ['per'],
  template: '<div class="up-performance"><div class="per-title">上传耗时：</div>' +
    '<table>' +
    '<tr><th>类型</th><th>耗时 / ms</th></tr>' +
    '<tr><td>重定向：</td><td>{{per.redirect | tofixed(2)}}</td></tr>' +
    '<tr><td>DNS 查询：</td><td>{{per.domainLookup | tofixed(2)}}</td></tr>' +
    '<tr><td>建立连接：</td><td>{{per.connect | tofixed(2)}}</td></tr>' +
    '<tr><td>发送数据到开始响应：</td><td>{{per.request | tofixed(2)}}</td></tr>' +
    '<tr><td>接收响应：</td><td>{{per.response | tofixed(2)}}</td></tr>' +
    '<tr><td>总耗时：</td><td>{{per.duration | tofixed(2)}}</td></tr></table>' +
  '</div>'
});
Vue.component('up-headers', {
  props: ['headers'],
  template: '<div class="up-headers"><div class="per-title">响应头：</div><table><tr><th>类型</th><th>值</th></tr><tr v-for="header in headers"><td>{{header.key}}</td><td>{{header.val}}</td></tr></table></div>'
});
Vue.filter('tofixed', function (val, size) {
  return val.toFixed(size);
});

var app = new Vue({
  el: '#app',
  data: {
    currentZone: 'z0',
    selectedHost: {
      host: ''
    },
    currentToken: '',
    loadMessage: '',
    hostMap: [
      {
        zone: 'z0',
        zoneZh: '华东',
        token: 'xozWSPMxkMjIVoHg2JyXq4-7-oJaEADLOKHVR0vU:hzD116IsDOpb4gjzyPg7ngg4Qjs=:eyJzY29wZSI6Impzc2RrOmEuanBnIiwiZGVhZGxpbmUiOjIxMTQzODA4MDAwMDAsImZzaXplTGltaXQiOjEwMDAwMDB9',
        uphosts: [
          'http://up.qiniu.com',
          'http://upload.qiniu.com',
          'https://up.qbox.me',
          'https://upload.qbox.me'
        ]
      },
      {
        zone: 'z1',
        zoneZh: '华北',
        token: 'xozWSPMxkMjIVoHg2JyXq4-7-oJaEADLOKHVR0vU:9RFuA13c6pp-O2aIOe1UfTI3rlo=:eyJzY29wZSI6Impzc2RrLXoxOmEuanBnIiwiZGVhZGxpbmUiOjIxMTQzODA4MDAwMDAsImZzaXplTGltaXQiOjEwMDAwMDB9',
        uphosts: [
          'http://up-z1.qiniu.com',
          'http://upload-z1.qiniu.com',
          'https://up-z1.qbox.me',
          'https://upload-z1.qbox.me'
        ]
      },
      {
        zone: 'z2',
        zoneZh: '华南',
        token: 'xozWSPMxkMjIVoHg2JyXq4-7-oJaEADLOKHVR0vU:qmDBxiYviu0tg2hZzCFHjCZM3-w=:eyJzY29wZSI6Impzc2RrLXoyOmEuanBnIiwiZGVhZGxpbmUiOjIxMTQzODA4MDAwMDAsImZzaXplTGltaXQiOjEwMDAwMDB9',
        uphosts: [
          'http://up-z2.qiniu.com',
          'http://upload-z2.qiniu.com',
          'https://up-z2.qbox.me',
          'https://upload-z2.qbox.me'
        ]
      },
      {
        zone: 'na0',
        zoneZh: '北美',
        token: 'xozWSPMxkMjIVoHg2JyXq4-7-oJaEADLOKHVR0vU:DMPzTGGhX3HY0ph99YfAK_y-0XM=:eyJzY29wZSI6Impzc2RrLW5hMDphLmpwZyIsImRlYWRsaW5lIjoyMTE0MzgwODAwMDAwLCJmc2l6ZUxpbWl0IjoxMDAwMDAwfQ==',
        uphosts: [
          'http://up-na0.qiniu.com',
          'http://upload-na0.qiniu.com',
          'https://up-na0.qbox.me',
          'https://upload-na0.qbox.me'
        ]
      },
    ],
    isPerformanceSupported: true,
    performance: null,
    headers: null
  },
  methods: {
    renderHtml: function() {},
    post: function(opt) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open('POST', opt.url, true);
      xmlHttp.setRequestHeader('X-Qiniu-Performance', 'true');
      xmlHttp.onreadystatechange = function () {
          if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
              opt.success(xmlHttp);
            } else {
              opt.error(xmlHttp.responseText);
            }
          }
      };
      xmlHttp.upload.onprogress = opt.progress;
      xmlHttp.send(opt.data);
    },
    uploadTest: function() {
      if(!this.selectedHost.host) return;
      this.resetResult();
      var self = this;
      this.post({
        url: this.selectedHost.host,
        data: this.mockDate(),
        progress: function(e) {
          if (e.lengthComputable) {
            var percent = e.loaded/e.total*100;
            self.loadMessage = '模拟数据上传：' + e.loaded + " / " + e.total+" bytes  完成：" + percent.toFixed(2) + "%";
          }
        },
        success: function(xhr) {
          self.formateHeader(xhr.getAllResponseHeaders());
          self.getPerformance();
        },
        error: function(res) {
          self.loadMessage = '上传失败：' + res;
        }
      });
    },
    mockDate: function(size) {
      var f = new FormData(document.getElementById("testform"));
      f.append('file', this.dataURLtoBlob(this.randomBase64(size)));
      f.append('token', this.currentToken);
      return f;
    },
    randomBase64: function() {
      var dataurl = 'data:image/jpeg;base64,';
      var len = parseInt(Math.random()*(1330000-1100000+1)+1100000, 10);
      while (dataurl.length < len) {
        dataurl += Math.random > 0.5 ? '/9j/4AAQSkZJRgABAQAASABIAAD/4Q' : '/9j/4AAQSkZJRgABAQAASABIAAD/4W';
      }
      return dataurl;
    },
    dataURLtoBlob: function(dataurl) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {type:mime});
    },
    resetResult: function() {
      for (var i = 0; i < this.hostMap.length; i++) {
        if (this.hostMap[i].zone === this.currentZone) {
          this.currentToken = this.hostMap[i].token;
          break;
        }
      }
      this.performance = null;
      this.headers = null;
    },
    switchZone: function(zone) {
      this.currentZone = zone;
      this.selectedHost.host = '';
    },
    getPerformance: function() {
      var per = httpPerformance.getByName(this.selectedHost.host + '/');
      if(per.length == 2) {
        per[1].redirect = per[0].redirect;
        per[1].domainLookup = per[0].domainLookup;
        per[1].connect = per[0].connect;
      }
      this.performance = per[1] || per[0]; // 跨域有时候会先发送一个 option 请求，并不是真的上传请求。
    },
    formateHeader: function(headers) {
      var list = [];
      headers.match(/.+/mg).map(function(item) {
        var index = item.indexOf(':');
        var o = {
          key: item.substr(0, index),
          val: item.substr(index + 1)
        };
        list.push(o);
      });
      this.headers = list;
    }
  },
  created: function() {
    this.isPerformanceSupported = !!(window.performance && window.performance.getEntries);
  }
});


