// 页面 动态 效果 代码
$(function () {
    // 1.2 故障设备监控(tab栏 切换)
    $('.monitor .tabs>a').on('click', function () {
        // 点击的 a 添加样式 其兄弟元素 移除样式
        $(this).addClass('active').siblings().removeClass('active');
        // 获取当前 索引
        var index = $(this).index();
        // 设置 索引 对应的元素 显示
        $('.monitor .inner .content').eq(index).show().siblings('.content').hide();
    });
    // 1.2 轮播图
    function lunbo() {
        // 为 要轮播的 ul设置动画效果
        $('.monitor .content .carousel ul').animate({
            top: -540
        }, 5000, 'linear', function () {  //回调函数
            $('.monitor .content .carousel ul').css('top', 0)
        })
    }
    lunbo();
    // 开启一个 定时器
    window.setInterval(function () {
        lunbo();
    }, 6000)
    // 1.2 轮播图 鼠标移入
    $('.monitor .carousel li').on('mouseenter', function () {
        // 当前 li 添加样式 其他兄弟类 移除样式
        $(this).addClass('active')
            .siblings('li').
            removeClass('active');
    }).on('mouseleave', function () {   //鼠标离开事件
        $(this).removeClass('active')
    });

    // 3.1 订单量和销售额

    var orderData = [
        { orders: '431,087', amount: '98637' },
        { orders: '31,987', amount: '9634' },
        { orders: '1,987', amount: '3834' },
        { orders: '987', amount: '834' }
    ];

    $('.order .head a').on('click', function () {
        // 设置当前点击元素的样式 其他兄弟元素 清除样式 
        $(this).addClass('active').siblings('a').removeClass('active');

        // 获取 当前点击的 a的索引
        var index = $('.order .head a').index(this);
        console.log(index);
        // 设置 对应的 数据 里面的样式
        $('.order .item:eq(0)').find('p').text(orderData[index].orders);
        $('.order .item:eq(1)').find('p').text(orderData[index].orders);
    })
    // 3.4 全国热榜 & 各省热销

    // 模拟后台 数据
    var hotData = [
        { name: '可爱多', num: '9,086' },
        { name: '娃哈哈', num: '8,341' },
        { name: '喜之郎', num: '7,407' },
        { name: '八喜', num: '6,080' },
        { name: '小洋人', num: '6,724' },
        { name: '好多鱼', num: '2,170' },
    ];

    // 为每个 li 注册 鼠标移入事件
    $('.province .city li').on('mouseenter', function () {
        // 设置当前 li 添加 样式 其他兄弟 移除样式
        $(this).addClass('active').siblings().removeClass('active');

        // 把数组中的 第一个 元素删除 加入到 数组 末尾
        hotData.push(hotData.shift());

        // 定义 个 空字符串
        var str = '';
        // 遍历 数组
        hotData.forEach(function (val, index) {
            str += `<li>
            <span>${val.name}</span><b>${val.num}</b><i class="icon-up"></i>
                    </li>`
        });

        // 把 当前 循环 遍历出的 元素 重新加入到 ul中
        $('.product').html(str);

    })
});

// 饼状图
$(function () {

    // 1.3.1 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('.point .pie'));

    // 1.3.2 准备图表的配置项和数据
    var option = {
        //图表的背景色
        // backgroundColor: '#2c343c',

        //图表的标题
        // title: {
        //     text: 'Customized Pie',
        //     left: 'center',
        //     top: 20,
        //     textStyle: {
        //         color: '#ccc'
        //     }
        // },

        //鼠标移入的提示
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        //视觉映射组件
        // visualMap: {
        //     show: true,
        //     min: 80,
        //     max: 600,
        //     inRange: {
        //         colorLightness: [0, 1]
        //     }
        // },

        series: [{
            name: '访问来源',
            type: 'pie',
            // 内半径 外半径
            radius: [8, 60],
            // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
            center: ['50%', '50%'],
            // 图表真实的数据
            data: [{
                value: 300,
                name: '云南'
            },
            {
                value: 310,
                name: '北京'
            },
            {
                value: 274,
                name: '山东'
            },
            {
                value: 335,
                name: '河北'
            },
            {
                value: 300,
                name: '江苏'
            },
            {
                value: 400,
                name: '浙江'
            },
            {
                value: 500,
                name: '四川'
            },
            {
                value: 600,
                name: '湖北'
            }
            ],
            //这是对数据数组进行排序的
            //.sort(function (a, b) { return a.value - b.value; }),
            //'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小。
            //'area' 所有扇区圆心角相同，仅通过半径展现数据大小。
            roseType: 'radius',
            //颜色,如果不写的话有一组默认的数
            color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9',
                '#1d9dff'
            ],


            //下面这个线的颜色和文本的颜色不设置,那就使用默认颜色
            //饼图图形上的文本标签
            // label: {
            //     //文本颜色
            //     color: 'rgba(255, 255, 255, 0.3)'
            // },
            // //引导线
            labelLine: {
                //线的样式
                // lineStyle: {
                //     //颜色
                //     color: 'rgba(255, 255, 255, 0.3)'
                // },
                //是否平滑
                smooth: 0.2,
                //线的长度
                length: 8,
                length2: 10
            },
            //图形样式,  如果不设置图形的颜色,那就有默认颜色
            // itemStyle: {
            //     //图形颜色,只是一种颜色
            //     color: '#c23531',
            //     //阴影样式
            //     shadowBlur: 200,
            //     //阴影的颜色
            //     shadowColor: 'rgba(0, 0, 0, 0.5)'
            // },
            //初始动画效果
            animationType: 'scale',
            //初始动画的缓动效果
            animationEasing: 'elasticOut',
            //初始动画的延迟，支持回调函数
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }]
    };



    // 1.3 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})

// 迁徙图
$(function () {
    // 3.1 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('.map .geo'));

    // 3.2 准备图表的配置项和数据
    var geoCoordMap = {
        '新疆玛纳斯基地': [86.22, 44.30],
        '九江': [116.00, 29.70],
        '新乡': [116.402217, 35.311657],
        ' ': [79.92, 37.12],
        '  ': [86.85, 47.70],
        '若羌县': [88.17, 39.02],
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
    };

    var BJData = [
        [{
            name: '新乡'
        }, {
            name: '新乡',
            value: 200
        }],
        [{
            name: '新乡'
        }, {
            name: '呼和浩特',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '哈尔滨',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '石家庄',
            value: 90
        }],
        [{
            name: '新乡'
        }, {
            name: '昆明',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '北京',
            value: 100
        }],
        [{
            name: '新乡'
        }, {
            name: '长春',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '重庆',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '贵阳',
            value: 50
        }],
        [{
            name: '新乡'
        }, {
            name: '南宁',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '济南',
            value: 10
        }],
        [{
            name: '新乡'
        }, {
            name: '太原',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '西安',
            value: 60
        }],
        [{
            name: '新乡'
        }, {
            name: '武汉',
            value: 50
        }],
        [{
            name: '新乡'
        }, {
            name: '合肥',
            value: 40
        }],
        [{
            name: '新乡'
        }, {
            name: '南京',
            value: 30
        }],
        [{
            name: '新乡'
        }, {
            name: '沈阳',
            value: 20
        }],
        [{
            name: '新乡'
        }, {
            name: '成都',
            value: 10
        }]
    ];

    var SHData = [
        [{
            name: '九江'
        }, {
            name: '九江',
            value: 200
        }],

        [{
            name: '九江'
        }, {
            name: '长沙',
            value: 95
        }],
        [{
            name: '九江'
        }, {
            name: '武汉',
            value: 30
        }],
        [{
            name: '九江'
        }, {
            name: '南昌',
            value: 20
        }],
        [{
            name: '九江'
        }, {
            name: '合肥',
            value: 70
        }],
        [{
            name: '九江'
        }, {
            name: '南京',
            value: 60
        }],
        [{
            name: '九江'
        }, {
            name: '福州',
            value: 50
        }],
        [{
            name: '九江'
        }, {
            name: '上海',
            value: 100
        }],
        [{
            name: '九江'
        }, {
            name: '深圳',
            value: 100
        }],

    ];

    var GZData = [
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '新疆玛纳斯基地',
            value: 200
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '  ',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: ' ',
            value: 40
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '呼和浩特',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '昆明',
            value: 40
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '成都',
            value: 10
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '兰州',
            value: 95
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '银川',
            value: 90
        }],
        [{
            name: '新疆玛纳斯基地'
        }, {
            name: '西宁',
            value: 80
        }],

    ];

    var planePath =
        'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord
                }, {
                    coord: toCoord
                }]);
            }
        }
        return res;
    };

    var color = ['#3ed4ff', '#ffa022', '#a6c84c'];
    var series = [];
    [
        ['新乡', BJData],
        ['九江', SHData],
        ['新疆', GZData]
    ].forEach(function (item, i) {
        series.push({
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });

    var option = {
        backgroundColor: '#080a20',
        // title: {
        //     text: '模拟迁徙',
        //     subtext: '数据纯属虚构',
        //     left: 'left',
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['北京 Top10', '上海 Top10', '广州 Top10'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#132937',
                    borderColor: '#0692a4'
                },
                emphasis: {
                    areaColor: '#0b1c2d'
                }
            }
        },
        series: series
    };


    // 3.3 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})


// 柱状图
$(function () {
    // 3.1 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('.user .barChart'));

    // 3.2 准备图表的配置项和数据
    //1.目标有渐变色
    //2.x轴数据的颜色
    //3.x轴线的颜色
    //4.y轴数据的颜色
    //5.y轴线的颜色 / 有两条
    //6.刻度线的颜色不同
    //7.中间三个柱子样式不同

    //自定义每一个柱条的样式
    var item = {
        value: 1000,
        itemStyle: {
            color: '#254065',
            opacity: 0.6
        }
    }

    var option = {
        // 图例颜色
        color: ['#3398DB'],
        //鼠标移入后的提示
        tooltip: {
            // trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'line' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //相当于图例内边距
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        //x轴相关的
        xAxis: [{
            //坐标轴类型
            type: 'category',
            //数据
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
            //坐标轴刻度相关设置。
            axisTick: {
                //是否显示坐标轴刻度
                show: false, //不显示
                alignWithLabel: true
            },
            //轴线的颜色
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#063a4b'
                }
            },
            //轴线文字的颜色,如果不写就和轴线颜色一样
            axisLabel: {
                show: true,
                color: '#4c9bfd'
            }
        }],
        //y轴相关的
        yAxis: [{
            //坐标轴类型:适用于连续数据
            type: 'value',
            //轴线的设置
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#063a4b'
                }
            },
            //轴线文字的颜色,如果不写就和轴线颜色一样
            axisLabel: {
                show: true,
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: '#005666'
                }
            }
        },
        {}
        ],
        //图例设置
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
            //渐变色
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                        offset: 0,
                        color: '#00fbfa'
                    },
                    {
                        offset: 1,
                        color: '#0065cf'
                    }
                    ]
                )
            }

        }]
    };



    // 3.3 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})

// 线形图
$(function () {
    // 3.1 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('.sales .line'));

    //模拟从后端拿到的数据
    var data = [
        [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 464, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        [
            [223, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 223, 378, 21, 82, 64, 43, 60, 19, 134]
        ],
        [
            [34, 87, 32, 176, 98, 12, 32, 87, 139, 36, 129, 36],
            [56, 43, 98, 21, 356, 87, 243, 12, 43, 54, 12, 98]
        ],
        [
            [43, 273, 262, 54, 91, 54, 184, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 393, 54, 254, 24]
        ]
    ];

    // 3.2 准备图表的配置项和数据
    //1.x轴 文字颜色/ 线的颜色
    //2.y轴没有刻度, 线的颜色

    //3.线条是平湖有弧度的
    //4.线条本身的颜色

    //5.线条上的圆点大一点

    //6.y分割线线颜色不一样


    var option = {
        //标题
        title: {
            text: '单位 万',
            textStyle: {
                color: '#4996f5',
                fontSize: 12,
            },
            // left: 10,
            top: 10
        },
        //相当于图例内边距
        grid: {
            left: '3%',
            right: '4%',
            bottom: '5%',
            top: '30%',
            containLabel: true
        },
        // 鼠标移入的提示
        tooltip: {
            // trigger: 'axis'
        },
        //图例组件
        legend: {
            data: ['最高气温', '最低气温'],
            textStyle: {
                color: '#4b99fa'
            },
            right: 5,
            top: 10
        },

        //右上角的工具栏(转柱子/线, 下载图片)
        // toolbox: {
        //     show: true,
        //     feature: {
        //         dataZoom: {
        //             yAxisIndex: 'none'
        //         },
        //         dataView: {readOnly: false},
        //         magicType: {type: ['line', 'bar']},
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },

        //x轴相关的
        xAxis: {
            type: 'category',
            //坐标轴两边留白策略
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            //刻度相关的
            axisTick: {
                show: false
            },
            //文本相关的
            axisLabel: {
                color: '#4590ed'
            },
            //线条相关的
            axisLine: {
                lineStyle: {
                    color: '#012b48'
                }
            }

        },

        //y轴相关的
        yAxis: {
            type: 'value',
            // y轴显示的最大值
            max: 500,
            // y轴上间隔最小值(每一个刻度代表多少)
            minInterval: 100,
            //轴上文字相关的
            axisLabel: {
                formatter: '{value}',
                color: '#326fbe'
            },
            //线条相关的
            axisLine: {
                lineStyle: {
                    color: '#012b48'
                }
            },
            //刻度相关的
            axisTick: {
                show: false
            },
            //分割线相关的
            splitLine: {
                lineStyle: {
                    color: '#012b48'
                }
            }
        },

        //图例本身设置
        series: [{
            name: '最高气温',
            // 线条是否平滑
            smooth: true,
            type: 'line',
            data: data[0][0],
            //每一个项的颜色
            itemStyle: {
                color: '#00f2f1'
            },
            //标记的大小
            symbolSize: 8

            //标记点
            // markPoint: {
            //     data: [
            //         {type: 'max', name: '最大值'},
            //         {type: 'min', name: '最小值'}
            //     ]
            // },

            //平均线
            // markLine: {
            //     data: [
            //         {type: 'average', name: '平均值'}
            //     ]
            // }
        },
        {
            name: '最低气温',
            // 线条是否平滑
            smooth: true,
            type: 'line',
            data: data[0][1],
            //每一个项的颜色
            itemStyle: {
                color: '#c43938'
            },
            //标记的大小
            symbolSize: 8
        }
        ]
    };

    // 3.3 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    //声明一个变量记录索引
    var index = 0;
    //声明一个计时器
    setInterval(function () {
        //1.数组下标++ 切换数据
        index++;
        if (index > 3) {//数组最大下标为3,
            index = 0;
        };
        //2.替换数据
        option.series[0].data = data[index][0];
        option.series[1].data = data[index][1];
        //3.重新渲染 echarts图表
        myChart.setOption(option);

    }, 2000);

})


// 环形图

$(function () {
    // 3.1 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('.quarter .loop'));

    // 3.2 准备图表的配置项和数据
    //1.圆环的颜色
    //2.方向

    var option = {
        //鼠标移入的提示
        // tooltip: {
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b}: {c} ({d}%)'
        // },

        //图例本身
        series: [{
            name: '访问来源',
            type: 'pie',
            // 内半径和外半径
            radius: ['70%', '90%'],
            //偏移
            center: ['45%', '60%'],
            //是否启用防止标签重叠策略
            avoidLabelOverlap: false,
            //开始的角度,默认开始的角度是90度
            startAngle: 180,

            //饼图图形上的文本标签
            // label: {
            //     normal: {
            //         show: false,
            //         position: 'center'
            //     },
            //     emphasis: {
            //         show: true,
            //         textStyle: {
            //             fontSize: '30',
            //             fontWeight: 'bold'
            //         }
            //     }
            // },

            // 控制线条
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                            offset: 0,
                            color: '#00c3de'
                        },
                        {
                            offset: 1,
                            color: '#0065c3'
                        }
                        ]
                    )
                }
            },
            {
                value: 100,
                itemStyle: {
                    color: '#12274d',
                    opacity: 0.2
                }
            },
            {
                value: 200,
                itemStyle: {
                    color: 'transparent'
                }
            }
            ]

        }]
    };




    // 3.3 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
})